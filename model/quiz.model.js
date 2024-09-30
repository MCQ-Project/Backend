import mongoose from 'mongoose';

// Define the schema for the quiz
const quizSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['License', 'EngineeringEntrance'], // You can add more categories if needed
  },
  title: {
    type: String,
    required: true, // For the title of the question
  },
  question: {
    type: String,
    required: true, // The main question
  },
  answers: [{
    text: {
      type: String,
      required: true, // The text of the answer option
    },
    correct: {
      type: Boolean,
      required: true, // Whether this answer is correct
    },
  }],
  explanationID: {
    type: mongoose.Schema.Types.ObjectId, // Can be a reference to an explanation document
    ref: 'Explanation', // Assuming you have an 'Explanation' model
    required: false, // Optional if the explanation is not always provided
  },
  yearID: {
    type: Number, // You can use ObjectId if this refers to another collection
    required: true, // The year this question is associated with
  }
}, { timestamps: true });

// Create the Quiz model from the schema
const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;
