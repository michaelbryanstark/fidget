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
    console.log(req.body._id)
    Post.findByIdAndUpdate(req.params.id, function(err, post) {
        if (err) return res.send('404!')
    else {
        res.redirect(`/posts/${post._id}`);
    }

    })
};
// console.log post, errors, see what's there. req.params.id = post ID. req.body.content = updated comment text
