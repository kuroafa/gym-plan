"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import RandomWorkout from "@/components/RandomWorkout";
import BMIcalculator from "@/components/dashboard/BMIcalculator";
import Image from "next/image";
import PlanForm from "@/components/forms/PlanForm";
import LatestPlan from "@/components/LatestPlan";
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
      <div className="rounded-xl " >
        <button className="absolute flex justify-between items-center w-60 bottom-5 left-5 bg-black bg-opacity-10 backdrop-blur-2xl px-4 py-3 rounded-lg text-black font-semibold text-xl cursor-pointer group">
          Start Planning
          <Image
            src="/up-right-arrow.png"
            className="transition-transform duration-300 transform scale-100 group-hover:scale-y-50"
            width={20}
            height={40}
            alt="arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default Workouts;
