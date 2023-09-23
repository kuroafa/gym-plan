"use client";
import React, { useEffect, useState } from "react";
import { GymBuildingWorkouts } from "./utils/Data";
import Timer from "./Timer";

const GymModalContent = () => {
  const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(0);
  const [expiryTimestamp, setExpiryTimestamp] = useState<Date | null>(null);

  // Function to handle the "Next" button click
  const handleNext = () => {
    if (currentWorkoutIndex < GymBuildingWorkouts.length - 1) {
      setCurrentWorkoutIndex(currentWorkoutIndex + 1);
      setExpiryTimestamp(new Date());
    }
  };

  // Function to handle the "Previous" button click
  const handlePrevious = () => {
    if (currentWorkoutIndex > 0) {
      setCurrentWorkoutIndex(currentWorkoutIndex - 1);
      setExpiryTimestamp(new Date());
    }
  };

  useEffect(() => {
    if (currentWorkoutIndex >= 0 && currentWorkoutIndex < GymBuildingWorkouts.length) {
      const newExpiryTimestamp = new Date();
      newExpiryTimestamp.setSeconds(newExpiryTimestamp.getSeconds() + 60);
      setExpiryTimestamp(newExpiryTimestamp);
    }
  }, [currentWorkoutIndex]);

  return (
    <div>
      <h1 className="md:text-5xl text-3xl mb-2">Gym Workouts</h1>
      <div>
        {GymBuildingWorkouts.map((gym, index) => {
          return (
            <div
              key={index}
           
            >
              <div className="grid  grid-cols-1">
                <div className="flex flex-col gap-1">
                  <h1 className="text-3xl font-medium">
                    Exercise: {gym.exercise}
                  </h1>
                  <div className="flex gap-5">
                    <p className="text-2xl">Sets: {gym.sets}</p>
                    <p className="text-2xl">Reps: {gym.reps}</p>
                  </div>
                 
                 
                 
                </div>
                <div className="col-span-2">
                  <img alt="gym-image" className="" src={gym.image} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GymModalContent;
