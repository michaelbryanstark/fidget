const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: String,
        birthday: Date,
        posts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
          }], 
        googleId: String,
    },
    {
        timestamps: true,
      }
);

const User = mongoose.model('User', userSchema);

module.exports = User;