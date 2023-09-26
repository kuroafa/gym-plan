"use client";
import { SigninSchema, SigninType } from "@/lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Button, TextField } from "@mui/material";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import SignInButton from "./SignInButton";

type Props = {};

const SigninForm = (props: Props) => {
  const router = useRouter();
  const {
    reset,
    formState: { errors, isLoading },
  } = useForm();
  const form = useForm<SigninType>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const onSubmit = async (data: SigninType) => {
    const signinData = await signIn("credentials", {
      email: data.email,
      password: data.password,
    });
    if (signinData?.error) {
      console.log(signinData.error);
    } else {
      router.push("/Dashboard");
    }
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-3">
          <div className="flex flex-col gap-2 mt-5 ">
            <div className="flex flex-col gap-2">
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
                        className="w-80"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <TextField
                        className="w-80"
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
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Button
              className="border-black text-black hover:border-orange-500 hover:bg-orange-500 w-[320px] "
              variant="outlined"
              type="submit"
            >
              SIGN IN
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SigninForm;
