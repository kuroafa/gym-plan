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
import { Carousel } from "antd";
import { Button } from "@/components/ui/button";

import { colors } from "@mui/material";
import BuildingMuscle from "@/components/utils/BuildingMuscle";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import GymWorkout from "@/components/utils/GymWorkout";
import OutDoorWorkout from "@/components/utils/OutDoorworkout";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Props = {
  planData: Plan[];
  workoutData: Workout[];
};

const AllPlans = ({ planData }: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5">
      <div className="grid xl:grid-cols-2 col-span-2  grid-cols-1 gap-5">
        <div className="border  border-black flex justify-between hover:bg-gray-300 cursor-pointer  p-3 rounded-lg">
          <div className="flex flex-col gap-2 items-start">
            <h1 className="text-3xl">Home Workout</h1>
            <p>Workout&apos;s that can be done anywhere</p>
            <BuildingMuscle />
          </div>
          <img className="w-20 h-20" src="/workout.png" alt="muscle" />
        </div>
        <div className="border bg-gray-300 border-black flex justify-between hover:bg-gray-300 cursor-pointer  p-3 rounded-lg">
          <div className="flex flex-col gap-2 items-start">
            <h1 className="text-3xl ">Gym Workout</h1>
            <p className="">Workout&apos;s In the gym</p>

            <GymWorkout />
          </div>
          <img className="w-20 h-20" src="/gym.png" alt="muscle" />
        </div>
        {/* <div className=" border bg-gray-300 border-black  flex justify-between hover:bg-gray-300 cursor-pointer  p-3 rounded-lg">
          <div className="flex flex-col gap-2 items-start">
            <h1 className="text-3xl">Outdoor Workout</h1>
            <p>Workout&apos;s outdoor & in parks</p>

            <OutDoorWorkout />
          </div>
          <img className="w-20 h-20" src="/workoutpark.png" alt="muscle" />
        </div> */}
      </div>
      <div className="bg-gray-300 rounded p-3">
        data
      </div>
    </div>
  );
};

export default AllPlans;
