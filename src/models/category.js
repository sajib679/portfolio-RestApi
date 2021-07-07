const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    icon: { icon: String, size: String, color: String },
    categoryPictures: [{ img: String }],
    parentId: { type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
