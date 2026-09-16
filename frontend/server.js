// frontend/server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 80; // The port inside the container

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Send the main HTML file for any other request
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Frontend Express server listening on port ${PORT}`);
});
