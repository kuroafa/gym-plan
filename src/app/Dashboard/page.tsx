import BMIcalculator from "@/components/dashboard/BMIcalculator";
import Dashboard from "@/components/dashboard/Dashboard";
import DashboardChart from "@/components/dashboard/DashboardChart";
import DashboardData1 from "@/components/dashboard/DashboardData1";
import DashboardData2 from "@/components/dashboard/DashboardData2";
import HeroTabs from "@/components/dashboard/Hero-Tabs/HeroTabs";
import LatestPlan from "@/components/LatestPlan";
import LocalWeather from "@/components/LocalWeather";
import Map from "@/components/Map";
import PlanGoal from "@/components/PlanGoal";
import PlanPage from "@/components/PlanPage";
import PlayWorkout from "@/components/PlayWorkout";
import RandomWorkout from "@/components/RandomWorkout";
import RecommendedWorkouts from "@/components/RecommendedWorkouts";
import Stats from "@/components/Stats";
import WorkoutSessions from "@/components/WorkoutSessions";
import WorkoutsPlayer from "@/components/WorkoutsPlayer";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { Plan } from "@prisma/client";
import { Carousel } from "antd";
import { redirect, useRouter } from "next/navigation";
import React from "react";

type Props = {
  planData: Pick<
    Plan,
    "day" | "description" | "fitnessGoals" | "id" | "planName" | "userId"
  >;
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
  const getGoalData = await prisma.goal.findFirst({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: 'desc', 
    },
    take: 1, 
  });
  
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
      <Dashboard goalData={getGoalData} planData={getPlanData} />
      <HeroTabs
        planData={getPlanData}
        userData={session?.user}
        trainerData={getTrainerData}
        goalData={getGoalData}
      />
      {/* <PlanPage planData={getPlanData} /> */}
    </div>
  );
};

export default page;
{
  /* big half
      <div className="lg:col-span-3 md:col-span-2">
       
     
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-2 mt-5 border-l p-3 ">
        
         <WorkoutSessions trainerData={getTrainerData} />
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-2 border-r p-3">
           
        <DashboardChart />
        </div>
      </div>
   

      <div className=" pl-2  border-l "> 
       <BMIcalculator />
       <LatestPlan planData={getPlanData} /> 
        
      <Stats planData={getPlanData} />
  

       
        
      </div> */
}
