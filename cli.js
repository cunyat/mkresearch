const dotenv = require("dotenv");
require("colors");
// const connectDB = require("./src/config/db");
dotenv.config({ path: "./src/config/.env" });

// // Connect to database
// (async function () {
//   await connectDB(() => {
//     service.createCompanies(companies);
//   });
// })();

const csvParser = require("./src/services/csvParser");
const path = require("path");

csvParser
  .parseBuiltWith(path.join(__dirname, "data/sports-builtwith.csv"))
  .then((results) => console.log(results))
  .catch((e) => console.error(e));
