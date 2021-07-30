const Post = require('../models/post');

module.exports = {
  index,
  show,
  showPost,
  new: newPost,
  create
};

function index(req, res) {
  Post.find({}, function(err, posts, user) {
    res.render('posts/show', { title: 'All Posts', posts, user });
  });
};

function showPost(req, res) {
  Post.findById(req.params.id, function(err, posts) {
    res.render('posts/postDetails', { title: 'All Posts', posts, user: req.user }); // changed to user: req.user
  });
}


function show(req, res) {
  Post.find({}, function(err, posts) {
    res.render('posts/show', { title: 'All Posts', posts, user: req.user }); // changed to user: req.user
  });
}

function newPost(req, res) {
  res.render('posts/new');
}

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

