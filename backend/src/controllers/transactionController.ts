import { Request, Response } from 'express';
import Transaction from '../models/Transaction';
import { IUser } from '../types/user';


export const getTransactions = async (req: Request & { user?: IUser }, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).send('User not authenticated');
    }
    const transactions = await Transaction.find({ user: req.user._id });
    res.json(transactions);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const createTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!transaction) {
      return res.status(404).send();
    }
    res.json(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) {
      return res.status(404).send();
    }
    res.send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
};
