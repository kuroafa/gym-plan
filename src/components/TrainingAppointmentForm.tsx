"use client";
import { useForm } from "react-hook-form";
import {
  PlanCreation,
  PlanCreationSchema,
  TrainerCreationSchema,
  TrainerSchema,
} from "@/lib/type";
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
import { Input } from "./ui/input";
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
import { Space, Tag, TimePicker } from "antd";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "path";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";
import { TextField } from "@mui/material";

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

const TrainingAppointmentForm = (prop: Props) => {
  const [selectedFitnessGoal, setSelectedFitnessGoal] =
    React.useState<FitnessGoals | null>(FitnessGoals.ARMS_DAY);
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);

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
  const form = useForm<TrainerSchema>({
    resolver: zodResolver(TrainerCreationSchema),
    defaultValues: {
      client: "",
      workOutDuration: "",
      date: "FRIDAY",
      fitnessGoals: "ARMS_DAY", // Use an array with the selectedFitnessGoal if it's not null
      time: "",
    },
  });

  const onSubmit = async (data: TrainerSchema) => {
    try {
      const completeData = {
        ...data,
        fitnessGoals: selectedFitnessGoal,
        date: selectedDate ? selectedDate.toISOString() : "",
      };
      const response = await fetch("/api/trainer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completeData),
      });

      if (!response.ok) {
        throw new Error("Failed to make workout session");
      }
    } catch (error) {
      console.error("Could not create workout session:", error);
    } finally {
    }
    form.reset();
    // window.location.reload(true);
  };

  dayjs.extend(customParseFormat);

  const currentDate = new Date();
  const calendarTo = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 2,
    1
  );
  return (
    <div className="flex items-center justify-between pl-1 pt-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-8">
          <div className="flex flex-col gap-[10px] flex-wrap">
          <FormField
              name="fitnessGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-3xl font-bold">Fitness Goals</FormLabel>
                  <FormControl>
                    <Space size={[0, 8]} wrap>
                      {Object.values(FitnessGoals).map((goal) => (
                        <CheckableTag
                          key={goal}
                          checked={selectedFitnessGoal === goal}
                          onChange={() => handleFitnessGoalToggle(goal)}
                        >
                          {goal.replace('_', ' ')}
                        </CheckableTag>
                      ))}
                    </Space>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-5 my-2">
              <FormField
                control={form.control}
                name="client"
                render={({ field }) => (
                  <FormItem  className="flex flex-col">
                    <FormLabel>Client Name</FormLabel>
                    <FormControl>
                    <TextField
                          id="outlined-basic"
                          label="Client name"
                          variant="outlined"
                          {...field}
                        />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="workOutDuration"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Duration of session</FormLabel>
                    <FormControl>
                    <TextField
                          id="outlined-basic"
                          label="Duration"
                          variant="outlined"
                          {...field}
                        />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="">
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col relative gap-2">
                      <FormLabel>Time</FormLabel>
                      <FormControl>
                        <TimePicker
                          className="h-9 relative"
                          placeholder="Start Time"
                          format="hh:mm a"
                          onOk={(time) => {
                            if (time) {
                              const formattedTime = dayjs(time).format("hh:mm A"); // Format the time
                              field.onChange(formattedTime); // Update the field value with the formatted time string
                            }
                          }}
                          value={
                            field.value ? dayjs(parseInt(field.value)) : null
                          }
                          onChange={(time, timeString) => {
                            // Handle time change here
                            console.log("Selected time:", timeString);
                          }}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col gap-2">
                      <FormLabel className="pr-2">Date</FormLabel>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "pl-3 text-left font-normal",
                                  !selectedDate && "text-muted-foreground"
                                )}
                              >
                                {selectedDate ? (
                                  dayjs(selectedDate).format("MMM D, YYYY") // Format the date
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50 " />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto p-0 z-[500000]"
                            align="start"
                          >
                            <Calendar
                              fromDate={new Date()}
                              toDate={calendarTo}
                              mode="single"
                              onSelect={(date) => {
                                setSelectedDate(date); // Update the selectedDate state
                                if (date) {
                                  const formattedDate = date.valueOf(); // Convert the date to a localized string
                                  field.onChange(formattedDate.toString()); // Update the field value with the formatted date string
                                }
                              }}
                              value={selectedDate} // Set the value prop to selectedDate
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                    </div>
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

export default TrainingAppointmentForm;
