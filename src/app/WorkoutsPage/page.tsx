import WorkoutPage from "@/components/Main/WorkoutPage";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { Workout } from "@prisma/client";
import { Divider } from "antd";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
    workoutData: Workout[]
};



const page = async ({workoutData}: Props) => {
    const session = await getAuthSession();
    if(!session){
      redirect('/')
    }

    const getWorkoutData = await prisma.workout.findMany({
    
    });
    // await prisma.workout.deleteMany({})  
   
  return (
    <div>
      <Divider orientation="left">
        <h1 className="text-2xl ">Workout&apos;s</h1>
      </Divider>
    <WorkoutPage workoutData={getWorkoutData}/>
    </div>
  );
};

export default page;
