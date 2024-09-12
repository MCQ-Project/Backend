// src/routes/auth.routes.js
import express from 'express';
import { login, register } from '../controller/auth.controller.js';

const router = express.Router();

// Login Route
router.post('/login', login);

// Register Route
router.post('/register', register);

export default router;
