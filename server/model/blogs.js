


const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
 
    authors: {
        type: String,
    },
    index: {
        type: Number,
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
        default: null,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: "Comment",
    }],
});

const Blog = mongoose.model("blogs", blogSchema);
module.exports = Blog;

