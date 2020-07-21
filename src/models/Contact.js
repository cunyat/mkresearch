const mongoose = require("mongoose");

const Company = require("./Company");

var ContactSchema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
  },

  firstname: { type: String, trim: true },
  lastname: { type: String, trim: true },
  email: {
    type: String,
    trim: true,
  },

  phone: { type: String, trim: true },
  mobilePhone: { type: String, trim: true },
  jobTitle: { type: String, trim: true },
  title: {
    type: String,
    trim: true,
    enum: [
      "CEO",
      "CIO",
      "COO",
      "SCM",
      "Ecomm Manager",
      "Ecommerce Manager",
      "CTO",
      "CSM",
      "Logistics Director",
      "CMO",
    ],
  },

  linkedin: { type: String, trim: true },

  hubspot: {
    contactId: { type: String, trim: true },
    companyId: { type: String, trim: true },
    owner: { type: String, trim: true },
    lastModified: Date,
    leadStatus: { type: String, trim: true },
    lifecycleStage: { type: String, trim: true },
    subscriptionStatus: { type: String, trim: true },
  },
});

ContactSchema.virtual("company", {
  ref: "Company",
  localField: "companyId",
  foreignField: "_id",
  justOne: true,
});

ContactSchema.pre("save", async function (next) {
  if (!this.companyId && this.hubspot.companyId) {
    const company = await Company.findOne({
      "hubspot.companyId": this.hubspot.companyId,
    });

    if (company) this.companyId = company._id;
  }
  next();
});

ContactSchema.statics.createOrUpdateByHubspot = async function (contacts) {
  const results = [];
  for (const contact of contacts) {
    const current = await this.findOne({
      "hubspot.contactId": contact.hubspot.contactId,
    });
    if (current) {
      if (contact.hubspot.lastModified > current.hubspot.lastModified) {
        const res = await this.updateOne({ _id: current._id }, contact);
        results.push(res);
      }
    } else {
      const comp = new this(contact);
      const res = await comp.save();
      results.push(res);
    }
  }

  return results;
};

module.exports = mongoose.model("Contact", ContactSchema);
