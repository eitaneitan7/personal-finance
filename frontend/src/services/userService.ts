// services/userService.ts
import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/users/login`, { email, password });
  return response.data;
};
