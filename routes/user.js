const router = require('express').Router();
const userCtrl = require('../controllers/user');

router.get('/', userCtrl.index);

module.exports = router;