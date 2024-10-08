// src/utils/api.js
import axios from 'axios';

const API_URL = 'https://reqres.in/api';

export const fetchUsers = async (page) => {
  const response = await axios.get(`${API_URL}/users?page=${page}`);
  return response.data.data;
};

export const updateUser = async (id, data) => {
  await axios.put(`${API_URL}/users/${id}`, data);
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/users/${id}`);
};
