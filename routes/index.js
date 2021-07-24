const router = require('express').Router();
const passport = require('passport');
const postCtrl = require('../controllers/posts'); // test

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

router.get('/', postCtrl.index);
router.get('/new', postCtrl.new);
router.get('/:id', postCtrl.show);
router.post('/', postCtrl.create);


router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;