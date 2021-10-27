var mysql = require('mysql2');
var db = require('../db');

function getAllAnswersByQuestionId(questionID, onSuccess) {
    const sql = "SELECT `answers`.`id`, `answers`.`answer`, `answers`.`correct`, `answers`.`questionid`, `questions`.`question` FROM `answers` JOIN `questions` ON `questions`.`id` = `answers`.`questionid` WHERE `answers`.`questionid` = (?)";
    const inserts = [questionID];
    const preparedSql = mysql.format(sql, inserts);
    db.query(preparedSql, onSuccess);
}


module.exports.getAllAnswersByQuestionId = getAllAnswersByQuestionId;  
// module.exports.getAllAnswers = getAllAnswers;  