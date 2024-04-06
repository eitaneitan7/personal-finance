import { Request, Response } from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send({ message: "Authentication failed" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET!, { expiresIn: "24h" });
    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send(error);
  }
};
