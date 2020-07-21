const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: { type: String, trim: true },
  domain: { type: String, trim: true, required: true },
  relatedDomains: { type: [String], trim: true },
  websiteUrl: { type: String, trim: true },
  phone: { type: String, trim: true },
  vertical: {
    type: String,
    trim: true,
    required: false,
    enum: [
      "Fashion & Footwear",
      "Toy Store",
      "Costumes",
      "Pharma",
      "Consumer Electronics",
      "Gardening",
      "Sport",
      "Furniture",
      "Pets",
      "Wine",
      "Cosmetics",
      "Cleaning products",
      "Childcare",
      "Miscelania",
      "Consumer Goods",
      "Food & drinks",
      "Jewelry",
      "Automotive",
    ],
  },
  size: {
    type: String,
    trim: true,
    enum: ["< 1000", "1K - 2K", "2K - 5K", "5K - 10K", "10K - 20K", "> 20K"],
  },
  tier: {
    type: String,
    trim: true,
    required: false,
    enum: ["Tier 1", "Tier 2", "Tier 3"],
  },
  origin: {
    type: String,
    trim: true,
  },

  linkedin: { type: String, trim: true },

  source: {
    type: String,
    trim: true,
    required: false,
    enum: ["Outbound", "Inbound"],
    default: "Outbound",
  },

  hubspot: {
    companyId: { type: String, trim: true },
    owner: { type: String, trim: true },
    lastModified: { type: Date },
    leadStatus: { type: String, trim: true },
    lifecycleStage: { type: String, trim: true },
    subscriptionStatus: {
      type: String,
      trim: true,
      enum: ["Lead", "Trial", "Active", "Past due", "Canceled"],
    },
  },

  builtwith: {
    techSpends: Number,
    shopTechs: [String],
    lastCheck: Date,
  },

  sitetraffic: {
    monthlyUsers: Number,
    monthlyVisits: Number,
    estimatedSales: Number,
    siteWorth: Number,
    lastCheck: Date,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },

  mrList: { type: String, trim: true },
  mrStatus: {
    type: String,
    trim: true,
    enum: [
      "new",
      "pending",
      "contacts",
      "qualified",
      "duplicated",
      "small",
      "international",
      "not-target",
    ],
  },
});

// Reverse populate with virtuals
CompanySchema.virtual("contacts", {
  ref: "Contact",
  localField: "_id",
  foreignField: "companyId",
  justOne: false,
});

CompanySchema.statics.createOrUpdateByHubspot = async function (companies) {
  const results = [];
  for (const company of companies) {
    const current = await this.findOne({ domain: company.domain });
    if (current) {
      if (company.hubspot.lastModified > current.hubspot.lastModified) {
        const res = await this.updateOne({ _id: current._id }, company);
        results.push(res);
      }
    } else {
      const comp = new this(company);
      const res = await comp.save();
      results.push(res);
    }
  }

  return results;
};

CompanySchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});
module.exports = mongoose.model("Company", CompanySchema);
