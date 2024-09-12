// src/controller/auth.controller.js
import User from '../model/auth.model.js';

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).exec();
        if (user) {
            if (password === user.password) {
                console.log("Login successful");
                res.status(200).json({ message: "Login Successful", user });
            } else {
                res.status(401).json({ message: "Invalid Password" });
            }
        } else {
            res.status(404).json({ message: "User Not Registered" });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: "Server Error" });
    }
};

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email }).exec();
        if (existingUser) {
            res.status(400).json({ message: 'User Already Registered' });
        } else {
            const user = new User({ name, email, password });
            await user.save();
            res.status(201).json({ message: 'Successfully Registered' });
        }
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};
