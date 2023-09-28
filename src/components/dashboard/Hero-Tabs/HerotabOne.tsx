import { NextRequest, NextResponse } from "next/server";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Activity, ArrowUpRight } from "lucide-react";
import GoalForm from "@/components/forms/GoalForm";

import DashboardChart from "../DashboardChart";
import { Bmi, Goal, Plan, Trainer, User } from "@prisma/client";
import GoalDeleteButton from "@/components/buttons/GoalDeleteButton";
import Link from "next/link";
import BMIform from "@/components/forms/BMIform";
import BmiCal from "../BmiCal";

type UserData = {
  id: string;
  name: string | null | undefined; // Provide a default value
  email: string | null | undefined; // Provide a default value
  height: string | null | undefined; // Provide a default value
  gender: string | null | undefined; // Provide a default value
  age: string | null | undefined; // Provide a default value
  weight: string | null | undefined; // Provide a default value
};

type GoalData = {
  id: string;
  goal: string;
  calories: string;
  userId: string;
  createdAt: Date;
};
type GoalDataItem = {
  id: string;
  goal: string;
  calories: string;
  userId: string;
  createdAt: Date;
};
type Gender = {
  male: string,
  female: string
}


type Props = {
  trainerData: Trainer[];
  goalData: GoalDataItem[];
  bmiData: {
    height: string;
    weight: string;
  } ;
};

const HerotabOne = ({ trainerData, goalData, bmiData }: Props) => {
  const [sessionsValue, setSessionsValue] = React.useState("");
  const [sessionsColor, setSessionsColor] = React.useState("");
  const workoutSessions = trainerData.length.toString();
  const parsedWorkouts = parseInt(workoutSessions);

  useEffect(() => {
    if (parsedWorkouts < 5) {
      setSessionsValue("Low");
      setSessionsColor("bg-yellow-200");
    } else if (parsedWorkouts >= 5 && parsedWorkouts <= 10) {
      setSessionsValue("Medium");
      setSessionsColor("bg-green-200");
    } else if (parsedWorkouts > 10) {
      setSessionsValue("Busy");
      setSessionsColor("bg-red-200");
    } else {
      setSessionsValue("Calm");
      setSessionsColor("");
    }
  }, [parsedWorkouts]);

  const today = new Date();
  const dayName = today
    .toLocaleDateString("en-US", { weekday: "long" })
    .toUpperCase();

  return (
    <div className="grid xl:grid-cols-4 gap-5 -ml-6">
      <div className="col-span-2 rounded-[40px] bg-gray-100 px-5 py-5">
        <div className="">
          <div className="flex items-center justify-between">
            <h2 className="md:text-xl text-lg font-semibold">
              Workout Sessions
            </h2>
            <p
              className={`${sessionsColor} px-3 py-1 font-medium text-xl rounded-xl`}
            >
              {sessionsValue}
            </p>
          </div>
          {parseInt(workoutSessions) === 1 ? (
            <p className="md:text-5xl text-4xl mb-2">
              {workoutSessions} Session
            </p>
          ) : (
            <p className="md:text-5xl text-4xl mb-2">
              {workoutSessions} Sessions
            </p>
          )}
        </div>
        <div className="grid grid-cols-1">
          <DashboardChart trainerData={trainerData} />
        </div>
        <div className="bg-indigo-100 group rounded-[30px] p-2">
          <p className="flex items-center gap-2">
            <div className="  gap-3 items-center relative flex">
              <Image
                src="/up-arrows.png"
                width={30}
                height={30}
                alt="up"
                className="group-hover:-translate-y-1 transition-transform duration-200 ease-in-out transform"
              />
              {trainerData.some((train) => {
                const date = new Date(train.date);
                const DateName = date
                  .toLocaleDateString("en-US", { weekday: "long" })
                  .toUpperCase();
                return DateName === dayName;
              }) ? (
                trainerData.map((train) => {
                  const date = new Date(train.date);
                  const DateName = date
                    .toLocaleDateString("en-US", { weekday: "long" })
                    .toUpperCase();
                  if (DateName === dayName) {
                    return (
                      <div key={train.date}>
                        <h1 className="md:text-md font-semibold">
                          New Workout session with {train.client.toUpperCase()}{" "}
                          @{train.time} today.
                        </h1>
                      </div>
                    );
                  }
                  return null;
                })
              ) : (
                <div>
                  <h1>No sessions today</h1>
                </div>
              )}
            </div>
          </p>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 sm:grid-cols-2 col-span-2 gap-5">
        <div className="rounded-[40px] bg-indigo-500 pb-5">
          <BmiCal
        bmiData={bmiData}
          />
         
          <div className=" grid-cols-1 grid px-6 pt-[100px] gap-1"> 
          <div className="" >
            
          <BMIform/>
          
          </div>
           
          </div>
        </div>
        <div className="rounded-[40px] bg-black px-5 py-5">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">Physical Goals</h1>
            <p className="text-lg font-medium bg-lime-200 rounded-[30px] p-2">
              W/{" "}
              <span className="font-bold text-2xl">
               
              </span>
              lb
            </p>
          </div>
          {goalData.length > 0 ? (
            <div>
              {goalData.map((goal) => {
                return (
                  <div key={goal.id}>
                    <div>
                      <div className="bg-white rounded-[40px] grid grid-cols-2 mt-5 p-5">
                        <p className="text-xl font-medium rounded-full w-fit bg-black text-white px-5 py-3">
                          Target
                        </p>{" "}
                        <p className="xl:text-6xl text-4xl font-bold">
                          {goal.goal.replace("lb", "")}
                        </p>
                      </div>
                      <div className="rounded-[40px] grid grid-cols-2 gap-2 mt-4 p-5">
                        <p className="text-xl font-medium rounded-full w-fit bg-white px-4 py-4">
                          Calories
                        </p>{" "}
                        <p className="xl:text-6xl text-white text-4xl font-bold">
                          {goal.calories}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 pt-[55px] gap-2 items-center">
                      <GoalForm />  <GoalDeleteButton id={goal.id} /> 
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <div>
                <div className="bg-white rounded-[40px] grid grid-cols-2 mt-5 p-5">
                  <p className="text-xl font-medium rounded-full w-fit bg-black text-white px-5 py-3">
                    Target
                  </p>{" "}
                  <p className="xl:text-6xl text-4xl font-bold"></p>
                </div>
                <div className="rounded-[40px] grid grid-cols-2 gap-2 mt-4 p-5">
                  <p className="text-xl font-medium rounded-full w-fit bg-white px-4 py-4">
                    Calories
                  </p>{" "}
                  <p className="xl:text-6xl text-white text-4xl font-bold"></p>
                </div>
                <div className="grid grid-cols-1  pt-[30px] gap-2 items-center">
                  <GoalForm /> 
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HerotabOne;
