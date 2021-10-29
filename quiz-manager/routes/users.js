var express = require('express');
var router = express.Router();
var userService = require("../services/userService");
require("dotenv").config()
var jwt = require('jsonwebtoken');
const { token } = require('morgan');

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

      process.env.AUTH_SECRET);
      
      res.cookie('token', token);

      res.redirect('/quizzes');
  }

  userService.validateLogin(req.body, onSuccess)
});

// users/logout
router.get('/logout', function(req, res, next) {
  res.clearCookie('token');  
  req.session = null;
  req.logout();
  res.redirect('/');
});


module.exports = router; 
