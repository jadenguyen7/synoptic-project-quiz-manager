var express = require('express');
var router = express.Router();
var passport = require('passport');
var { editAccess, viewAccess } = require('../security/access');
const answerService = require("../services/answerService");

// get questions and answers for quiz
router.get('/:id', passport.authenticate('jwt', { session: false }), viewAccess, function(req, res, next) {
    function onSuccess(sqlResult) {
        console.log(sqlResult);
        res.render('answers/index', {
            result: sqlResult,
            isView: req.user.role === "view",
            isEdit: req.user.role === "edit"
        });
    }
    
    answerService.getAllAnswersByQuestionId(req.params.id, onSuccess);
    console.log(req.params.id);
});

router.get('/:quizid/create', passport.authenticate('jwt', { session: false }), editAccess, function(req, res, next) {
    function onSuccess(sqlResult) {
        res.render('answers/create', {
            questions: sqlResult,
            quizID: sqlResult.quizid
        });
    }
    questionService.getAllAnswersByQuestionId(req.params.quizid, onSuccess);
});

router.post('/:quizid/create', passport.authenticate('jwt', { session: false }), editAccess, function(req, res, next) {
    console.log(req);
    function onSuccess() {
        res.redirect(`/answers/${req.params.quizid}`);
    }
    questionService.createQuestion(req.body.title, req.params.quizid, onSuccess);
});


module.exports = router;
