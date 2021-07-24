const mongoose = require("mongoose");



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



module.exports = mongoose.model('Post', postSchema);