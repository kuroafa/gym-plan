import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { DeletionSchema, PlanCreationSchema } from "@/lib/type";
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
    const { planName, fitnessGoals, description, day } =
      PlanCreationSchema.parse(body);

    // Create the Plan and associate it with FitnessGoals
    const client = await prisma.plan.create({
      data: {
        planName: planName,
        day: day,
        description: description,
        userId: session?.user.id,
        fitnessGoals: fitnessGoals
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
    const body = await req.json();
    const { id } = DeletionSchema.parse(body);
    const deletePlan = await prisma.plan.delete({
      where: {
        id: id,
        userId: session?.user.id
      },
    });
    console.log("plan deleted: ", deletePlan);
    return NextResponse.json({ message: "Plan deleted" });
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

    // Handle your GET logic here.
  } catch (error) {
    console.error("Error checking user plan:", error);
  }
}
