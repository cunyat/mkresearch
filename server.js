const express = require("express");

const dotenv = require("dotenv");
const morgan = require("morgan");

const connectDB = require("./config/db");

// Initialize config
dotenv.config({ path: "./config/.env" });

// Connect to database
connectDB();

// Initialize express
const app = express();

app.use(express.json());
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .underline
  );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // close server and stop process
  server.close(() => process.exit(1));
});
