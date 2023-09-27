"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { GoalCreation, GoalSchema } from "@/lib/type";
import { DatePicker } from "antd";
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

import { toast } from "react-toastify";
import { X } from "lucide-react";

type Props = {};

const GoalForm = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  const {
    reset,
    formState: { errors, isLoading },
  } = useForm();
  const form = useForm<GoalCreation>({
    resolver: zodResolver(GoalSchema),
    defaultValues: {
      goal: "",
      calories: "",
      isCompleted: false,
    },
  });

  const onSubmit = async (data: GoalCreation) => {
    try {
      setLoading(true);
      const response = await fetch("/api/Goals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to make Goal");
      }
      toast.success("Successfully set goal");
      handleClose(); // Close the dialog after a successful API call
      reset(); // Reset the form
      router.refresh();
    } catch (error) {
      console.error("Could not create Goal:", error);
      toast.error("Error setting goal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AlertDialog  open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger className="grid grid-cols-1 w-full">
          <button
            
            className="bg-indigo-500   text-white rounded-[30px] p-2"
          >
            Set goal
          </button>
        </AlertDialogTrigger>

        <AlertDialogContent className="flex flex-col justify-center items-center">
          <AlertDialogCancel className="rounded-full absolute right-5 top-3">
            <X size={40} />
          </AlertDialogCancel>

          <Form {...form}>
            <h2 className="text-start absolute left-10 top-12  ">
              Set your weight and daily calories goal
            </h2>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="z-[-1] mt-20 flex flex-col  p-3 rounded-[30px] gap-2 items-start"
            >
              <div className="grid md:grid-cols-1   gap-[20px] ">
                <div className="grid grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="goal"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="text-sm  "
                            placeholder="Weight(lb)"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-md font-bold text-black">
                          Target weight
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="calories"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="text-sm  "
                            placeholder="Calories"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-md font-bold text-black ">
                          Daily calories
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <button
                  className="rounded-[30px] bg-lime-300 text-black text-lg py-5"
                  type="submit"
                >
                  {loading ? 'Setting goal...' : 'Set Goal'}
                </button>
              </div>
            </form>
          </Form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default GoalForm;
