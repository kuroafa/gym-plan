
import { WorkoutCreation } from "@/lib/type";
import { useRouter } from "next/navigation"; // Changed 'next/navigation' to 'next/router'
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ExerciseType, Plan, Workout } from "@prisma/client";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { Card } from "./ui/card";
import AllPlans from "./Main/planner/AllPlans";
import Workouts from "./Main/planner/Workouts";

type Props = {
  workoutData: Workout[];
  planData: Plan[];
};

const Dashboard = async ({ workoutData, planData }: Props) => {
  const getPlans = await prisma.plan.findMany({

  })


  return (
    <div>
      <div className=" flex ml-40">
        {/* <Button onClick={()=>clearUsers}>delete</Button>
        <Button onClick={getWorkouts}> get workouts</Button> */}
      </div>
      <Workouts workoutData={workoutData} />
      <AllPlans planData={getPlans} workoutData={workoutData} />
    </div>
  );
};

export default Dashboard;
