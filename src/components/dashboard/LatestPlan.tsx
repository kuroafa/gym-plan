"use client";
import { PlanCreation } from "@/lib/type";
import { Button } from "@mui/material";
import { Plan, Trainer, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fitnessGoalTips } from "../utils/Data";
import Loader from "../Loader";

type UserData = {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  height?: string | null | undefined;
  gender?: string | null | undefined;
  age?: string | null | undefined;
  weight?: string | null | undefined;
};

type Props = {
  planData: Plan[];
  userData: UserData
};

const LatestPlan = ({ planData,  userData }: Props) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [tip, setTip] = useState("");
  const router = useRouter();


  const lessPlans = planData.slice(0, 3);

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

  const today = new Date();
  const dayName = today
    .toLocaleDateString("en-US", { weekday: "long" })
    .toUpperCase();
  const hasPlanForToday = planData.some((plan) => plan.day === dayName);

  return (
    <div className="flex flex-col gap-1  rounded-xl mb-4 md:mb-0 sm:mt-0 mt-5">
      {hasPlanForToday ? (
        <>
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
        </>
      ) : (
        <h1 className="text-2xl font-semibold rounded-[30px] bg-slate-200 w-fit px-3 py-2">
          {tip}
        </h1>
      )}

      <h1 className="text-xl pb-3  whitespace-nowrap font-medium">
        <span className=" ">Upcoming</span> Workout
      </h1>
      <div>
        {planData.length !== 0 ? (
          <div className="  grid xl:grid-cols-3 gap-y-3  grid-cols-2 gap-x-10 mt-5">
            {lessPlans.map((plan) => {
              return (
                <>
                  <div
                    key={plan.id}
                    className="rounded-[40px]  mb-5 relative cursor-pointer  flex items-center  py-2    gap-2 "
                  >
                    <div className="rounded-full bg-lime-200 left-0 absolute px-6 py-4">
                      <h2 className="text-2xl font-bold">
                        <span className="xl:text-xl text-lg">
                          {plan.day.slice(0, 1)}
                        </span>
                      </h2>
                    </div>
                    <div className="pl-[70px] flex flex-col justify-end items-end gap-1">
                      <p className=" text-md font-bold pr-3">
                        {plan.fitnessGoals
                          .replace("_TRAINING", "")
                          .replace("_", " ")}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        ) : (
        
          <div className="h-[300px] " >  
          {isGenerating ? <div className="flex justify-center items-center"><Loader/> </div>: <div className="h-[400px] rounded-lg flex flex-col items-center justify-center ">
              <h2 className="text-lg mb-2 font-medium">
                Not sure where to start? Click generate & start your gains!
              </h2>
           
                Generate A new plan on the Plans tab below!
             
            </div> }
            
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestPlan;
