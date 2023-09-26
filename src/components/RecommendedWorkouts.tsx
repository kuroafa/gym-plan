import { Plan } from "@prisma/client";
import React from "react";
import { allWorkouts } from "./utils/Data";
import Image from "next/image";
import { all } from "axios";

type Props = {
  planData: Plan[];
};
const TodayDate = new Date()
  .toLocaleString("en-us", { weekday: "long" })
  .toUpperCase();
console.log(TodayDate);

const RecommendedWorkouts = ({ planData }: Props) => {

  const lessWorkouts = allWorkouts.slice(0,6)
  return (
    <div>
      {/* <h1 className="text-3xl font-medium mt-3">
        Today&apos;s Recommended workout&apos;s
      </h1> */}
      <div className="">
        {planData.map((plan) => {
          return (
            <>
              {TodayDate === plan.day && (
                <div className="grid   xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 xl:gap-20 gap-5  mt-2" key={plan.id}>
                  {allWorkouts.map((workout, index) => {
                    return (
                      <>
                        {plan.fitnessGoals === workout.fitnessGoal && (
                          <div key={index} className=" p-2 rounded-lg">
                            <div className="  flex gap-4 justify-between items-center">
                              <h1 className="text-xl font-medium bg-black text-white mb-2 rounded-[30px] px-3 whitespace-nowrap">
                                {workout.exercise}
                              </h1>

                              
                            </div>
                            <div>
                                <p className="text-xl font-medium mb-1">Sets: <span className="text-5xl font-bold">{workout.sets}</span></p>
                                <p className="text-lg font-medium">Reps: {workout.reps}</p>
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })}
                 
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RecommendedWorkouts;
