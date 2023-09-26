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
        { error: "You must be logged in to create a Plan." },
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
    const body = await req.json();
    const { id } = DeletionSchema.parse(body);
    const deleteClient = await prisma.trainer.delete({
      where: {
        id: id,
      },
    });
    console.log("Workout session deleted: ", deleteClient);
    return NextResponse.json({ message: "Workout session deleted" });
  } catch (error) {
    console.log("error deleting workout session", error);
  }
}

export async function GET(req: Request, res: Response) {
  try {
    const session = await getAuthSession();
    if (!session?.user) {
      console.log("User is not authenticated");
      return NextResponse.json(
        { error: "You must be logged in to check your plan." },
        {
          status: 401,
        }
      );
    }

    // Handle your GET logic here.
  } catch (error) {
    console.error("Error checking user plan:", error);
  }
}
