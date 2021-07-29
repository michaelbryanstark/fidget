const router = require('express').Router();
const postCtrl = require('../controllers/posts'); 

router.get('/', postCtrl.index);

router.get('/new', postCtrl.new);
router.get('/:id', postCtrl.show); 
router.post('/show', postCtrl.create); 

module.exports = router;

