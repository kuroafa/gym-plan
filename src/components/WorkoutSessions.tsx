import { Trainer } from "@prisma/client";
import React from "react";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import DeleteButton from "./buttons/DeleteButton";
import AppointmentsDeleteButton from "./buttons/AppointmentsDeleteButton";
import { Button } from "@mui/material";
import Link from "next/link";
type Props = {
  trainerData: Trainer[];
};

const WorkoutSessions = ({ trainerData }: Props) => {
  return (
    <div className=" p-3  rounded-xl shadow-2xl ">
      <div>
        <h1 className="lg:text-4xl text-2xl mb-2">Upcoming Workout Sessions</h1>
        <h2 className="border-b  w-fit mb-1 text-xl">View all Appointments</h2>
      </div>
      <div>
        {trainerData.length ? (
          <div className="grid grid-cols-1    gap-5 my-2">
            {" "}
            {trainerData.map((train) => {
              return (
                <>
                  <div
                    className=" rounded-xl   flex justify-between py-2 px-3"
                    key={train.id}
                  >
                    <div>
                      <h1 className="text-2xl font-semibold">
                        {train.client.toUpperCase()}
                      </h1>
                      <p className="text-xl font-medium ">
                        {train.fitnessGoals.replace("_", " ")}
                      </p>
                    </div>

                    <p className="text-lg font-bold">
                      {dayjs(train.time).format("hh:mm a")}
                    </p>

                   
                    <AppointmentsDeleteButton id={train.id} />
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <div className="h-[200px] rounded-lg flex flex-col items-center justify-center ">
            <h2 className="text-lg mb-2 font-medium">
              Ready to start taking on your Training journey? Create new workout sessions now!
            </h2>
            <Link href='/CreateAppointment'>
              <Button variant="outlined" className="text-black">
                Create new session
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutSessions;
