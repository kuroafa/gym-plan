"use client";
import { useForm } from "react-hook-form";
import { PlanCreation, PlanCreationSchema } from "@/lib/type";
import { custom, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useRouter } from "next/navigation";
import axios from "axios";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import * as React from "react";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import { Space, Tag } from "antd";

import { toast } from "react-toastify";
import { Plus } from "lucide-react";
import { Input } from "../ui/input";

const { CheckableTag } = Tag;

type Props = {
  handleClose: () => void;
};
enum FitnessGoals {
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

enum Day {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}

const PlanForm = ({ handleClose }: Props) => {
  const [selectedDay, setSelectedDay] = React.useState<Day>();
  const [selectedFitnessGoal, setSelectedFitnessGoal] =
    React.useState<FitnessGoals | null>();
  const [selectedTags, setSelectedTags] = React.useState([]);
  const handleDaySelect = (day: Day) => {
    setSelectedDay(day);
  };
  const [loading, setLoading] = React.useState(false);

  const handleFitnessGoalToggle = (goal: FitnessGoals) => {
    if (selectedFitnessGoal === goal) {
      setSelectedFitnessGoal(null);
    } else {
      setSelectedFitnessGoal(goal);
    }
  };

  const router = useRouter();
  const {
    reset,
    formState: { errors, isLoading },
  } = useForm();
  const form = useForm<PlanCreation>({
    resolver: zodResolver(PlanCreationSchema),
    defaultValues: {
      planName: "",
      description: "",
      day: "FRIDAY",
      fitnessGoals: "ARMS_DAY", // Use an array with the selectedFitnessGoal if it's not null
    },
  });

  const onSubmit = async (data: PlanCreation) => {
    try {
      setLoading(true);
      const completeData = {
        ...data,
        day: selectedDay,
        fitnessGoals: selectedFitnessGoal,
      };
      const response = await fetch("/api/plans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completeData),
      });

      if (!response.ok) {
        throw new Error("Failed to make Plan");
      }
      toast.success("Plan created successfully");
    } catch (error) {
      console.error("Could not create Plan:", error);
      toast.error("Error creating Plan");
    } finally {
      setLoading(false);
    }
    form.reset();
    handleClose();
  };

  return (
    <div className=" items-start " id="planform">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-3 ">
          <div className="mt-2 flex items-start">
            <FormField
              name="fitnessGoals"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel className="text-2xl -mb-5 font-semibold">
                    Fitness Goals
                  </FormLabel>
                  <br />{" "}
                  <FormControl>
                    <Space size={[0, 8]} wrap>
                      {Object.values(FitnessGoals).map((goal) => (
                        <CheckableTag
                          className="sm:text-md font-semibold "
                          key={goal}
                          checked={selectedFitnessGoal === goal}
                          onChange={() => handleFitnessGoalToggle(goal)}
                        >
                          {goal.replace("_", " ")}
                        </CheckableTag>
                      ))}
                    </Space>
                  </FormControl>
                  <FormDescription className="pl-3 mb-3">
                    Select one for each plan
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex p-3 gap-5">
            <FormField
              control={form.control}
              name="planName"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Plan name</FormLabel>
                  <FormControl>
                    <Input
                      id="outlined-basic"
                      placeholder="Name of the plan"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>this is the plan name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Plan Note</FormLabel>
                  <FormControl>
                    <Input placeholder="Describe this plan" {...field} />
                  </FormControl>
                  <FormDescription className="pl-3 mb-3">
                    Notes help you stay organized
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex">
            <FormField
              name="day"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={handleDaySelect}
                    defaultValue={selectedDay}
                  >
                    <FormControl>
                      <SelectTrigger className="h-10 ml-3">
                        <SelectValue placeholder="Select a day for this workout" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="text-black z-[500]">
                      {Object.values(Day).map((day) => (
                        <SelectItem key={day} value={day}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <button
            className="py-3 px-10 ml-3  bg-indigo-500 text-white rounded-[30px] flex items-center gap-2"
            type="submit"
          >
            {loading ? (
              "Creating..."
            ) : (
              <h1 className="flex items-center gap-2">
                Create <Plus />{" "}
              </h1>
            )}
          </button>
        </form>
      </Form>
    </div>
  );
};

export default PlanForm;
