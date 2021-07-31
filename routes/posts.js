const router = require('express').Router();
const postCtrl = require('../controllers/posts'); 
const commentsCtrl = require('../controllers/comments');

router.get('/', postCtrl.index);
router.get('/new', postCtrl.new);
router.get('/:id', postCtrl.show); 
router.post('/', postCtrl.create); 
router.delete('/:id', postCtrl.deletePost);
router.put('posts/:id', commentsCtrl.updateComment);

module.exports = router;