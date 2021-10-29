# synoptic-project-quiz-manager

## Quiz Manager

### Getting Started
This application is a JavaScript app / API using Node, Express.js and Handlebars.

This README is based on the assumption that you are using a mac computer as that is what I used for the project.

Navigate in your terminal to the directory where you want to clone the repository. 

`https://github.com/jadenguyen7/synoptic-project-quiz-manager.git`

Assuming you have Node.js and NPM installed, in that location in Terminal run:

`npm install`

### IDE
I have used Visual Studio Code as my IDE but you can use the IDE you feel most comfortable with.

### Port

This app is set to run on localhost 3000

### Database Setup
Download the free community edition of MySQL from:
https://dev.mysql.com/downloads/mysql/

If you don't already have MySQL Workbench installed on your machine please install from:
https://dev.mysql.com/downloads/workbench/

Open SQL workbench and ensure you can create a new database (choose or add an existing connection). Once you have a connection, add the username and password credentials to the `.env` file.

```
MYSQL_USER="<username>"
MYSQL_PASSWORD="<password>"
AUTH_SECRET="<secret>" // secret for login security
```
In the terminal run `node db` to check that it has connected to the database.

On MySQL Workbench, click on the database icon - “Create a new schema” at the top and make the schema name `quizmanager`.

### Add quiz data
In the IDE terminal log into mysql using the command: `mysql -u root -p` and type in your mysql password.

Then run the script in `appScripts.sql` following the steps.

Once this is complete exit the database with `\q`.

### Add users
In the IDE terminal in the route repository, run `node addUser.js`.

This will create 3 users (restricted, view and edit) with encrypted passwords that you can use to log into the application.

### Run Project
In the terminal, navigate to where your project lives and run this command to install the required dependencies:

`npm install`