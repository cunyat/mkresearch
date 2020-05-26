const mongoose = require("mongoose");

const Company = require("./Company");

const BuiltwithSchema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
    required: false,
  },
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
  validation: {
    type: String,
    required: true,
    default: "Pending",
    enum: [
      "Pending",
      "Ecomm",
      "B2B Ecomm",
      "Manufacturer",
      "No Ecomm",
      "Not Target",
    ],
  },
});

BuiltwithSchema.pre("save", async function (next) {
  if (!this.companyId) {
    const company = await Company.findOne({ domain: this.domain });
    if (company) this.companyId = company._id;
  }
  next();
});

BuiltwithSchema.method("hasEmail", function () {
  return this.emails && this.emails.length > 0;
});

BuiltwithSchema.method("hasPhoneNumber", function () {
  return this.phoneNumbers && this.phoneNumbers.length > 0;
});

module.exports = mongoose.model("Builtwith", BuiltwithSchema);
