-- Create initial burgers database
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

-- Use the db
USE burgers_db;

-- Create a new table to hold the id, burger_name, and devoured state. This defaults as false. 
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured BOOLEAN default FALSE,
	PRIMARY KEY (id)
);