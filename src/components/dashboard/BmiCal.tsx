"use client";
import { Bmi, User } from "@prisma/client";
import React, { useEffect, useState } from "react";

type Gender = {
  male: string,
  female: string
}

type BmiDataItem = {
  id: string;
  height: string; // You can replace this with the appropriate field from your BMI data
  weight: string; // You can replace this with the appropriate field from your BMI data
  userId: string;
  createdAt: Date;
};
type Props = {
  bmiData: BmiDataItem[]
  
};

const BmiCal = ({ bmiData }: Props) => {
  const [bmi, setBmi] = useState<number>();
  const [bmiResult, setBmiResult] = useState("");
  const [bmiColor, setBmiColor] = useState("");

  useEffect(() => {
    const handleBMI = () => {
      if (bmiData && bmiData.length > 0) {
        const userWeight = parseFloat(bmiData[0].weight) * 0.45359237; // Convert weight to kg
        const heightParts = bmiData[0].height.split("."); // Split the height into feet and inches
        const userHeightInFeet = parseInt(heightParts[0]);
        const userHeightInInches = parseInt(heightParts[1]);
        const userHeight = (userHeightInFeet * 12 + userHeightInInches) * 0.0254; // Convert height to meters
        const calculatedBmi = Math.round((userWeight / userHeight ** 2) * 100) / 100;
        setBmi(calculatedBmi);
 if (calculatedBmi < 18.5) {
        setBmiResult("Underweight");
        setBmiColor("bg-yellow-300");
      } else if (calculatedBmi === 18.5 || calculatedBmi < 24.9) {
        setBmiResult("Normal Weight");
        setBmiColor("bg-green-400");
      } else if (calculatedBmi === 25.0 || calculatedBmi < 29.9) {
        setBmiResult("Pre-obesity");
        setBmiColor("bg-orange-400");
      } else if (calculatedBmi === 30 || calculatedBmi < 34.9) {
        setBmiResult("Obesity Class 1");
        setBmiColor("bg-red-400");
      } else if (calculatedBmi === 35 || calculatedBmi < 39.9) {
        setBmiResult("Obesity Class 2");
        setBmiColor("bg-red-400");
      } else if (calculatedBmi > 40) {
        setBmiResult("Obesity Class 3");
        setBmiColor("bg-red-400");
      }
      } else {

        setBmi(0); // Set BMI to null or another appropriate default value
        setBmiResult("No data available"); // Display a message
        setBmiColor(""); // Clear the color
      }
  
     
    };
    handleBMI();
  }, [bmiData]);

  return (
    <div>
      {

      }
      <div className=" grid grid-cols-1 mt-2  ">
        {bmiResult !== undefined ? (
          <div className="text-xl   p-5 flex justify-between items-center  ">
            <h1 className="text-xl font-bold text-white">Physical info</h1>
            <p className={`text-sm font-bold ${bmiColor} p-2 rounded-[40px] `}>
              {" "}
              {bmiResult}
            </p>
          </div>
        ) : null}
        {bmi !== undefined ? (
          <div className="text-xl p-5 mx-5 grid grid-cols-2 gap-2 px-5 rounded-[40px] bg-lime-200">
            <p className="text-4xl font-medium rounded-full w-fit bg-slate-100 lg:px-10 px-5 py-2">
              BMI
            </p>{" "}
            <p className="xl:text-6xl text-4xl font-bold">{bmi.toFixed(2)}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BmiCal;
