// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Rishabh. All rights reserved.</p>
        <div className="space-x-4">
          <a href="https://example.com/about" className="text-white hover:underline">
            About Us
          </a>
          <a href="https://example.com/contact" className="text-white hover:underline">
            Contact
          </a>
          {/* Use a button if no valid href */}
          <button onClick={() => alert('Redirecting to help')} className="text-white hover:underline">
            Help
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
