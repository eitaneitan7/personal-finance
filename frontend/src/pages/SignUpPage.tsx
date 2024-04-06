import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/users/register', { username, email, password });
      toast.success('Account created successfully!');
      navigate('/login');
    } catch (error) {
      toast.error('Failed to create an account. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-bold mb-2">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-bold mb-2">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input input-bordered w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
