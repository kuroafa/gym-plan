"use client";
import React, { useState } from "react";
import { RandomWorkouts, allWorkouts } from "./utils/Data";
import Image from "next/image";
import { Button } from "@mui/material";
import Map from "./Map";
import RecommendedWorkouts from "./RecommendedWorkouts";
import { Plan } from "@prisma/client";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

type Workout = {
  exercise: string;
  sets: number;
  reps: number;
  image: string;
};
type Props = {
  planData: Plan[];
};

const initialWorkout: Workout = {
  exercise: "Sit-Ups",
  sets: 5,
  reps: 15,
  image: "/situp.png",
};

const RandomWorkout = ({ planData }: Props) => {
  const [randomWorkout, setRandomWorkout] = useState<Workout>(initialWorkout);

  const generateRandomWorkout = () => {
    const randomIndex = Math.floor(Math.random() * RandomWorkouts.length);
    const selectedWorkout = RandomWorkouts[randomIndex];
    setRandomWorkout(selectedWorkout);
  };
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(29 ,78 ,216,0.8)", // Adjust the opacity as needed (0.5 is semi-transparent)
    zIndex: 1, // Place the overlay above the background image
  };

  return (
    <div className=" pl-2  mt-5">
      <h2 className="text-6xl font-normal w-fit ">
        Random <span className="font-bold  text-lime-500">Workout</span>
      </h2>

      <div className="rounded-xl      relative grid md:grid-cols-2 grid-cols-1 p-1 ">
        <div className=" pt-2 ">
          <div className="">
            <p className="md:text-2xl text-4xl font-medium  ">
              Workout: {randomWorkout.exercise}
            </p>
            <div className="flex gap-2">
              <p className="md:text-2xl text-xl font-medium ">
                Sets: {randomWorkout.sets}
              </p>
              <p className="md:text-2xl text-xl font-medium ">
                Reps: {randomWorkout.reps}
              </p>
            </div>
            <Button
              variant="outlined"
              type="button"
              className="mt-5  border-blue-700 hover:border-lime-500"
              onClick={generateRandomWorkout}
            >
              Generate
            </Button>
          </div>
        </div>

        <div className="">
          <img
            className="w-[100%] mt-20"
            alt={randomWorkout.exercise}
            src={randomWorkout.image}
          />
        </div>
      </div>
    </div>
  );
};

export default RandomWorkout;
