'use client'
import { Plan } from '@prisma/client';
import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { allWorkouts } from './utils/Data';

type Props = {
    planData: Plan[];
}

const Stats = ({planData}: Props) => {
    const planAmount = planData.length;
    const WorkoutAmount = allWorkouts.length;
  return (
    <div>
         <div className=" rounded-xl gap-5 grid  grid-cols-3 xl:grid-cols-3 lg:grid-cols-2  md:mt-0 ">
      <div className=" rounded-lg flex flex-col items-center   p-3">
        <h1 className=" text-2xl mb-5">Plans</h1>
              <CircularProgressbar
                value={planAmount}
                strokeWidth={20}
                className="fill-gray-100"
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  pathColor: `red`,
                  textColor: "#ff2323",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#fd9191",
                })}
              />
            </div>
            <div className=" rounded-lg p-3  flex flex-col items-center">
              <h1 className=" text-2xl mb-5">Workouts</h1>
              <CircularProgressbar
                value={WorkoutAmount }
                strokeWidth={20}
                className="fill-gray-100"
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(251, 101, 21, 0.8)`,
                  textColor: "#ff2323",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#fd9191",
                })}
              />
            </div>
            <div className=" rounded-lg  p-3  flex flex-col items-center">
              <h1 className="whitespace-nowrap text-2xl mb-5">Weight Goal</h1>
              <CircularProgressbar
                value={WorkoutAmount }
                strokeWidth={20}
                className="fill-gray-100"
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  pathColor: `#84cc16`,
                  textColor: "#ff2323",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#fd9191",
                })}
              />
            </div>
      </div>
    </div>
  )
}

export default Stats