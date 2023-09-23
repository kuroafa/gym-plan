import { z } from "zod";

export const UserCreationSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  username: z.string().min(1, 'Username is required').max(100),
  email: z.string().min(1, 'Email is required').email('invalid Email'),
  password: z
  .string()
  .min(1, 'Password is required')
  .min(8, 'Password must have at least 8 characters').max(100),
  confirmedPassword: z.string().min(1, 'Password confirmation is required'),
  age: z.string(),
  height: z.string().min(1, 'Height is Required to provide stats'),
  weight: z.string().min(1, 'Weight is required to provide stats'),
  gender: z.enum(["Male", "Female"])
})
.refine((data)=> data.password === data.confirmedPassword, {
  path: ['confirmedPassword'],
  message: 'Password do not match'
})


export const SigninSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(1, 'Password is required').min(8, 'Password must have at least 8 characters')
})
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

export const GoalSchema = z.object({
  goal: z.string(),
  isCompleted: z.boolean()
})

export const DeletionSchema = z.object({
  id: z.string(),
});

// Define types using z.infer
export type UserSchema = z.infer<typeof UserCreationSchema>;

export type SigninType = z.infer<typeof SigninSchema>

export type DeleteSchema = z.infer<typeof DeletionSchema>;

export type GoalCreation= z.infer<typeof GoalSchema>;

export type PlanCreation = z.infer<typeof PlanCreationSchema>;
