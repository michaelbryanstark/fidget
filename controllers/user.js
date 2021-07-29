const User = require('../models/user');


module.exports = {
    getUserWithPosts,
}

function getUserWithPosts(username){
  return User.findOne({ username: username })
    .populate('posts').exec((err, posts) => {
      console.log("Populated User " + posts);
    })
}