-- db/init.sql

-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS todos;

-- Use the created database
USE todos;

-- Create the tasks table
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Insert some sample data for testing
INSERT INTO tasks (task) VALUES ('Set up Docker environment');
INSERT INTO tasks (task) VALUES ('Build the backend service');
INSERT INTO tasks (task) VALUES ('Create the frontend UI');
