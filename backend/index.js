const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

// Mock Data
const courses = [
  { id: 'CS101', name: 'Intro to CS', credits: 4, grade: 'A', gradePoints: 9 },
  { id: 'MA103', name: 'Calculus', credits: 4, grade: 'B+', gradePoints: 8 },
  { id: 'PH102', name: 'Physics II', credits: 3, grade: 'A-', gradePoints: 8.5 },
  // ... add more
];
const assignments = [
  { id: 'A1', courseId: 'CS101', title: 'Programming Lab 1', status: 'Completed', dueDate: '2023-09-22' },
  { id: 'A2', courseId: 'MA103', title: 'Calculus Quiz', status: 'Ongoing', dueDate: '2023-12-10' },
  // ... add more
];

// Endpoints
app.get('/api/courses', (req, res) => res.json(courses));
app.get('/api/assignments', (req, res) => res.json(assignments));

// Start
app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
