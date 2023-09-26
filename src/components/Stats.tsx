'use client'
import { Plan } from '@prisma/client';
import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { allWorkouts } from './utils/Data';
import Map from './Map';

type Props = {
    planData: Plan[];
}

const Stats = ({planData}: Props) => {
    const planAmount = planData.length;
    const WorkoutAmount = allWorkouts.length;
  return (
    <div>
       
         <div className=" rounded-xl gap-5 grid  grid-cols-3 xl:grid-cols-3  md:mt-0 ">
      <div className=" rounded-lg flex flex-col items-center   p-3">
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
 
              <CircularProgressbar
                value={WorkoutAmount }
                strokeWidth={20}
                className="fill-gray-100"
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  pathColor: `green`,
                  textColor: "#ff2323",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#fd9191",
                })}
              />
            </div>
            <div className=" rounded-lg  p-3  flex flex-col items-center">
 
              <CircularProgressbar
                value={WorkoutAmount }
                strokeWidth={20}
                className="fill-gray-100"
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  pathColor: `green`,
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