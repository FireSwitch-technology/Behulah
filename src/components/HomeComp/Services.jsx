// Importing React to create a functional component
import React from "react";

// Importing image assets used in the component
import dome from "../../assets/dome.jpg";
import preacher from "../../assets/preacher.jpg";

// Defining the Services component
const Services = () => {
  // Rendering the component's UI
  return (
    // Main container with background color and padding
    <div className="bg-[#f7f7f7] p-1">
      {/* Title for the Services section with responsive font sizes and margin */}
      <h2 className="text-center font-semibold text-[22px] lg:text-[32px] mt-6">
        Our Services
      </h2>

      {/* Wrapper for programs section with margin, flex properties, and gap */}
      <div className="my-8 flex flex-wrap items-center justify-center gap-4 p-4">
        {/* Weekly Programs section */}
        <div className=" ">
          {/* Weekly Programs title */}
          <h2 className="text-center mb-4 font-semibold text-[16px]">
            Weekly Programs
          </h2>

          {/* Container for Weekly Program details with positioning and styling */}
          <div className="relative max-w-[330px] h-[375px] object-cover mx-auto flex items-center justify-center gap-8">
            {/* Displaying an image for Weekly Programs with responsive styling */}
            <img
              src={dome}
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />

            {/* Gradient overlay on the image */}
            <div className="bg-gradient-to-r from-[rgba(105,105,105,0)] via-[rgba(11,11,11,0.5)] to-[rgba(3,3,3,1)] absolute top-0 left-0 w-full h-full rounded-lg"></div>

            {/* Weekly Programs text details */}
            <div className="absolute bottom-2 text-white">
              <p className="text-center text-[12px]">Monday</p>
              <p className="text-center font-semibold text-[18px] md:text-[24px]">
                Bible study
              </p>
              <p className="text-center text-[12px]">Wednesday</p>
              <p className="text-center font-semibold text-[18px] md:text-[24px]">
                Mercy land
              </p>
              <p className="text-center text-[12px]">Friday</p>
              <p className="text-center font-semibold text-[18px] md:text-[24px]">
                Hour of power
              </p>
              <p className="text-center text-[12px]">Sunday</p>
              <p className="text-center font-semibold text-[18px] md:text-[24px]">
                Sunday service
              </p>
            </div>
          </div>
        </div>

        {/* Monthly Programs section */}
        <div>
          {/* Monthly Programs title */}
          <h2 className="text-center mb-4 font-semibold text-[16px]">
            Monthly Programs
          </h2>

          {/* Container for Monthly Program details with positioning and styling */}
          <div className="relative max-w-[330px] h-[375px] object-cover mx-auto flex items-center justify-center gap-8">
            {/* Displaying an image for Monthly Programs with responsive styling */}
            <img
              src={preacher}
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />

            {/* Gradient overlay on the image */}
            <div className="bg-gradient-to-r from-[rgba(105,105,105,0.2)] via-[rgba(11,11,11,0.2)] to-[rgba(3,3,3,.2)] absolute top-0 left-0 w-full h-full rounded-lg"></div>

            {/* Monthly Programs text details */}
            <div className="absolute bottom-2 text-white">
              <p className="text-center text-[12px] sm:text-[14px]">
                First Sunday of Every Month
              </p>
              <p className="text-center font-semibold text-[18px] sm:text-[24px]">
                Anointing Service
              </p>
              <p className="text-center text-[12px] sm:text-[14px]">
                Last Thursday - Saturday of Every Month
              </p>
              <p className="text-center font-semibold text-[18px] sm:text-[24px]">
                Monthly Marathon
              </p>
              <p className="text-center text-[12px] sm:text-[14px]">
                Second Friday of Every January, April, July, October
              </p>
              <p className="text-center font-semibold text-[18px] sm:text-[24px]">
                Mountains Top Prayer
              </p>
              <p className="text-center text-[12px] sm:text-[14px]">
                Third Friday June
              </p>
              <p className="text-center font-semibold text-[18px] sm:text-[24px]">
                48 Hours with God
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the Services component for use in other parts of the application
export default Services;
