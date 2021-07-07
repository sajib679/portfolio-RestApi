const mongoose = require("mongoose");

const partnershipSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    partnershipPicture: { type: String },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Partnership", partnershipSchema);
