import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaUser, FaList } from "react-icons/fa"; // Importing React Icons

const Navbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("home"); // Active button state
  const userMenuRef = useRef(null); // Reference for the user menu
  const userIconRef = useRef(null); // Reference for the user icon button

  // Toggle the user menu
  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  // Close the user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target) &&
        userIconRef.current &&
        !userIconRef.current.contains(event.target)
      ) {
        setIsUserMenuOpen(false); // Close the menu if clicking outside
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    alert("Logged out");
  };

  // Function to handle button click
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <nav className="bg-blue-700 p-4 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-white text-xl font-bold">TravelApp</div>

        {/* Desktop Navbar */}

        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`text-white transition-all duration-300 px-4 py-2 rounded-lg ${
              activeButton === "home" ? "bg-blue-500 " : "hover:bg-blue-500"
            }`}
            onClick={() => handleButtonClick("home")}
          >
            Home
          </Link>
          <Link
            to="/travel_list"
            className={`text-white transition-all duration-300 px-4 py-2 rounded-lg ${
              activeButton === "travel_list" ? "bg-blue-500 " : "hover:bg-blue-500"
            }`}
            onClick={() => handleButtonClick("travel_list")}
          >
            Travel List
          </Link>
          <Link
            to="/about"
            className={`text-white transition-all duration-300 px-4 py-2 rounded-lg ${
              activeButton === "about" ? "bg-blue-500 " : "hover:bg-blue-500"
            }`}
            onClick={() => handleButtonClick("about")}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-white transition-all duration-300 px-4 py-2 rounded-lg ${
              activeButton === "contact" ? "bg-blue-500 " : "hover:bg-blue-500"
            }`}
            onClick={() => handleButtonClick("contact")}
          >
            Contact
          </Link>
        </div>
        {/* User Icon and Menu */}
        <div className="relative hidden md:flex">
          <button
            ref={userIconRef}
            onClick={handleUserMenuToggle}
            className="text-white hover:bg-blue-500 p-3 rounded-full transition-all duration-300"
          >
            <FaUser />
          </button>
          {isUserMenuOpen && (
            <div
              ref={userMenuRef}
              className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-48"
            >
              <div className="px-4 py-2 text-gray-700">User Details</div>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-red-600 hover:bg-gray-200 w-full text-left"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Navbar - Always visible on mobile */}
        <div className="md:hidden flex items-center space-x-4 w-full justify-between">
          <button
            ref={userIconRef}
            onClick={handleUserMenuToggle}
            className="text-white ml-auto"
          >
            <FaUser /> {/* React Icon */}
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-blue-600 p-2 flex justify-around items-center space-x-4">
        <Link
          to="/"
          className={`text-white flex flex-col items-center transition-all  duration-300 ${
            activeButton === "home" ? "bg-blue-500 " : "hover:bg-blue-500"
          }`}
          onClick={() => handleButtonClick("home")}
        >
          <FaHome className="text-lg" />
          <span>Home</span>
        </Link>
        <Link
          to="/about"
          className={`text-white flex flex-col items-center transition-all duration-300 ${
            activeButton === "about" ? "bg-blue-500 " : "hover:bg-blue-500"
          }`}
          onClick={() => handleButtonClick("about")}
        >
          <FaInfoCircle className="text-lg" />
          <span>About</span>
        </Link>
        <Link
            to="/travel_list"
            className={`text-white flex flex-col items-center transition-all duration-300 ${
              activeButton === "travel_list" ? "bg-blue-500 " : "hover:bg-blue-500"
            }`}
            onClick={() => handleButtonClick("travel_list")}
          >
           <FaList className="mr-2" /> 
            <span>Travel List </span>
          </Link>
        <Link
          to="/contact"
          className={`text-white flex flex-col items-center transition-all duration-300 ${
            activeButton === "contact" ? "bg-blue-500 " : "hover:bg-blue-500"
          }`}
          onClick={() => handleButtonClick("contact")}
        >
          <FaPhoneAlt className="text-lg" />
          <span>Contact</span>
        </Link>
      </div>

      {/* User Menu on Mobile */}
      {isUserMenuOpen && (
        <div
          ref={userMenuRef}
          className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50"
        >
          <div className="px-4 py-2 text-gray-700">User Details</div>
          <button
            onClick={handleLogout}
            className="block px-4 py-2 text-red-600 hover:bg-gray-200 w-full text-left"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
