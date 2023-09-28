
import React, { useEffect, useState } from "react";
import { Goal, Plan } from "@prisma/client";
import { getAuthSession } from "@/lib/nextauth";
import LatestPlan from "./LatestPlan";
import Workouts from "./Workouts";
import MotivationalQuotes from "./MotivationalQuotes";

type Props = {
  planData: Plan[];
  userData: UserData;
  mockData?: {
    planName: string;
    description: string;
    day:
      | "MONDAY"
      | "TUESDAY"
      | "WEDNESDAY"
      | "THURSDAY"
      | "FRIDAY"
      | "SATURDAY"
      | "SUNDAY";
    fitnessGoals:
      | "LEG_DAY"
      | "BACK_DAY"
      | "FLEXIBILITY"
      | "SHOULDERS_DAY"
      | "BALANCE_TRAINING"
      | "BALANCE_TRAINING"
      | "BALANCE_TRAINING"
      | "CHEST_DAY"
      | "ARMS_DAY"
      | "CARDIO"
      | "STRENGTH_TRAINING";
  };
};
type UserData = {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  height?: string | null | undefined;
  gender?: string | null | undefined;
  age?: string | null | undefined;
  weight?: string | null | undefined;
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

const Dashboard = async ({ planData, userData, mockData}: Props) => {
  const session = await getAuthSession();
  
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1  ">
      <div className="flex flex-col gap-2">
        <MotivationalQuotes userData={userData} />
        <h1 className="xl:text-4xl text-3xl my-3  font-medium whitespace-nowrap">
          Here&apos;s today&apos;s pulse.
        </h1>
        <LatestPlan  userData={userData} planData={planData} />
      </div>

      <div className="">
        <Workouts planData={planData} />
      </div>
    </div>
  );
};

export default Dashboard;
