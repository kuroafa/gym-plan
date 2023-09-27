"use client";
import React from "react";
import {  Plan, Trainer } from "@prisma/client";
import GoalForm from "../../forms/GoalForm";
import HerotabOne from "./HerotabOne";
import HerotabTwo from "./HerotabTwo";
import HerotabThree from "./HerotabThree";
import HerotabFour from "./HerotabFour";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

type Props = {
  trainerData: Trainer[];
  userData: UserData
  planData: Plan[],
  goalData: { calories: string; goal: string };
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
          <HerotabFour trainerData={trainerData}  />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HeroTabs;
