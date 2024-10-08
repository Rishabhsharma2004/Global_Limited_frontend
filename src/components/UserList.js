// src/components/UserList.js
import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default UserList;
