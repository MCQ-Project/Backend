import express from 'express';
import { 
    createQuizResult, 
    getQuizResults, 
    getQuizResultById, 
    deleteQuizResultById 
} from '../controller/quizResult.controller.js';

const router = express.Router();

// Create a new quiz result
router.post('/', createQuizResult);

// Get all quiz results
router.get('/', getQuizResults);

// Get a quiz result by ID
router.get('/:id', getQuizResultById);

// Delete a quiz result by ID
router.delete('/:id', deleteQuizResultById);

export default router;
