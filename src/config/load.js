// Initialize config for REPL actions
const { resolve } = require("path");
require("dotenv").config({ path: resolve("./.env") });
require("colors");

const connectDb = require("./db");

module.exports = connectDb;
