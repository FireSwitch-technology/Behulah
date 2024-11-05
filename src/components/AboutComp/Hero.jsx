// Importing React library for building components
import React from "react";
// Importing an image asset
import img from "../../assets/Frame 18.png";

// Defining the AboutUs component
const AboutUs = () => {
  // Defining an array of aims, each containing a description in the 'para' property
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
      para: "5. To organize Christian counseling, follow-up, teachings, trainings, seminars, symposia, and any other similar programmes for the benefit of its members and any other persons.",
    },
    {
      para: "6. To encourage the study, understanding, and practical application of bible truth in everyday life.",
    },
    {
      para: "7. To promote mutual understanding, love, peace, and unity among people.",
    },
    {
      para: "8. To cooperate with anybody or bodies whose aims and objectives are identical with or complementary to the church's.",
    },
    {
      para: "9. To engage and participate in and encourage charitable, benevolent, and other merciful activities towards all men and especially those of the household of faith, in any part of the world.",
    },
    {
      para: "10. To undertake, promote, develop, and carry out charitable, educational, Christian religious, and scientific programmes in line with our objectives to enhance the quality of life and well-being of individuals and communities in Nigeria and the world at large.",
    },
    {
      para: "11. To perform all such other lawful things as are incidental or conducive to the attainment of the above objects or any of them.",
    },
  ];

  // Rendering the component's UI
  return (
    <div>
      {/* Main container with grid layout for responsiveness */}
      <div className="m-4 md:grid grid-cols-2 mt-8 md:m-16">
        {/* Left side content */}
        <div className="w-full h-full md:pr-12 ">
          {/* Heading for About Us section */}
          <h2 className="font-semibold text-[24px] md:text-[32px] lg:text-[64px] text-center sm:text-left">
            About us
          </h2>
          {/* Introductory paragraph */}
          <p className="text-left font-normal text-[16px]">
            Our aims and objectives is to:
          </p>
          {/* Mapping over the aims array and displaying each aim */}
          {aims.map((aim, index) => (
            <p key={index} className=" my-4">
              {aim.para}
            </p>
          ))}
          {/* Button to learn more about the organization */}
          <div className=" my-2">
            <button className=" px-4 py-2 border-2 border-[rgba(143,84,68,1)] text-[rgba(143,84,68,1)] rounded mx-auto flex sm:mx-0">
              Learn more about us
            </button>
          </div>
        </div>

        {/* Right side image content */}
        <div className="relative bg-Abtbg w-full h-full object-cover">
          <div className="w-full h-full object-cover">
            {/* Displaying imported image */}
            <img src={img} className=" max-w-full max-h-full" />
          </div>
        </div>
      </div>

      {/* Additional information about the organization */}
      <h2 className=" text-center font-semibold text-2xl md:text-3xl">
        We are Gloryland
      </h2>
      {/* Quotation with styling */}
      <p className=" m-4 italic font-normal text-center text-[20px] md:text-[24px] md:m-8">
        You shall no longer be termed Forsaken, Nor shall your land any more be
        termed Desolate; But you shall be called Hephzibah, and your land Beulah
      </p>
      {/* Scripture reference */}
      <p className=" mt-4 mb-10 font-normal text-center text-[14px] md:text-[16px] md:m-8">
        NKJV - Isaiah 62 vs 4
      </p>
    </div>
  );
};

// Exporting the AboutUs component to be used in other parts of the application
export default AboutUs;
