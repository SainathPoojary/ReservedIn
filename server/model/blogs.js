const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  authors: {
    type: String,
  },
  tags: {
    type: [String],
  },
  text: {
    type: String,
  },
  timestamp: {
    type: String,
  },
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  authorImage: {
    type: String,
    default: "",
  },
  authorId: {
    type: mongoose.Types.ObjectId,
    default: "",
  },
  comments : {
    type: [mongoose.Types.ObjectId],
    default: [],
  },
});

const Blog = mongoose.model("blogs", blogSchema);
module.exports = Blog;
