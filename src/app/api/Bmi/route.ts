import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { BmiCreationSchema, DeletionSchema, PlanCreationSchema, TrainerCreationSchema } from "@/lib/type";
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
    const { age, height, weight, gender } =
      BmiCreationSchema.parse(body);

    // Create the Plan and associate it with FitnessGoals
    const Bmi = await prisma.bmi.create({
      data: {
        age: age,
        gender: gender,
        height: height,
        userId: session?.user.id,
        weight: weight,
      },
     
    });

    console.log("Bmi record created:", Bmi);
    return NextResponse.json(Bmi);
  } catch (error) {
    console.error("Error creating Bmi record:", error);
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
    const deleteSession = await prisma.bmi.delete({
      where: {
        id: id,
        userId: session?.user.id,
      },
    });
    console.log("Bmi deleted: ", deleteSession);
    return NextResponse.json({ message: "Bmi deleted" });
  } catch (error) {
    console.log("error deleting Bmi", error);
  }
}


