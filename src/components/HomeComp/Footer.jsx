import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 p-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
        {/* Left Side: Logo and Copyright */}
        <div className="flex items-center space-x-4">
          <img
            src={logo} // Add the actual image link for the logo
            alt="Logo"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <p className="font-semibold">Glorious Hephzibah Beulah Ministry</p>
            <p>© 2024 All rights reserved</p>
          </div>
        </div>

        {/* Middle: Contact Information */}
        <div className="text-center md:text-left">
          <p className="font-semibold">Phone: +234 123 456 676</p>
          <p className="font-semibold">Email: hepnizah@gmail.com</p>
          <p className="font-semibold">
            Address: C.A.C Oke Itusile, Akuro, Moniya, Ibadan
          </p>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition duration-300"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition duration-300"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
