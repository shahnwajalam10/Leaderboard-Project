import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-gray-100 py-4 shadow-lg border-b-15 border-gray-600 rounded-lg">
      <div className="container mx-auto flex justify-center items-center px-6 max-w-screen-lg">
        {/* Navigation Links */}
        <div className="flex space-x-8">
          <a
            href="/"
            className="text-lg font-medium hover:text-gray-400 transform hover:scale-105 hover:rotate-x-12 hover:rotate-y-12 transition-transform duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="/all-stocks"
            className="text-lg font-medium hover:text-gray-400 transform hover:scale-105 hover:rotate-x-12 hover:rotate-y-12 transition-transform duration-300 ease-in-out"
          >
            All Stocks
          </a>
          <a
            href="/options"
            className="text-lg font-medium hover:text-gray-400 transform hover:scale-105 hover:rotate-x-12 hover:rotate-y-12 transition-transform duration-300 ease-in-out"
          >
            Options
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
