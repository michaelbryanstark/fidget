const Post = require('../models/post'); // Schema for posts

module.exports = {
  index,
  show,
  new: newPost,
  create
};

function index(req, res) {
  Post.find({}, function(err, posts) {
    res.render('posts/show', { title: 'All Posts', posts });
  });
};

function show(req, res) {
  Post.findById(req.params.id, function(err, post) {
    res.render('posts/show', { title: 'Post detail', post });
  });
}

function newPost(req, res) {
  res.render('posts/new', { title: 'Add Post' });
}

function create(req, res) {
  const post = new Post(req.body); 
  post.save(function(err) {
  if (err) return res.render('/new');
  console.log(post);
  res.redirect('/show');
});
}

