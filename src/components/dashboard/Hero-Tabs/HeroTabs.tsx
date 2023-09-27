"use client";

import React, { useEffect } from "react";
import DashboardChart from "../DashboardChart";
import { Goal, Plan, Trainer, User } from "@prisma/client";
import BMIcalculator from "../BMIcalculator";
import Bmi from "../Bmi";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import GoalForm from "../../forms/GoalForm";
import HerotabOne from "./HerotabOne";
import HerotabTwo from "./HerotabTwo";
import HerotabThree from "./HerotabThree";
import HerotabFour from "./HerotabFour";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  trainerData: Trainer[];
  userData: Pick<User, "age" | "gender" | "height" | "weight">;
  planData: Pick<
    Plan,
    "day" | "description" | "fitnessGoals" | "id" | "planName" | "userId"
  >;
  goalData: Goal[];
};

const HeroTabs = ({ trainerData, userData, planData, goalData }: Props) => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="grid grid-cols-1">
      <Tabs defaultValue="one" className="">
        <TabsList className="my-5 text-2xl">
          <TabsTrigger className="sm:text-lg" value="one">For You</TabsTrigger>
          <TabsTrigger className="sm:text-lg" value="two">Recommended</TabsTrigger>
          <TabsTrigger className="sm:text-lg" value="three">Plans</TabsTrigger>
          <TabsTrigger className="sm:text-lg" value="four">Sessions</TabsTrigger>
        </TabsList>
        <TabsContent className="pl-7" value="one">
          {" "}
          <HerotabOne
            goalData={goalData}
            trainerData={trainerData}
            planData={planData}
            userData={userData}
          />
        </TabsContent>
        <TabsContent className="pl-7" value="two">
          <HerotabTwo planData={planData} />
        </TabsContent>
        <TabsContent className="" value="three">
          <HerotabThree planData={planData} />
        </TabsContent>
        <TabsContent  value="four">
          <HerotabFour trainerData={trainerData} planData={planData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HeroTabs;
