import React, { useState } from "react";
import { RandomWorkouts } from "./utils/Data";
import { Button } from "./ui/button";
import Image from "next/image";

type Workout = {
  exercise: string;
  sets: number;
  reps: number;
  image: string;
};

const initialWorkout: Workout = {
  exercise: "Sit-Ups",
  sets: 5,
  reps: 15,
  image: "/situp.png",
};

const RandomWorkout = () => {
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
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust the opacity as needed (0.5 is semi-transparent)
    zIndex: 1, // Place the overlay above the background image
  
  };

  return (
    <div className="rounded-xl relative flex-col md:flex-row justify-between p-1 shadow-2xl shadow-black">
       <div className="rounded-xl" style={overlayStyle}></div>
      <div className="pl-3 pt-2 relative z-[200]">
        <div className="flex justify-between items-center px-1">
          <h2 className="text-2xl font-medium text-white ">Random <span className="font-bold">Workout</span></h2>
          <button type="button" className="pr-6" onClick={generateRandomWorkout}>
            <Image
              src="/refresh.png"
              width={40}
              height={40}
              alt="refresh"
              className="bg-gray-300 hover:bg-lime-500 rounded-full p-2"
            />
          </button>
         
        </div>
        <div className="px-2">
          <p className="md:text-4xl text-4xl font-medium text-gray-300">Workout: {randomWorkout.exercise}</p>
          <div className="flex gap-2">
            <p className="md:text-2xl text-xl font-medium text-gray-200">Sets: {randomWorkout.sets}</p>
            <p className="md:text-2xl text-xl font-medium text-gray-200">Reps: {randomWorkout.reps}</p>
          </div>
        </div>
      </div>
      
      <div className="z-[200] relative">
        <img
          className=""
          alt={randomWorkout.exercise}
          src={randomWorkout.image}
        />
      </div>
     
    </div>
  );
};

export default RandomWorkout;
