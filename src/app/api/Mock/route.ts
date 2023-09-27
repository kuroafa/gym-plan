import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: Request, res: Response) {
  try {
    const session = await getAuthSession();
    if (!session?.user) {
      return NextResponse.json(
        {
          error: "User not authenticated",
        },
        { status: 401 }
      );
    }
    
    const demoPlans = [
      {
        planName: "Sunday Workout",
        day: "SUNDAY",
        description: "Start your day with a 30-minute cardio workout.",
        userId: session.user?.id,
        fitnessGoals: "CARDIO",
      },
      {
        planName: "Monday Workout",
        day: "MONDAY",
        description: "Kickstart your week with a 5-mile morning run.",
        userId: session.user?.id,
        fitnessGoals: "STRENGTH_TRAINING",
      },
      {
        planName: "Tuesday Workout",
        day: "TUESDAY",
        description: "Focus on building muscle and strength.",
        userId: session.user?.id,
        fitnessGoals: "ARMS_DAY",
      },
      {
        planName: "Wednesday Workout",
        day: "WEDNESDAY",
        description: "Improve flexibility with yoga and stretching.",
        userId: session.user?.id,
        fitnessGoals: "FLEXIBILITY",
      },
      {
        planName: "Thursday Workout",
        day: "THURSDAY",
        description: "Work on your chest and upper body strength.",
        userId: session.user?.id,
        fitnessGoals: "CHEST_DAY",
      },
      {
        planName: "Friday Workout",
        day: "FRIDAY",
        description: "Focus on leg strength and endurance.",
        userId: session.user?.id,
        fitnessGoals: "LEG_DAY",
      },
      {
        planName: "Saturday Workout",
        day: "SATURDAY",
        description: "Strengthen your back and shoulders.",
        userId: session.user?.id,
        fitnessGoals: "BACK_DAY",
      },
    ];
      
  
    const createdPlans = await prisma.plan.createMany({
      data: demoPlans,
    });
    console.log("Plans created successfully");

    return NextResponse.json(
      {
        message: `plans added successfully`,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("Error adding demo plans: " + error);

    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.errors });
    }
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}