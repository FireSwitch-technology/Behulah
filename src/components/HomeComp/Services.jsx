import React from "react";
import cloud from "../../assets/Cloud.png";
import Church from "../../assets/Church.png";
import Bible from "../../assets/Bible.png";
import Mount from "../../assets/Mountain.png";

const Services = () => {
  return (
    <div className="bg-[#f7f7f7] p-1">
      <h2 className="text-center font-semibold text-[22px]">Our Services</h2>
      <div className=" my-8 flex flex-wrap items-center justify-center gap-4 p-4">
        <div className=" relative w-[330px] h-[375px] object-cover bg-lime-500 mx-auto flex items-center justify-center gap-8">
          <img src={cloud} className="w-full h-full object-cover" alt="" />
          <div className="absolute top-4 text-white">
            <p className=" text-center font-semibold text-[18px] md:text-[24px]">
              Mercy Land
            </p>
            <p className=" text-center">Every Wednesday</p>
          </div>
        </div>
        <div className=" relative w-[330px] h-[375px] object-cover bg-red-500 mx-auto flex items-center justify-center gap-8">
          <img src={Church} className="w-full h-full object-cover" alt="" />
          <div className="absolute top-4 text-white">
            <p className=" text-center font-semibold text-[18px] md:text-[24px]">
              Marathon with the Lord
            </p>
            <p className="text-center">
              Every last Thursday and Friday of the month
            </p>
          </div>
        </div>
        <div className=" w-[330px] h-[375px] mx-auto flex flex-col items-center justify-center md:justify-between pt-10 lg:pt-0">
          <div className="relative w-full h-full m-1 basis-[40%] ">
            <img
              src={Bible}
              className="w-full h-[166px] object-cover "
              alt=""
            />
            {/* absolute top-1/2 left-01/2transform -translate-x-1/2 -translate-y-1/2 */}
            <div className=" text-white  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className=" text-center font-semibold text-[18px] md:text-[24px]">
                48 hours with the Lord
              </p>
              <p className=" text-center ">
                Every 3rd Friday to Sunday of June
              </p>
            </div>
          </div>
          <div className=" relative w-full h-full m-1 basis-[40%]">
            <img
              src={Mount}
              className=" w-full h-[166px] object-cover"
              alt=""
            />
            <div className=" text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className=" text-center font-semibold text-[18px] md:text-[24px]">
                Mountain top prayer
              </p>
              <p className=" text-center ">
                Second Friday of January, April, July and October
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
