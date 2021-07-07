const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    projectPictures: [{ img: String }],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    techStack: [{ type: String }],
    link: { type: String },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
