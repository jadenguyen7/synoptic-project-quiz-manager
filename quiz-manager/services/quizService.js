var mysql = require('mysql2');
var db = require('../db');

function createQuiz(quiz, onSuccess) {
    const sql = "INSERT INTO `quizzes` (title) VALUES (?)";
    const inserts = [quiz.title];
    const preparedSql = mysql.format(sql, inserts);
    db.query(preparedSql, onSuccess);
}

function deleteQuiz(id, onSuccess) {
    const sql = "DELETE FROM `quizzes` WHERE `id` = (?)";
    const inserts = [id];
    const preparedSql = mysql.format(sql, inserts);
    db.query(preparedSql, onSuccess);
}

function getAllQuizzes(onSuccess) {
    const sql = "SELECT * FROM `quizzes`";
    db.query(sql, onSuccess);
}

function getQuestionsAndAnswersWithQuizId(id, onSuccess) {
    const sql = "SELECT * FROM `quizzes` JOIN `questions` ON `questions`.`quizid` = `quizzes`.`id` JOIN `answers` ON `answers`.`questionid` = `questions`.`id` WHERE `questions`.`id` = (?)";
    const inserts = [id];
    const preparedSql = mysql.format(sql, inserts);
    db.query(preparedSql, onSuccess);
}

module.exports.createQuiz = createQuiz; 
module.exports.deleteQuiz = deleteQuiz; 
module.exports.getAllQuizzes = getAllQuizzes;
module.exports.getQuestionsAndAnswersWithQuizId = getQuestionsAndAnswersWithQuizId;

