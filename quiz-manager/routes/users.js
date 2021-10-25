var express = require('express');
var router = express.Router();
var userService = require("../services/userService");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users');
});

// users/login
router.post('/login', function(req, res, next) {
  function onSuccess(success, user) {
    if (!success) {
      res.render('error', { message: 'No valid user', error: {title: 'User not recognised', message: ''} });
      return;
    }
      res.redirect('/quiz/quiz');
  }

  userService.validateLogin(req.body, onSuccess)
});


module.exports = router;
