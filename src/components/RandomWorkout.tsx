import React, { useState } from "react";
import { RandomWorkouts, muscleBuildingWorkouts } from "./utils/Data";
import { Button } from "./ui/button";
import Image from "next/image";

type Props = {};

const RandomWorkout = (props: Props) => {
  const [randomWorkout, setRandomWorkout] = useState<any>(null);

  const generateRandomWorkout = () => {
    const randomIndex = Math.floor(
      Math.random() * RandomWorkouts.length
    );
    const selectedWorkout = RandomWorkouts[randomIndex];
    setRandomWorkout(selectedWorkout);
  };

  return (
    <div className="">
     
      {randomWorkout ? (
        <div className="bg-gray-300 rounded-lg flex-col justify-between  p-1">
          <div>
            <div className="flex justify-between px-1">
              <p className="text-2xl font-medium">{randomWorkout.exercise}</p>
              <button type="button" onClick={generateRandomWorkout}>
                <Image
                  src="/refresh.png"
                  width={25}
                  height={40}
                  alt="refresh"
                />
              </button>
            </div>
            <div className="px-2">
                <p className="text-xl font-normal">Sets: {randomWorkout.sets}</p>
                <p className="text-xl font-normal">Reps: {randomWorkout.reps}</p>
            </div>
          </div>
          <div>
            <img
              className=""
              alt={randomWorkout.exercise}
              src={randomWorkout.image}
            />
          </div>
        </div>
      ) : (
        <div className="bg-gray-300 rounded-lg flex justify-between flex-col  p-1">
          <div>
            <div className="flex justify-between px-1">
              <p className="text-2xl font-medium">Sit Up</p>
              <button type="button" onClick={generateRandomWorkout}>
                  <Image
                    src="/refresh.png"
                    width={25}
                    height={40}
                    alt="refresh"
                  />
                </button>
            </div>
            <p className="text-xl font-normal">Sets: 5</p>
            <p className="text-xl font-normal">Reps: 20</p>
          </div>
          <div>
            <img className="" alt="sit up" src="/situp.png" />
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomWorkout;
