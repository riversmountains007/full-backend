import asyncHandler from '../utils/ayncHandler.js';

const regUser = asyncHandler(async (req, res) => {
    // code to register user

    res.status(201).json({ message: 'User registered successfully' });
    });



export { regUser };