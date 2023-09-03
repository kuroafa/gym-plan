import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Divider, List, Typography } from "antd";

import WorkoutForm from "@/components/WorkoutForm";
import { Day, Plan, User } from "@prisma/client";
import WorkoutTable from "@/components/Main/planProfile/WorkoutTable";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Props = {
  user: Pick<User, "name" | "image" | "email">;
  planData: Plan;
  params: {
    id: string;
  };
};
type Workout = {
  workOutName: string;
  sets: number;
  numberPerSet: number;
  id: string;
};

const page = async ({ params: { id }, planData, user }: Props) => {
  const session = await getAuthSession();

  const getAllPlan = await prisma.plan.findUnique({
    where: {
      id: id,
    },
  });

  const getWorkouts = await prisma.workout.findMany({
    where: {
      planId: id,
    },
  });

  const daysOfTheWeek = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  // Sort the daysOfTheWeek array
  daysOfTheWeek.sort(
    (a, b) => daysOfTheWeek.indexOf(a) - daysOfTheWeek.indexOf(b)
  );

  const workoutsByDay: Record<string, Workout[]> = {};

  daysOfTheWeek.forEach((day) => {
    workoutsByDay[day] = [];
  });

  getWorkouts.forEach((workout) => {
    const day = workout.day ? workout.day.toUpperCase() : "";

    if (daysOfTheWeek.includes(day)) {
      workoutsByDay[day].push({
        workOutName: workout.workOutName || "",
        sets: workout.sets || 0,
        numberPerSet: workout.numberPerSet || 0,
        id: workout.id || "",
      });
    }
  });

  return (
    <div>
      <div className="xl:ml-20 ml-5 -mb-5 ">
        <div className="typing-demo md:text-[3em] text-[2em] mt-10 font-medium ">
          welcome {session?.user.name}
        </div>
      </div>
      <div className=" grid lg:grid-cols-1 gap-5  rounded-3xl    xl:ml-20  m-5    ">
        <div className="col-span-1 grid lg:grid-cols-2 ">
          <div className="">
            <h1 className="text-3xl  py-4">
              Benefits of working out on a daily basies
            </h1>
            <h2 className="text-3xl font-semibold pb-2">Health Benefits</h2>
            <ul>
              <li className="text-xl font-medium flex items-center gap-2 ">
                <Image
                  src="/check-box.png"
                  width={40}
                  height={40}
                  alt="check"
                />
                Maintaining health
              </li>
              <li className="text-xl font-medium flex items-center gap-2 ">
                <Image
                  src="/check-box.png"
                  width={40}
                  height={40}
                  alt="check"
                />
                Creating habits that are healthy
              </li>
              <li className="text-xl font-medium flex items-center gap-2">
                <Image
                  src="/check-box.png"
                  width={40}
                  height={40}
                  alt="check"
                />
                Being flexable
              </li>
              <li className="text-xl font-medium flex items-center gap-2">
                <Image
                  src="/check-box.png"
                  width={40}
                  height={40}
                  alt="check"
                />
                breathing better
              </li>
              <li className="text-xl font-medium flex items-center gap-2">
                <Image
                  src="/check-box.png"
                  width={40}
                  height={40}
                  alt="check"
                />
                Happier life
              </li>
            </ul>
            <div className="flex gap-5 py-10">
              <div className="text-center">
                <h2 className="text-2xl font-bold">100%</h2>
                <h3 className="text-xl">Higher Energy</h3>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">HIGHER</h2>
                <h3 className="text-xl">Confidence</h3>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">MOTIVATION</h2>
                <h3 className="text-xl">Breaking Boundries</h3>
              </div>
            </div>
          </div>
        
        </div>
        <div className="grid lg:grid-cols-3  grid-cols-1 col-span-2  p-5 rounded-xl  gap-5">
          <div className=" col-span-2 ">
            <h1 className="text-2xl font-normal  my-5 border-b-2 border-black w-fit">
              Plan-Workouts
            </h1>
            {daysOfTheWeek.map((day, id) => (
              <div className="w-full" key={id}>
                {workoutsByDay[day].length > 0 && (
                  <>
                    <Divider orientation="left" className="">
                      <h2 className="text-2xl font-bold">{day}</h2>
                    </Divider>
                    <div className=" grid gap-3 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 w-full">
                      {workoutsByDay[day].map((workout, idx) => {
                        return (
                          <Card key={idx} className="bg-gray-300 rounded-xl">
                            <div className=" flex flex-col justify-between p-5">
                              <div className="flex justify-between items-center">
                                <h3 className="text-xl font-semibold">
                                  {workout.workOutName}
                                </h3>
                                <h3 className="font-medium">
                                  Sets: {workout.sets}
                                </h3>
                              </div>
                              <h3 className="font-medium">
                                Each set: {workout.numberPerSet}
                              </h3>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
