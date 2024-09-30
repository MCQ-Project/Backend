import QuizResult from '../model/QuizResult.js';

// Create a new quiz result
export const createQuizResult = async (req, res) => {
    try {
        const { userName, category, attemptedQuestions, correctAnswers, feedback } = req.body;

        // Calculate percentage
        const percentage = ((correctAnswers / attemptedQuestions) * 100).toFixed(2); // Calculate percentage
        
        // Create new quiz result
        const newQuizResult = new QuizResult({
            userName,
            category,
            attemptedQuestions,
            correctAnswers,
            percentage: Number(percentage), // Convert percentage to Number
            feedback
        });

        const savedQuizResult = await newQuizResult.save();
        res.status(201).json(savedQuizResult);
    } catch (error) {
        res.status(400).json({ error: error.message }); // Respond with 400 for validation errors
    }
};

// Get all quiz results
export const getQuizResults = async (req, res) => {
    try {
        const quizResults = await QuizResult.find();
        res.status(200).json(quizResults);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single quiz result by ID
export const getQuizResultById = async (req, res) => {
    try {
        const { id } = req.params;
        const quizResult = await QuizResult.findById(id);

        if (!quizResult) {
            return res.status(404).json({ message: 'Quiz result not found' });
        }

        res.status(200).json(quizResult);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a quiz result by ID
export const deleteQuizResultById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedQuizResult = await QuizResult.findByIdAndDelete(id);

        if (!deletedQuizResult) {
            return res.status(404).json({ message: 'Quiz result not found' });
        }

        res.status(200).json({ message: 'Quiz result deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
