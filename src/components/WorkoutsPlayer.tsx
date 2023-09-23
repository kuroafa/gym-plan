'use client'
import React, { useState } from "react";
import BuildingMuscle from "./utils/BuildingMuscle";
import GymWorkout from "./utils/GymWorkout";
import OutDoorWorkout from "./utils/OutDoorworkout";
import Link from "next/link";
import { Button } from "@mui/material";

type Props = {};

const WorkoutsPlayer = (props: Props) => {
  const [open, setOpen] = useState(false)
  const [openGym, setOpenGym] = useState(false)

const handleClose = () =>{
  setOpen(false)
}
const handleOpen = () =>{
  setOpen(true)
}

const handleGymClose = () =>{
  setOpenGym(false)
}
const handleGymOpen = () =>{
  setOpenGym(true)
}


  return (
    <div className="ml-1 mt-5">
      <h1 className="text-6xl font-medium border-b border-lime-500 w-fit ">Workouts</h1>
      <div className="grid lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-2 mt-5">
        <div>
          <h1 className="text-3xl font-medium">Home Exercises</h1>
          <p className="text-xl font-normal my-2">Workout from home, Get started now!</p>
          <BuildingMuscle onClose={handleClose} open={open}/>
          <Button variant="outlined"   className="border-blue-700 hover:border-orange-500 text-black  text-sm whitespace-nowrap "  onClick={handleOpen}>Start Workout</Button>
        </div>
        <div>
        <h1 className="text-3xl font-medium">Gym Exercises</h1>
        <p className="text-xl font-normal my-2">Go to the gym prepared, Ready for anything!</p>
          <GymWorkout onClose={handleGymClose} open={openGym} />
          <Button variant="outlined"   className="border-blue-700 hover:border-orange-500 text-black  text-sm whitespace-nowrap "  onClick={handleGymOpen}>Start Workout</Button>
        </div>
       
      </div>
      <Link href='/WorkoutsPage'>
        <p className="text-xl mt-2 border-b w-fit hover:border-b-lime-500 border-orange-500">View All Workouts</p>
      </Link>
    </div>
  );
};

export default WorkoutsPlayer;
