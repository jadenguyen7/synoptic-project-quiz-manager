DROP TABLE IF EXISTS `quizmanager`.`users`;
CREATE TABLE `quizmanager`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `role` VARCHAR(45) NOT NULL DEFAULT 'restricted',
  PRIMARY KEY (`id`));

DROP TABLE IF EXISTS `quizmanager`.`quizzes`;
CREATE TABLE `quizmanager`.`quizzes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

DROP TABLE IF EXISTS `quizmanager`.`questions`;
CREATE TABLE `quizmanager`.`questions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `question` VARCHAR(255) NOT NULL,
  `quizid` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`quizid`) REFERENCES `quizmanager`.`quizzes` (`id`));

DROP TABLE IF EXISTS `quizmanager`.`answers`;
CREATE TABLE `quizmanager`.`answers` (
  `id` INT NOT NULL,
  `answer` VARCHAR(255) NOT NULL,
  `correct` BOOLEAN,
  `questionid` INT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`questionid`) REFERENCES `quizmanager`.`questions` (`id`) ON DELETE CASCADE);
  
  CREATE UNIQUE INDEX `answer_idx` ON `quizmanager`.`answers` (`answer`(1));