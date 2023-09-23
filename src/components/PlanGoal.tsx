import React from "react";
import PlanForm from "./PlanForm";
import GoalForm from "./GoalForm";
import { Goal } from "@prisma/client";
import { prisma } from "@/lib/db";
import Image from "next/image";

type Props = {
  goalData: Goal[];
};

const PlanGoal = ({ goalData }: Props) => {
  return (
    <>
      <div>
        <div className="flex items-center gap-2 pr-5 ">
          <h1 className="text-6xl font-extrabold mb-2 z-[50] relative ">
            Goals
          </h1>
          <img className="w-10" src="/checklist.png" alt="checked" />
        </div>
        <p className="text-xl font-medium mb-2">Create Goals and stay on top of your MISSION.</p>
        <GoalForm />
      </div>
    </>
  );
};

export default PlanGoal;
