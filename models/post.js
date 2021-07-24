const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// format new posts
const postSchema = new mongoose.Schema({
    content: String, 
    date: Date,
    // [commentsSchema]
}, {
    timestamps: true,
});

/* 
const commentSchema = new mongoose.Schema({
    content: String,
    date: Date,
}, {
    timestamps: true,
});
*/

const Post = mongoose.model('Post', postSchema);

module.exports = Post;