"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import RandomWorkout from "@/components/RandomWorkout";
import BMIcalculator from "@/components/dashboard/BMIcalculator";
import Image from "next/image";
import PlanForm from "@/components/forms/PlanForm";
import LatestPlan from "@/components/dashboard/LatestPlan";
import { platform } from "os";
import { Plan } from "@prisma/client";
import { getAuthSession } from "@/lib/nextauth";
import { Button } from "@mui/material";

type Props = {
  planData: Plan[];
};

const Workouts = ({ planData }: Props) => {
  const containerStyle = {
    backgroundImage: `url("/fitnesspeople.png")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
  };

  return (
    <div
      className="grid rounded-[40px] h-[400px] bg-center bg-gray-100 gap-3 grid-cols-1"
      style={containerStyle}
    >
      <div className="rounded-xl "></div>
    </div>
  );
};

export default Workouts;
