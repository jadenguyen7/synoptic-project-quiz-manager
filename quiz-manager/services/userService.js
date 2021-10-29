var mysql = require('mysql2');
var db = require('../db');
var bcrypt = require('bcrypt');

// turn password into a hash password
function hashPassword(password) {
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds);
}

// inserting a new user into the users database
function createUser(user, onSuccess) {
    var sql = "INSERT INTO `quizmanager`.`users` (`id`, `username`, `password`, `role`) VALUES (?, ?, ?, ?)";
    var inserts = [user.id, user.username, hashPassword(user.password), user.role];
    var preparedSql = mysql.format(sql, inserts);
    db.query(preparedSql, onSuccess);
}

function validateLogin(user, onSuccess) {
    var sql = "SELECT * FROM `users` WHERE username = ?";
    var inserts = [user.username];
    var preparedSql = mysql.format(sql, inserts);

    function onFindingUser(result){
        if (!result || result.length != 1) {
            onSuccess(false, null);
            return;
        }
        var passwordCorrect = bcrypt.compareSync(user.password, result[0].password);

        onSuccess(passwordCorrect, result[0]);
    }
    db.query(preparedSql, onFindingUser);
}

function findUser(username, onSuccess) {
    var sql = "SELECT * FROM `users` WHERE username = ?";
    var inserts = [username];
    var preparedSql = mysql.format(sql, inserts);

    function onResult(result) {
        console.log('This is the result', result)
        if (result && result.length > 0) {
            onSuccess(null, result[0])
        }

        else onSuccess("No such user", null)
    };
    db.query(preparedSql, onResult);
    console.log('End of findUser')
}


module.exports.createUser = createUser;
module.exports.validateLogin = validateLogin;
module.exports.findUser = findUser;