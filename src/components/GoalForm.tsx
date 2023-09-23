"use client";
import React from "react";
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
import { Button, Input } from "@mui/material";
import { GoalCreation, GoalSchema } from "@/lib/type";
import { DatePicker } from "antd";

type Props = {};

const GoalForm = (props: Props) => {
  const router = useRouter();
  const {
    reset,
    formState: { errors, isLoading },
  } = useForm();
  const form = useForm<GoalCreation>({
    resolver: zodResolver(GoalSchema),
    defaultValues: {
      goal: "",
      isCompleted: false,
    },
  });

  const onSubmit = async (data: GoalCreation) => {
    try {
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
    } catch (error) {
      console.error("Could not create Goal:", error);
    }
    form.setValue("goal", "");
    router.refresh();
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="z-[-1]  flex flex-col gap-2 items-start"
        >
          <div className="flex flex-col gap-[10px] flex-wrap">
            <FormField
              control={form.control}
              name="goal"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="text-lg" placeholder="Add your goals here" {...field} />
                  </FormControl>
                  <FormDescription className="text-2xl">Add a new goal</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button variant="outlined" type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default GoalForm;
