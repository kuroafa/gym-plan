"use client";
import {
  BMISchema,
  BmiCreationSchema,
  UserCreationSchema,
  UserSchema,
} from "@/lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Radio } from "antd";
import { toast } from "react-toastify";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Activity, ArrowUpRight, X } from "lucide-react";

type Props = {};

const BMIform = (props: Props) => {
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
  const form = useForm<BMISchema>({
    resolver: zodResolver(BmiCreationSchema),
    defaultValues: {
      age: "",
      weight: "",
      height: "",
      gender: "Male",
    },
  });
  const onSubmit = async (data: BMISchema) => {
    try {
      const response = await fetch("/api/Bmi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("set BMI successfully");
      }
    } catch (error) {
      toast.error("Error setting bmi");
      console.error("Could not set bmi", error);
    } finally {
      form.reset();
      router.push("/SigninPage");
    }
  };

  return (
    <>
      <div className="   ">
        <AlertDialog open={open} onOpenChange={setOpen}>
          <div className="grid grid-cols-1 gap-2">
            <AlertDialogTrigger className=" bg-lime-300   font-semibold rounded-[30px]">
              <h1 className="flex px-4 py-2 text-xl justify-between items-center">Get BMI <Activity size={40} /></h1>
            
            </AlertDialogTrigger>
                <Link
                href="WorkoutsPage"
                className="bg-white text-lg font-semibold rounded-[30px] px-4 py-2 flex justify-between items-center "
              >
                Start workouts <ArrowUpRight size={40} />
              </Link>
          </div>
          <AlertDialogContent className="flex flex-col justify-center items-center">
            <AlertDialogCancel className="rounded-full absolute right-5 top-3">
              <X size={40} />
            </AlertDialogCancel>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="  text-black"
              >
                <div className=" gap-5 my-5 ">
                  <Radio.Group defaultValue="a" size="large">
                    <Radio.Button value="Male">Male</Radio.Button>
                    <Radio.Button value="Female">Female</Radio.Button>
                  </Radio.Group>
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Age"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-2">
                    <FormField
                      control={form.control}
                      name="weight"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              label="Weight(lb)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="height"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              label="Height(feet)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <Button
                  className="border-black text-black hover:border-orange-500 hover:bg-orange-500 "
                  variant="outlined"
                  type="submit"
                >
                  Calculate BMI
                </Button>
              </form>
            </Form>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default BMIform;
