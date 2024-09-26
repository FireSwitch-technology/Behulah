// import React from "react";

// const Testimonies = () => {
//   const tests = [
//     {
//       p1: "Whether it's through outreach programs, community events, or simply lending a listening ear, we embody the love of Christ in tangible ways.",
//       p2: "Abraham Adesanya",
//     },
//     {
//       p1: "Whether it's through outreach programs, community events, or simply lending a listening ear, we embody the love of Christ in tangible ways.",
//       p2: "Abraham Adesanya",
//     },
//     {
//       p1: "Whether it's through outreach programs, community events, or simply lending a listening ear, we embody the love of Christ in tangible ways.",
//       p2: "Abraham Adesanya",
//     },
//     {
//       p1: "Whether it's through outreach programs, community events, or simply lending a listening ear, we embody the love of Christ in tangible ways.",
//       p2: "Abraham Adesanya",
//     },
//     {
//       p1: "Whether it's through outreach programs, community events, or simply lending a listening ear, we embody the love of Christ in tangible ways.",
//       p2: "Abraham Adesanya",
//     },
//   ];
//   return (
//     <div className="bg-[#f7f7f7] p-4">
//       <h2 className="text-center font-semibold text-[25px] py-6">
//         Testimonies
//       </h2>
//       <div className=" sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6 md:m-16">
//         {tests.map((test, index) => (
// <div
//   key={index}
//   className="bg-white p-2 shadow-md my-4 sm:my-0 md:p-4"
// >
//   <p className="text-center my-2">{test.p1}</p>
//   <p className=" font-semibold text-center">{test.p2}</p>
// </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonies;

import React from "react";

const GridComponent = () => {
  const tests = [
    {
      p1: "Whether it's through outreach programs, community events, or simply lending a listening ear, we embody the love of Christ in tangible ways.",
      p2: "Abraham Adesanya",
    },
  ];
  return (
    <div className="bg-[#f7f7f7] p-4">
      <h2 className="text-center font-semibold text-[25px] py-6">
        Testimonies
      </h2>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {/* Divs will display as block on small screens, flex-wrap on larger screens */}
        <div className="bg-white w-full sm:w-1/3 md:w-1/4">
          <div className=" p-2 shadow-md my-4 sm:my-0 md:p-4">
            <p className="text-center my-2">
              Whether it's through outreach programs, community events, or
              simply lending a listening ear, we embody the love of Christ in
              tangible ways.
            </p>
            <p className=" font-semibold text-center">Abraham Adesanya</p>
          </div>
        </div>
        <div className="bg-white w-full sm:w-1/3 md:w-1/4">
          <div className=" p-2 shadow-md my-4 sm:my-0 md:p-4">
            <p className="text-center my-2">
              Whether it's through outreach programs, community events, or
              simply lending a listening ear, we embody the love of Christ in
              tangible ways.
            </p>
            <p className=" font-semibold text-center">Abraham Adesanya</p>
          </div>
        </div>
        <div className="bg-white w-full sm:w-1/3 md:w-1/4">
          <div className=" p-2 shadow-md my-4 sm:my-0 md:p-4">
            <p className="text-center my-2">
              Whether it's through outreach programs, community events, or
              simply lending a listening ear, we embody the love of Christ in
              tangible ways.
            </p>
            <p className=" font-semibold text-center">Abraham Adesanya</p>
          </div>
        </div>
        <div className="bg-white w-full sm:w-1/3 md:w-1/4">
          <div className=" p-2 shadow-md my-4 sm:my-0 md:p-4">
            <p className="text-center my-2">
              Whether it's through outreach programs, community events, or
              simply lending a listening ear, we embody the love of Christ in
              tangible ways.
            </p>
            <p className=" font-semibold text-center">Abraham Adesanya</p>
          </div>
        </div>
        <div className="bg-white w-full sm:w-1/3 md:w-1/4">
          <div className=" p-2 shadow-md my-4 sm:my-0 md:p-4">
            <p className="text-center my-2">
              Whether it's through outreach programs, community events, or
              simply lending a listening ear, we embody the love of Christ in
              tangible ways.
            </p>
            <p className=" font-semibold text-center">Abraham Adesanya</p>
          </div>
        </div>
        {/* <div className="bg-green-500 h-24 w-full sm:w-1/3 md:w-1/4"></div>
        <div className="bg-blue-500 h-24 w-full sm:w-1/3 md:w-1/4"></div>
        <div className="bg-yellow-500 h-24 w-full sm:w-1/3 md:w-1/4"></div>
        <div className="bg-purple-500 h-24 w-full sm:w-1/3 md:w-1/4"></div> */}
      </div>
    </div>
  );
};

export default GridComponent;
