import { Trainer } from "@prisma/client";
import React from "react";
import AppointmentsDeleteButton from "../buttons/AppointmentsDeleteButton";
import BuildingMuscle from "./BuildingMuscle";

type Props = {
  trainerData: Trainer[];
};

const WorkoutSessions = ({ trainerData }: Props) => {
  return (
    <div className="  rounded-[30px]   ">
      <div>
        <h1 className="lg:text-4xl text-2xl mb-2">Upcoming Workout Sessions</h1>
      </div>
      <div>
        {trainerData.length ? (
          <div className="grid grid-cols-1    gap-5 my-2">
            {" "}
            {trainerData.map((train) => {
              return (
                <>
                  <div className=" grid grid-cols-1 py-2 px-3 bg-gray-200 rounded-[20px] mt-2 " key={train.id}>
                    <div className="flex flex-col gap-6 md:gap-3">
                      <div className="flex items-center justify-between py-2">
                        <h1 className="text-2xl font-semibold bg-indigo-500 text-white w-fit rounded-[20px] px-3">
                          {train.client.toUpperCase()}
                        </h1>

                        <AppointmentsDeleteButton id={train.id} />
                      </div>

                      <div className="flex  md:items-center gap-3">
                        <p className="md:text-xl font-bold md:border-r pr-2 border-black">
                          {train.fitnessGoals.replace("_", " ")}
                        </p>
                        <div className="flex   md:items-center gap-2">
                          <p className="md:text-xl md:border-r pr-2 border-black">
                            {new Date(train.date).toLocaleDateString()}
                          </p>
                          <p className="md:text-xl  font-bold">{train.time}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <div className="h-[200px] rounded-lg flex flex-col items-center justify-center ">
            <h2 className="text-lg mb-2 font-medium">
              Ready to start taking on your Training journey? Create new workout
              sessions now!
            </h2>

            <BuildingMuscle />
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutSessions;
