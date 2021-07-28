const Post = require('../models/post'); // Schema for posts

module.exports = {
  index,
  show,
  new: newPost,
  create
};

function index(req, res) {
  Post.find({}, function(err, posts, user) {
    res.render('posts/show', { title: 'All Posts', posts, user });
  });
};

function show(req, res) {
  Post.findById(req.params.id, function(err, post, user) {
    res.render('posts/comments', { title: 'comments', post, user });
  });
}

function newPost(req, res) {
  res.render('posts/new');
}
// is now creating objects and submitting them to DB (_id:, content)
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

