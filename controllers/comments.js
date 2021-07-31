const post = require('../models/post');
const Post = require('../models/post');

module.exports = {
    index,
    create,
    deleteComment,
    updateComment,
};

function index(req, res) {
    Post.find({}, function(err, comments, user) {
      res.render(`/posts/${post._id}`, { title: 'Comments', comments, user: req.user });
    });
  };

function create(req, res) {
    Post.findById(req.params.id, function (err, post) {
        post.comments.push(req.body);
        post.save(function(err) {
            res.redirect(`/posts/${post._id}`);
        });
    });
}

function deleteComment(req, res) {
    Post.findByIdAndDelete(req.user.id, function(err, post) {
        res.redirect(`/posts/${post._id}`);
    });
  }

function updateComment(req, res) {
    Post.findByIdAndUpdate(req.post.id, function(err, post) {
        res.redirect(`/posts/${post._id}`, {
            post: req.body,
        });
    });
}
