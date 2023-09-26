import React, { useState } from "react";
import BMIform from "../forms/BMIform";
import { getAuthSession } from "@/lib/nextauth";
import UserAccountNav from "../navbar/UserAccountNav";
import Map from "../Map";
import { User } from "@prisma/client";
import Bmi from "./Bmi";

type Props = {};

const BMIcalculator = async (props: Props) => {
  const session = await getAuthSession();

  return (
    <div className=" rounded-lg p-3    mb-2">
      <div className="flex gap-2 items-center mb-1 ">
        <p className="text-5xl font-bold">
          {session?.user?.name?.toUpperCase()}
        </p>
      </div>
      <div className="rounded-lg  ">
        {/* <h2 className="text-5xl  font-bold">
          <span className="font-normal">BMI</span> Calculator
        </h2> */}
        <div className="grid grid-cols-4 mt-2 mb-1 gap-3  ">
          <div className="text-lg font-medium flex flex-col items-center  rounded-lg p-1">
            <p className="text-gray-400 italic text-xl font-semi-bold">
              Gender
            </p>
            <p>{session?.user?.gender}</p>
          </div>
          <div className="text-lg font-medium flex flex-col items-center  rounded-lg p-1">
            <p className="text-gray-400 italic text-xl font-semi-bold">
              Weight
            </p>
            <p>{session?.user?.weight}lb</p>
          </div>
          <div className="text-lg font-medium flex flex-col items-center  rounded-lg p-1">
            <p className=" text-xl text-gray-400 italic font-semi-bold">
              Height
            </p>
            <p>{session?.user?.height}in</p>
          </div>
          <div className="text-lg font-medium flex flex-col items-center rounded-lg p-1">
            <p className=" text-xl text-gray-400 italic font-semi-bold">Age</p>
            <p>{session?.user?.age}</p>
          </div>
        </div>
      </div>
      <Bmi
        weight={session?.user?.weight}
        height={session?.user?.height}
        gender={session?.user?.gender}
        age={session?.user?.age}
      />
    </div>
  );
};

export default BMIcalculator;
