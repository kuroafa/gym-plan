import { getAuthSession } from "@/lib/nextauth";
import Link from "next/link";
import React from "react";
import SignInButton from "../buttons/SignInButton";
import { redirect } from "next/navigation";
import UserAccountNav from "./UserAccountNav";
import PlanForm from "../PlanForm";
import { prisma } from "@/lib/db";
import { Plan } from "@prisma/client";
import WorkoutForm from "../WorkoutForm";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  planData: Pick<Plan, "planName" | "userId" | "description" | "id" | "isFave">;
};

const Navbar = async ({ planData }: Props) => {
  const session = await getAuthSession();
  const getAllPlan = await prisma.plan.findMany();

  return (
    <div className=" ">
      <div className="flex lg:px-10 px-3 items-center justify-between h-full mt-5  w-full ">
        <div className="flex items-center  gap-5">
          <Link href="/" className="items-center flex ">
            <img src="/muscle.png" alt="muscle" className="w-[50px]" />
            <h1 className="rounde-lg text-5xl font-light italic p-4">Gymify</h1>
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
              <Popover >
                <PopoverTrigger>Actions</PopoverTrigger>
                <PopoverContent className=" flex justify-center flex-col items-center bg-gray-300 gap-2 sm:mr-[100px] mr-[75px]">
                  <WorkoutForm planData={getAllPlan} />
                  <PlanForm />
                </PopoverContent>
              </Popover>
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
