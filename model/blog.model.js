const mongoose = require("mongoose");
const blogSchema = mongoose.Schema({
  title: String,
  description: String,
});

const blog = mongoose.model("blog", blogSchema);

module.exports = blog;
