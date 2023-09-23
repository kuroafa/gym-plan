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
       
       
        
        <div>
          <div className="flex items-start flex-col mt-5">
            <h1 className="text-6xl font-medium pt-5 border-b border-lime-500 pb-1 w-fit">
              Workouts
            </h1>
            <button
              className="text-2xl border-b pt-5"
              onClick={handleTextDelete}
            >
              {deleteText ? 'Clear details' : 'Details'}
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
