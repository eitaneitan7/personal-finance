import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcryptjs';

interface Uuser extends Document {
    username: string;
    password: string;
    email: string;
    comparePassword: (candidatePassword: string) => Promise<boolean>;
  }

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

// before inserting document check for pass encryption
userSchema.pre<Uuser>('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 8);
  next();
});


// compare userpass with DB pass
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model<Uuser>('User', userSchema);

export default User;
