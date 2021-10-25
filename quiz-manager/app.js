var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("dotenv").config();
var JwtStrategy = require('passport-jwt').Strategy;
var passport = require('passport');
var CookieExtractor = require('./security/cookieExtractor');
var UserService = require("./services/userService");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var quizzesRouter = require('./routes/quizzes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/quizzes', quizzesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var opts = {}
opts.jwtFromRequest = CookieExtractor.cookieExtractor;
opts.secretOrKey = process.env.AUTH_SECRET;

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    // add the findUser function to get the details for a user given their username
    UserService.findUser(jwt_payload['user'].username, function(err, user) {
        if (err) {
            return done(err, null);
        }
        return done(null, user);
    });
}));

module.exports = app;
