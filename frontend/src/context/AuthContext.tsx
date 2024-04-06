import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';

interface User {
    username: string;
    email: string;
    token: string; 
  }


  interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
  }

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_BASE_URL = 'http://localhost:4000/api/users';


export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
  
    useEffect(() => {
      // Initialize user state from session storage or cookie
      const storedUser = localStorage.getItem('authUser');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);
  
    const login = async (email: string, password: string) => {
      const { data } = await axios.post(`${API_BASE_URL}/login`, { email, password });
      const userData: User = {
        username: data.username,
        email: data.email,
        token: data.token,
      };
      setUser(userData);
      localStorage.setItem('authUser', JSON.stringify(userData));
    };
  
    const logout = () => {
      setUser(null);
      localStorage.removeItem('authUser');
    };
  
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };