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
  let goalData: { calories: string; goal: string } = { calories: "0", goal: "0lb" };
  let goalCreated = false;
  
  const getGoalData = await prisma.goal.findFirst({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 1,
  });
  
  if (getGoalData) {
    goalData = getGoalData;
    goalCreated = true;
  }
  

  const getTrainerData = await prisma.trainer.findMany({
    where: {
      userId: session.user.id,
    },
  });
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
      <Dashboard planData={getPlanData} />
      <HeroTabs
        planData={getPlanData}
        userData={session?.user}
        trainerData={getTrainerData}
        goalData={goalData}
      />
    </div>
  );
};

export default page;
