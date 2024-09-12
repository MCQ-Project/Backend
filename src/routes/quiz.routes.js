import express from 'express';
import { addQuiz, displayQuiz, updateQuiz, deleteQuiz } from '../controller/quizAdd.controller.js';

const router = express.Router();

// Route to add a quiz
router.post('/add', addQuiz);

// Route to display quizzes
router.get('/display', displayQuiz);

// Route to update a quiz
router.put('/update/:id', updateQuiz);

// Route to delete a quiz
router.delete('/delete/:id', deleteQuiz);

export default router;
