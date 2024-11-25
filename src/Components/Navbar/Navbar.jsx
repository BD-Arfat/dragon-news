import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Left Side: Empty */}
          <div></div>

          {/* Middle: Menu Items */}
          <div className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </div>

          {/* Right Side: Profile Image and Button */}
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
