import SigninForm from "@/components/forms/SigninForm";
import Signupform from "@/components/forms/Signupform";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const session = await getAuthSession();
  if (session) {
    redirect("/Dashboard");
  }

  return (
    <div className="p-5">
      <div className="flex items-center justify-center">
        <div className=" ">
          <h1 className="md:text-6xl text-5xl  text-center font-bold">
            SIGN <span className="text-indigo-500">IN</span>{" "}
          </h1>
          <SigninForm />
          <p className="text-xl mt-3">
            Don&apos;t have an account?{" "}
            <Link className="text-slate-700" href="/">
              Sign Up
            </Link>
          </p>
        </div>
        <div className="col-span-2 "></div>
      </div>
    </div>
  );
};

export default page;
