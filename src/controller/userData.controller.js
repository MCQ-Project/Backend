import User from '../model/auth.model.js';

// Get All Users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).lean().exec();
        res.status(200).json(users);
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Register User
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

// Update User
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        ).exec();
        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Update user error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete User
export const deleteUser = async (req, res) => {
    try {
        const result = await User.deleteOne({ _id: req.params.id }).exec();
        if (result.deletedCount > 0) {
            res.status(200).send('User deleted');
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Delete user error:', error);
        res.status(500).send('An error occurred');
    }
};
