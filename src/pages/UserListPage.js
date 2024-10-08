// src/pages/UserListPage.js
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { fetchUsers, deleteUser } from '../Utils/api';
import UserList from '../components/UserList';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const UserListPage = () => {
  const { token } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      const getUsers = async () => {
        const usersData = await fetchUsers(currentPage);
        setUsers(usersData);
      };
      getUsers();
    }
  }, [token, currentPage, navigate]);

  const handleEdit = (user) => {
    navigate(`/edit/${user.id}`, { state: user });
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <Navbar />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
      <div className="flex justify-between mt-4">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} className="p-2 bg-gray-300 rounded">Previous</button>
        <button onClick={() => setCurrentPage((prev) => prev + 1)} className="p-2 bg-gray-300 rounded">Next</button>
      </div>
    </div>
  );
};

export default UserListPage;
