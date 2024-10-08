// src/pages/EditUserPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EditUser from '../components/EditUser';
import { updateUser } from '../Utils/api';

const EditUserPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;

  const handleUpdate = async (id, updatedData) => {
    await updateUser(id, updatedData);
    navigate('/users');
  };

  return (
    <div>
      <EditUser user={user} onUpdate={handleUpdate} />
    </div>
  );
};

export default EditUserPage;
