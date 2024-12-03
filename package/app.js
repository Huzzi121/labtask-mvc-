// app.js (Main Entry Point)
const express = require('express');
const bodyParser = require('body-parser');
const StudentController = require('./controllers/StudentController');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/student', StudentController.getStudentDetails);
app.post('/student', StudentController.setStudentDetails);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});