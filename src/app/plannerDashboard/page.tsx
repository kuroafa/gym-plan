import PlanHero from "@/components/Main/planner/PlanHero";
import WorkoutForm from "@/components/WorkoutForm";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import { Router } from "next/router";
import React from "react";

type Props = {
  params:{
    id: string;
  }
};

const page = async ({params: {id}}: Props) => {
  const session = await getAuthSession();
  if (!session) {
    redirect("/");
  }
  const getPlan = await prisma.plan.findMany({
    where: {
      id: id,
    },
  });
  return (
    <div className="">
      <div className="flex flex-col mx-6 pt-10 ">
        <h1 className="border-b text-4xl font-semibold">Creating a PLAN</h1>

      </div>
      {/* <WorkoutForm planData={getPlan}/> */}
      <div className="  ">
        <PlanHero />
      </div>
    </div>
  );
};

export default page;
