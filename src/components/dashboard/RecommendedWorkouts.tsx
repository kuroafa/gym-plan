import { Plan } from "@prisma/client";
import React from "react";
import { allWorkouts } from "../utils/Data";
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
  const lessWorkouts = allWorkouts.slice(0, 3);
  const hasPlanForToday = planData.some((plan) => plan.day === TodayDate);

  return (
    <div>
      {/* <h1 className="text-3xl font-medium mt-3">
         Today&apos;s Recommended workout&apos;s
      </h1> */}
      <div className="">
        {hasPlanForToday ? (
          planData.map((plan) => {
            return (
              <>
                {TodayDate === plan.day && (
                  <div
                    className="grid   xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-5  mt-2"
                    key={plan.id}
                  >
                    {allWorkouts.map((workout, index) => {
                      return (
                        <>
                          {plan.fitnessGoals === workout.fitnessGoal && workout.image && (
                            <div key={index} className="my-5  p-2 rounded-lg">
                              <div className=" grid grid-cols-1 text-center">
                                <h1 className="text-xl font-medium p-4 bg-black text-white mb-2 rounded-[30px]  ">
                                  {workout.exercise}
                                </h1>
                              </div>
                              <div>
                                <p className="text-xl font-medium mb-1">
                                  Sets:{" "}
                                  <span className="text-5xl font-bold">
                                    {workout.sets}
                                  </span>
                                </p>
                                <p className="text-lg font-medium">
                                  Reps:{" "}
                                  <span className="text-3xl font-bold">
                                    {workout.reps}
                                  </span>
                                </p>
                                {workout.image ? (
                                  <Image
                                  width={200}
                                  height={100}
                                    src={workout.image}
                                    alt="workout-image"
                                    className="mt-10"
                                  />
                                ) : null}
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
          })
        ) : (
          <h1 className="text-3xl rounded-[30px] bg-lime-300 py-3 my-4 w-fit font-semibold px-6">
            Create a workout plan for today
          </h1>
        )}
      </div>
    </div>
  );
};

export default RecommendedWorkouts;
