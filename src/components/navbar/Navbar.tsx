import { getAuthSession } from "@/lib/nextauth";
import Link from "next/link";
import React from "react";
import SignInButton from "../buttons/SignInButton";
import { redirect } from "next/navigation";
import UserAccountNav from "./UserAccountNav";
import PlanForm from "../PlanForm";



type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSession();

  return (
    <div className=" ">
      <div className="flex lg:px-10 px-3 items-center justify-between h-full mt-5  w-full ">
        <div className="flex items-center  gap-5">
          <Link href="/" className="items-center flex ">
            <img src="/muscle.png" alt="muscle" className="w-[50px]" />
            <h1 className="rounde-lg text-5xl font-bold italic p-4">Gymify</h1>
          </Link>
          {/* <div>
              <h1 className="text-xl font-normal ">
                Welcome to Gymify,{" "}
                <span className="font-semibold">{session?.user.name}</span>
              </h1>
            </div> */}
        </div>
        <div className="flex gap-5 pr-5 items-center">
          {session?.user ? (
            <div className="flex items-center gap-2">
              <PlanForm />
              <UserAccountNav user={session?.user} />
            </div>
          ) : (
            <SignInButton text="Sign In" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
