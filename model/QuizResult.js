import mongoose from 'mongoose';

const quizResultSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Engineering', 'License', 'EngineeringEntrance'] // Added License and EngineeringEntrance
    },
    attemptedQuestions: {
        type: Number,
        required: true
    },
    correctAnswers: {
        type: Number,
        required: true
    },
    percentage: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    feedback: {
        type: String,
        required: true
    }
}, {
    timestamps: true // This will automatically add createdAt and updatedAt fields
});

const QuizResult = mongoose.model('QuizResult', quizResultSchema);

export default QuizResult;
