import React from "react";
import img from "../../assets/Contact.png";

const Contact = () => {
  return (
    <div className="p-4 md:grid md:grid-cols-2 md:m-14">
      <div className=" w-full h-full object-cover mx-auto flex justify-center">
        <img src={img} alt="" className=" w-full object-cover" />
      </div>
      <form action="" className="md:min-w-[50%] py-4 md:py-0 md:px-8">
        <h2 className=" font-semibold text-2xl md:text-3xl">Contact us</h2>
        <div className=" text-left mb-[25px} sm:grid sm:grid-cols-1 sm:gap-4">
          <label htmlFor="">
            Name
            <input
              type="text"
              id="name"
              className=" w-full h-[40px] my-2 border border-footerTxtColor bg-transparent outline-none p-4"
            />
          </label>
          <label htmlFor="">
            Email Address
            <input
              type="email"
              id="name"
              className=" w-full h-[40px] my-2 border border-footerTxtColor bg-transparent outline-none p-4"
            />
          </label>
        </div>
        <div className=" mt-[18px]">
          Message
          <textarea
            id=""
            className=" w-full h-[100px] my-2 border p-4 bg-transparent outline-none"
          ></textarea>
        </div>
        <button className="px-6 py-2 bg-[rgba(7,98,67,1)] text-white rounded flex mx-auto md:mx-0">
          Message Us
        </button>
      </form>
    </div>
  );
};

export default Contact;
