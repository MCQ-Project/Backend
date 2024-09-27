// src/index.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './configs/db.js';
import authRoutes from './routes/auth.routes.js';
import quizRoutes from './routes/quiz.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();
const PORT = process.env.PORT || 3756; // Change to an unused port like 3756


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.use('/auth', authRoutes); //tested
app.use('/admin', quizRoutes);
app.use('/quiz', quizRoutes); // Display and add quiz
app.use('/user', userRoutes);  //tested
app.use('/userResult', userRoutes);

app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
});
