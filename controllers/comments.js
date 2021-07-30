const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    index,
    create,
    deleteComment,
};

function index(req, res) {
    User.find({}, function(err, user) {
      res.render('/posts/:id/', { user, user: req.user });
    });
  }


function create(req, res) {
    Post.findById(req.params.id, function (err, post) {
        post.comments.push(req.body);
        post.save(function(err) {
            res.redirect(`/posts/${post._id}`);
        });
    });
}

function deleteComment(req, res) {
    Post.findByIdAndDelete(req.params.id, function(err, post) {
        res.redirect(`/posts/${post._id}`);
    });
    
  
  }