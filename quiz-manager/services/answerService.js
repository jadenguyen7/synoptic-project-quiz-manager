var mysql = require('mysql2');
var db = require('../db');

function getAllAnswersByQuestionId(questionID, onSuccess) {
    const sql = "SELECT `answers`.`id`, `answers`.`answer`, `answers`.`correct`, `answers`.`questionid`, `questions`.`question`, `questions`.`quizid` FROM `answers` JOIN `questions` ON `questions`.`id` = `answers`.`questionid` WHERE `answers`.`questionid` = (?)";
    const inserts = [questionID];
    const preparedSql = mysql.format(sql, inserts);
    db.query(preparedSql, onSuccess);
}

function getSingleAnswerById(id, onSuccess) {
    const sql = "SELECT * FROM `answers` WHERE `answers`.`id` = (?)";
    const inserts = [id];
    const preparedSql = mysql.format(sql, inserts);
    db.query(preparedSql, onSuccess);
}

function createAnswer(answer, correct, questionid, onSuccess) {
    const sql = "INSERT INTO `answers` (`answer`, `correct`, `questionid`) VALUES (?, ?, ?)";
    const inserts = [answer, correct, questionid];
    const preparedSql = mysql.format(sql, inserts);
    db.query(preparedSql, onSuccess);
}

function deleteAnswer(id, onSuccess) {
    const sql = "DELETE FROM `answers` WHERE `id` = (?)";
    const inserts = [id];
    const preparedSql = mysql.format(sql, inserts);
    db.query(preparedSql, onSuccess);
}

function updateAnswer(answer, correct, id, onSuccess) {
    const sql = "UPDATE `quizmanager`.`answers` SET `answer` = (?) , `correct` = (?)  WHERE `id` = (?)";
    const inserts = [answer, correct, id];
    const preparedSql = mysql.format(sql, inserts);
    db.query(preparedSql, onSuccess);
}


module.exports.getAllAnswersByQuestionId = getAllAnswersByQuestionId;  
module.exports.getSingleAnswerById = getSingleAnswerById;  
module.exports.createAnswer = createAnswer;  
module.exports.deleteAnswer = deleteAnswer;  
module.exports.updateAnswer = updateAnswer;  