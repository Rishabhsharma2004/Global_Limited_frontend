// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import UserListPage from './pages/UserListPage';
import EditUserPage from './pages/EditUserPage';
import Footer from '../src/components/footer'; // Ensure the import matches your file structure
import HomePage from '../src/components/home';
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Routes>
          <Route path='/' element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/users" element={<UserListPage />} />
            <Route path="/edit/:id" element={<EditUserPage />} />
          </Routes>
          <Footer /> {/* This ensures the footer is displayed on all pages */}
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
