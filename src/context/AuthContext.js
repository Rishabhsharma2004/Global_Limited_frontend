// src/context/AuthContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = async (email, password) => {
    try {
      const response = await axios.post('https://reqres.in/api/login', { email, password });
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      return response.data; // Return the response for further handling if needed
    } catch (error) {
      throw new Error('Login failed! Please check your credentials.'); // Throw error to catch in the component
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
