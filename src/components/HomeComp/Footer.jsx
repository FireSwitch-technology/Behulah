// Importing React for component creation
import React from "react";
// Importing Instagram icon from react-icons/fa
import { FaInstagram } from "react-icons/fa";
// Importing Facebook icon from react-icons/bi
import { BiLogoFacebookSquare } from "react-icons/bi";
// Importing logo image asset
import logo from "../../assets/looogooo.jpeg";

// Defining the Footer component
const Footer = () => {
  // Rendering the component's UI
  return (
    // Footer container with background color, text color, and padding
    <footer className="bg-[#E0E0E080] text-black p-6 md:px-12 lg:px-20">
      {/* Main flex container for footer content, with responsive layout */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
        {/* Left Side: Logo and Copyright Section */}
        <div className="flex items-center justify-center space-x-4 py-4">
          <img
            src={logo} // Displaying the logo image
            alt="Logo" // Alt text for accessibility
            className="w-16 h-16 sm:w-12 sm:h-12 rounded-full" // Setting size and rounded shape
          />
          <div>
            <p className="font-semibold">Glorious Hephzibah Beulah Ministry</p>
            <p>© 2024 All rights reserved</p>
          </div>
        </div>

        {/* Middle: Contact Information Section */}
        <div className="text-center md:text-left">
          <p className="font-semibold">Phone No: 0806 243 6989</p>
          <a href="mailto:judgedestiny56@gmail.com" className="font-semibold">
            Email: Oluyehuntundeakinlolu@gmail.com
          </a>
          <p className="font-semibold">
            Address: No 45 Ishakunmi Street, Behind comprehensive health center
            Ikare Akoko, Ondo state, Nigeria.
          </p>
        </div>

        {/* Right Side: Social Icons Section */}
        <div className="flex space-x-4 py-6">
          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/profile.php?id=100082237632778&mibextid=ZbWKwL
" // Link to Facebook page
            target="_blank" // Opens link in a new tab
            rel="noopener noreferrer" // Prevents security risk with external links
            className="text-black p-1 rounded-md bg-white hover:text-black transition duration-300" // Styling and transition effect
          >
            <BiLogoFacebookSquare size={24} /> {/* Setting icon size */}
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/oluyehuntunde?igsh=cTgxeDkxNHRiMmFx" // Link to Instagram page
            target="_blank" // Opens link in a new tab
            rel="noopener noreferrer" // Prevents security risk with external links
            className="text-black p-1 rounded-md bg-white hover:text-black transition duration-300" // Styling and transition effect
          >
            <FaInstagram size={24} /> {/* Setting icon size */}
          </a>
        </div>
      </div>
    </footer>
  );
};

// Exporting the Footer component to be used in other parts of the application
export default Footer;
