const router = require('express').Router();
const userCtrl = require('../controllers/user');

router.get('/', userCtrl.getUserWithPosts);

module.exports = router;