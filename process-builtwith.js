const dotenv = require("dotenv");
const colors = require("colors");
const puppeteer = require("puppeteer");
const prompt = require("prompt-sync")({ sigint: true });
const connectDB = require("./src/config/db");

const Builtwith = require("./src/models/Builtwith");

dotenv.config({ path: "./src/config/.env" });

const BROWSER_WS =
  "ws://localhost:9876/devtools/browser/f6938f86-4181-4964-88ec-5a4727b26357";
const LNK_URL = "https://www.linkedin.com/sales/search/company?keywords=";
const VERTICALS = [
  "Fashion & Footwear",
  "Jewelry",
  "Toy Store",
  "Costumes",
  "Pharma",
  "Consumer Electronics",
  "Gardening",
  "Crafts",
  "Food & drinks",
  "Sport",
  "Furniture",
  "Pets",
  "Wine",
  "Cosmetics",
  "Cleaning products",
  "Childcare",
  "Miscelania",
  "Consumer Goods",
  "Automotive",
];

let browser, mongoose;

const run = async () => {
  connectDB(async (conn) => {
    mongoose = conn;
    const records = await Builtwith.find({
      validation: "Pending",
      list: { $in: ["salesforce-stores", "magento-stores"] },
    });

    browser = await puppeteer.connect({
      browserWSEndpoint: BROWSER_WS,
      defaultViewport: null,
    });

    const pages = await browser.pages();
    if (pages.length < 2) {
      console.log("please keep 2 tabs open");
      finishSessions();
      return;
    }

    const website = pages[0];
    const linkedin = pages[1];

    console.log(`connected to ${pages.length} pages`);
    console.log(
      `Starting loop for ${records.length} Builtwith records`.bgGreen.black
    );

    for (const record of records) {
      console.log(
        `\n\n\nLooking for ${records.indexOf(record)} of ${records.length}`
      );
      console.log(record);
      try {
        linkedin
          .goto(LNK_URL + record.domain.split(".")[0])
          .catch((err) => console.log("Error navigating".bgRed));
        website
          .goto(`http://${record.domain}`)
          .catch((err) => console.log("Error navigating".bgRed));
      } catch (err) {
        console.log("Error navigating".bgRed);
      }

      // Validation
      const valid = prompt("Valid (E), NE, M, B, NT, S, I ? ", "E");

      record.validation = parseValidation(valid);

      const answer = VERTICALS.map((val, i) => `${i} - ${val}`).join("\n");
      console.log("Pick vertical: \n" + answer + "\n");
      const vertical = prompt("- ", 9);
      if (vertical != "q") {
        record.ourVertical = VERTICALS[vertical];
      }

      if (!record.linkedin) {
        const linkedinPage = prompt("Linkedin: ", null);
        if (linkedinPage) record.linkedin = linkedinPage;
      }

      await record.save();

      const action = prompt("Continue? ", "Y");
      if (action.toLowerCase() === "q") {
        finishSessions();
        return;
      }
    }

    finishSessions();
  });
};

const parseValidation = (valid) => {
  switch (valid.toLowerCase()) {
    case "e":
      return "Ecomm";
    case "ne":
      return "Not Ecomm";
    case "m":
      return "Manufacturer";
    case "b":
      return "B2B Ecomm";
    case "nt":
      return "Not Target";
    case "s":
      return "Small";
    case "i":
      return "International";
    default:
      return undefined;
  }
};

const finishSessions = () => {
  browser.disconnect();
  mongoose.connection.close();
};

run();

module.exports = run;
