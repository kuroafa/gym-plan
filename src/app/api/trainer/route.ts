import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { DeletionSchema, PlanCreationSchema, TrainerCreationSchema } from "@/lib/type";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: Request, res: Response) {
  try {
    const session = await getAuthSession();
    if (!session?.user) {
      console.log("User is not authenticated");
      return NextResponse.json(
        { error: "You must be logged in to create a session." },
        {
          status: 401,
        }
      );
    }
    const body = await req.json();
    const { client, fitnessGoals, workOutDuration, time, date } =
      TrainerCreationSchema.parse(body);

    // Create the Plan and associate it with FitnessGoals
    const TrainingSession = await prisma.trainer.create({
      data: {
        client: client,
        date: date,
        time: time,
        userId: session?.user.id,
        fitnessGoals: fitnessGoals,
        workOutDuration: workOutDuration
      },
     
    });

    console.log("Workout session record created:", TrainingSession);
    return NextResponse.json(client);
  } catch (error) {
    console.error("Error creating a workout session record:", error);
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

export async function DELETE(req: Request, res: Response) {
  try {
    const session = await getAuthSession();
    const body = await req.json();
    const { id } = DeletionSchema.parse(body);
    const deleteSession = await prisma.trainer.delete({
      where: {
        id: id,
        userId: session?.user.id,
      },
    });
    console.log("Workout session deleted: ", deleteSession);
    return NextResponse.json({ message: "Workout session deleted" });
  } catch (error) {
    console.log("error deleting workout session", error);
  }
}


