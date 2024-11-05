// Importing React library to create a functional component
import React from "react";

// Importing the Slider component from react-slick and the necessary CSS files for styling
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Defining the main App component
const Testimonies = () => {
  // Testimonial data array with name and review for each item
  const data = [
    {
      name: "Abraham Adesanya",
      review:
        "Whether it's through outreach programs, community events, or simply lending a listening ear, we embody the love of Christ in tangible ways.",
    },
    // Repeating data for demonstration
    {
      name: "Abraham Adesanya",
      review:
        "Whether it's through outreach programs, community events, or simply lending a listening ear, we embody the love of Christ in tangible ways.",
    },
    {
      name: "Abraham Adesanya",
      review:
        "Whether it's through outreach programs, community events, or simply lending a listening ear, we embody the love of Christ in tangible ways.",
    },
    {
      name: "Abraham Adesanya",
      review:
        "Whether it's through outreach programs, community events, or simply lending a listening ear, we embody the love of Christ in tangible ways.",
    },
    {
      name: "Abraham Adesanya",
      review:
        "Whether it's through outreach programs, community events, or simply lending a listening ear, we embody the love of Christ in tangible ways.",
    },
    {
      name: "Abraham Adesanya",
      review:
        "Whether it's through outreach programs, community events, or simply lending a listening ear, we embody the love of Christ in tangible ways.",
    },
  ];

  // Slider settings object with configuration options
  var settings = {
    dots: false, // No dots for navigation
    infinite: true, // Enables infinite scrolling
    slidesToShow: 4, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll per swipe
    autoplay: true, // Enables autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    pauseOnHover: true, // Pauses autoplay on hover

    // Responsive settings for different screen sizes
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 slides at 1024px width and below
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides at 768px width and below
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1, // Show 1 slide at 500px width and below
        },
      },
    ],
  };

  // Render the slider and testimonial elements
  return (
    <div className="bg-[#f7f7f7] pb-14">
      <div className="w-3/4 m-auto ">
        <div className="mt-20">
          {/* Section title */}
          <h2 className="text-center font-semibold text-[25px] py-6">
            Testimonies
          </h2>

          {/* Rendering the Slider component with the settings defined */}
          <Slider {...settings}>
            {/* Mapping over the data array to render each testimonial */}
            {data.map((d, index) => (
              <div
                key={index} // Unique key for each testimonial
                className="bg-white shadow-md py-24 text-black rounded-xl flex items-center justify-center"
              >
                <div className="flex flex-col justify-center items-center mx-auto gap-4 p-4">
                  {/* Displaying review text */}
                  <p className="text-center">{d.review}</p>
                  {/* Displaying name */}
                  <p className="text-xl font-semibold text-center">{d.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

// Exporting the Testimonies component for use in other parts of the application
export default Testimonies;
