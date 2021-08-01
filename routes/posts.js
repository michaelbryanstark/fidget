const router = require('express').Router();
const postCtrl = require('../controllers/posts'); 
const commentsCtrl = require('../controllers/comments');
// not needed for post CRUD,

router.get('/', postCtrl.index);
router.get('/new', postCtrl.new);
router.get('/:id', postCtrl.show); 
router.post('/', postCtrl.create); 
router.delete('/:id', postCtrl.deletePost);
router.put('/:id', postCtrl.updatePost);

module.exports = router;