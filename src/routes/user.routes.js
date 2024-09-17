import express from 'express';
import { getAllUsers, updateUser, deleteUser, register } from '../controller/userData.controller.js';

const router = express.Router();

// Register User Route
router.post('/register', register);

// Get All Users Route
router.get('/getuser', getAllUsers);

// Update User Route
router.put('/update/:id', updateUser);

// Delete User Route
router.delete('/delete/:id', deleteUser);

export default router;
