'use client'
import React from "react";

type Props = {};
const veganStyles = {
  backgroundImage: "url(/vegan2.webp)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const bulkingStyles = {
  backgroundImage: "url(/bulking.jpg)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const loseWeightStyles = {
  backgroundImage: "url(/smoothie.webp)",
  backgroundPosition: "bottom center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const DashboardData1 = (props: Props) => {
  return (
    <div className="mt-3">
      <div className="grid xl:grid-cols-3 md:grid-cols-1 grid-cols-2 gap-3 ">
        <div
          style={veganStyles}
          className="relative h-60 rounded-lg shadow-2xl shadow-black overflow-hidden"
        >
          <div className="hover-overlay bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out transform hover:opacity-100">
            <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="text-2xl font-bold">Vegan Option</h2>
            </div>
          </div>
        </div>
        <div
          style={bulkingStyles}
          className="relative h-60 rounded-lg shadow-2xl shadow-black overflow-hidden"
        >
          <div className="hover-overlay bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out transform hover:opacity-100">
            <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="text-2xl font-bold">Bulking</h2>
            </div>
          </div>
        </div>
        <div
          style={loseWeightStyles}
          className="relative h-60 rounded-lg col-span-2 sm:col-span-1 shadow-2xl shadow-black overflow-hidden"
        >
          <div className="hover-overlay bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out transform hover:opacity-100">
            <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="text-2xl font-bold">Lose Weight</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardData1;
