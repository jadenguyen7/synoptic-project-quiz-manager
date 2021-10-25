DROP TABLE IF EXISTS `quizmanager`.`users`;
CREATE TABLE `quizmanager`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `role` VARCHAR(45) NOT NULL DEFAULT 'restricted',
  PRIMARY KEY (`id`);
--   UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);