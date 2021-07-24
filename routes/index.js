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

        successRedirect: '/', // on index, eventually to show? or stay?
        failureRedirect: '/',
    })
)

router.get('/', postCtrl.index);
router.get('/new', postCtrl.new);
router.get('/:id', postCtrl.show);
router.post('/show', postCtrl.create); // POST then go to /index


router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;