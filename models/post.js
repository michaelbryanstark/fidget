const mongoose = require("mongoose");


const commentSchema = new mongoose.Schema({
    _id: { type: String}, // TEMP ATTEMPT have ID field for created comment to grab by ID
    content: String,
    date: Date,
}, {
    timestamps: true,
});


const postSchema = new mongoose.Schema({
    title: String,
    content: String, 
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
    comments: [commentSchema],
}, {
    timestamps: true,
});



module.exports = mongoose.model('Post', postSchema);

