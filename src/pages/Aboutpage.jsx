// Importing React library
import React from "react";

// Importing components for the About page
import Hero from "../components/AboutComp/Hero"; // Hero section of the About page
import Pastor from "../components/AboutComp/Pastor"; // Pastor information section
import Testimonies from "../components/HomeComp/Testimonies"; // Testimonies section
import Contact from "../components/HomeComp/Contact"; // Contact section
import Locate from "../components/HomeComp/Locate"; // Location section
import Footer from "../components/HomeComp/Footer"; // Footer section

// Defining Aboutpage functional component
const Aboutpage = () => {
  return (
    <div>
      {/* Rendering various components for the About page */}
      <Hero /> {/* Hero section */}
      <Pastor /> {/* Pastor section */}
      <Testimonies /> {/* Testimonies section */}
      <Contact /> {/* Contact section */}
      <Locate /> {/* Location section */}
      <Footer /> {/* Footer section */}
    </div>
  );
};

// Exporting Aboutpage component for use in other parts of the application
export default Aboutpage;
