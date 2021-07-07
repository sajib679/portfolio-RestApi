const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    category:{ type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
      },
    servicePictures: [{ img: String }],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
