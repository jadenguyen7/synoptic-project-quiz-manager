var express = require('express');
var router = express.Router();
var passport = require('passport');
var { editAccess, viewAccess, restrictedAccess } = require('../security/access');
const questionService = require("../services/questionService");
const quizService = require("../services/quizService");

//get questions for quiz
router.get('/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    function onSuccess(sqlResult) {
        console.log(sqlResult);
        // var quizTitle = sqlResult[0].title
        // var quizid = sqlResult[0].quizid
        res.render('questions/index', {
            questions: sqlResult,
            // quizTitle: quizTitle,
            // quizid: quizid,
            isRestricted: req.user.role === "restricted",
            isView: req.user.role === "view",
            isEdit: req.user.role === "edit"
        });
        
    }
    questionService.getQuestionsByQuizId(req.params.id, onSuccess);
});

//create new question 
router.get('/:quizid/create', passport.authenticate('jwt', { session: false }), editAccess, function(req, res, next) {
    function onSuccess(sqlResult) {
        res.render('questions/create', {
            questions: sqlResult,
            quizID: sqlResult.quizid
        });
    }
    questionService.getQuestionsByQuizId(req.params.quizid, onSuccess);
});

router.post('/:quizid/create', passport.authenticate('jwt', { session: false }), editAccess, function(req, res, next) {
    console.log(req);
    function onSuccess() {
        res.redirect(`/questions/${req.params.quizid}`);
    }
    questionService.createQuestion(req.body.title, req.params.quizid, onSuccess);
});

// delete question
router.post('/:id/delete', passport.authenticate('jwt', { session: false }), editAccess, function(req, res, next) {
    function onSuccess() {
        res.redirect('back');
    }
    questionService.deleteQuestion(req.params.id, onSuccess);
});

// edit question
router.get('/:id/edit', passport.authenticate('jwt', { session: false }), editAccess, function(req, res, next) {
        res.render('questions/edit');
});

module.exports = router;

