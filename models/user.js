const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
    {
        name: String,
        birthday: Date,
        posts: String,
        googleId: String,
    },
    {
        timestamps: true,
      }
);