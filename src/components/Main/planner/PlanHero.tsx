'use client'
import React from "react";
import AllPlans from "./AllPlans";
import FavePlans from "./Workouts";
import { Plan, Workout } from "@prisma/client";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import Workouts from "./Workouts";
import PlanForm from "@/components/PlanForm";
import { redirect } from "next/navigation";

type Props = {
  planData: Plan[]
  workoutData: Pick<
    Workout,
    "id" | "day" | "numberPerSet" | "planId" | "sets" | "workOutName"
  >;
};

const PlanHero =  ({ planData, workoutData }: Props) => {

  return (
    <div className="">
      <div>
       
      </div>
    </div>
  );
};

export default PlanHero;
