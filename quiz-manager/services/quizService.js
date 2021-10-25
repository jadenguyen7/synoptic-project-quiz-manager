var mysql = require('mysql2');
var db = require('../db');

// function createQuiz(quiz) {
//     const sql = "INSERT INTO `quizzes` (name) VALUES (?)";
//     const inserts = [quiz.name];
//     const preparedSql = mysql.format(sql, inserts);
//     return db.query(preparedSql);
// }

function getAllQuizzes(onSuccess) {
    const sql = "SELECT * FROM `quizzes`";
    db.query(sql, onSuccess);
  }

// function getAllQuestions() {
//     const sql = "SELECT * FROM `questions`";
//     const preparedSql = mysql.format(sql);
//     db.query(preparedSql);
//   }

function getAllQuestionsUsingQuizId(id, onSuccess) {
    const sql = "SELECT * FROM `questions` WHERE `quizid` = (?)";
    const inserts = [id];
    const preparedSql = mysql.format(sql, inserts);
    db.query(preparedSql, onSuccess);
}

module.exports.getAllQuizzes = getAllQuizzes;
// module.exports.getAllQuestions = getAllQuestions; 
module.exports.getAllQuestionsUsingQuizId = getAllQuestionsUsingQuizId;  
