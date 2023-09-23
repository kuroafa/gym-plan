import BMIcalculator from "@/components/BMIcalculator";
import Dashboard from "@/components/Dashboard";
import DashboardChart from "@/components/DashboardChart";
import DashboardData1 from "@/components/DashboardData1";
import DashboardData2 from "@/components/DashboardData2";
import LatestPlan from "@/components/LatestPlan";
import LocalWeather from "@/components/LocalWeather";
import Map from "@/components/Map";
import PlanGoal from "@/components/PlanGoal";
import PlanPage from "@/components/PlanPage";
import PlayWorkout from "@/components/PlayWorkout";
import RandomWorkout from "@/components/RandomWorkout";
import RecommendedWorkouts from "@/components/RecommendedWorkouts";
import Stats from "@/components/Stats";
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
  const getGoalData = await prisma.goal.findMany({
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
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3">
      {/* big half */}
      <div className="lg:col-span-3 md:col-span-2">
        <Dashboard goalData={getGoalData} planData={getPlanData} />

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-2 mt-3 ">
          <PlanPage planData={getPlanData} />

          <DashboardChart />
          {/* <RandomWorkout planData={getPlanData} /> */}
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-2 ">
          <DashboardData1 />

          <Stats planData={getPlanData} />
        </div>
      </div>
      {/* small half */}

      <div className="border-l pl-2  ">
        <BMIcalculator />
        <LatestPlan planData={getPlanData} />

        <div className="grid  mt-3  gap-4 grid-cols-1">
          <div className=" relative z-[200]">
            <Carousel autoplay effect="fade">
              <div className="grid w-full relative  z-[200] md:grid-cols-2 grid-cols-1 gap-5">
                <img style={contentStyle2} src="/slide1.jpg" alt="slide1" />
              </div>{" "}
              <div className="grid relative z-[200] md:grid-cols-2 grid-cols-1 gap-5">
                <img style={contentStyle2} src="/slide2.jpg" alt="slide1" />
              </div>{" "}
              <div className="grid relative z-[200] md:grid-cols-2 grid-cols-1 gap-5">
                <img style={contentStyle2} src="/slide3.jpg" alt="slide1" />
              </div>{" "}
              <div className="grid relative z-[200] md:grid-cols-2 grid-cols-1 gap-5">
                <img style={contentStyle2} src="/slide4.jpg" alt="slide1" />
              </div>{" "}
              <div className="grid relative  z-[200] md:grid-cols-2 grid-cols-1 gap-5">
                <img style={contentStyle2} src="/slide5.jpg" alt="slide1" />
              </div>
            </Carousel>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default page;
