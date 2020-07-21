const inquirer = require("inquirer");
const dotenv = require("dotenv");
dotenv.config({ path: "./src/config/.env" });
const connectDB = require("./src/config/db");
require("colors");

const builtwith = require("./src/services/builtwithApi");
const sitetraffic = require("./src/services/sitetraffic");
const hubspot = require("./src/services/hubspot");

const Company = require("./src/models/Company");
const Contact = require("./src/models/Contact");

const LOOP_OPTS = [
  { value: 1, name: "Add contact" },
  { value: 2, name: "Delete a contact" },
  { value: 3, name: "Edit a contact" },
  { value: 4, name: "Edit company" },
  { value: 5, name: "Update company status" },
  new inquirer.Separator(),
  { value: 6, name: "Create CRM" },
  new inquirer.Separator(),
  { value: 8, name: "Print" },
  { value: 9, name: "Skip" },
  new inquirer.Separator(),
  { value: 0, name: "Quit" },
];

const showCompanyInfo = (company) => {
  console.log(`\nComany: ${company.name} (${company.domain})`);
  console.log(
    `Site traffic: Ship = ${company.sitetraffic.estimatedSales}, V = ${company.sitetraffic.monthlyVisits}, $${company.sitetraffic.siteWorth}`
  );

  const techs = company.builtwith.shopTechs
    ? company.builtwith.shopTechs.join(", ")
    : "";
  console.log(`BWith: $${company.builtwith.techSpends} - ${techs}`);

  let i = 0;
  for (const contact of company.contacts) {
    console.log(
      `    ${i} -\t${contact.firstname} ${contact.lastname} as ${contact.title} <${contact.email}> -- ${contact.mrStatus}`
    );
    console.log(`\tp:${contact.phone} m:${contact.mobilePhone}`);
    console.log("\n");
    i++;
  }
};

const addContact = async (company) => {
  let contact = await askContactFields();

  contact.companyId = company._id;

  try {
    contact = new Contact(contact);
    await contact.save();
    company.contacts.push(contact);
  } catch (err) {
    console.error(err);
  }
};

const editContact = async (contacts) => {
  const answer = await pickContact(contacts);

  const update = await askContactFields();

  await Contact.findByIdAndUpdate(answer.contact._id, update);
};

const discardContact = async (company, db) => {
  const answer = await pickContact(company.contacts);
  if (!answer) return -1;

  await Contact.findByIdAndDelete(answer.contact._id);
};

const pickContact = (contacts) => {
  const choices = contacts.map((c, i) => {
    return {
      value: c,
      name: `${i} - ${c.firstname} ${c.lastname} <${c.email}> ${c.title}`,
    };
  });

  return inquirer.prompt({
    message: "Pick a contact",
    type: "list",
    choices: choices,
    name: "contact",
  });
};

const askContactFields = () => {
  return inquirer
    .prompt([
      { type: "input", message: "Email", name: "email" },
      { type: "input", message: "First name", name: "firstname" },
      { type: "input", message: "Last name", name: "lastname" },
      { type: "input", message: "Title", name: "jobTitle" },
      { type: "input", message: "Phone", name: "phone" },
      { type: "input", message: "Mobile phone", name: "mobilePhone" },
    ])
    .then((answers) => {
      for (const key in answers) {
        if (answers[key] === "") delete answers[key];
      }
      return answers;
    });
};

const updateCompanyStatus = async (company) => {
  const answer = await inquirer.prompt({
    type: "list",
    message: "Pick status",
    name: "mrStatus",
    choices: [
      "pending",
      "contacts",
      "duplicated",
      "small",
      "not-target",
      "international",
    ],
  });

  await Company.findByIdAndUpdate(company._id, {
    mrStatus: answer.mrStatus,
  });

  return !["duplicated", "small", "not-target", "international"].includes(
    answer.mrStatus
  );
};

const createInCrm = async (company) => {
  company.hubspot = {
    owner: "46414926",
    leadStatus: "new",
    lifecycleStage: "lead",
  };

  company.origin = "Linkedin";

  await hubspot.createContactsAndCompany(company.contacts, company);

  console.log(`${company.domain} created`.bgBlue);

  await Company.findByIdAndUpdate(company._id, { mrStatus: "qualified" });
};

const editCompany = async (company) => {
  // Ask a field to update
};

const getSitetrafficInfo = async (companies) => {};

const getBuiltwithInfo = async (companies) => {
  let current = 1;
  for (const company of companies) {
    if (company.builtwith.techSpends) continue;

    try {
      const update = await builtwith(company.domain);

      console.log(`Got ${current} of ${companies.length} - ${company.domain}`);

      company.builtwith = { ...update, lastCheck: Date.now() };
      await company.save();
    } catch (err) {
      console.error(err);
    }

    current++;
  }
};

(async () => {
  connectDB(async (db) => {
    // ASK FOR A LIST
    const lists = await Company.aggregate([
      {
        $match: {
          mrList: { $exists: true },
        },
      },
      {
        $group: {
          _id: "$mrList",
        },
      },
    ]).exec();
    console.log(lists);

    if (!lists.length) {
      console.log("There are not any list to work in database");
      return;
    }

    const list = await inquirer.prompt({
      type: "list",
      name: "list",
      message: "Pick a list to work on",
      choices: lists.map((l) => l._id),
    });

    const companies = await Company.find({
      mrList: list.list,
      mrStatus: { $in: ["new", "pending", "contacts"] },
      "hubspot.companyId": { $exists: false },
      vertical: "Consumer Electronics",
    })
      .select()
      .populate("contacts");

    // LIST ACTIONS (BWITH, SITETRAFFIC)
    let actionLoop = true;
    do {
      const actionsAns = await inquirer.prompt({
        type: "list",
        name: "action",
        choices: [
          { name: "Process list", value: 3 },
          { name: "Fetch builtwith api", value: 1 },
          { name: "Fetch sitetraffic api", value: 2 },
          { name: "Quit", value: 0 },
        ],
      });

      switch (actionsAns.action) {
        case 1:
          console.log("Builtwith");
          await getBuiltwithInfo(companies);
          break;
        case 2:
          console.log("Sitetraffic not implemented\n");
          break;
        case 3:
          actionLoop = false;
          break;
        case 0:
          db.connection.close();
          process.exit(0);
        default:
      }
    } while (actionLoop);

    let current = 1;
    for (const company of companies) {
      let keep = true;

      do {
        showCompanyInfo(company);
        console.log(`${current} of ${companies.length}`);

        const actionAns = await inquirer.prompt({
          message: "Action",
          type: "list",
          name: "action",
          choices: LOOP_OPTS,
          loop: false,
        });

        switch (actionAns.action) {
          case 1: // Add a contact
            await addContact(company);
            await company.populate("contacts").execPopulate();
            break;
          case 2: // Delete a contact
            await discardContact(company, db);
            await company.populate("contacts").execPopulate();
            break;
          case 3: // Edit a contact
            await editContact(company.contacts);
            await company.populate("contacts").execPopulate();
            break;
          case 4: // Edit Company
            break;
          case 5: // Edit Company mrStatus
            keep = await updateCompanyStatus(company);
            break;
          case 6: // Create company & contacts in CRM
            await createInCrm(company);
            keep = false;
            break;
          case 8: // Print company info again
            showCompanyInfo(company);
            continue;
          case 9: // Skip current company
            keep = false;
            break;
          case 0: // Quit
            db.connection.close();
            return;
          default:
            console.log("BAD ACTION");
            continue;
        }
      } while (keep);

      current++;
    }

    db.connection.close();
  });
})();
