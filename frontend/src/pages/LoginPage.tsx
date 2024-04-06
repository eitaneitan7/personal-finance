// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const LoginPage:React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(email, password);
      //TODO fix the toast not working
      toast.success('Welcome back!');
      navigate('/');
    } catch (error: any) {
      // Assuming the error object has a response property with a data object containing the message
      const errorMessage = error.response?.data?.message || 'Failed to log in. Please check your credentials.';
      toast.error(errorMessage);
    }
  };
  
  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full max-w-xs mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered w-full max-w-xs mb-4"
        />
        <button type="submit" className="btn btn-primary w-full max-w-xs">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
