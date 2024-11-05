// Importing React to create a functional component
import React from "react";

// Defining the Locate component
const Locate = () => {
  // Rendering the component's UI
  return (
    // Main container with padding for spacing
    <div className="p-8 md:p-16">
      {/* Title for the Locate Us section with responsive font sizes and margin */}
      <h2 className="font-semibold text-center text-2xl md:text-3xl mb-8 md:mb-16">
        Locate Us
      </h2>

      {/* Embedded Google Maps iframe for location display */}
      <iframe
        // Google Maps embed link for the specified location
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249962.74476465464!2d3.7798797128715873!3d7.360057222632145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d77eeff086f%3A0x3b33e0f76e8e04a9!2sIbadan%2C%20Oyo!5e0!3m2!1sen!2sng!4v1727242046478!5m2!1sen!2sng"
        // Setting iframe dimensions to take up full width and height of the container
        width="100%"
        height="100%"
        // Removing border around the iframe
        className="border-0"
        // Allowing fullscreen mode for the iframe
        allowFullScreen=""
        // Enabling lazy loading for performance optimization
        loading="lazy"
        // Setting referrer policy for privacy and security
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

// Exporting the Locate component for use in other parts of the application
export default Locate;
