"use client";
import React from "react";
import { List } from "antd";

type Workout = {
  workOutName: string;
  sets: number;
  numberPerSet: number;
  id: string;
};

type Props = {
  workouts: Workout[];
};

const WorkoutTable = ({ workouts }: Props) => {
  return (
    // <List
    //   className=""
    //   size="small"
    //   bordered
    //   dataSource={workouts}
    //   renderItem={(workout: Workout) => (
    //     <List.Item>
    //       <List.Item.Meta
    //         title={<h3 className="text-xl font-semibold">{workout.workOutName}</h3>}
    //       />
    //       <List.Item className="flex flex-col  gap-2">
    //         <p className="text-lg">Sets: {workout.sets}</p>
    //         <p className="text-lg">Amount per set: {workout.numberPerSet}</p>
    //       </List.Item>
    //     </List.Item>
    //   )}
    // />

    <div>
      {workouts.map((workout, idx) => {
        return (
          <div key={idx} className="flex ">
            <div className="flex">
              <h3 className="text-xl font-semibold">{workout.workOutName}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkoutTable;
