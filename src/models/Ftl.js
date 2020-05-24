const mongoose = require("mongoose");

const FtlSchema = new mongoose.Schema({
  domain: {
    type: String,
    trim: true,
  },
  firstname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  confidence: Number,
  result: {
    type: String,
    trim: true,
  },
  linkedin: {
    type: String,
    trim: true,
  },
  position: {
    type: String,
    trim: true,
  },
  companyName: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Ftl", FtlSchema);
