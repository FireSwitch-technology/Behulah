import React from "react";

const Hero = () => {
  return (
    <>
      <div className=" relative mt-4 mx-4 bg-background bg-cover bg-center object-cover md:m-16">
        <div class="w-full h-full absolute bg-gradient-to-r from-[rgba(0,0,0,0.35)] via-[rgba(0,0,0,0.05)] to-[rgba(0,0,0,0.35)] "></div>
        <div className=" bg-re-300 sm:p-14 md:p-24">
          <div className=" p-2">
            <h3 className=" text-center sm:text-[18px] md:text-[20px] font-normal text-white">
              Preach the Word of God
            </h3>
            <h1 className=" text-center my-8 text-white font-bold text-2xl sm:text-4xl md:text-6xl">
              Wevvlcome to <br className="hidden md:block" /> Glorious Hephzibah
              Beulah Ministry
            </h1>
            <button className="px-4 py-2 bg-white text-[rgba(7,98,67,1)] rounded flex mx-auto">
              Join us for worship
            </button>
          </div>
        </div>
      </div>
      <p className=" m-4 italic font-normal text-center text-[20px] md:text-[24px] md:m-16">
        You shall no longer be termed Forsaken, Nor shall your land any more be
        termed Desolate; But you shall be called Hephzibah, and your land Beulah
      </p>
      <p className=" mt-4 mb-10 md:mb-20 font-normal text-center text-[14px] md:text-[16px] md:m-16">
        NKJV - Isaiah 62 vs 4
      </p>
    </>
  );
};

export default Hero;
