const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: String,
        posts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
          }], 
        
    },
    {
        timestamps: true,
      }
);

const User = mongoose.model('User', userSchema);

module.exports = User;