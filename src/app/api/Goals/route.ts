// Import necessary modules and functions
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { DeletionSchema, GoalSchema } from "@/lib/type";
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
    const { goal, calories } = GoalSchema.parse(body);


    const client = await prisma.goal.create({
      data: {
        goal: goal,
        calories: calories,
        userId: session?.user.id,
      },
    });

    console.log("Plan record created:", client);
    return NextResponse.json(client);
  } catch (error) {
    console.error("Error creating a plan record:", error);
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
    if (!session?.user) {
      console.log("User is not authenticated");
      return NextResponse.json(
        { error: "You must be logged in to delete data." },
        {
          status: 401,
        }
      );
    }
    const body = await req.json();
    const { id } = DeletionSchema.parse(body);
    const deleteGoal = await prisma.goal.deleteMany({
      where: {
        id: id,
      },
    });
    console.log("goal deleted: ", deleteGoal);

    return NextResponse.json(
      { message: "Goal deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting goal:", error);
    return NextResponse.json(
      { error: "Internal error while deleting goal" },
      { status: 500 }
    );
  }
}
