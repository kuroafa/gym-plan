import { NextRequest, NextResponse } from "next/server";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import GoalForm from "@/components/forms/GoalForm";
import Bmi from "../Bmi";
import DashboardChart from "../DashboardChart";
import { Goal, Plan, Trainer, User } from "@prisma/client";
import GoalDeleteButton from "@/components/buttons/GoalDeleteButton";
import Link from "next/link";

type UserData = {
  id: string;
  name?: string;
  email?: string;
  image?: string;
  height?: string;
  gender?: string;
  age?: string;
  weight?: string;
};
type GoalData = {
  id: string;
  goal: string;
  calories: string;
  userId: string;
  createdAt: Date;
};
type Props = {
  trainerData: Trainer[];
  userData: UserData;
  goalData: Goal[];
};

const HerotabOne = ({ trainerData, userData }: Props) => {
  const [sessionsValue, setSessionsValue] = React.useState("");
  const [sessionsColor, setSessionsColor] = React.useState("");
  const [goalData, setGoalData] = useState<GoalData | null>(null);
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
          <Bmi
            weight={userData?.weight || ""}
            height={userData?.height || ""}
            age={userData?.age || ""}
            gender={userData?.gender || ""}
          />
          <div className="grid grid-cols-1 px-6 pt-[150px] gap-2">
            <Link
              href="WorkoutsPage"
              className="bg-white text-lg font-semibold rounded-[20px] px-4 py-2 flex justify-between items-center "
            >
              Start workouts <ArrowUpRight size={40} />
            </Link>
          </div>
        </div>
        <div className="rounded-[40px] bg-black px-5 py-5">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">Physical Goals</h1>
            <p className="text-lg font-medium bg-lime-200 rounded-[30px] p-2">
              W/{" "}
              <span className="font-bold text-2xl">
                {userData.weight || "0"}
              </span>
              lb
            </p>
          </div>

          <div className="bg-white rounded-[40px] grid grid-cols-2  mt-5 p-5">
            <p className="text-xl font-medium rounded-full w-fit bg-black text-white px-5 py-3">
              Target
            </p>{" "}
            <p className="xl:text-6xl text-4xl font-bold">
              {goalData?.goal ? goalData.goal.replace("lb", "") : "0"}
            </p>
          </div>
          <div className=" rounded-[40px] grid grid-cols-2 gap-2 mt-4 p-5">
            <p className="text-xl  font-medium rounded-full w-fit bg-white  px-4 py-4">
              Calories
            </p>{" "}
            <p className="xl:text-6xl text-white text-4xl font-bold">
              {goalData?.calories || "0"}
            </p>
          </div>
          <div className="grid grid-cols-2 pt-[30px] gap-2 items-center">
            <GoalForm />
            <GoalDeleteButton id={goalData?.id || ''} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerotabOne;
