import React from "react";
import BMIform from "./BMIform";

type Props = {};



const BMIcalculator = (props: Props) => {
  return (
    <div className="bg-gray-400 rounded-lg p-2 ">
      {/* <h2 className="text-2xl text-white font-medium">BMI Calculator</h2>
      <div className="flex justify-between pl-2 ">
        <div>
          <p className="text-white ">Weight:</p>
          <p className="text-white ">Height:</p>
          <p className="text-white ">Age:</p>
        </div>
        <div className="text-white">Result</div>
      </div> */}
      <BMIform/>
    </div>
  );
};

export default BMIcalculator;
