import { Plan } from "@prisma/client";
import React from "react";
import { allWorkouts } from "./utils/Data";
import Image from "next/image";

type Props = {
  planData: Plan[];
};
const TodayDate = new Date()
  .toLocaleString("en-us", { weekday: "long" })
  .toUpperCase();
console.log(TodayDate);

const RecommendedWorkouts = ({ planData }: Props) => {

  const lessWorkouts = allWorkouts.slice(0,4)
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
                <div className="grid xl:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2 mt-2" key={plan.id}>
                  {lessWorkouts.map((workout, index) => {
                    return (
                      <>
                        {plan.fitnessGoals === workout.fitnessGoal && (
                          <div key={index} className=" p-2 rounded-lg">
                            <div className="  flex gap-4 justify-between items-center">
                              <h1 className="text-2xl font-medium">
                                {workout.exercise}
                              </h1>

                              
                            </div>
                            <div>
                                <p className="text-xl font-normal">Sets: {workout.sets}</p>
                                <p className="text-xl font-normal">Reps: {workout.reps}</p>
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
