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
import { Input, TextField } from "@mui/material";

const { CheckableTag } = Tag;

type Props = {};
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

const PlanForm = (prop: Props) => {
  const [selectedDay, setSelectedDay] = React.useState<Day>();
  const [selectedFitnessGoal, setSelectedFitnessGoal] =
    React.useState<FitnessGoals | null>(FitnessGoals.ARMS_DAY);
  const [selectedTags, setSelectedTags] = React.useState([]);
  const handleDaySelect = (day: Day) => {
    setSelectedDay(day);
  };

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
    } catch (error) {
      console.error("Could not create Plan:", error);
    } finally {
    }
    form.reset();
    window.location.reload(true);
  };

  return (
    <div className="flex items-center justify-between  ">
      <div className="flex flex-col items-start justify-start "></div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-8">
          <div className="flex flex-col gap-[10px] flex-wrap ">
          <div className="mt-2">
                <FormField
                  name="fitnessGoals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-3xl font-bold">
                        Fitness Goals
                      </FormLabel>
                      <FormControl>
                        <Space size={[0, 8]} wrap>
                          {Object.values(FitnessGoals).map((goal) => (
                            <CheckableTag
                              className="text-[15px]"
                              key={goal}
                              checked={selectedFitnessGoal === goal}
                              onChange={() => handleFitnessGoalToggle(goal)}
                            >
                              {goal.replace("_", " ").toLocaleLowerCase()}
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
            <div className="flex   p-3 gap-5">
              <FormField
                control={form.control}
                name="planName"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Plan name</FormLabel>
                    <FormControl>
                      <TextField
                        id="outlined-basic"
                        label="Name of the plan"
                        variant="outlined"
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
                  <FormItem className="flex flex-col">
                      <FormLabel>Plan Note</FormLabel>
                    <FormControl>
                      <TextField
                        id="outlined-basic"
                        label="Describe this plan"
                        variant="outlined"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="pl-3 mb-3">
                      Notes help you stay organized
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 pl-3 ">
              <FormField
                name="day"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select a day</FormLabel>
                    <Select
                      onValueChange={handleDaySelect}
                      defaultValue={selectedDay}
                    >
                      <FormControl>
                        <SelectTrigger className="">
                          <SelectValue placeholder="Select a day for this workout" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="text-black">
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
          </div>
          <button
            className="p-3 bg-indigo-500 text-white rounded-[30px] "
            type="submit"
          >
            Submit
          </button>
        </form>
      </Form>
    </div>
  );
};

export default PlanForm;
