const express = require("express");
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.get('/posts/:id/comments', isLoggedIn, commentsCtrl.index)
router.post('/posts/:id/comments',isLoggedIn, commentsCtrl.create);
router.delete('comments/:id',isLoggedIn, commentsCtrl.deleteComment);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;