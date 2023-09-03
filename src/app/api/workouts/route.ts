import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { DeletionSchema, PlanCreationSchema, WorkOutCreationSchema } from "@/lib/type";
import { NextResponse } from "next/server";
import { z } from "zod";





export async function POST(req: Request, res: Response) {
  try {
    const session = await getAuthSession();
    if (!session?.user) {
      console.log("User is not authenticated");
      return NextResponse.json(
        { error: "You must be logged in to create a Workout." },
        {
          status: 401,
        }
      );
    }
    const body = await req.json();
    const {
    workOutName,
    sets,
    numberPerSet,
    day,
    planId
    
    } = WorkOutCreationSchema.parse(body);

    

    const workout = await prisma.workout.create({
      data: {
        workOutName: workOutName,
        sets:sets,
        numberPerSet: numberPerSet,
        day:day,
        planId: planId
      },
    });

    console.log("Workout record created:", workout);
  } catch (error) {
    console.error("Error creating a workout:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues },
        {
          status: 400,
        }
      );
    }
  }
}
