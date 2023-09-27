import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

enum Day {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}
enum FitnessGoal {
  LEG_DAY = "LEG_DAY",
  BACK_DAY = "BACK_DAY",
  SHOULDERS_DAY = "SHOULDERS_DAY",
  CHEST_DAY = "CHEST_DAY",
  ARMS_DAY = "ARMS_DAY",
  CARDIO = "CARDIO",
  STRENGTH_TRAINING = "STRENGTH_TRAINING",
  FLEXIBILITY = "FLEXIBILITY",
  BALANCE_TRAINING = "BALANCE_TRAINING",
}


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
        day: Day.SUNDAY,
        description: "Start your day with a 30-minute cardio workout.",
        userId: session.user.id , 
        fitnessGoals: FitnessGoal.CARDIO,
      },
      {
        planName: "Monday Workout",
        day: Day.MONDAY,
        description: "Kickstart your week with a 5-mile morning run.",
        userId: session.user.id ,
        fitnessGoals: FitnessGoal.STRENGTH_TRAINING,
      },
      {
        planName: "Tuesday Workout",
        day: Day.TUESDAY,
        description: "Focus on building muscle and strength.",
        userId: session.user.id , 
        fitnessGoals: FitnessGoal.ARMS_DAY,
      },
      {
        planName: "Wednesday Workout",
        day: Day.WEDNESDAY,
        description: "Improve flexibility with yoga and stretching.",
        userId: session.user.id , 
        fitnessGoals: FitnessGoal.FLEXIBILITY,
      },
      {
        planName: "Thursday Workout",
        day: Day.THURSDAY,
        description: "Work on your chest and upper body strength.",
        userId: session.user.id , 
        fitnessGoals: FitnessGoal.CHEST_DAY,
      },
      {
        planName: "Friday Workout",
        day: Day.FRIDAY,
        description: "Focus on leg strength and endurance.",
        userId: session.user.id , 
        fitnessGoals: FitnessGoal.LEG_DAY,
      },
      {
        planName: "Saturday Workout",
        day: Day.SATURDAY,
        description: "Strengthen your back and shoulders.",
        userId: session.user.id , 
        fitnessGoals: FitnessGoal.BACK_DAY,
      },
    ];
    

    const createdPlans = await prisma.plan.createMany({
      data: demoPlans,
    });
    console.log("Plans created successfully");

    return NextResponse.json(
      {
        message: `Plans added successfully`,
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
