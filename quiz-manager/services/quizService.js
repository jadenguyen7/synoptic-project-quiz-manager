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

module.exports.getAllQuizzes = getAllQuizzes;
