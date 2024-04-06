import mongoose from 'mongoose';

// explain enum in mongoose, is it the same as TS? explain ref: 'User'
const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['income', 'expense'], required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  description: String,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
