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
import Hero from "@/components/Main/Hero";

type Props = {};

const page = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  return (
    <div className="">
      <Hero />
      <div className=" pt-2">
        <div className=" grid xl:grid-cols-2 grid-cols-1 xl:ml-20 ml-3">
          <div>
            <h1 className="md:text-4xl text-3xl  py-4">
              Benefits of working out on a daily basies
            </h1>
            <h2 className="text-3xl font-semibold pb-2">Health Benefits</h2>
            <ul>
              <li className="text-xl font-medium flex items-center gap-2 ">
                <Image
                  src="/check-box.png"
                  width={40}
                  height={40}
                  alt="check"
                />
                Maintaining health
              </li>
              <li className="text-xl font-medium flex items-center gap-2 ">
                <Image
                  src="/check-box.png"
                  width={40}
                  height={40}
                  alt="check"
                />
                Creating habits that are healthy
              </li>
              <li className="text-xl font-medium flex items-center gap-2">
                <Image
                  src="/check-box.png"
                  width={40}
                  height={40}
                  alt="check"
                />
                Being flexable
              </li>
              <li className="text-xl font-medium flex items-center gap-2">
                <Image
                  src="/check-box.png"
                  width={40}
                  height={40}
                  alt="check"
                />
                breathing better
              </li>
              <li className="text-xl font-medium flex items-center gap-2">
                <Image
                  src="/check-box.png"
                  width={40}
                  height={40}
                  alt="check"
                />
                Happier life
              </li>
            </ul>
            <div className="flex gap-5 py-10">
              <div className="text-center">
                <h2 className="text-2xl font-bold">100%</h2>
                <h3 className="text-xl">Higher Energy</h3>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">HIGHER</h2>
                <h3 className="text-xl">Confidence</h3>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">MOTIVATION</h2>
                <h3 className="text-xl">Breaking Boundries</h3>
              </div>
            </div>
          </div>
          <div className="lg:mr-20">
            <img alt="girl image" src="/gymgirl.png" />
          </div>
        </div>
      </div>

      <PlanHero />
      <Footer />
    </div>
  );
};

export default page;
{
  /* <div className="pb-10 flex flex-col gap-1 items-start">
        
          <PlanForm />
        </div> */
}
