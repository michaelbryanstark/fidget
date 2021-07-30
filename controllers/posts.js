const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
  // login,
  index,
  show,
  new: newPost,
  create,
  deletePost,
};

// function login(req, res) {
//   User.find({}, function(err, user) {
//     res.render('/', { user, user: req.user });
//   });
// }

function deletePost(req, res) {
  Post.findByIdAndDelete(req.params.id, function(err, post) {
    res.redirect('/posts');
  });
  

}

function show(req, res) {
  Post.findById(req.params.id, function(err, post, user) {
    res.render('posts/comments', { title: 'comments', post, user });
  });
}

function newPost(req, res) {
  res.render('posts/new');
}

function index(req, res) {
  Post.find({}, function(err, posts, user) {
    res.render('posts/', { title: 'All Posts', posts, user: req.user });
  });
};

function create(req, res) {
  const post = new Post(req.body); 
  console.log(post)
  post.save(function(err) {

  if (err) {
    return res.render('/new');
    } else {
    console.log(post);
    res.redirect(`/posts/${post._id}`);
  }  
});
}



