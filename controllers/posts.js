const Post = require('../models/post');
const User = require('../models/user');


module.exports = {
  index,
  show,
  new: newPost,
  create,
  deletePost,
  updatePost,
};

function deletePost(req, res) {
  Post.findByIdAndDelete(req.params.id, function(err, post) {
    res.redirect('/posts');
  });
}

function show(req, res) {
  Post.findById(req.params.id, function(err, post, user) {
    res.render('posts/comments', { title: 'comments', post, user: req.user });
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
  const user = new User;
  post.save(function(err) {

  if (err) {
    return res.render('/new');
    } else {
    console.log(post);
    res.redirect(`/posts/${post._id}`);
  }  
});
  user.posts.push(req.params.id);
  user.save(function (err) {
    if (err) return res.render('/new');
    console.log('Success!');
});
}

function updatePost(req, res) {
  Post.findByIdAndUpdate(req.params.id, { title: req.body.title, content: req.body.content } , function (err, post) {
    if (err) return res.send('404!');
   else {
    res.redirect(`/posts/${post._id}`);
    };
  });
};
