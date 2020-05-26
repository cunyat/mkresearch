const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: { type: String, trim: true, required: false },
  domain: { type: String, trim: true, required: true, unique: true },
  websiteUrl: { type: String, trim: true, required: false },
  phone: { type: String, trim: true, required: false },
  vertical: {
    type: String,
    trim: true,
    required: false,
    enum: [
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
    ],
  },
  size: { type: String, trim: true, required: false },
  tier: {
    type: String,
    trim: true,
    required: false,
    enum: ["Tier 1", "Tier 2", "Tier 3"],
  },
  origin: {
    type: String,
    trim: true,
    enum: ["LinkedIn", "BuiltWith", "FindThatLead", "Old", "Hubspot"],
  },
  linkedin: { type: String, trim: true, required: false },
  carriers: { type: [String], trim: true, required: false },
  cif: { type: String, trim: true, required: false },
  ecommerce: { type: Boolean },

  companyId: { type: String, trim: true, required: false },
  owner: { type: String, trim: true, required: false },

  leadStatus: { type: String, trim: true, required: false },
  lifecycleStage: { type: String, trim: true, required: false },
  subscriptionStatus: { type: String, trim: true, required: false },
  source: {
    type: String,
    trim: true,
    required: false,
    enum: ["Outbound", "Inbound"],
  },
});

// Reverse populate with virtuals
CompanySchema.virtual("contacts", {
  ref: "Course",
  localField: "_id",
  foreignField: "companyId",
  justOne: false,
});

module.exports = mongoose.model("Company", CompanySchema);
