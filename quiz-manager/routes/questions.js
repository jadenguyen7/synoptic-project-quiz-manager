var express = require('express');
var router = express.Router();
var passport = require('passport');
var { adminAccess, readAccess, restrictedAccess } = require('../security/access'); // NOT SURE NEED THIS
const quizService = require("../services/quizService");

//get questions for quiz
router.get('/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    function onSuccess(sqlResult) {
        res.render('questions/index', {
            questions: sqlResult,
            isRestricted: req.user.role === "restricted",
            isView: req.user.role === "view",
            isEdit: req.user.role === "edit"
        });
    }
    
    quizService.getAllQuestionsUsingQuizId(req.params.id, onSuccess);
});



module.exports = router;

