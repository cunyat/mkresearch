module.exports = {
  builtwith: {
    // if first row is gdpr advice should be ignored.
    mapping: {
      Domain: "domain",
      "Location on Site": null,
      "Tech Spend USD": "techSpends",
      Company: "companyName",
      Vertical: "vertical",
      Quantcast: "quantcast",
      Alexa: "alexa",
      Majestic: "majestic",
      Umbrella: "umbrella",
      Telephones: "phoneNumbers",
      Emails: "emails",
      Twitter: null,
      Facebook: null,
      LinkedIn: "linkedin",
      Google: null,
      Pinterest: null,
      GitHub: null,
      Instagram: null,
      Vk: null,
      Vimeo: null,
      Youtube: null,
      People: null,
      City: "city",
      State: null,
      Zip: "zip",
      Country: "country",
      "First Detected": null,
      "Last Found": null,
      "First Indexed": null,
      "Last Indexed": null,
      Exclusion: null,
      GDPR: null,
    },
    fieldParse: {
      techSpends: (value = "$0") => parseInt(value.replace("$", "")),
      phoneNumbers: (value = "ph:") =>
        value
          .replace(/^(ph:)/, "")
          .replace(/-/g, "")
          .replace(/\+/g, "00")
          .split(";")
          .filter((e) => e.length > 0),
      emails: (value) => value.split(";").filter((e) => e.length > 0),
      quantcast: (v) => (v === "Outside Top 1m" ? undefined : parseInt(v)),
      alexa: (v) => (v === "Outside Top 1m" ? undefined : parseInt(v)),
      majestic: (v) => (v === "Outside Top 1m" ? undefined : parseInt(v)),
      umbrella: (v) => (v === "Outside Top 1m" ? undefined : parseInt(v)),
    },
    options: { skipLines: 1 },
  },
  duxsoup: {},
  ftlSocial: {},
  ftlLookup: {},
  hsContact: {},
  hsCompany: {},
  contact: {},
  company: {},
};
