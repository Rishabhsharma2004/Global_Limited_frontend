// src/components/Navbar.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">User Management</h1>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <a href="/users" className="text-gray-300 hover:text-white">Users</a>
          <a href="/settings" className="text-gray-300 hover:text-white">Settings</a>
          <button onClick={logout} className="text-red-500 hover:text-red-400">Logout</button>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Hamburger Icon for Mobile */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
