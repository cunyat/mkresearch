const dotenv = require("dotenv");
const inquirer = require("inquirer");
const prettyjson = require("prettyjson");
require("colors");
const connectDB = require("./src/config/db");
dotenv.config({ path: "./src/config/.env" });
const fs = require("fs");
const mongoose = require("mongoose");

const csvParser = require("./src/services/csvParser");
const path = require("path");
const Duxsoup = require("./src/models/Duxsoup");
const Builtwith = require("./src/models/Builtwith");
const Company = require("./src/models/Company");
const Contact = require("./src/models/Contact");
const lookup = require("./lookup");
const ecommProcess = require("./src/services/ecommProcess");
const bwithApi = require("./src/services/builtwithApi");

const MIN_USERS = 10000;
const MIN_VISITS = 50000;

const BWITH_NEXT_ACTIONS = [
  { name: "Add a contact", value: 1 },
  { name: "Edit a contact", value: 2 },
  { name: "Edit company", value: 3 },
  { name: "Validate", value: 10 },
  { name: "Skip", value: -1 },
];

function importAndCreateDuxsoup() {
  csvParser
    .parseDuxSoup(path.join(__dirname, "data/bwith-electronics.csv"))
    .then((results) => {
      console.log(`imported ${results.length} from Duxsoup CSV`);
      for (const res of results) {
        res.list = "electronic-stores";
      }
      createDuxsoup(results);
    })
    .catch((e) => console.error(e));
}

function importAndCreateCompaniesHubspot() {
  csvParser
    .parseHubspotCompanies(
      path.join(__dirname, "data/companies-hubspot-2020-07-13.csv")
    )
    .then((results) => {
      console.log(`imported ${results.length} from Hubspot CSV`);
      createCompanies(results.filter((r) => r.domain));

      // createCompanies(results);
    })
    .catch((e) => console.error(e));
}

function importAndCreateBuiltwith() {
  csvParser
    .parseBuiltWith(path.join(__dirname, "data/bwith salesforce.csv"))
    .then((results) => {
      console.log(`imported ${results.length} from Builtwith CSV`);
      createBuiltwith(results);
    })
    .catch((e) => console.error(e));
}

async function createDuxsoup(results) {
  await connectDB(async (conn) => {
    try {
      let data = await Duxsoup.create(results);
      console.log(`Created ${data.length} duxsoups`);
    } catch (err) {
      console.error(err);
    }

    conn.connection.close();
  });
}

async function createCompanies(results) {
  await connectDB(async (conn) => {
    try {
      await Company.deleteMany({});
      let data = await Company.create(results);
      console.log(`Created ${data.length} companies`);
    } catch (err) {
      console.error(err);
    }

    conn.connection.close();
  });
}

async function createBuiltwith(results) {
  await connectDB(async (conn) => {
    try {
      let count = 0,
        dups = 0;
      for (const res of results) {
        const exists = await Builtwith.exists({ domain: res.domain });
        if (exists) {
          dups++;
        } else {
          const bwith = new Builtwith({ ...res });
          bwith.list = "salesforce-stores";
          await bwith.save();
          count++;
        }
      }
      console.log(`Created ${count} builtwiths, found ${dups} duplicates`);
    } catch (err) {
      console.error(err);
    }

    conn.connection.close();
  });
}

async function createProperties(properties, objectType) {
  await connectDB(async (conn) => {
    try {
      for (const property of properties) {
        const prop = new Property(property);
        prop.objectType = objectType;
        await prop.save();
      }
    } catch (err) {
      console.error(err);
    }

    conn.connection.close();
  });
}

