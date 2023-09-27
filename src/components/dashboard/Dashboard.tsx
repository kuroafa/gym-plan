import { useRouter } from "next/navigation"; // Changed 'next/navigation' to 'next/router'
import React, { useEffect, useState } from "react";
import { Goal, Plan } from "@prisma/client";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import LatestPlan from "./LatestPlan";
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
  });
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1  ">
      <div className="flex flex-col gap-2">
        <MotivationalQuotes userData={session?.user} />
        <h1 className="xl:text-4xl text-3xl my-3  font-medium whitespace-nowrap">
          Here&apos;s today&apos;s pulse.
        </h1>
        <LatestPlan userData={session?.user} planData={getPlanData} />
      </div>

      <div className="">
        <Workouts planData={planData} />
      </div>
    </div>
  );
};

export default Dashboard;
