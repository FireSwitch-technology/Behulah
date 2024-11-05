// Importing React library and useState hook for managing component state
import React, { useState } from "react";

// Importing Link from react-router-dom for navigation
import { Link } from "react-router-dom";

// Importing logo image asset
import logo from "../assets/logoo.svg";

// Importing FaBars icon from react-icons for the menu icon
import { FaBars } from "react-icons/fa"; // Importing FaSearch for the search icon

// Defining Navbar functional component
export const Navbar = () => {
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 mx-auto md:mx-20">
      <div className="container flex items-center justify-between mx-auto">
        {/* Left: Menu Icon and Logo */}
        <div className="flex items-center">
          {/* Menu Icon for small screens */}
          <button onClick={toggleMenu} className="text-white mr-4 lg:hidden">
            <FaBars className="w-6 h-6 text-[rgba(7,98,67,1)]" />
          </button>

          {/* Logo */}
          <div>
            <img src={logo} alt="" />
          </div>
        </div>

        {/* Button for "Join us for worship" on small screens */}
        <div className="flex lg:hidden items-center space-x-4">
          <Link className="text-[12px] sm:text-[16px] px-4 py-2 bg-[rgba(7,98,67,1)] text-white rounded">
            Join us for worship
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-[16px] font-normal">
          <li>
            <Link to="/" className="relative group">
              Home
              {/* Hover underline effect */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform transition-all duration-300 ease-out translate-y-0 group-hover:bg-[rgba(7,98,67,1)] group-hover:translate-y-1"></span>
            </Link>
          </li>
          <li>
            <Link to="/services" className="relative group">
              Our Services
              {/* Hover underline effect */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform transition-all duration-300 ease-out translate-y-0 group-hover:bg-[rgba(7,98,67,1)] group-hover:translate-y-1"></span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="relative group">
              About Us
              {/* Hover underline effect */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform transition-all duration-300 ease-out translate-y-0 group-hover:bg-[rgba(7,98,67,1)] group-hover:translate-y-1"></span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="relative group">
              Contact Us
              {/* Hover underline effect */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform transition-all duration-300 ease-out translate-y-0 group-hover:bg-[rgba(7,98,67,1)] group-hover:translate-y-1"></span>
            </Link>
          </li>
        </ul>

        {/* Button for "Join us for worship" on desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-[rgba(7,98,67,1)] text-white rounded"
          >
            Join us for worship
          </Link>
        </div>
      </div>

      {/* Mobile Menu (visible if isMenuOpen is true) */}
      {isMenuOpen && (
        <ul className="lg:hidden flex flex-col space-y-4 mt-4 text-[25px]">
          <li>
            <Link
              to="/"
              className="hover:text-[rgba(7,98,67,1)] relative group"
            >
              Home
              {/* Hover underline effect */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform transition-all duration-300 ease-out translate-y-0 group-hover:bg-[rgba(7,98,67,1)] group-hover:translate-y-1"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-[rgba(7,98,67,1)] relative group"
            >
              Our Services
              {/* Hover underline effect */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform transition-all duration-300 ease-out translate-y-0 group-hover:bg-[rgba(7,98,67,1)] group-hover:translate-y-1"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[rgba(7,98,67,1)] relative group"
            >
              About Us
              {/* Hover underline effect */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform transition-all duration-300 ease-out translate-y-0 group-hover:bg-[rgba(7,98,67,1)] group-hover:translate-y-1"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[rgba(7,98,67,1)] relative group"
            >
              Contact Us
              {/* Hover underline effect */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform transition-all duration-300 ease-out translate-y-0 group-hover:bg-[rgba(7,98,67,1)] group-hover:translate-y-1"></span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

// Exporting Navbar component for use in other parts of the application
export default Navbar;
