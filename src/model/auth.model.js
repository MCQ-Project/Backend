// src/model/auth.model.js
import mongoose from 'mongoose';

const quizAttemptedSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  quizResult: { type: Array, required: true },
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  points: { type: Number, default: 0 },
  quizAttempted: [quizAttemptedSchema],
});

const User = mongoose.model('User', userSchema);

export default User;
