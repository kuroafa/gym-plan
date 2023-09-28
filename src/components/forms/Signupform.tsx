"use client";
import { UserCreationSchema, UserSchema } from "@/lib/type";
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

type Props = {};

const Signupform = (props: Props) => {
  const router = useRouter();
  const {
    reset,
    formState: { errors, isLoading },
  } = useForm();
  const form = useForm<UserSchema>({
    resolver: zodResolver(UserCreationSchema),
    defaultValues: {
      username: "",
      name: "",
      password: "",
      email: "",
      confirmedPassword: "",
    },
  });
  const onSubmit = async (data: UserSchema) => {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Created Account successfully");
      } else {
        console.log("Registering failed");
       
      }
    } catch (error) { 
      toast.error("Error creating Account");
      console.error("Could not create account:", error);
    } finally {
      form.reset();
      router.push("/SigninPage");
    }
  };

  return (
    <>
      <div className="   p-5  ">
        <p className="text-3xl font-medium">Create an account</p>
       
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="  text-black">
            <div className=" gap-5 my-5 ">
         
              <div className="grid grid-cols-2  gap-2 mb-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <TextField
                          id="outlined-basic"
                          label="Full Name"
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
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <TextField
                          id="outlined-basic"
                          label="Username"
                          variant="outlined"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
               
              </div> 
             
              <div >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="mb-2 grid grid-cols-1">
                        <FormControl>
                          <TextField
                            id="outlined-basic"
                            label="Email"
                            className="1"
                            variant="outlined"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                 
                </div>
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <TextField
                          id="outlined-basic"
                          label="Password"
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
                  name="confirmedPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <TextField
                          id="outlined-basic"
                          label="Confirm Password"
                          variant="outlined"
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
              Sign Up
            </Button>
          </form>
        </Form>
        <p className="text-xl mt-3">
          Already have an account?{" "}
          <Link className="text-indigo-700" href="/SigninPage">
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
};

export default Signupform;
