import express from 'express';
import { createTransaction, getTransactions, updateTransaction, deleteTransaction } from '../controllers/transactionController';

const router = express.Router();

// Route to get all transactions for a user
router.get('/', getTransactions);

// Route to create a new transaction
router.post('/', createTransaction);

// Route to update a transaction by its ID
router.patch('/:id', updateTransaction);

// Route to delete a transaction by its ID
router.delete('/:id', deleteTransaction);

export default router;
