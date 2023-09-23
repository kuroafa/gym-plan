"use client";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { PlanCreation } from "@/lib/type";
import { Button } from "@mui/material";
import { Plan } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

type Props = {
  planData: Plan[];
};

const LatestPlan = ({ planData }: Props) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();

  const getUsers = async (data: PlanCreation) => {
    try {
      setIsGenerating(true);
      const response = await fetch("/api/Mock", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      router.refresh();
      if (result === "plans added successfully") {
        toast.success(`Successfully generated Plans`);
      }
      setIsGenerating(false);
    } catch (error) {
      if (error) {
        toast.error(`Error generating Plans: ${error}`);
      }
    }
  };
  const lessPlans = planData.slice(0, 4);
  const handleLatest = () => {};

  return (
    <div className="  rounded-xl  sm:mt-0 mt-5">
      <h1 className="text-4xl pb-2   font-medium">
        <span className="text-orange-500">Upcoming</span> Workout
      </h1>
      <div>
        {planData.length !== 0 ? (
          <div className="  grid md:grid-cols-2  sm:grid-cols-3 grid-cols-2 gap-x-10">
            {lessPlans.map((plan) => {
              return (
                <>
                  <div
                    key={plan.id}
                    className="p-2 rounded-md  mb-5  cursor-pointer  flex flex-col gap-2 border-l"
                  >
                    <div className="flex items-center  justify-between">
                      <h2 className="text-lg ">
                        <span className="text-3xl font-semibold">
                          {plan.day}
                        </span>
                      </h2>
                    </div>
                    <div className="pl-2 flex flex-col gap-1">
                      <p className="text-xl font-medium ">
                        {plan.fitnessGoals.replace("_", " ")}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <div className="h-[400px] rounded-lg flex flex-col items-center justify-center ">
            <h2 className="text-lg mb-2 font-medium">
              Not sure where to start? Click generate & start your gains!
            </h2>
            <Button
              onClick={() =>{getUsers(planData)}}
              variant="outlined"
              className="text-black"
            >
              Generate Plans
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestPlan;
