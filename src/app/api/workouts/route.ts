// Import necessary modules and functions
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { NextResponse } from "next/server";
import { z } from "zod";

// Function to check if the user has completed the initial setup
async function hasUserCompletedSetup(userId: string): Promise<boolean> {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user?.hasCompletedSetup || false;
}

// Function to perform the one-time setup for a user
async function performOneTimeSetup(userId: string) {
  // Define your workout plans and workouts here

  type ExerciseType =
    | "CARDIO"
    | "STRENGTH_TRAINING"
    | "YOGA"
    | "PILATES"
    | "CROSSFIT"
    | "RUNNING"
    | "WALKING"
    | "AGILITY_TRAINING"
    | "SPORTS"
    | "BODYWEIGHT_EXERCISES"
    | "WEIGHTLIFTING"
    | "RESISTANCE_TRAINING"
    | "CALISTHENICS"
    | "FLEXIBILITY_TRAINING"
    | "CORE_STRENGTHENING"
    | "STRETCHING";

  type FitnessGoal =
    | "LOSE_FAT"
    | "BUILD_MUSCLE"
    | "INCREASE_STAMINA"
    | "INCREASE_AGILITY"
    | "INCREASE_EXPLOSIVE_POWER"
    | "INCREASE_CARDIO"
    | "REDUCE_STRESS";

  type Day =
    | "SUNDAY"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY";

  interface Workout {
    workOutName: string;
    fitnessGoalWorkout: FitnessGoal;
    description: string;
    sets: number;
    numberPerSet: number;
    day: Day;
    planId: string;
    exerciseType: ExerciseType;
    image: string;
  }

  type Goal =
    | "LOSE_FAT"
    | "BUILD_MUSCLE"
    | "INCREASE_STAMINA"
    | "INCREASE_CARDIO"
    | "INCREASE_AGILITY"
    | "INCREASE_EXPLOSIVE_POWER"
    | "REDUCE_STRESS"
    | "INCREASE_STRENGTH";

  const planData = [
    {
      planName: "Build Muscle",
      description: "Gain muscle description",
      fitnessGoal: "BUILD_MUSCLE" as Goal,
    },
    {
      planName: "Agility",
      description: "Improve Agility description",
      fitnessGoal: "INCREASE_AGILITY" as Goal,
    },
    {
      planName: "Explosive power",
      description: "Improve endurance description",
      fitnessGoal: "INCREASE_EXPLOSIVE_POWER" as Goal,
    }
  ];

  const Workouts: Workout[] = [
    // CARDIO
    {
      workOutName: "Interval Running",
      fitnessGoalWorkout: "INCREASE_STAMINA" as FitnessGoal,
      description:
        "Interval running is a high-intensity cardio workout that involves alternating between short bursts of sprinting and periods of recovery. It's an excellent way to improve cardiovascular fitness and burn calories.",
      sets: 1,
      numberPerSet: 1,
      day: "MONDAY" as Day,
      planId: "", // You should replace this with the actual planId
      exerciseType: "CARDIO" as ExerciseType,
      image: "/placeholder.jpg",
    },
    {
      workOutName: "Cycling Challenge",
      fitnessGoalWorkout: "INCREASE_STAMINA" as FitnessGoal,
      description:
        "The cycling challenge is a cardio workout that takes you on a challenging ride, simulating various terrains and intensities. It's a great way to strengthen your leg muscles and boost endurance.",
      sets: 1,
      numberPerSet: 1,
      day: "TUESDAY" as Day,
      planId: "", // You should replace this with the actual planId
      exerciseType: "CARDIO" as ExerciseType,
      image: "/placeholder.jpg",
    },
    {
      workOutName: "Jump Rope",
      fitnessGoalWorkout: "INCREASE_STAMINA" as FitnessGoal,
      description:
        "Jump rope is a classic cardio exercise that improves coordination, endurance, and agility. It's an effective full-body workout that can be done almost anywhere.",
      sets: 1,
      numberPerSet: 1,
      day: "WEDNESDAY" as Day,
      planId: "", // You should replace this with the actual planId
      exerciseType: "CARDIO" as ExerciseType,
      image: "/placeholder.jpg",
    },
    // Add more workouts as needed
  ];

  for (const planInfo of planData) {
    const createdPlan = await prisma.plan.create({
      data: {
        planName: planInfo.planName,
        description: planInfo.description,
        fitnessGoal: planInfo.fitnessGoal,
        userId,
      },
    });

    const workoutsForPlan = Workouts.filter(
      (workout) => workout.fitnessGoalWorkout === planInfo.fitnessGoal
    );

    for (const workoutData of workoutsForPlan) {
      await prisma.workout.create({
        data: {
          workOutName: workoutData.workOutName,
          sets: workoutData.sets,
          numberPerSet: workoutData.numberPerSet,
          day: workoutData.day,
          planId: createdPlan.id,
          fitnessGoalWorkout: workoutData.fitnessGoalWorkout,
          description: workoutData.description,
          exerciseType: workoutData.exerciseType,
          image: workoutData.image,
        },
      });
    }
  }

  // Mark the user as having completed the initial setup
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      hasCompletedSetup: true,
    },
  });
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

    const userId = session.user.id;

    // Check if the user has already completed the initial setup
    const hasCompletedSetup = await hasUserCompletedSetup(userId);

    if (!hasCompletedSetup) {
      // Perform the one-time setup
      await performOneTimeSetup(userId);
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

    const userId = session.user.id;

    // Delete the user's data (you can implement this as needed)
    // ...
    await prisma.plan.deleteMany({
      where: {
        userId: userId
      }
    })
    await prisma.workout.deleteMany({
      
    })

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


