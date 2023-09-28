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
    take: 1,
  });

  // Define a custom type for BMI data matching the structure of GoalDataItem
  type BmiDataItem = {
    id: string;
    height: string; // You can replace this with the appropriate field from your BMI data
    weight: string; // You can replace this with the appropriate field from your BMI data
    userId: string;
    createdAt: Date;
  };

  // Create an array with BMI data structured like GoalDataItem
  const bmiData: BmiDataItem[] = getBmiData
    ? [
        {
          id: getBmiData.id,
          height: getBmiData.height, // Replace "field1" with the actual field from your BMI data
          weight: getBmiData.weight, // Replace "field2" with the actual field from your BMI data
          userId: getBmiData.userId,
          createdAt: getBmiData.createdAt,
        },
      ]
    : [];

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
        bmiData={bmiData}
        planData={getPlanData}
        trainerData={getTrainerData}
        goalData={goalData}
      />
    </div>
  );
};

export default page;
