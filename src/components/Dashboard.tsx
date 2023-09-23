"use client";
import { useRouter } from "next/navigation"; // Changed 'next/navigation' to 'next/router'
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Goal, Plan } from "@prisma/client";
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
import Map from "./Map";
import PlanGoal from "./PlanGoal";
import BMIcalculator from "./BMIcalculator";

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
const Dashboard = ({ planData, goalData }: Props) => {
  return (
    <div className="relative">
     

          <Workouts planData={planData} />
  
    </div>
  );
};

export default Dashboard;
