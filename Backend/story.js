const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
  title: String,
  location: String,
  image: String,
  story: String,
}, { timestamps: true });

module.exports = mongoose.model("Story", StorySchema);
