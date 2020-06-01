const dotenv = require("dotenv");
require("colors");
const connectDB = require("./src/config/db");
dotenv.config({ path: "./src/config/.env" });

const csvParser = require("./src/services/csvParser");
const path = require("path");
const Duxsoup = require("./src/models/Duxsoup");
const Builtwith = require("./src/models/Builtwith");
const Company = require("./src/models/Company");
const lookup = require("./lookup");

function importAndCreateDuxsoup() {
  csvParser
    .parseDuxSoup(path.join(__dirname, "data/duxsoup-ecommerce-managers.csv"))
    .then((results) => {
      console.log(`imported ${results.length} from Duxsoup CSV`);
      createDuxsoup(results);
    })
    .catch((e) => console.error(e));
}

function importAndCreateCompaniesHubspot() {
  csvParser
    .parseHubspotCompanies(
      path.join(__dirname, "data/companies-hubspot-2020-05-28.csv")
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
    .parseBuiltWith(path.join(__dirname, "data/builtwith-sports.csv"))
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
      let data = await Builtwith.create(results);
      console.log(`Created ${data.length} builtwith`);
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

const iterincom = {
  estimations: {
    site_worth: "$1,091",
    visitors: {
      daily: "498",
      monthly: "14,940",
      yearly: "181,770",
    },
    pageviews: {
      daily: "1,495",
      monthly: "44,850",
      yearly: "545,675",
    },
    revenue: {
      daily: "$1",
      monthly: "$45",
      yearly: "$545",
    },
  },
  alexa: {
    rank: {
      "3_months": "687698",
      "1_month": null,
      "7_days": null,
      "1_day": null,
    },
    rank_delta: {
      "3_months": "-2920789",
      "1_month": null,
      "7_days": null,
      "1_day": null,
    },
    reach: {
      "3_months": "733580",
      "1_month": null,
      "7_days": null,
      "1_day": null,
    },
    reach_delta: {
      "3_months": "-2439398",
      "1_month": null,
      "7_days": null,
      "1_day": null,
    },
    pageviews: {
      "3_months": "0.04",
      "1_month": null,
      "7_days": null,
      "1_day": null,
    },
    pageviews_delta: {
      "3_months": "+2000%",
      "1_month": null,
      "7_days": null,
      "1_day": null,
    },
  },
};

// validateBuiltWithDomains();
// importAndCreateBuiltwith();
// importAndCreateCompaniesHubspot();

(async function () {
  await connectDB(async (conn) => {
    let doc = await new Builtwith({ domain: "deliverea.com" }).save();
    console.log(doc);

    conn.connection.close();
  });
}); //();
