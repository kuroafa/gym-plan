import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { Plan } from "@prisma/client";
import Image from "next/image";
import React from "react";

type Props = {
  planData: Plan[];
};

const today = new Date();

const Tommorrow = new Date(today);

Tommorrow.setDate(today.getDate() + 1);

const TommorrowDate = Tommorrow.toLocaleString("en-us", {
  weekday: "long",
}).toUpperCase();

const TodayDate = new Date()
  .toLocaleString("en-us", { weekday: "long" })
  .toUpperCase();
console.log(TodayDate);

const LatestPlan = ({ planData }: Props) => {
  const handleLatest = () => {};

  return (
    <div className=" p-3 rounded-xl relative">
      <h1 className="text-4xl pb-2 font-medium">Upcoming Workout</h1>
      <div className=" grid sm:grid-cols-3 grid-cols-2 gap-5">
        <div>
          {planData.map((plan) => {
            return (
              <>
                {TodayDate === plan.day! && (
                  <div
                    key={plan.id}
                    className="p-2 rounded-lg  bg-gray-200 shadow-gray-300 shadow-xl hover:shadow-xl hover:shadow-lime-500 hover:scale-y-10 cursor-pointer  flex flex-col gap-2"
                  >
                    <div className="flex items-center  justify-between">
                      <h2 className="text-lg ">
                        <span className="font-semibold">TODAY</span>
                      </h2>
                   
                    </div>
                    <div className="pl-2 flex flex-col gap-1">
                      <p className="text-xl font-medium ">
                        {plan.fitnessGoals.replace("_", " ")}
                      </p>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div className="">
          {planData.map((plan) => {
            return (
              <>
                {TommorrowDate === plan.day && (
                  <div
                    key={plan.id}
                    className="p-2 rounded-lg shadow-xl bg-gray-200  shadow-gray-300 flex flex-col gap-2 hover:shadow-xl hover:shadow-lime-500 hover:scale-y-10 cursor-pointer "
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg">
                        <span className="font-semibold">{plan.day}</span>
                      </h2>
                   
                    </div>
                    <div className="pl-2 flex flex-col gap-1">
                      <p className="text-xl font-medium ">
                        {plan.fitnessGoals.replace("_", " ")}
                      </p>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
         <div className="">
          {planData.map((plan) => {
            return (
              <>
                {TommorrowDate === plan.day && (
                  <div
                    key={plan.id}
                    className="p-2 rounded-lg border bg-gray-200 shadow-xl shadow-gray-300 flex flex-col gap-2 hover:shadow-xl hover:shadow-lime-500 hover:scale-y-10 cursor-pointer "
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg">
                        <span className="font-semibold">{plan.day}</span>
                      </h2>
                   
                    </div>
                    <div className="pl-2 flex flex-col gap-1">
                      <p className="text-xl font-medium ">
                        {plan.fitnessGoals.replace("_", " ")}
                      </p>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
     
    </div>
  );
};

export default LatestPlan;
