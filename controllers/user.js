const User = require('../models/user');


module.exports = {
    getUserWithPosts,
}

function getUserWithPosts(name){
  return User.findOne({ name: name })
    .populate('posts').exec((err, posts) => {
      console.log("Populated User " + posts);
    })
}