import { z } from "zod";

export const PlanCreationSchema = z.object({
  planName: z.string(),
  description: z.string().max(250),
  day: z.enum([
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ]),
  fitnessGoals: z.enum([
    "LEG_DAY",
    "BACK_DAY",
    "SHOULDERS_DAY",
    "CHEST_DAY",
    "ARMS_DAY",
    "CARDIO",
    "STRENGTH_TRAINING",
    "FLEXIBILITY",
    "BALANCE_TRAINING",
  ]),
});

export const DeletionSchema = z.object({
  id: z.string(),
});

// Define types using z.infer
export type DeleteSchema = z.infer<typeof DeletionSchema>;

export type PlanCreation = z.infer<typeof PlanCreationSchema>;
