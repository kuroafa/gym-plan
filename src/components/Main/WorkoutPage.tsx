"use client";
import { useRouter } from "next/navigation"; // Use 'next/router' instead of 'next/navigation'
import React, { useState, useEffect } from "react"; // Add 'useEffect' import
import { Card } from "../ui/card";
import { ClipboardEdit, Plus } from "lucide-react";
import OutDoorWorkout from "../utils/OutDoorworkout";
import GymWorkout from "../utils/GymWorkout";
import BuildingMuscle from "../utils/BuildingMuscle";
import { RandomWorkouts } from "../utils/Data";
import { Plan } from "@prisma/client";
import DashboardChart from "../DashboardChart";
import WorkoutChart from "../WorkoutChart";
import WorkoutChart2 from "../WorkoutChart2";

type Props = {
  planData: Plan[];
};

const WorkoutPage = ({ planData }: Props) => {
  const [deleteText, setDeleteText] = useState(false);

  const handleTextDelete = () => {
    setDeleteText((current) => !current);
  };

  return (
    <>
      <div>
        <div className="mb-5">
          <h1 className="text-4xl my-5 pb-1 font-medium border-b border-lime-500 w-fit ">
            Workout Any Where
          </h1>
          <div className="grid lg:grid-cols-6  sm:grid-cols-3 grid-cols-2 md:gap-10 gap-2  ">
            <div className=" flex flex-col w-fit  gap-2  border-s-2  cursor-pointer  p-3 ">
              <div className="flex items-center gap-2  ">
                <h1 className="text-5xl font-medium ">Home</h1>
                <div className="mt-5">
                  <BuildingMuscle />
                </div>
              </div>
              <p className="font-medium text-2xl whitespace-nowrap">
                Home workout
              </p>
              {/* <img className="w-20 h-20   rounded-full p-4" src="/workout.png" alt="muscle" /> */}
            </div>
            <div
              className=" flex 
            flex-col gap-2 border-s-2  cursor-pointer  p-3 "
            >
              <div className="flex items-center  gap-2 ">
                <h1 className="text-5xl font-medium  ">Gym </h1>

                <div className="mt-5">
                  <GymWorkout />
                </div>
              </div>
              <p className="font-medium text-2xl ">Machines </p>
              {/* <img className="w-20 h-20 rounded-full p-2" src="/gym.png" alt="muscle" /> */}
            </div>
            <div className=" flex flex-col  gap-2 border-s-2  cursor-pointer  p-3 ">
              <div className="flex gap-2 items-center ">
                <h1 className="text-5xl font-medium  ">Outdoor</h1>

                <div className="mt-5">
                  <OutDoorWorkout />
                </div>
              </div>
              <p className="font-medium text-2xl whitespace-nowrap">
                Parks / Running{" "}
              </p>
              {/* <img className="w-20 h-20 rounded-full p-2" src="/gym.png" alt="muscle" /> */}
            </div>
            <div className=" flex flex-col  gap-2 border-s-2  cursor-pointer  p-3 ">
              <div className="flex gap-2 items-center ">
                <h1 className="text-5xl font-medium  ">Outdoor</h1>

                <div className="mt-5">
                  <OutDoorWorkout />
                </div>
              </div>
              <p className="font-medium text-2xl whitespace-nowrap">
                Parks / Running{" "}
              </p>
              {/* <img className="w-20 h-20 rounded-full p-2" src="/gym.png" alt="muscle" /> */}
            </div>
            <div className=" flex flex-col  gap-2 border-s-2  cursor-pointer  p-3 ">
              <div className="flex gap-2 items-center ">
                <h1 className="text-5xl font-medium  ">Outdoor</h1>

                <div className="mt-5">
                  <OutDoorWorkout />
                </div>
              </div>
              <p className="font-medium text-2xl whitespace-nowrap">
                Parks / Running{" "}
              </p>
              {/* <img className="w-20 h-20 rounded-full p-2" src="/gym.png" alt="muscle" /> */}
            </div>
            <div className=" flex flex-col  gap-2 border-s-2  cursor-pointer  p-3 ">
              <div className="flex gap-2 items-center ">
                <h1 className="text-5xl font-medium  ">Outdoor</h1>

                <div className="mt-5">
                  <OutDoorWorkout />
                </div>
              </div>
              <p className="font-medium text-2xl whitespace-nowrap">
                Parks / Running{" "}
              </p>
              {/* <img className="w-20 h-20 rounded-full p-2" src="/gym.png" alt="muscle" /> */}
            </div>
          </div>
        </div>
        <div>
          <div className="grid md:grid-cols-2 rounded-xl grid-cols-1  gap-10">
            <div className="relative  border shadow-2xl shadow-black rounded-xl">
              {" "}
              <WorkoutChart2 />
            </div>
            <div className=" shadow-2xl relative w-screen- shadow-black rounded-xl   ">
              <WorkoutChart />
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex items-start flex-col mt-5">
            <h1 className="text-4xl font-medium pt-5 border-b border-lime-500 pb-1 w-fit">
              Workouts
            </h1>
            <button
              className="text-2xl border-b pt-5"
              onClick={handleTextDelete}
            >
              {deleteText ? 'Undo' : 'Description'}
            </button>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-5">
            {RandomWorkouts.map((work, id) => {
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
                          {deleteText && (
                            <p className=" text-xl font-medium ">
                              Description:
                              <span className="font-normal">
                                {" "}
                                {work.description}
                              </span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div>
                      <img className="" alt={work.exercise} src={work.image} />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutPage;
