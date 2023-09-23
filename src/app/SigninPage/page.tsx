import SigninForm from "@/components/SigninForm";
import Signupform from "@/components/Signupform";
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
     
      <div className="grid md:grid-cols-3 grid-cols-1">
        <div className=" "> 
        <h1 className="text-8xl font-medium">SIGN <span className="text-lime-500">IN</span> </h1>
          <SigninForm />
          <p className="text-2xl mt-2">Don&apos;t have an account? <Link className="text-lime-700" href='/'>Sign Up</Link></p>
        </div>
        <div className="col-span-2 "></div>
      </div>
    </div>
  );
};

export default page;
