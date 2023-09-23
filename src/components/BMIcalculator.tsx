import React from "react";
import BMIform from "./BMIform";
import { getAuthSession } from "@/lib/nextauth";
import UserAccountNav from "./navbar/UserAccountNav";
import Map from "./Map";
import { User } from "@prisma/client";

type Props = {
  
};

const BMIcalculator = async (props: Props) => {
  const session = await getAuthSession();
  console.log(session?.user?.age);

  return (
    <div className=" rounded-lg p-3   mb-10">
      <div className="flex gap-2 items-center mb-1 ">
        <div className="">
          <div>
            <p className="text-5xl font-medium">
              {session?.user?.name?.toUpperCase()}
            </p>
            <p className="text-xl font-medium">@{session?.user?.username}</p>
            <p className="text-2xl font-medium"></p>
          </div>
        </div>
      </div>
      <div className="rounded-lg  ">
        {/* <h2 className="text-5xl  font-bold">
          <span className="font-normal">BMI</span> Calculator
        </h2> */}
        <div className="grid md:grid-cols-3 mt-2 gap-3 grid-cols-3 ">
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
    </div>
  );
};

export default BMIcalculator;
