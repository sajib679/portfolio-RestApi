const mongoose = require("mongoose");

const blogImageSchema = new mongoose.Schema({
  link: { type: String, required: true },
});

module.exports = mongoose.model("BlogImage", blogImageSchema);
