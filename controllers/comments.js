const Post = require('../models/post');

module.exports = {
    create,
    deleteComment,
};


function create(req, res) {
    Post.findById(req.params.id, function (err, post, user) {
        post.comments.push(req.body);
        post.save(function(err) {
            res.redirect(`/posts/${post._id}`, { user, user: req.user });
        });
    });
}

function deleteComment(req, res) {
    Post.findByIdAndDelete(req.params.id, function(err, post) {
        res.redirect(`/posts/${post._id}`);
    });
  }