const validateBuiltWithDomains = () => {
  connectDB(async (conn) => {
    try {
      let data = await Builtwith.find({ validation: "Pending" });

      for (const comp of data) {
        const res = await lookup(comp.domain);
        if (res) {
          comp.validation = "Ecomm";
          await comp.save();
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    } catch (err) {
      console.error(err);
    }

    conn.connection.close();
  });
};

const validateAndFindContacts = async () => {
  const filter = await _buildFilter();

  // Prepare data
  const builtwiths = await Builtwith.find(filter);
  const domains = builtwiths.map((b) => b.domain);
  console.log(`Working with ${builtwiths.length} records`.green.underline);

  const duxsoups = await Duxsoup.find({ companyDomain: { $in: domains } });
  console.log(`Found ${duxsoups.length} duxoups.`.green.underline);

  for (const bwith of builtwiths) {
    const company = _createCompanyFromBwith(bwith);
    const contacts = [];

    let duxs = duxsoups.filter((d) => d.companyDomain === bwith.domain);
    console.log(`Looking for: ${bwith.domain}`);
    console.log(`Got ${duxs.length} contacts: `);

    // Look for existing contacts in Duxsoup docs
    for (const dux of duxs) {
      console.log(
        prettyjson.render({
          name: `${dux.firstname} ${dux.lastname}`,
          title: dux.title,
          email: dux.email,
          companyProfile: dux.companyProfile,
          linkedin: dux.profile,
          salesnav: dux.salesProfile,
        })
      );

      let ans = await inquirer.prompt({
        type: "confirm",
        name: "good",
        message: "Good?",
      });

      if (ans.good) {
        const contact = _createContactFromDuxsoup(dux);
        ans = await inquirer.prompt({
          type: "confirm",
          name: "edit",
          message: "Edit?",
          default: false,
        });
        if (ans.edit) {
          props = await inquirer.prompt({
            type: "",
          });
        }
      }
    }

    let next = 0;

    while (next >= 0) {
      next = await inquirer.prompt({
        type: "list",
        name: "ans",
        message: "What do you want to do?",
        choices: BWITH_NEXT_ACTIONS,
      });

      // Skip
      if (next.ans === -1) break;

      // Add a contact
      if (next.ans === 1) continue;

      // Edit a contact
      if (next.ans === 2) continue;

      // Edit company
      if (next.ans === 3) continue;

      // Validate
      if (next.ans === 10) continue;
    }
  }
};

const _buildFilter = async () => {
  let filter = {
    $or: [
      { monthlyUsers: { $gte: MIN_USERS } },
      { monthlyVisits: { $gte: MIN_VISITS } },
    ],
    validation: { $in: ["Ecomm", "B2B Ecomm", "Manufacturer"] },
    companyId: { $exists: false },
  };

  // Ask for a list to work on. If not specified,
  // work on all builtwith records
  const answer = await inquirer.prompt({
    type: "input",
    name: "list",
    message: "What list do you want to validate?",
  });

  if (answer.list) filter = { ...filter, ...answer };

  return filter;
};

const _createCompanyFromBwith = (bwith) => {
  return new Company({
    name: bwith.companyName,
    domain: bwith.domain,
    vertical: bwith.ourVertical,
    origin: "BuiltWith",
    linkedin: bwith.linkedin,
    source: "Outbound",
    list: bwith.list,
  });
};

const _createContactFromDuxsoup = (dux) => {
  return new Contact({
    firstname: dux.firstname,
    lastname: dux.middlename ? dux.middlename : dux.lastname,
    email: dux.email,
    phone: dux.phone,
    jobTitle: dux.title,
    linkedinProfile: dux.profile,
    linkedinSales: dux.salesProfile,
  });
};

const jsonImporter = async () => {
  const rawFile = fs.readFileSync(
    path.resolve(__dirname, "data", "users_deli.json")
  );
  const jsonData = JSON.parse(rawFile);
  const outData = [];
  for (const user of jsonData) {
    user.created_at = new Date(user.created_at);
    user.updated_at = new Date(user.updated_at);
    outData.push(user);
  }

  await mongoose.connection.db.collection("users").insertMany(outData);
};

(async function () {
  connectDB(async (conn) => {
    const coll = conn.connection.db.collection("users");
    const users = await coll
      .find({ attack: true, techSpends: { $exists: false } })
      .toArray();
    for (const user of users) {
      try {
        const res = await bwithApi(user.client_domain);
        if (res.techs || res.techSpends)
          coll.updateOne({ _id: user._id }, { $set: { ...res } });
      } catch (err) {
        console.log(`Error getting ${user.client_domain}`);
      }
    }
    conn.connection.close();
  });
})();
