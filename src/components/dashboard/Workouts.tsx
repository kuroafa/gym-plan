"use client";
import React, { useEffect, useState } from "react";
import { Plan } from "@prisma/client";

type Props = {
  planData: Plan[];
};

const Workouts = ({ planData }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="relative h-[400px] bg-gray-100 bg-center bg-cover rounded-3xl" style={{ backgroundImage: `url("/fitnesspeople.png")` }}>
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default Workouts;
