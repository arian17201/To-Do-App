// backend/server.js

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// --- Database Connection ---
// Environment variables are used for configuration.
// Docker Compose will provide these values.
const db = mysql.createPool({
    host: process.env.MYSQL_HOST || 'db',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();

// --- API Routes ---

/**
 * @route   GET /tasks
 * @desc    Get all tasks from the database
 */
app.get('/tasks', async (req, res) => {
    console.log("Received request to fetch tasks.");
    try {
        const [rows] = await db.query('SELECT * FROM tasks ORDER BY id DESC');
        console.log("Successfully fetched tasks.");
        res.status(200).json(rows);
    } catch (err) {
        console.error("Error fetching tasks:", err);
        res.status(500).json({ error: 'Database query failed' });
    }
});

/**
 * @route   POST /tasks
 * @desc    Add a new task to the database
 */
app.post('/tasks', async (req, res) => {
    const { task } = req.body;
    console.log(`Received request to add task: "${task}"`);

    if (!task || task.trim() === '') {
        console.error("Validation failed: Task cannot be empty.");
        return res.status(400).json({ error: 'Task content cannot be empty' });
    }

    try {
        const [result] = await db.query('INSERT INTO tasks (task) VALUES (?)', [task]);
        console.log(`Successfully added task with ID: ${result.insertId}`);
        res.status(201).json({ id: result.insertId, task });
    } catch (err) {
        console.error("Error adding task:", err);
        res.status(500).json({ error: 'Failed to insert task into database' });
    }
});

// --- Server Startup ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Backend service listening on port ${PORT}`);
});
