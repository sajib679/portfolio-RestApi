const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    businessDetails: {
      businessName: { type: String },
      businessLink: { type: String },
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
