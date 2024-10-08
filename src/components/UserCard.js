// src/components/UserCard.js
import React from 'react';

const UserCard = ({ user ,onEdit, onDelete}) => {
  return (
    <div className="relative mt-5 m-5 grid h-[30rem] max-w-lg flex-col items-end justify-center overflow-hidden rounded-lg bg-white">
      <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-center"
           style={{ backgroundImage: `url(${user.avatar})` }}>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div className="relative text-center p-6 md:p-12">
        <h2 className="mb-6 text-3xl font-medium text-white">{`${user.first_name} ${user.last_name}`}</h2>
        <h5 className="mb-4 text-xl font-semibold text-slate-300">{user.email}</h5>
        <img
          alt={`${user.first_name} ${user.last_name}`}
          src={user.avatar}
          className="relative inline-block h-32 w-32 rounded-full border border-white"
        />
         <div className="flex justify-center space-x-8 mt-5">
          <button 
            onClick={() => onEdit(user)} 
            className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg"
          >
            Edit
          </button>
          <button 
            onClick={() => onDelete(user.id)} 
            className="px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
