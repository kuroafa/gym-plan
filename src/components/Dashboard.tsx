"use client";
import { useRouter } from "next/navigation"; // Changed 'next/navigation' to 'next/router'
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Plan } from "@prisma/client";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { Card } from "./ui/card";
import AllPlans from "./Main/planner/AllPlans";
import Workouts from "./Main/planner/Workouts";
import BuildingMuscle from "./utils/BuildingMuscle";
import GymWorkout from "./utils/GymWorkout";
import OutDoorWorkout from "./utils/OutDoorworkout";
import DashboardChart from "./DashboardChart";
import LatestPlan from "./LatestPlan";
import RandomWorkout from "./RandomWorkout";
import WorkoutChart2 from "./WorkoutChart2";
import PlanPage from "./PlanPage";

type Props = {
  planData: Plan[];
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.6)", 
  zIndex: 1,

};
const Dashboard = ({ planData }: Props) => {
  return (
    <div className="relative">
     
      <div className="grid lg:grid-cols-3 relative z-[200] pt-5 -mt-5 grid-cols-1 gap-3">
          
        {/* big half*/}
        <div className="col-span-2 flex flex-col gap-6">
          {/* Content for the big half */}
          <Workouts planData={planData} />
          <PlanPage planData={planData}/>
        </div>
        {/* small half*/}
        <div className="flex border-l pl-3 flex-col gap-4 relative">
          {/* Content for the small half */}
          <div className="mb-3">
            <LatestPlan planData={planData}/>
          </div>
          <RandomWorkout />
          <div className="mt-5"><DashboardChart/></div>
          {/* <WorkoutChart2/> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
