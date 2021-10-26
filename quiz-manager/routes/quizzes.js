var express = require('express');
var router = express.Router();
var passport = require('passport');
var { editAccess, viewAccess, restrictedAccess } = require('../security/access');
const quizService = require("../services/quizService");

// router.get('/', passport.authenticate('jwt', { session: false }), function(req, res, next) {
//     res.render('quizzes/index');
// });

// router.post('/', passport.authenticate('jwt', { session: false }), restrictedAccess, function(req, res, next) {
//     // res.render('quiz/index');
//     quizService.createQuiz(req.body);
//       res.render('quiz/index');
//       return;
// });

// get all quizzes
  router.get('/', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    function onSuccess(sqlResult) {
        res.render('quizzes/index', {
            quizzes: sqlResult,
            isEdit: req.user.role === "edit"
        });
    }

    quizService.getAllQuizzes(onSuccess);
});

// create new quiz
router.get('/create', passport.authenticate('jwt', { session: false }), editAccess, function(req, res, next) {
    res.render('quizzes/create');
});

router.post('/create', passport.authenticate('jwt', { session: false }), editAccess, function(req, res, next) {
    function onSuccess() {
        res.redirect('/quizzes');
    }
    quizService.createQuiz(req.body, onSuccess);
});

module.exports = router;