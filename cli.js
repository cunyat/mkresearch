const dotenv = require("dotenv");
require("colors");
const connectDB = require("./src/config/db");
dotenv.config({ path: "./src/config/.env" });

const csvParser = require("./src/services/csvParser");
const path = require("path");
const Duxsoup = require("./src/models/Duxsoup");

let res = [];
csvParser
  .parseBuiltWith(path.join(__dirname, "data/sports-builtwith.csv"))
  .then((results) => {
    console.log(results);
  })
  .catch((e) => console.error(e));

async function create() {
  await connectDB();
  console.log(res[0]);

  const duxs = [res[0], res[1]];

  await Duxsoup.deleteMany({});

  let data = await Duxsoup.create(duxs);

  console.log(data);
}
