const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
    {
        name: String,
        birthday: Date,
        posts: [String], 
        googleId: String,
    },
    {
        timestamps: true,
      }
);

const User = mongoose.model('User', userSchema);

module.exports = User;