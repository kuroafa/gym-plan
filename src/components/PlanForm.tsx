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

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Plan } from "@prisma/client";
import { Checkbox } from "./ui/checkbox";
import HoverNavbar from "./HoverNavbar";
import Image from "next/image";

type Props = {};

const PlanForm = (prop: Props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const router = useRouter();

  const form = useForm<PlanCreation>({
    resolver: zodResolver(PlanCreationSchema),
    defaultValues: {
      planName: "",
      description: '',
    },
  });
  const onSubmit = async (data: PlanCreation) => {
    try {
      const response = await fetch("/api/plans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to make Plan");
      }
    } catch (error) {
      console.error("Could not create Plan:", error);
    }
    router.push("/planner");
    router.refresh;
  };

  return (
    <div className="flex items-center justify-between  ">
        <AlertDialog>
          <div className="flex flex-col items-start justify-start">
            <AlertDialogTrigger className="text-black text-xl flex items-center gap-2 ">
              <Button variant={'secondary'} className="flex gap-5 p-5">
                 <h2>Create new plan</h2>
                <Image alt="add" src="/post.png" width={30} height={30}/>
              </Button>
            </AlertDialogTrigger>
          </div>
          <Form {...form}>
            <AlertDialogContent>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="z-[-1] space-y-8"
              >
                <div className="flex flex-col gap-[10px] flex-wrap">
                  <FormField
                    control={form.control}
                    name="planName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Plan Name</FormLabel>
                        <FormControl>
                          <Input placeholder="plan name..." {...field} />
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
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input placeholder="Describe this plan..." {...field} />
                        </FormControl>
                        <FormMessage />
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

export default PlanForm;
