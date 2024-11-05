// Importing React library
import React from "react";

// Importing components for the Homepage
import Hero from "../components/HomeComp/Hero"; // Hero section of the homepage
import Services from "../components/HomeComp/Services"; // Services section
import AboutUs from "../components/HomeComp/AboutUs"; // About Us section
import Testimonies from "../components/HomeComp/Testimonies"; // Testimonies section
import Contact from "../components/HomeComp/Contact"; // Contact section
import Locate from "../components/HomeComp/Locate"; // Location section
import Footer from "../components/HomeComp/Footer"; // Footer section

// Defining Homepage functional component
const Homepage = () => {
  return (
    <div>
      {/* Rendering various components for the Homepage */}
      <Hero /> {/* Hero section */}
      <Services /> {/* Services section */}
      <AboutUs /> {/* About Us section */}
      <Testimonies /> {/* Testimonies section */}
      <Contact /> {/* Contact section */}
      <Locate /> {/* Location section */}
      <Footer /> {/* Footer section */}
    </div>
  );
};

// Exporting Homepage component for use in other parts of the application
export default Homepage;
