/*DROP DATABASE IF EXISTS streaming_db;
CREATE DATABASE IF NOT EXISTS streaming_db;
USE streaming_db;

DROP TABLE IF EXISTS `user`;

CREATE TABLE IF NOT EXISTS `user` 
(
    id              INT PRIMARY KEY AUTO_INCREMENT,
    username        VARCHAR(25) UNIQUE NOT NULL,
    password        CHAR(60) NOT NULL,
    first_name      VARCHAR(50) NOT NULL,
    last_name       VARCHAR(50) NOT NULL,
    email           VARCHAR(100) UNIQUE NOT NULL,
    role            ENUM('Admin', 'SuperUser') DEFAULT 'SuperUser',
    age             INT(11) DEFAULT 0
);