const mongoose = require("mongoose");

var ContactSchema = new mongoose.Schema({
  firstname: { type: String, trim: true, required: false },
  lastname: { type: String, trim: true, required: false },
  email: {
    type: String,
    trim: true,
    required: false,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email",
    ],
  },
  phone: { type: String, trim: true, required: false },
  secondaryPhone: { type: String, trim: true, required: false },
  jobTitle: { type: String, trim: true, required: false },
  title: {
    type: String,
    trim: true,
    required: false,
    enum: [
      "CEO (SMB)",
      "CIO",
      "COO",
      "SCM",
      "Ecomm Manager",
      "CTO",
      "CSM",
      "Logistics Director",
      "CMO",
    ],
  },
  companyId: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
    required: false,
  },
  origin: {
    type: String,
    trim: true,
    required: true,
    enum: ["LinkedIn", "BuiltWith", "FindThatLead", "Old"],
  },
  createdAt: { type: Date, default: Date.now },

  linkedin: {
    profile: { type: String, trim: true, required: false },
    sales: { type: String, trim: true, required: false },
    douxsoupId: { type: String, trim: true, required: false },
  },
  hubspot: {
    contactId: { type: String, trim: true, required: false },
    createdAt: { type: Date, required: false },
    modifiedAt: { type: Date, required: false },
    ownerName: { type: String, trim: true, required: false },
    leadStatus: { type: String, trim: true, required: false },
    lifecycleStage: { type: String, trim: true, required: false },
    subscriptionStatus: { type: String, trim: true, required: false },
  },
});

ContactSchema.virtual("company", {
  ref: "Company",
  localField: "companyId",
  foreignField: "_id",
  justOne: true,
});

module.exports = mongoose.model("Contact", ContactSchema);
