import Dashboard from "@/components/dashboard/Dashboard";
import HeroTabs from "@/components/dashboard/Hero-Tabs/HeroTabs";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { redirect, useRouter } from "next/navigation";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const session = await getAuthSession();
  if (!session) {
    redirect("/");
  }

  const getPlanData = await prisma.plan.findMany({
    where: {
      userId: session.user.id,
    },
  });

  const getGoalData = await prisma.goal.findFirst({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 1,
  });
  type GoalDataItem = {
    id: string;
    goal: string;
    calories: string;
    userId: string;
    createdAt: Date;
  };
  const goalData: GoalDataItem[] = getGoalData ? [getGoalData] : [];

  const getTrainerData = await prisma.trainer.findMany({
    where: {
      userId: session.user.id,
    },
  });



  const getBmiData = await prisma.bmi.findFirst({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    select:{
      height: true,
      weight: true,
    },
    take: 1,
  }) ;
  
  const contentStyle2: React.CSSProperties = {
    height: "350px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    borderRadius: "15px",
    border: "none",
    width: "100%",
    position: "relative",
    zIndex: "200",
  };


  return (
    <div className="flex flex-col gap-2  ">
      <Dashboard userData={session?.user} planData={getPlanData} />
      <HeroTabs
        bmiData={getBmiData!}
        planData={getPlanData}
        trainerData={getTrainerData}
        goalData={goalData}
      />
    </div>
  );
};

export default page;
