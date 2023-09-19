"use client";
import { useForm } from "react-hook-form";
import {
  PlanCreation,
  PlanCreationSchema,
} from "@/lib/type";
import { custom, z } from "zod";
import { cn } from "@/lib/utils";
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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import * as React from "react";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import { enumUtil } from "zod/lib/helpers/enumUtil";
import { Plan} from "@prisma/client";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

type Props = {
  planData: Plan;

};

enum Day {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}

const WorkoutForm = ({ planData }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const router = useRouter();
  const [selectedDay, setSelectedDay] = React.useState<Day>(Day.MONDAY); // Initialize with a default day
  const [selectedPlan, setSelectedPlan] = React.useState<string>("");
  const handleDaySelect = (day: Day) => {
    setSelectedDay(day);
  };

  const {
    reset,
    formState: { errors, isLoading },
  } = useForm();

  const form = useForm<WorkoutCreation>({
    resolver: zodResolver(WorkOutCreationSchema),
    defaultValues: {
      workOutName: "",
      sets: 10,
      numberPerSet: 8,
      day: "MONDAY",
      planId: "",
    },
  });
  const onSubmit = async (data: WorkoutCreation) => {
    try {
      const completeData = {
        ...data,
        day: selectedDay,
      };

      const response = await fetch("/api/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completeData),
      });

      if (!response.ok) {
        throw new Error("Failed to create workout");
      }
    } catch (error) {
      console.error("Could not create workout:", error);
    }
    router.refresh()
  };

  return (
    <div className="flex ">
      <AlertDialog>
        <div className="flex flex-col items-start justify-start">
          <AlertDialogTrigger className="text-black text-lg flex items-center gap-2 ">
            {/* <p className=" w-fit">CREATE NEW WORKOUT</p> */}
            <Button variant={'secondary'} className="flex gap-2 ">
              <h2>Create new workout</h2>
              <Image alt="add" src="/addworkout.png" width={25} height={30} />
            </Button>
          </AlertDialogTrigger>
        </div>
        <Form {...form}>
          <AlertDialogContent>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="z-[-1] space-y-8"
            >
              <h1 className="text-2xl">Workout Form</h1>
              <div className="flex flex-col gap-[10px] flex-wrap">
                <FormField
                  control={form.control}
                  name="workOutName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Workout Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Workout name..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sets"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How many set&apos;s?</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Set amount..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="numberPerSet"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How many time&apos;s per set?</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Number per set..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
               
                   <FormField
                  control={form.control}
                  name="planId"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Popover open={open} onOpenChange={setOpen} {...field}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={open}
                              className="w-[200px] justify-between"
                            >
                              {selectedPlan ? selectedPlan.toUpperCase() : "Choose a plan"}
                              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[200px] p-0">
                            <Command>
                              <CommandInput
                                placeholder="Search plans..."
                                className="h-9"
                              />
                              <CommandEmpty>No plan found.</CommandEmpty>
                              <CommandGroup>
                                {planData.map((plan) => (
                                  <CommandItem
                                    key={plan.id}
                                    onSelect={(currentValue) => {
                                      setSelectedPlan(currentValue);
                                      setOpen(false);
                                      field.onChange(plan.id);
                                    }}
                                  >
                                    {plan.planName}
                                    <CheckIcon
                                      className={cn(
                                        "ml-auto h-4 w-4",
                                        selectedPlan === plan.planName
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit">Submit</Button>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
            </form>
          </AlertDialogContent>
        </Form>
      </AlertDialog>
    </div>
  );
};

export default WorkoutForm;
