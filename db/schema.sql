DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE IF NOT EXISTS burgers(
-- item_id INT AUTO_INCREMENT PRIMARY KEY,
id int AUTO_INCREMENT,
primary key(item_id),
burger_name varchar(50),
devoured BOOLEAN DEFAULT FALSE
);

