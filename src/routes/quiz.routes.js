// src/routes/quiz.routes.js
import express from 'express';
import {
  addQuiz,
  addQuizzes,
  displayQuiz,
  showQuizById,
  updateQuiz,
  deleteQuiz,
} from '../controller/quizAdd.controller.js';

const router = express.Router();

// Route to add a single quiz
router.post('/add', addQuiz);

// Route to bulk add quizzes
router.post('/bulk', addQuizzes);

// Route to display all quizzes
router.get('/display', displayQuiz);

// Route to show a quiz by ID
router.get('/:id', showQuizById);

// Route to update a quiz
router.put('/update/:id', updateQuiz);

// Route to delete a quiz
router.delete('/delete/:id', deleteQuiz);

export default router;
