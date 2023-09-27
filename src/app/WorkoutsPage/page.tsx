import WorkoutPage from "@/components/dashboard/Main/WorkoutPage";
import RecommendedWorkouts from "@/components/dashboard/RecommendedWorkouts";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const session = await getAuthSession();
  if (!session) {
    redirect("/");
  }
  const getPlans = await prisma.plan.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return (
    <div className="p-3">
      <h1 className="text-4xl font-semibold">Recommeded Workouts</h1>
      <WorkoutPage planData={getPlans} />
    </div>
  );
};

export default page;
