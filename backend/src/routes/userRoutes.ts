import express from 'express';
import { register, login } from '../controllers/userController';

const router = express.Router();

router.post('/register', register); // Register a new user
router.post('/login', login); // Authenticate a user

export default router;
