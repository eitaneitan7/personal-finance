import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Route imports
// import userRoutes from './routes/userRoutes';

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
// app.use('/api/users', userRoutes);

export default app;
