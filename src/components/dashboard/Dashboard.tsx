import { useRouter } from "next/navigation"; // Changed 'next/navigation' to 'next/router'
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Goal, Plan } from "@prisma/client";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { Card } from "../ui/card";
import BuildingMuscle from "../utils/BuildingMuscle";
import GymWorkout from "../utils/GymWorkout";
import OutDoorWorkout from "../utils/OutDoorworkout";
import DashboardChart from "./DashboardChart";
import LatestPlan from "../LatestPlan";
import RandomWorkout from "../RandomWorkout";
import WorkoutChart2 from "../WorkoutChart2";
import PlanPage from "../PlanPage";
import Map from "../Map";
import PlanGoal from "../PlanGoal";
import BMIcalculator from "./BMIcalculator";
import Workouts from "./Workouts";
import MotivationalQuotes from "./MotivationalQuotes";


type Props = {
  planData: Plan[];
  goalData: Goal[];
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


const Dashboard = async ({ planData, goalData }: Props) => {
  const session = await getAuthSession();
  const getPlanData = await prisma.plan.findMany({
  where: {
    userId: session?.user.id,
  },
})
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1  px-5">
      <div>
        <h1 className="xl:text-6xl text-4xl mb-2 font-medium gap-2 "><MotivationalQuotes userData={session?.user}/></h1>
        <h1 className="xl:text-5xl text-4xl mb-5 font-medium whitespace-nowrap">Here&apos;s today&apos;s pulse.</h1>
        <LatestPlan userData={session?.user} planData={getPlanData} />
      </div>

      <div className="">
        <Workouts planData={planData} />
      </div>
      
    </div>
  );
};

export default Dashboard;
