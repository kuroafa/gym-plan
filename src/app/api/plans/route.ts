import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { DeletionSchema, PlanCreationSchema } from "@/lib/type";
import { NextResponse } from "next/server";
import { z } from "zod";

type Data = {
  input: string;
  name: string;
};

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
    const { planName, age, gender, weight, height, fitnessGoal, description } =
      PlanCreationSchema.parse(body);

    const client = await prisma.plan.create({
      data: {
        age: age,
        gender: gender,
        weight: weight,
        height: height,
        fitnessGoal: fitnessGoal,
        planName: planName,
        description: description,
        userId: session?.user.id,
      },
    });

    console.log("Plan record created:", client);
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
    const body = await req.json();
    const { id } = DeletionSchema.parse(body);
    const deleteClient = await prisma.plan.delete({
      where: {
        id: id,
      },
    });
    console.log("plan deleted: ", deleteClient);
  } catch (error) {
    console.log("error deleting plan", error);
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

 

  } catch (error) {
    console.error("Error checking user plan:", error);
    return NextResponse.json(
      { error: "An error occurred while checking the plan" },
      {
        status: 500,
      }
    );
  }
}