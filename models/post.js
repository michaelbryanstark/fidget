const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
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

module.exports = mongoose.model('PostSchema', PostSchema);
