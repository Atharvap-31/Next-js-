import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#blog" className="hover:text-blue-500">Blog</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
