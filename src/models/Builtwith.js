const mongoose = require("mongoose");

const BuiltwithSchema = new mongoose.Schema({
  domain: {
    type: String,
    required: [true, "Please provide a domain"],
    trim: true,
    unique: true,
  },
  vertical: {
    type: String,
    trim: true,
  },
  techSpends: {
    type: Number,
    required: true,
    default: 0,
  },
  companyName: {
    type: String,
    trim: true,
  },
  phoneNumbers: {
    type: [String],
    trim: true,
  },
  emails: {
    type: [String],
    trim: true,
  },
  linkedin: {
    type: String,
    trim: true,
  },
  quantacast: Number,
  alexa: Number,
  majestic: Number,
  umbrellla: Number,

  city: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  zip: {
    type: String,
    trim: true,
  },
});

BuiltwithSchema.method("hasEmail", function () {
  return this.emails && this.emails.length > 0;
});

BuiltwithSchema.method("hasPhoneNumber", function () {
  return this.phoneNumbers && this.phoneNumbers.length > 0;
});

module.exports = mongoose.model("Builtwith", BuiltwithSchema);
