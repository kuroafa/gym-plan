import Dashboard from "@/components/dashboard/Dashboard";
import HeroTabs from "@/components/dashboard/Hero-Tabs/HeroTabs";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { User } from "@prisma/client";
import { redirect, useRouter } from "next/navigation";
import React from "react";

type Props = {
  
};

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
  type UserData = {
    id: string;
    name: string | null | undefined;
    email: string | null | undefined;
    image: string | null | undefined;
    height: string | null | undefined;
    gender: string | null | undefined;
    age: string | null | undefined;
    weight: string | null | undefined;
  };
  // const userData: UserData = {
  //   id: session?.user.id || "",
  //   name: session?.user.name || null,
  //   email: session?.user.email || null,
  //   image: session?.user.image || null,
  //   height: session?.user?.height || "", // Provide a default value or fetch this information from somewhere
  //   gender: session?.user?.gender || "", // Provide a default value or fetch this information from somewhere
  //   age: session?.user?.age || "", // Provide a default value or fetch this information from somewhere
  //   weight: session?.user?.weight || "", // Provide a default value or fetch this information from somewhere
  // };
  
  return (
    <div className="flex flex-col gap-2  ">
      <Dashboard userData={session?.user} planData={getPlanData} />
      <HeroTabs
        planData={getPlanData}

        trainerData={getTrainerData}
        goalData={goalData}
      />
    </div>
  );
};

export default page;
