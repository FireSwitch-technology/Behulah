// Importing React to create a functional component
import React from "react";

// Defining the Hero component
const Hero = () => {
  // Rendering the component's UI
  return (
    <>
      {/* Main hero container with relative positioning, background image, and responsive margins */}
      <div className="relative mt-4 mx-4 bg-background bg-cover bg-center object-cover md:m-16 rounded-xl">
        {/* Gradient overlay on top of the background image */}
        <div className="w-full h-full absolute bg-gradient-to-r from-[rgba(0,0,0,0.35)] via-[rgba(0,0,0,0.05)] to-[rgba(0,0,0,0.35)] rounded-xl "></div>

        {/* Content container with padding based on screen size */}
        <div className="sm:p-14 md:p-24">
          <div className="p-2">
            {/* Subtitle text */}
            <h3 className="text-center sm:text-[18px] md:text-[20px] font-normal text-white">
              Preach the Word of God
            </h3>

            {/* Main title text with responsive font sizes and line break on larger screens */}
            <h1 className="text-center my-8 text-white font-bold text-2xl sm:text-4xl md:text-6xl">
              Welcome to <br className="hidden md:block" /> Godly Hephzibah
              Beulah Global Ministry
            </h1>

            {/* Join us button, centered on the page */}
            <button className="px-4 py-2 bg-white text-[rgba(7,98,67,1)] rounded flex mx-auto">
              Join us for worship
            </button>
          </div>
        </div>
      </div>

      {/* Quotation text displayed below the hero image, with responsive styling */}
      <p className="m-4 italic font-normal text-center text-[20px] md:text-[24px] md:m-16">
        You shall no longer be termed Forsaken, Nor shall your land any more be
        termed Desolate; But you shall be called Hephzibah, and your land Beulah
      </p>

      {/* Verse reference with responsive margins and text size */}
      <p className="mt-4 mb-10 md:mb-20 font-normal text-center text-[14px] md:text-[16px] md:m-16">
        NKJV - Isaiah 62 vs 4
      </p>
    </>
  );
};

// Exporting the Hero component for use in other parts of the application
export default Hero;
