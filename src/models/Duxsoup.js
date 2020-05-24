const mongoose = require("mongoose");
const psl = require("psl");

const DuxsoupSchema = new mongoose.Schema({
  duxid: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  visitTime: Date,
  profile: {
    type: String,
    trim: true,
  },
  salesProfile: {
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
  summary: {
    type: String,
    trim: true,
  },
  from: Number,
  title: {
    type: String,
    trim: true,
  },
  companyName: {
    type: String,
    trim: true,
  },
  companyProfile: {
    type: String,
    trim: true,
  },
  companyWebsite: {
    type: String,
    trim: true,
  },
  companyDomain: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  industry: {
    type: String,
    trim: true,
  },
});

// Set domain if not specified
DuxsoupSchema.pre("save", function (next) {
  if (!this.companyDomain && this.companyWebsite) {
    this.companyDomain = psl.get(this.companyWebsite);
  }
  next();
});

module.exports = mongoose.model("Duxsoup", DuxsoupSchema);
