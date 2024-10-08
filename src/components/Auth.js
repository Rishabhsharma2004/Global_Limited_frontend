// src/components/Auth.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Auth = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error
    try {
      await login(email, password);
      // Redirect or perform actions after successful login, e.g., redirect to user list
      window.location.href = '/users'; // or use a routing method
    } catch (err) {
      setError(err.message); // Set error message from AuthContext
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
        <h2 className="mb-4 text-xl font-bold">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
