const router = require('express').Router();
const passport = require('passport');
const { db } = require('../models/index');


router.get('/', function(req, res) {
    res.render('index', {
        user:req.user,
        posts: req.posts,
    });
});

router.get('/user', (req, res) => {
    res.render('user', {
        user:req.user,
        posts:req.posts,
    });
});

router.get('`/posts/${post._id}`', (req, res) => {
    res.render('comments', {
        user:req.user,
        comments:req.comments,
    });
});

router.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

router.get(
    '/oauth2callback',
    passport.authenticate('google', {
        successRedirect: '/', 
        failureRedirect: '/',
    })
)

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;