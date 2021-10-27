var express = require('express');
var router = express.Router();
var passport = require('passport');
var { editAccess, viewAccess, restrictedAccess } = require('../security/access');
const quizService = require("../services/quizService");

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

// delete quiz
router.post('/:id/delete', passport.authenticate('jwt', { session: false }), editAccess, function(req, res, next) {
    function onSuccess() {
        res.redirect('/quizzes');
    }
    quizService.deleteQuiz(req.params.id, onSuccess);
});

// edit quiz
router.get('/:id/edit', passport.authenticate('jwt', { session: false }), editAccess, function(req, res, next) {
    res.render('quizzes/edit');
});


module.exports = router;