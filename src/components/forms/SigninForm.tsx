"use client";
import { SigninSchema, SigninType } from "@/lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
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
import SignInButton from "../buttons/SignInButton";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import InputAdornment from "@mui/material/InputAdornment";

type Props = {};

const SigninForm = (props: Props) => {
  const [showPassword, setShowPassword] = useState(true);
  const handleShow= () =>{
setShowPassword(!showPassword)
  }
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
    if (signinData?.ok) {
      toast.success("Successfully logged in");
    } else {
    }
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
                <FormItem className="relative">
                  <FormControl>
                    <TextField
                      type={showPassword ? "password" : "text"}
                      className="w-80"
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      {...field}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Button
                              onClick={() => setShowPassword(!showPassword)}
                              className="cursor-pointer"
                              aria-label="Toggle password visibility"
                            >
                              {showPassword ? (
                                <EyeOff />
                              ) : (
                                <Eye />
                              )}
                            </Button>
                          </InputAdornment>
                        ),
                      }}
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
              className="border-black text-black hover:border-indigo-500 hover:text-black hover:bg-indigo-500 w-[320px] "
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
