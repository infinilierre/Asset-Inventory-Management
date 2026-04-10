CREATE DATABASE IF NOT EXISTS inventory_db;
USE inventory_db;

CREATE TABLE assets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    quantity INT DEFAULT 0,
    status ENUM('Available', 'In Use', 'Maintenance') DEFAULT 'Available'
);

INSERT INTO assets (item_name, category, quantity, status) 
VALUES ('MacBook Pro', 'Hardware', 10, 'Available'), ('Dell Monitor', 'Hardware', 20, 'Available');


