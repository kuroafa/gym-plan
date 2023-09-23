'use client'
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import RandomWorkout from "@/components/RandomWorkout";
import BMIcalculator from "@/components/BMIcalculator";
import Image from "next/image";
import PlanForm from "@/components/PlanForm";
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
    backgroundImage: `url("/gymgirl.png")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative", 
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

  return (
    <div
      className="grid rounded-xl p-2 h-[270px] bg-center  bg-black shadow-black shadow-2xl  gap-3 grid-cols-1"
      style={containerStyle} 
    >

      <div className="rounded-xl" style={overlayStyle}></div>

      <div className="flex flex-col md:pl-5 pl-2 items-start gap-2 w-fit relative z-10"> 
        <h1 className="xl:text-7xl text-4xl text-white font-medium">
          Become a better
          version of<br /> <span className="font-bold text-gray-300">YOURSELF.</span>
        </h1>
        <p className="text-2xl font-medium text-white">Workout & Plan in one place</p>
        <Button variant="outlined" className="text-white border-orange-500 hover:border-lime-500 ">Start Workout</Button>
      </div>
    </div>
  );
};

export default Workouts;

