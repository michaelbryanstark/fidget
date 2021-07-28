const router = require('express').Router();
const passport = require('passport');
const userCtrl = require('../controllers/user');

router.get('/', userCtrl.index);

module.exports = router;