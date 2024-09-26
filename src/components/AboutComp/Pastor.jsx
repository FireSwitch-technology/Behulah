import React from "react";
import img from "../../assets/Pastor.png";

const Pastor = () => {
  const pastorDivs = [
    { text: "Pastor", para: "Officiating Minister", image: img },
    { text: "Pastor", para: "Officiating Minister", image: img },
    { text: "Pastor", para: "Officiating Minister", image: img },
    { text: "Pastor", para: "Officiating Minister", image: img },
    { text: "Pastor", para: "Officiating Minister", image: img },
  ];
  return (
    <div className="m-4 md:m-16">
      <h2 className="font-semibold text-[24px] md:text-[32px] text-center m-4">
        Meet the Pastorate
      </h2>
      <div className=" flex flex-wrap items-center justify-center gap-4 p-4">
        {pastorDivs.map((pastorDiv, index) => (
          <div key={index} className=" my-6">
            <div className="w-full h-full object-cover mx-auto flex justify-center">
              <img
                src={pastorDiv.image}
                className=" w-full h-full object-cover"
                alt=""
              />
            </div>
            <h3 className=" text-center">{pastorDiv.text}</h3>
            <p className=" text-center">{pastorDiv.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pastor;
