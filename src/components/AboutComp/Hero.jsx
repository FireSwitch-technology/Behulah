import React from "react";
import img from "../../assets/AbtImage.png";

const AboutUs = () => {
  return (
    <>
      <div className="m-4 md:grid grid-cols-2 mt-8 md:m-16">
        <div className="w-full h-full md:pr-12 ">
          <h2 className="font-semibold text-[24px] md:text-[32px] text-center sm:text-left">
            About Us
          </h2>
          <p className="text-center sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
          <p className=" text-center sm:text-left text-[rgba(7,98,67,1)] font-semibold">
            Our mission is to preach the word
          </p>
          <p className=" text-center sm:text-left text-[rgba(7,98,67,1)] font-semibold">
            Our vision is to spread the love of Jesus to all souls
          </p>
          <div className=" my-2">
            <button className=" px-4 py-2 border-2 border-[rgba(143,84,68,1)] text-[rgba(143,84,68,1)] rounded mx-auto flex sm:mx-0">
              Learn more about us
            </button>
          </div>
        </div>
        <div className="relative bg-Abtbg w-full h-full object-cover">
          <div className="  w-full h-full object-cover">
            <img src={img} className=" max-w-full max-h-full" />
          </div>
        </div>
      </div>
      <h2 className=" text-center font-semibold text-2xl md:text-3xl">We are Gloryland</h2>
      <p className=" m-4 italic font-normal text-center text-[20px] md:text-[24px] md:m-8">
        You shall no longer be termed Forsaken, Nor shall your land any more be
        termed Desolate; But you shall be called Hephzibah, and your land Beulah
      </p>
      <p className=" mt-4 mb-10 font-normal text-center text-[14px] md:text-[16px] md:m-8">
        NKJV - Isaiah 62 vs 4
      </p>
    </>
  );
};

export default AboutUs;
