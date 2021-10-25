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

function getAllQuestions() {
    const sql = "SELECT * FROM `questions`";
    const preparedSql = mysql.format(sql);
    db.query(preparedSql);
  }

function retrieveQuestionFromQuizId(id) {
    const sql = "SELECT * FROM `quizzes` WHERE id = (?)";
    const inserts = [id];
    const preparedSql = mysql.format(sql, inserts);
    db.query(preparedSql);
  }

//   async function retrieveQuestionFromQuizId(id) {
//     const sql = "SELECT * FROM `quizzes` WHERE id = (?)";
//     const inserts = [id];
//     const preparedSql = mysql.format(sql, inserts);
//     return db.query(preparedSql);
//   }

// module.exports.createQuiz = createQuiz;
module.exports.getAllQuestions = getAllQuestions;  
module.exports.getAllQuizzes = getAllQuizzes;
module.exports.retrieveQuestionFromQuizId = retrieveQuestionFromQuizId;