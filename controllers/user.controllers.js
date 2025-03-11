import asyncHandler from '../utils/asyncHandler.js';

const regUser = asyncHandler(async (req, res) => {
    // code to register user

    res.status(201).json({ message: 'User registered successfully' });
    });

const loginUser = asyncHandler(async (req, res) => {
    // code to login user
    
    });

export { regUser, loginUser };