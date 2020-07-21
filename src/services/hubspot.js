const hubspotApi = require("@hubspot/api-client");
const axios = require("axios");
const _ = require("lodash");
const fs = require("fs");

const Company = require("../models/Company");
const Contact = require("../models/Contact");

const client = new hubspotApi.Client({ apiKey: process.env.HAPI_KEY });

const OBJECT_TYPE = {
  CONTACTS: "contacts",
  COMPANIES: "companies",
  DEALS: "deals",
  TICKETS: "tickets",
  PRODUCTS: "products",
};

const COMPANIES_MAPPING = [
  { hs: "market_research", mk: "origin" },
  { hs: "name", mk: "name" },
  { hs: "domain", mk: "domain" },
  { hs: "source", mk: "source" },
  { hs: "hs_lead_status", mk: "hubspot.leadStatus" },
  { hs: "lifecyclestage", mk: "hubspot.lifecycleStage" },
  { hs: "tech_tools", mk: "builtwith.techSpends" },
  { hs: "size", mk: "size" },
  { hs: "subscription_status", mk: "hubspot.subscriptionStatus" },
  { hs: "phone", mk: "phone" },
  { hs: "vertical", mk: "vertical" },
  { hs: "new_tier", mk: "tier" },
  { hs: "hubspot_owner_id", mk: "hubspot.owner" },
];

const CONTACTS_MAPPING = [
  { hs: "firstname", mk: "firstname" },
  { hs: "lastname", mk: "lastname" },
  { hs: "email", mk: "email" },
  { hs: "phone", mk: "phone" },
  { hs: "mobilePhone", mk: "mobilePhone" },
  { hs: "jobtitle", mk: "jobTitle" },
  { hs: "title", mk: "title" },
  { hs: "hs_lead_status", mk: "hubspot.leadStatus" },
  { hs: "lifecyclestage", mk: "hubspot.lifecycleStage" },
  { hs: "subscription_status", mk: "hubspot.subscriptionStatus" },
  { hs: "hubspot_owner_id", mk: "hubspot.owner" },
];

const temp = {
  id: "748044350",
  properties: {
    createdate: "2018-03-29T11:36:59.695Z",
    domain: "hubspot.com",
    hs_lastmodifieddate: "2020-06-11T11:52:04.960Z",
    hs_lead_status: null,
    hs_object_id: "748044350",
    hubspot_owner_id: "31769598",
    lifecyclestage: "other",
    market_research: null,
    name: "HubSpot",
    new_tier: null,
    phone: "+18884827768",
    size: null,
    source: null,
    subscription_status: "Lead",
    tech_tools: null,
    vertical: null,
  },
  createdAt: "2018-03-29T11:36:59.695Z",
  updatedAt: "2020-06-11T11:52:04.960Z",
  associations: {
    contacts: {
      results: [
        { id: "79951", type: "company_to_contact" },
        { id: "86751", type: "company_to_contact" },
        { id: "96501", type: "company_to_contact" },
        { id: "2569101", type: "company_to_contact" },
        { id: "2922351", type: "company_to_contact" },
      ],
    },
  },
  archived: false,
};

const getProperties = (type) => {
  return client.crm.properties.coreApi.getAll(type, false);
};

const importAllCompanies = () => {
  const properties = COMPANIES_MAPPING.map((m) => m.hs);

  return client.crm.companies
    .getAll(100, undefined, properties)
    .then((res) =>
      res.map((c) => {
        const company = {
          hubspot: {
            companyId: c.id,
            lastModified: c.updatedAt,
          },
        };

        for (const prop of COMPANIES_MAPPING) {
          if (c.properties[prop.hs])
            _.set(company, prop.mk, c.properties[prop.hs]);
        }

        return company;
      })
    )
    .then((companies) =>
      companies.filter((c) => c.domain !== undefined && c.domain.length)
    )
    .then((companies) => Company.createOrUpdateByHubspot(companies))
    .then((companies) => console.log(`Imported ${companies.length} companies`))
    .catch((err) => console.error(err));
};

const importAllContacts = () => {
  const properties = CONTACTS_MAPPING.map((m) => m.hs);

  // return client.crm.contacts
  //   .getAll(100, undefined, properties, ["companies"])
  return new Promise((resolve, reject) => {
    fs.readFile("./data/response", (err, data) =>
      err ? reject(err) : resolve(data)
    );
  })
    .then((res) => JSON.parse(res))
    .then((res) =>
      res.map((cont) => {
        const contact = {
          hubspot: {
            contactId: cont.id,
            lastModified: cont.updatedAt,
            companyId: _.get(
              cont,
              "associations.companies.results[0].id",
              undefined
            ),
          },
        };

        for (const prop of CONTACTS_MAPPING) {
          if (cont.properties[prop.hs])
            _.set(contact, prop.mk, cont.properties[prop.hs]);
        }

        return contact;
      })
    )
    .then((contacts) => Contact.createOrUpdateByHubspot(contacts))
    .then((res) => console.log(`Imported ${res.length} contacts`));
};

