// Importing React to create a functional component
import React from "react";
// Importing an image asset to use in the component
import img from "../../assets/Contact.png";

// Defining the Contact component
const Contact = () => {
  // Rendering the component's UI
  return (
    // Main container with padding, grid layout on medium screens
    <div className="p-4 md:grid md:grid-cols-2 md:m-14">
      {/* Left side for the contact image */}
      <div className="w-full h-full object-cover mx-auto flex justify-center">
        <img src={img} alt="" className="w-full object-cover" />
      </div>

      {/* Right side for the contact form */}
      <form action="" className="md:min-w-[50%] py-4 md:py-0 md:px-8">
        {/* Form heading */}
        <h2 className="font-semibold text-2xl md:text-3xl">Contact us</h2>

        {/* Name and Email input fields */}
        <div className="text-left mb-[25px} sm:grid sm:grid-cols-1 sm:gap-4">
          <label htmlFor="">
            Name
            <input
              type="text" // Input type set to text
              id="name" // Input ID for name
              className="w-full h-[40px] my-2 border border-footerTxtColor bg-transparent outline-none p-4"
            />
          </label>
          <label htmlFor="">
            Email Address
            <input
              type="email" // Input type set to email
              id="name" // Input ID for email (should ideally be unique)
              className="w-full h-[40px] my-2 border border-footerTxtColor bg-transparent outline-none p-4"
            />
          </label>
        </div>

        {/* Message textarea field */}
        <div className="mt-[18px]">
          Message
          <textarea
            id="" // No ID specified for the textarea
            className="w-full h-[250px] my-2 border p-4 bg-transparent outline-none"
          ></textarea>
        </div>

        {/* Submit button */}
        <button className="px-6 py-2 bg-[rgba(7,98,67,1)] text-white rounded flex mx-auto md:mx-0">
          Message Us
        </button>
      </form>
    </div>
  );
};

// Exporting the Contact component for use in other parts of the application
export default Contact;
