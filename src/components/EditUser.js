// src/components/EditUser.js
import React, { useState, useEffect } from 'react';

const EditUser = ({ user, onUpdate }) => {
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdate(user.id, { first_name: firstName, last_name: lastName, email });
  };

  useEffect(() => {
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setEmail(user.email);
  }, [user]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleUpdate} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Edit User</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="first-name">First Name</label>
          <input
            id="first-name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name"
            className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="last-name">Last Name</label>
          <input
            id="last-name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name"
            className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button 
          type="submit" 
          className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition duration-200 ease-in-out"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
