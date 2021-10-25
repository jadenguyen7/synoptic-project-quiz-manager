var express = require('express');
var router = express.Router();
var passport = require('passport');
var { adminAccess, readAccess, restrictedAccess } = require('../security/access');
const quizService = require("../services/quizService");

//get questions for quiz
router.get('/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    function onSuccess(questions) {
        res.render('questions/index', {
            questions: questions
        });
    }

    quizService.getAllQuestionsUsingQuizId(req.params.id, onSuccess);
});



module.exports = router;

