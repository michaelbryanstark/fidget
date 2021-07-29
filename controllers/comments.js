const Post = require('../models/post');

module.exports = {
    create,
    deleteComment,
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
    Post.deleteOne(req.params.id);
    res.redirect(`/posts/${post._id}`);
  
  }