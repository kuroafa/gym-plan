"use client";
import React, { useEffect, useState } from "react";
import { Plan } from "@prisma/client";


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
