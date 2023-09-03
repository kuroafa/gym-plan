import React from "react";
import { getAuthSession } from "@/lib/nextauth";
import Image from "next/image";
import { redirect } from "next/navigation";
import PlanHero from "@/components/Main/planner/PlanHero";
import { Button } from "@/components/ui/button";

import PlanForm from "@/components/PlanForm";
import HoverNavbar from "@/components/HoverNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import AllPlans from "@/components/Main/planner/AllPlans";

type Props = {

};

const page = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  return (
    <div>
      <div className=" flex justify-center flex-col-reverse md:flex-row  gap-5 pl-5 xl:pl-[50px] pt-20">
        <div className="flex flex-col gap-60">
          <div className="pt-20 flex flex-col gap-2">
            <h1 className="text-8xl font-medium italic">Gymify</h1>
            <p className="text-5xl font-normal">Hard work, Harder <span className="italic">GAINS.</span></p>
            <p className="text-2xl ">Reach your limits & get to the next level</p>
            <div className="flex gap-2 items-center">
              <Link href='/plannerDashboard'><Button className="text-md">Start Planning</Button></Link>
              <Button className="text-md">Learn More</Button>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col items-center justify-start w-fit">
              <h1 className="text-4xl font-bold">10x</h1>
              <p className="w-40 text-lg text-center">Your progress With a detailed PLAN. </p>
            </div>
            <div className="flex flex-col items-center justify-start w-fit">
              <h1 className="text-4xl font-bold">100%</h1>
              <p className="w-40 text-lg text-center">In your control, CREATE plans specifically for you.</p>
            </div>
          </div>
        </div>
        <div className="">
          <img alt="girl image" src="/gymgirl.png" />
        </div>
      </div>
      <PlanHero/>
    <Footer/>
    </div>
  );
};

export default page;
{
  /* <div className="pb-10 flex flex-col gap-1 items-start">
        
          <PlanForm />
        </div> */
}

  

