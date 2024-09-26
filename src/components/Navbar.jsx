import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa"; // Importing FaSearch for the search icon

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" p-4 mx-auto md:mx-20">
      <div className="container  flex items-center justify-between mx-auto">
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

        {/* Search Icon on small screens */}
        <div className="flex lg:hidden items-center space-x-4">
          <Link className="text-[12px] sm:text-[16px] px-4 py-2 bg-[rgba(7,98,67,1)] text-white rounded">
            Join us for worship
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-[16px]">
          <li>
            <Link to="/" className="relative group">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform transition-all duration-300 ease-out translate-y-0 group-hover:bg-[rgba(7,98,67,1)] group-hover:translate-y-1"></span>
            </Link>
          </li>
          <li>
            <Link to="/services" className="relative group">
              Our Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform transition-all duration-300 ease-out translate-y-0 group-hover:bg-[rgba(7,98,67,1)] group-hover:translate-y-1"></span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform transition-all duration-300 ease-out translate-y-0 group-hover:bg-[rgba(7,98,67,1)] group-hover:translate-y-1"></span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="relative group">
              Contact Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform transition-all duration-300 ease-out translate-y-0 group-hover:bg-[rgba(7,98,67,1)] group-hover:translate-y-1"></span>
            </Link>
          </li>
        </ul>

        {/* Search Icon and Buttons on Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-[rgba(7,98,67,1)] text-white rounded"
          >
            Join us for worship
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className=" lg:hidden flex flex-col space-y-4 mt-4 text-[25px]">
          <li>
            <Link
              to="/"
              className="hover:text-[rgba(7,98,67,1)] relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform transition-all duration-300 ease-out translate-y-0 group-hover:bg-[rgba(7,98,67,1)] group-hover:translate-y-1"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-[rgba(7,98,67,1)] relative group"
            >
              Our Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform transition-all duration-300 ease-out translate-y-0 group-hover:bg-[rgba(7,98,67,1)] group-hover:translate-y-1"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[rgba(7,98,67,1)] relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform transition-all duration-300 ease-out translate-y-0 group-hover:bg-[rgba(7,98,67,1)] group-hover:translate-y-1"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[rgba(7,98,67,1)] relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transform transition-all duration-300 ease-out translate-y-0 group-hover:bg-[rgba(7,98,67,1)] group-hover:translate-y-1"></span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
