var express = require('express');
var router = express.Router();
var passport = require('passport');
var { editAccess, viewAccess } = require('../security/access');
const answerService = require("../services/answerService");
const quizService = require("../services/quizService");


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

// create new answer
router.get('/:questionid/create', passport.authenticate('jwt', { session: false }), editAccess, function(req, res, next) {
    function onSuccess(sqlResult) {
        res.render('answers/create', {
            answer: sqlResult,
            question: sqlResult[0].question,
        });
    }
    answerService.getAllAnswersByQuestionId(req.params.questionid, onSuccess);
});

router.post('/:questionid/create', passport.authenticate('jwt', { session: false }), editAccess, function(req, res, next) {
    function onSuccess() {
        res.redirect(`/answers/${req.params.questionid}`);
    }
    answerService.createAnswer(req.body.answer, req.body.correct, req.params.questionid, onSuccess);

});

// delete answer
router.post('/:id/delete', passport.authenticate('jwt', { session: false }), editAccess, function(req, res, next) {
    function onSuccess() {
        res.redirect('back');
    }
    answerService.deleteAnswer(req.params.id, onSuccess);
});

// edit answer
router.get('/:id/edit', passport.authenticate('jwt', { session: false }), editAccess, function(req, res, next) {
    function onSuccess(sqlResult) {
        res.render('answers/edit', {
            answer: sqlResult
        });
    }
    answerService.getSingleAnswerById(req.params.id, onSuccess);
});

router.post('/:questionid/:id/edit', passport.authenticate('jwt', { session: false }), editAccess, function(req, res, next) {
    function onSuccess() {
        res.redirect(`/answers/${req.params.questionid}`);
    }
    answerService.updateAnswer(req.body.answer, req.body.correct, req.params.id, onSuccess);
});


module.exports = router;
