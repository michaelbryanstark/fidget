const router = require('express').Router();
const passport = require('passport');
const postCtrl = require('../controllers/posts'); 
// const commentCtrl = require('../controllers/comments');

router.get('/', function(req, res) {
    res.render('index', {
        user:req.user,
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
);

// post routes
router.get('/', postCtrl.index);
router.get('/new', postCtrl.new);
router.get('/:id', postCtrl.show); 
router.post('/show', postCtrl.create); 
// router.put('/show', postCtrl.create); // edit existing post
// router.delete('/show', postCtrl.delete); // delete existing post
// router.post('show/:id/comments', commentCtrl.create); // create comment on post


router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;