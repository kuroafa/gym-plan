// Import necessary modules and functions
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { GoalSchema } from "@/lib/type";
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
    const { goal } = GoalSchema.parse(body);

    // Create the Plan and associate it with FitnessGoals
    const client = await prisma.goal.create({
      data: {
        goal: goal,
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

export async function GET(req: Request, res: Response) {
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

    console.log("Workout records created successfully");
    return NextResponse.json(
      { message: "Workout records created successfully" },
      { status: 200 }
    );
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
    return NextResponse.json(
      { error: "Internal error while creating a workout" },
      { status: 500 }
    );
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

    console.log("Data cleared successfully");
    return NextResponse.json(
      { message: "Data cleared successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error clearing data:", error);
    return NextResponse.json(
      { error: "Internal error while clearing data" },
      { status: 500 }
    );
  }
}