const createContact = async (contact) => {
  try {
    const props = _getContactPropertiesFromModel(contact);

    props["hs_lead_status"] = "new";

    contactResponse = await client.crm.contacts.basicApi.create({
      properties: { ...props },
    });

    return contactResponse.body.id;
  } catch (err) {
    console.error(`Error creating contact ${contact.email}`);
    console.error(err);
  }
};

const createCompany = async (company) => {
  try {
    const props = _getCompanyPropertiesFromModel(company);

    compnayResponse = await client.crm.companies.basicApi.create({
      properties: { ...props, hubspot_owner_id: "46414926" },
    });

    return compnayResponse.body.id;
  } catch (err) {
    console.error(`Error creating company ${company.domain}`);
    console.error(err);
  }
};

const createContactsAndCompany = async (contacts, company) => {
  // Check if company already exists
  if (await companyExists(company.domain)) return;

  // Create the company
  const companyId = await createCompany(company);

  const contactsIds = [];
  for (const contact of contacts) {
    // Create the contact
    const id = await createContact(contact);
    contactsIds.push(id);

    // Associate the contact with the company
    await client.crm.companies.associationsApi.create(
      companyId,
      "contacts",
      id,
      "company_to_contact"
    );
  }

  // Create a note with info about company and contacts
  await createNote(contactsIds, companyId, company, contacts);
};

const createNote = async (contactIds, companyId, company, contacts) => {
  const noteBody = [
    `Tech monthly spends: ${company.builtwith.techSpends}`,
    `Monthly visits: ${company.sitetraffic.monthlyVisits} ~= ${
      company.sitetraffic.monthlyVisits * 0.02
    } shimpents`,
    // `Monthly users: ${company.sitetraffic.monthlyUsers} ~= ${
    //   company.monthlyUsers * 0.05
    // } shipments`,
    // `Sitetraffic site worth: ${company.sitetraffic.siteWorth}`,
    `Shop techs: ${company.builtwith.shopTechs.join(", ")}`,
  ];

  const note = {
    engagement: {
      active: true,
      ownerId: 10450687,
      type: "NOTE",
      timestamp: Date.now(),
    },
    associations: {
      contactIds: contactIds,
      companyIds: [companyId],
      dealIds: [],
      ownerIds: [],
      ticketIds: [],
    },
    attachments: [],
    metadata: {
      body: noteBody.join("</br>"),
    },
  };

  const opts = {
    method: "post",
    url: "https://api.hubapi.com/engagements/v1/engagements",
    params: { hapikey: process.env.HAPI_KEY },
    headers: { "Content-Type": "application/json" },
    data: note,
  };

  return await axios(opts);
};

const companyExists = async (domain) => {
  let response;
  try {
    response = await client.crm.companies.searchApi.doSearch({
      filterGroups: [
        {
          filters: [{ propertyName: "domain", operator: "EQ", value: domain }],
        },
      ],
    });
  } catch (err) {
    console.error(err);
  }
  return response.body && response.body.total > 0;
};

const contactExists = async (email) => {
  let response;
  try {
    response = await client.crm.contacts.searchApi.doSearch({
      filterGroups: [
        { filters: [{ propertyName: "email", operator: "EQ", value: email }] },
      ],
    });
  } catch (err) {
    console.error(err);
  }
  return response.body.total > 0;
};

const _getCompanyPropertiesFromModel = (company) => {
  const props = {};

  for (const mapping of COMPANIES_MAPPING) {
    if (company[mapping.mk] !== undefined)
      props[mapping.hs] = company[mapping.mk];
  }

  return props;
};

const _getContactPropertiesFromModel = (contact) => {
  const props = {};

  for (const mapping of CONTACTS_MAPPING) {
    if (contact[mapping.mk] !== undefined)
      props[mapping.hs] = contact[mapping.mk];
  }

  return props;
};

module.exports = {
  OBJECT_TYPE,
  getProperties,
  importAllCompanies,
  importAllContacts,
  createContact,
  contactExists,
  createCompany,
  companyExists,
  createContactsAndCompany,
};
