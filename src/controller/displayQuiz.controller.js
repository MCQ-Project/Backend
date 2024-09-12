import express from 'express';
import Postquiz from '../model/quizdata.model.js';

const router = express.Router();

// Get all quizzes
router.get('/', async (req, res) => {
    try {
        const postQuizData = await Postquiz.find().lean().exec();
        res.status(200).json(postQuizData);
    } catch (err) {
        console.error('Error fetching quiz data:', err);
        res.status(500).json({ message: err.message });
    }
});

export default router;
