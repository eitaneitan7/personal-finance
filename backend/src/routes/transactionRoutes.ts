
import express from 'express';
import { getTransactions, createTransaction, updateTransaction, deleteTransaction } from '../controllers/transactionController';

const router = express.Router();

router.get('/', getTransactions);
router.post('/', createTransaction); 
router.patch('/:id', updateTransaction); 
router.delete('/:id', deleteTransaction);

export default router;
