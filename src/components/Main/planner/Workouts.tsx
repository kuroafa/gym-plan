"use client";
import PlanForm from "@/components/PlanForm";
import DeleteButton from "@/components/buttons/DeleteButton";
import { Plan, Workout } from "@prisma/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Avatar, Divider, List, Skeleton } from "antd";
import Link from "next/link";
import WorkoutForm from "@/components/WorkoutForm";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Carousel } from "antd";
import { Button } from "@/components/ui/button";
import RandomWorkout from "@/components/RandomWorkout";
import BMIcalculator from "@/components/BMIcalculator";

type Props = {
  workoutData: Pick<
    Workout,
    "workOutName" | "id" | "numberPerSet" | "sets" | "planId" | "day"
  >[];
};

const contentStyle: React.CSSProperties = {
  height: "150px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "black",
};



const Workouts = ({ workoutData }: Props) => {


  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <div className="p-1 ml-3">
          <div className="grid grid-cols-1 mb-5">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
      <div className="grid lg:grid-cols-3  grid-cols-1  gap-2">
        <div className="col-span-2 flex md:flex-row flex-col gap-3 items-center justify-center  rounded-lg p-2">
          <div className="flex flex-col gap-5 items-start">
            <h1 className="xl:text-5xl text-3xl">
              Don&apos;t Give up on your dreams, 
              Becoming a better version of yourself.
            </h1>
            <Button className="text-xl m-2">View Workouts</Button>
          </div>
          <div className="">
          <img className=""  alt="girl image" src="/gymgirl.png" />
        </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <div className="border border-black p-2 rounded-lg">
            <h2 className="text-2xl font-medium">Today&apos;s workouts</h2>
            <div className="pl-2">
              <h2>Plan: Build Muscle</h2>
              <p>Workouts: Sit up, Push up, Bench press</p>
            </div>
          </div>
          <RandomWorkout/>
          <BMIcalculator/>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
