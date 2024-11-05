// Importing React library to create a functional component
import React from "react";
// Importing image asset for use in the component
import img from "../../assets/Pastor.png";

// Defining the Pastor component
const Pastor = () => {
  // Array containing information about each pastor, including their title, role, and image
  const pastorDivs = [
    { text: "Pastor", para: "Officiating Minister", image: img },
    { text: "Pastor", para: "Officiating Minister", image: img },
    { text: "Pastor", para: "Officiating Minister", image: img },
    { text: "Pastor", para: "Officiating Minister", image: img },
    { text: "Pastor", para: "Officiating Minister", image: img },
  ];

  // Rendering the component's UI
  return (
    <div className="m-4 md:m-16">
      {/* Main heading for the pastor section */}
      <h2 className="font-semibold text-[24px] md:text-[32px] text-center m-4">
        Meet the Pastorate
      </h2>

      {/* Container for displaying the list of pastors in a flexible layout */}
      <div className="flex flex-wrap items-center justify-center gap-4 p-4">
        {/* Mapping over pastorDivs array to render each pastor's details */}
        {pastorDivs.map((pastorDiv, index) => (
          <div key={index} className="my-6">
            {/* Image wrapper to center the image of the pastor */}
            <div className="w-full h-full object-cover mx-auto flex justify-center">
              <img
                src={pastorDiv.image} // Displaying the pastor's image
                className="w-full h-full object-cover" // Ensuring image covers the container
                alt="" // Alt text left blank
              />
            </div>
            {/* Displaying the pastor's title and role */}
            <h3 className="text-center font-semibold mt-4">{pastorDiv.text}</h3>
            <p className="text-center">{pastorDiv.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporting the Pastor component to be used in other parts of the application
export default Pastor;
