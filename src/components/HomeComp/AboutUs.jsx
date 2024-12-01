// Importing React library for component creation
import React from "react";
// Importing an image asset for use within the component
import img from "../../assets/AbtImage.png";

// Defining the AboutUs functional component
const AboutUs = () => {
  // Array of aims, each with a description under the 'para' property
  const aims = [
    {
      para: "1. To embark on evangelical missions and programmes and to win souls for the Lord Jesus Christ and prepare men and women for the second coming of our Lord Jesus Christ.",
    },
    {
      para: "2. To organize prayer meetings, establish prayer camps, and conduct prayer sessions on any matter at any place and for any adequate period.",
    },
    {
      para: "3. To organize bible studies, teachings, seminars, discussions, and any other programme to facilitate the study of the bible.",
    },
    {
      para: "4. To hold crusades, camp meetings, gatherings, conventions, fellowships, conferences, and any other meetings by whatever name it is called for the pursuance of its objectives.",
    },
    {
      para: "5. To organize christian counseling, follow-up, teachings, trainings, seminars, symposia, and any other similar programmes for the benefit of its members and any other persons.",
    },
    {
      para: "6. To encourage the study, understanding and practical application of bible truth in everyday life.",
    },
    {
      para: "7. To promote mutual understanding, love, peace, and unity among people.",
    },
    {
      para: "8. To cooperate with anybody or bodies whose aims and objectives are identical with or complementary to the church's.",
    },
    {
      para: "9. To engage and participate in and encourage charitable, benevolent and other merciful activities towards all men and especially those of the household of faith, in any part of the world.",
    },
    {
      para: "10. To undertake, promote, develop, and carry out charitable, educational, christian religious and scientific programmes in line with our objectives to enhance the quality of life and wellbeing of individuals and communities in nigeria and the world at large.",
    },
    {
      para: "11. To perform all such other lawful things as are incidental or conducive to the attainment of the above objects or any of them.",
    },
  ];

  // Returning JSX to render the component
  return (
    // Main container for the component, using grid layout on medium screens
    <div className="m-4 md:grid grid-cols-2 mt-8 md:m-16">
      {/* Left section with aims and objectives text */}
      <div className="w-full h-full md:pr-12 ">
        {/* Section title */}
        <h2 className="font-semibold text-[24px] md:text-[32px] text-center sm:text-left">
          Aims and Objectives
        </h2>
        {/* Introductory text */}
        <p className="text-left">Our aims and objectives is to:</p>
        {/* Looping over the aims array to display each aim */}
        {aims.map((aim, index) => (
          <p key={index} className="my-4 font-normal text-[16px]">
            {aim.para}
          </p>
        ))}
        {/* Button to learn more about the organization */}
        <div className="my-2">
          <button className="px-4 py-2 border-2 border-[rgba(143,84,68,1)] text-[rgba(143,84,68,1)] rounded mx-auto flex sm:mx-0">
            Learn more about us
          </button>
        </div>
      </div>

      {/* Right section with image display */}
      <div className="relative bg-Abtbg w-full h-full object-cover">
        <div className="w-full h-full object-cover">
          {/* Rendering the imported image */}
          <img src={img} className="max-w-full max-h-full" />
        </div>
      </div>
    </div>
  );
};

// Exporting the AboutUs component for use in other parts of the application
export default AboutUs;
