"use client";
import { useRouter } from "next/navigation"; // Use 'next/router' instead of 'next/navigation'
import React, { useState, useEffect } from "react"; // Add 'useEffect' import
import { Card } from "../../ui/card";
import { ClipboardEdit, Plus } from "lucide-react";
import OutDoorWorkout from "../utils/OutDoorworkout";
import GymWorkout from "../GymWorkout";
import BuildingMuscle from "../BuildingMuscle";
import { RandomWorkouts, allWorkouts, fitnessGoalTips } from "../../utils/Data";
import { Plan } from "@prisma/client";
import DashboardChart from "../DashboardChart";
import WorkoutChart from "../../WorkoutChart";
import WorkoutChart2 from "../../WorkoutChart2";
import RecommendedWorkouts from "../RecommendedWorkouts";

type Props = {
  planData: Plan[];
};

const WorkoutPage = ({ planData }: Props) => {
  const [tip, setTip] = useState("");

  const today = new Date();
  const dayName = today
    .toLocaleDateString("en-US", { weekday: "long" })
    .toUpperCase();

  useEffect(() => {
    if (planData.length > 0) {
      const today = new Date();
      const dayName = today
        .toLocaleDateString("en-US", { weekday: "long" })
        .toUpperCase();

      // Find the first plan for today (if any) and set the tip based on its fitness goal
      const todaysPlan = planData.find((plan) => plan.day === dayName);
      if (todaysPlan) {
        const tipForToday = fitnessGoalTips[todaysPlan.fitnessGoals];
        if (tipForToday) {
          setTip(tipForToday);
        } else {
          setTip("Remember to stay hydrated!");
        }
      } else {
        setTip("No workout scheduled for today.");
      }
    } else {
      setTip("No workout data available.");
    }
  }, [planData]);
  return (
    <>
      <div className="flex flex-col gap-2">
        {planData.map((plan) => {
          return (
            <>
              <div key={plan.id}>
                {plan.day === dayName && (
                  <p className="md:text-xl text-lg mt-5 font-medium">
                    You have{" "}
                    <span className="bg-indigo-200 rounded-xl p-1">
                      {plan.fitnessGoals.replace("day", "").replace("_", " ")}
                    </span>{" "}
                    Workout today, {tip}
                  </p>
                )}
              </div>
            </>
          );
        })}
        <RecommendedWorkouts planData={planData} />
        <div>
          <div className="flex items-start flex-col ">
            <h1 className="text-6xl font-medium border-b border-lime-500 pb-1 w-fit">
              Workouts
            </h1>
          </div>
          <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 pt-5">
            {RandomWorkouts.map((work, id) => {
              return (
                <>
                  <div
                    key={id}
                    className=" border-l flex-col md:flex-row justify-between p-1"
                  >
                    <div className="pl-3 pt-2">
                      <div className="px- flex flex-col gap-2">
                        <p className="md:text-2xl text-4xl font-medium ">
                          Workout: {work.exercise}
                        </p>
                        <div>
                          <p className=" text-xl font-medium ">
                            Description:
                            <span className="font-normal">
                              {" "}
                              {work.description}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img
                        className="md:w-[100%] md:h-[400px] "
                        alt={work.exercise}
                        src={work.image}
                      />
                    </div>
                    {work.atHome ? (
                      <div className="grid grid-cols-2 text-center gap-5 p-3">
                        <p className="bg-lime-400 rounded-[30px] font-bold p-3 ">
                          Home workout
                        </p>
                        <p className="bg-lime-400 rounded-[30px] font-bold p-3 ">
                          {work.difficulty}
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 text-center gap-5 p-3">
                        <p className="bg-indigo-400 rounded-[30px] font-bold text-white p-3 ">
                          Gym workout
                        </p>
                        <p className="bg-indigo-400 rounded-[30px] font-bold text-white p-3 ">
                          {work.difficulty}
                        </p>
                      </div>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 pt-5">
          {allWorkouts.map((work, id) => {
            return (
              <>
                <div
                  key={id}
                  className=" border-l flex-col md:flex-row justify-between p-1"
                >
                  <div className="pl-3 pt-2">
                    <div className="px- flex flex-col gap-2">
                      <p className="md:text-4xl text-4xl font-medium ">
                        Workout: {work.exercise}
                      </p>
                      <div>
                        <p className=" text-xl font-medium ">
                          Description:
                          <span className="font-normal">
                            {" "}
                            {work.description}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    {work.image ? (
                      <img
                        className="md:w-[100%] md:h-[360px] "
                        alt={work.exercise}
                        src={work.image}
                      />
                    ) : null}
                  </div>
                  {work.atHome ? (
                    <div className="grid grid-cols-2 text-center gap-5 p-3">
                      <p className="bg-lime-400 rounded-[30px] font-bold p-3 ">
                        Home workout
                      </p>
                      <p className="bg-lime-400 rounded-[30px] font-bold p-3 ">
                        {work.difficulty}
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 text-center gap-5 p-3">
                      <p className="bg-indigo-400 rounded-[30px] font-bold text-white p-3 ">
                        Gym workout
                      </p>
                      <p className="bg-indigo-400 rounded-[30px] font-bold text-white p-3 ">
                        {work.difficulty}
                      </p>
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WorkoutPage;
