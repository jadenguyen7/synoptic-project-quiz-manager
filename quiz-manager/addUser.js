var db = require ('./db');
var userService = require("./services/userService");

// full access to view, change and delete questions, answers and quizzes
edit_user = {
  username: "edit_user",
  password: "edit123",
  role: "edit",
};

// can view questions and answers but can not change
view_user = {
  username: "view_user",
  password: "view123",
  role: "view",
};

// can only read questions
restricted_user = {
  username: "restricted_user",
  password: "restricted123",
  role: "restricted",
};
  
onSuccess = () => {};
userService.createUser(edit_user, onSuccess);
userService.createUser(view_user, onSuccess);
userService.createUser(restricted_user, onSuccess);

db.end();