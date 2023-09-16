import Dashboard from "@/components/Dashboard";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { Plan, Workout } from "@prisma/client";
import { redirect, useRouter } from "next/navigation";
import React from "react";

type Props = {
  planData: Plan;
  workOutdata: Workout
};

const page = async ({ planData, workOutdata }: Props) => {
  const session = await getAuthSession();
  if (!session) {
    redirect("/");
  }
  const getPlanData = await prisma.plan.findMany({
    where: {
      userId: session.user.id,
    },
  });
  const getWorkoutData = await prisma.workout.findMany({
    
  });
  //  await prisma.plan.deleteMany({})
  //  await prisma.workout.deleteMany({})
  return(
    <div className="">
      <Dashboard workoutData={getWorkoutData} planData={getPlanData} />
    </div>
  ) 
};

export default page;
