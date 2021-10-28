-- IF YOU HAVE ALREADY RAN SCRIPT BEFORE, RUN THE DROP TABLE COMMANDS FIRST

DROP TABLE IF EXISTS `quizmanager`.`answers`;
DROP TABLE IF EXISTS `quizmanager`.`questions`;
DROP TABLE IF EXISTS `quizmanager`.`quizzes`;
DROP TABLE IF EXISTS `quizmanager`.`users`;

-- RUN CREATE TABLE COMMANDS NEXT

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


CREATE TABLE `quizmanager`.`questions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `question` VARCHAR(255) NOT NULL,
  `quizid` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`quizid`) REFERENCES `quizmanager`.`quizzes` (`id`));


CREATE TABLE `quizmanager`.`answers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `answer` VARCHAR(255) NOT NULL,
  `correct` VARCHAR(255) NOT NULL,
  `questionid` INT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`questionid`) REFERENCES `quizmanager`.`questions` (`id`) ON DELETE CASCADE);

-- RUN INSERT COMMANDS LAST

INSERT INTO `quizmanager`.`quizzes`
(`id`,
`title`)
VALUES
(1, "Maths"),
(2, "Science"),
(3, "History"),
(4, "Art");

INSERT INTO `quizmanager`.`questions`
(`id`,
`question`,
`quizid`)
VALUES
(1, "What is 57 x 24?", 1),
(2, "What is 434 / 7?", 1),
(3, "What is 183 x 17 + 631?", 1),
(4, "Out of the options below, which one is NOT considered a planet?", 2),
(5, "On the periodic table, which element is H?", 2),
(6, "What body parts never stops growing?", 2),
(7, "When was the Great Fire of London?", 3),
(8, "When was the industrial revolution?", 3),
(9, "Who invented the mobile phone?", 3),
(10, "Who painted the Mona Lisa?", 4),
(11, "When was Banksy's first known large wall mural discovered?", 4),
(12, "What country has the most art museums?", 4);

INSERT INTO `quizmanager`.`answers`
(`id`,
`answer`,
`correct`,
`questionid`)
VALUES
(1, "A. 1368", "true", 1),
(2, "B. 1376", "false", 1),
(3, "C. 1387", "false", 1),
(4, "A. 64", "false", 2),
(5, "B. 62", "true", 2),
(6, "C. 66", "false", 2),
(7, "A. 3742", "true", 3),
(8, "B. 3742", "false", 3),
(9, "C. 3742", "false", 3),
(10, "A. Mars", "false", 4),
(11, "B. Venus", "false", 4),
(12, "C. Pluto", "true", 4),
(13, "A. Hydrogen", "true", 5),
(14, "B. Helium", "false", 5),
(15, "C. Hassium", "false", 5),
(16, "A. Hands and feet", "false", 6),
(17, "B. Fingers and nose", "false", 6),
(18, "C. Ears and nose", "true", 6),
(19, "A. August 1667", "false", 7),
(20, "B. September 1666", "true", 7),
(21, "C. June 1666", "false", 7),
(22, "A. 1770 – 1830", "false", 8),
(23, "B. 1765 – 1845", "false", 8),
(24, "C. 1760 – 1840", "true", 8),
(25, "A. Karl Benz", "false", 9),
(26, "B. Martin Cooper", "true", 9),
(27, "C. Bob Kahn", "false", 9),
(28, "A. Leonardo da Vinci", "true", 10),
(29, "B. Vincent Van Gogh", "false", 10),
(30, "C. Salvador Dali", "false", 10),
(31, "A. 1992", "false", 11),
(32, "B. 1995", "false", 11),
(33, "C. 1997", "true", 11),
(34, "A. Germany", "false", 12),
(35, "B. U.S", "true", 12),
(36, "C. Japan", "false", 12);