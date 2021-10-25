var express = require('express');
var router = express.Router();
var userService = require("../services/userService");
require("dotenv").config()
var jwt = require('jsonwebtoken')

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
      const token = jwt.sign({ 
        user: {
          username: user.username
        }
      },
      // Your secret, e.g. here set by environment variable
      process.env.AUTH_SECRET);
      
      res.cookie('token', token);

      res.redirect('/quizzes');
  }

  userService.validateLogin(req.body, onSuccess)
});

module.exports = router; 
