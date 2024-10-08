// src/pages/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to User Management</h1>
          <p className="text-xl mb-6">
            A powerful tool to manage your users efficiently.
          </p>
          <a href="/users" className="bg-white text-blue-600 py-2 px-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-200">
            Get Started
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-semibold mb-2">User Profiles</h3>
            <p className="text-gray-600">
              Create and manage detailed user profiles with ease.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
            <p className="text-gray-600">
              Get real-time updates on user activities and changes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-semibold mb-2">Secure Authentication</h3>
            <p className="text-gray-600">
              Ensure user security with robust authentication methods.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-6">Become a part of our growing user management community and start managing your users like a pro!</p>
          <a href="/signup" className="bg-white text-blue-600 py-2 px-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-200">
            Sign Up Now
          </a>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
};

export default HomePage;
