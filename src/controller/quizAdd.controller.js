import Quiz from '../model/quiz.model.js';

// Add Quiz Function
export const addQuiz = async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json({ message: 'Quiz added successfully', quiz });
  } catch (error) {
    console.error('Error adding quiz:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Display Quiz Function
export const displayQuiz = async (req, res) => {
  try {
    const quizzes = await Quiz.find().exec();
    res.status(200).json(quizzes);
  } catch (error) {
    console.error('Error displaying quizzes:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Quiz Function
export const updateQuiz = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedQuiz = await Quiz.findByIdAndUpdate(id, updateData, { new: true }).exec();
    if (!updatedQuiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.status(200).json({ message: 'Quiz updated successfully', quiz: updatedQuiz });
  } catch (error) {
    console.error('Error updating quiz:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete Quiz Function
export const deleteQuiz = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedQuiz = await Quiz.findByIdAndDelete(id).exec();
    if (!deletedQuiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.status(200).json({ message: 'Quiz deleted successfully' });
  } catch (error) {
    console.error('Error deleting quiz:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
