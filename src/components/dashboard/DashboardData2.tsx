"use client";
import React from "react";
import WorkoutChart from "../WorkoutChart";
import WorkoutChart2 from "../WorkoutChart2";
import RandomWorkout from "../RandomWorkout";
import { Plan } from "@prisma/client";
import Map from "../Map";
import LocalWeather from "../LocalWeather";

type Props = {
  planData: Plan[];
};

const DashboardData2 = ({ planData }: Props) => {
  return (
    <div className=" grid xl:grid-cols-2 grid-cols-1 gap-3 mt-5">
      <div className=" rounded-lg ">
        {" "}
        <LocalWeather />
      </div>
      <div className=" rounded-lg "> </div>{" "}
    </div>
  );
};

export default DashboardData2;
