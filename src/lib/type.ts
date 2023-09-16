import { number, z } from "zod";

export const PlanCreationSchema = z.object({
  planName: z.string(),
  description: z.string().max(250),
  fitnessGoal: z.enum(["LOSE_FAT", "BUILD_MUSCLE", "INCREASE_STAMINA", "INCREASE_AGILITY", "INCREASE_EXPLOSIVE_POWER", "CARDIO", "REDUCE_STRESS", "INCREASE_STRENGTH"]),
});

export const WorkOutCreationSchema = z.object({
  workOutName: z.string(),
  sets: z.coerce.number(),
  numberPerSet: z.coerce.number(),
  description:z.string(),
  fitnessGoalWorkout: z.enum(["LOSE_FAT", "BUILD_MUSCLE", "INCREASE_STAMINA", "INCREASE_AGILITY", "INCREASE_EXPLOSIVE_POWER", "CARDIO", "REDUCE_STRESS", "INCREASE_STRENGTH"]),
  day: z.enum([
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ]),
  exerciseType: z.enum(["CARDIO",
  "STRENGTH_TRAINING",
  "YOGA",
  "PILATES",
  "CROSSFIT",
  "RUNNING",
  "WALKING",
  "AGILITY_TRAINING",
  "SPORTS",
  "BODYWEIGHT_EXERCISES",
  "WEIGHTLIFTING",
  "RESISTANCE_TRAINING",
  "CALISTHENICS",
  "FLEXIBILITY_TRAINING",
  "CORE_STRENGTHENING",
  "STRETCHING",
  ]),
  image: z.string(),
  planId: z.string(),
});

export const DeletionSchema = z.object({
  id: z.string(),
});

export type DeleteSchema = z.infer<typeof DeletionSchema>;

export type WorkoutCreation = z.infer<typeof WorkOutCreationSchema>;

export type PlanCreation = z.infer<typeof PlanCreationSchema>;
