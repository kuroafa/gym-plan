import Dashboard from "@/components/Dashboard";
import LatestPlan from "@/components/LatestPlan";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { Plan, } from "@prisma/client";
import { redirect, useRouter } from "next/navigation";
import React from "react";

type Props = {
  planData: Pick<Plan, 'day'|'description'|'fitnessGoals'|'id'| 'planName'| 'userId'>;
};

const page = async ({ planData }: Props) => {
  const session = await getAuthSession();
  if (!session) {
    redirect("/");
  }
  const getPlanData = await prisma.plan.findMany({
    where: {
      userId: session.user.id,
    },
  });


  return(
    <div className="">
      
      <Dashboard  planData={getPlanData} />
      
    </div>
  ) 
};

export default page;
