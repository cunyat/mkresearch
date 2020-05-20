const dotenv = require("dotenv");
require("colors");
const axios = require("axios");
const contacts = require("./data/sport.contacts");
const companies = require("./data/sport.companies");
const mongoClient = require("mongodb").MongoClient;

dotenv.config({ path: "./config/config.env" });

async function conectDatabase() {
  const client = new mongoClient(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  client.connect(async function (err) {
    if (err) {
      console.log(`ERROR ${err}`.bgRed);
      return;
    }
    console.log("Connect succesful".bgGreen.black);
    const db = client.db("Leads");
    let count = 0;

    await db
      .collection("contacts")
      .updateMany({}, { $set: { status: "research" } });

    client.close();
  });
}

conectDatabase();
