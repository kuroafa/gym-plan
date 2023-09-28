"use client";
import React from "react";
import {  Bmi, Plan, Trainer, User } from "@prisma/client";
import GoalForm from "../../forms/GoalForm";
import HerotabOne from "./HerotabOne";
import HerotabTwo from "./HerotabTwo";
import HerotabThree from "./HerotabThree";
import HerotabFour from "./HerotabFour";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



type GoalDataItem = {
  id: string;
  goal: string;
  calories: string;
  userId: string;
  createdAt: Date;
};
type BmiDataItem = {
  id: string;
  height: string; // You can replace this with the appropriate field from your BMI data
  weight: string; // You can replace this with the appropriate field from your BMI data
  userId: string;
  createdAt: Date;
};
type Props = {
  trainerData: Trainer[];
  planData: Plan[];
  goalData: GoalDataItem[]; 
  bmiData: BmiDataItem[]
  
};


const HeroTabs = ({ trainerData, planData, goalData, bmiData }: Props) => {
 

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
          <HerotabOne
          bmiData={bmiData}
            goalData={goalData}
            trainerData={trainerData}
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
