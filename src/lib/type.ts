import { number, z } from "zod";

export const PlanCreationSchema = z.object({
  planName: z.string(), 
  description: z.string(),
  isFave: z.boolean(),
});

export const WorkOutCreationSchema = z.object({
  workOutName: z.string(),
  sets:  z.coerce.number(),
  numberPerSet:  z.coerce.number(),
  day: z.enum(["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]),
  planId: z.string()
});

export const DeletionSchema = z.object({
  id: z.string(),
});

export type DeleteSchema = z.infer<typeof DeletionSchema>;

export type WorkoutCreation = z.infer<typeof WorkOutCreationSchema>;

export type PlanCreation = z.infer<typeof PlanCreationSchema>;
