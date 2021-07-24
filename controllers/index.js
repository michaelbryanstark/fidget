const User = require('../models/user');


module.exports = {
    index,
}

function index(req, res) {
    User.find({}, function(err, user) {
      res.render('/index', { user, user: req.user });
    });
  }
