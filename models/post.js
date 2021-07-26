const mongoose = require("mongoose");

/* 
const commentSchema = new mongoose.Schema({
    content: String,
    date: Date,
}, {
    timestamps: true,
});
*/

const postSchema = new mongoose.Schema({
    title: String,
    content: String, 
    date: Date,
    // comments: [commentsSchema],
}, {
    timestamps: true,
});



module.exports = mongoose.model('Post', postSchema);





