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
      gender: "Male",
      age: "",
      height: "",
      weight: "",
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
      } else {
        console.log("Registering failed");
      }
    } catch (error) {
      console.error("Could not create account:", error);
    } finally {
      form.reset();
      router.push("/SigninPage");
    }
  };

  return (
    <>
      <div className="  shadow-2xl shadow-black rounded-xl p-5  ">
        <h1 className="text-6xl font-medium">SIGN UP</h1>
        <p className="text-4xl font-normal mt-1">
          Let’s get started by entering a few details below!
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-3 text-black">
            <div className="flex flex-col gap-2 mt-5 ">
              <Radio.Group defaultValue="a" size="large">
                <Radio.Button value="Male">Male</Radio.Button>
                <Radio.Button value="Female">Female</Radio.Button>
              </Radio.Group>
              <div className="flex gap-2">
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
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <TextField
                          id="outlined-basic"
                          label="Email"
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
        <p className="text-2xl mt-2">
          Already have an account?{" "}
          <Link className="text-lime-700" href="/SigninPage">
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
};

export default Signupform;
