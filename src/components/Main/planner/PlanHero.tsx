import React from "react";
import AllPlans from "./AllPlans";
import FavePlans from "./Workouts";
import { Plan, Workout } from "@prisma/client";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import Workouts from "./Workouts";
import PlanForm from "@/components/PlanForm";
import { redirect } from "next/navigation";

type Props = {
  planData: Pick<Plan, "planName" | "id" | "isFave" | "userId">;
  workoutData: Pick<
    Workout,
    "id" | "day" | "numberPerSet" | "planId" | "sets" | "workOutName"
  >;
};

const PlanHero = async ({ planData, workoutData }: Props) => {
  const session = await getAuthSession();
  const fetchPlans = await prisma.plan.findMany({
    where: {
      userId: session?.user.id,
    },
  });
  const fetchWorkouts = await prisma.workout.findMany({
    where: {
      planId: session?.user.id,
    },
  });
  return (
    <div className="">
      <div className=" ">
        <div className=" ">
          <AllPlans planData={fetchPlans} />
        </div>
      </div>
      {/* <div>
        <Workouts workoutData={fetchWorkouts} />
      </div> */}
    </div>
  );
};

export default PlanHero;
