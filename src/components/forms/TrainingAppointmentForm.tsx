"use client";
import { useForm } from "react-hook-form";
import {
  TrainerCreationSchema,
  TrainerSchema,
} from "@/lib/type";
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
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Space, Tag, TimePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { CalendarIcon, Plus } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";

import { toast } from "react-toastify";

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

const TrainingAppointmentForm = ({ handleClose }: Props) => {
  const [loading, setLoading] = React.useState(false);
  const [selectedFitnessGoal, setSelectedFitnessGoal] =
    React.useState<FitnessGoals | null>();
  const [selectedDate, setSelectedDate] = React.useState<dayjs.Dayjs | null>(
    null
  );

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
      setLoading(true);
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

      toast.success("Session created successfully");
    } catch (error) {
      console.error("Could not create workout session:", error);
      toast.error("Error creating session");
    } finally {
      setLoading(false);
    }
    form.reset();
    handleClose();
  };

  dayjs.extend(customParseFormat);

  const currentDate = new Date();
  const calendarTo = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 2,
    1
  );
  return (
    <div className=" text-start  ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-8">
          <div className="flex flex-col gap-[10px] ">
            <FormField
              name="fitnessGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-medium">
                    Fitness Goals
                  </FormLabel>
                  <br />{" "}
                  <FormControl>
                    <Space size={[0, 8]} wrap>
                      {Object.values(FitnessGoals).map((goal) => (
                        <CheckableTag
                          key={goal}
                          className="sm:text-md font-semibold "
                          checked={selectedFitnessGoal === goal}
                          onChange={() => handleFitnessGoalToggle(goal)}
                        >
                          {goal.replace("_", " ")}
                        </CheckableTag>
                      ))}
                    </Space>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2   gap-5 my-2">
              <FormField
                control={form.control}
                name="client"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Client Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Client name" {...field} />
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
                      <Input placeholder="Duration" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2   gap-5">
            <FormField
  control={form.control}
  name="time"
  render={({ field }) => (
    <FormItem>
      <div className="flex flex-col relative gap-2">
        <FormLabel>Time</FormLabel>
        <FormControl>
          <TimePicker
            popupStyle={{ top: '250px' }} // Adjust the top value as needed
            className="h-9 relative"
            placeholder="Start Time"
            format="hh:mm a"
            onOk={(time) => {
              if (time) {
                const formattedTime = dayjs(time).format("hh:mm A");
                field.onChange(formattedTime);
              }
            }}
            value={
              field.value ? dayjs(field.value, "hh:mm A") : null
            }
            onChange={(time, timeString) => {
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
        <div className="flex flex-col gap-2">
          <FormLabel className="pr-2">Date</FormLabel>
          <FormControl>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "pl-3  text-left font-normal",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    {selectedDate ? (
                      selectedDate.format("MMM D, YYYY") // Format the date using dayjs
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4  opacity-50 " />
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
                    setSelectedDate(date ? dayjs(date) : null); // Convert Date to Dayjs and update selectedDate
                    if (date) {
                      const formattedDate = date.valueOf(); // Convert the date to a localized string
                      field.onChange(formattedDate.toString()); // Update the field value with the formatted date string
                    } else {
                      field.onChange(''); // Clear the field value if no date is selected
                    }
                  }}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormControl>
        </div>
      )}
    />
            </div>
          </div>
          <button
            className="py-3 px-10 bg-indigo-500 text-white rounded-[30px] "
            type="submit"
          >
            {loading ? (
              "Create..."
            ) : (
              <h1 className="flex items-center gap-2">
                Create workout session <Plus />
              </h1>
            )}
          </button>
        </form>
      </Form>
    </div>
  );
};

export default TrainingAppointmentForm;
