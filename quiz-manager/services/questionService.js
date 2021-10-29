var mysql = require('mysql2');
var db = require('../db');

function getQuestionsByQuizId(quizID, onSuccess) {
    const sql = "SELECT `questions`.`id`, `questions`.`question`, `questions`.`quizid` FROM `questions` WHERE `questions`.`quizid` = (?)";
    const inserts = [quizID];
    const preparedSql = mysql.format(sql, inserts);
    db.query(preparedSql, onSuccess);
}

function getSingleQuestionById(id, onSuccess) {
    const sql = "SELECT * FROM `quizmanager`.`questions` WHERE `questions`.`id` = (?)";
    const inserts = [id];
    const preparedSql = mysql.format(sql, inserts);
    db.query(preparedSql, onSuccess);
}

function createQuestion(questions, quizid, onSuccess) {
    const sql = "INSERT INTO `questions` (`question`, `quizid`) VALUES (?, ?)";
    const inserts = [questions, quizid];
    const preparedSql = mysql.format(sql, inserts);
    db.query(preparedSql, onSuccess);
}

function deleteQuestion(id, onSuccess) {
    const sql = "DELETE FROM `questions` WHERE `id` = (?)";
    const inserts = [id];
    const preparedSql = mysql.format(sql, inserts);
    db.query(preparedSql, onSuccess);
}

function updateQuestion(question, id, onSuccess) {
    const sql = "UPDATE `questions` SET `question`= (?)  WHERE `id`= (?)";
    const inserts = [question, id];
    const preparedSql = mysql.format(sql, inserts);
    db.query(preparedSql, onSuccess);
}

module.exports.getQuestionsByQuizId = getQuestionsByQuizId;  
module.exports.getSingleQuestionById = getSingleQuestionById;   
module.exports.createQuestion = createQuestion;  
module.exports.deleteQuestion = deleteQuestion;  
module.exports.updateQuestion = updateQuestion;  