import React from "react";
import { getAuthSession } from "@/lib/nextauth";
import Image from "next/image";
import { redirect } from "next/navigation";
import PlanHero from "@/components/Main/planner/PlanHero";
import { Button } from "@/components/ui/button";

import PlanForm from "@/components/forms/PlanForm";
import HoverNavbar from "@/components/HoverNavbar";
import Footer from "@/components/dashboard/Footer";
import Link from "next/link";
import AllPlans from "@/components/Main/planner/AllPlans";
import Hero from "@/components/Main/Hero";
import PlanCreationForm from "@/components/forms/PlanCreationForm";

type Props = {};

const page = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  return (
    <div className="">
      <h1 className=" mx-8 md:text-3xl text-xl font-semibold ">
        Welcome {session.user.name}
      </h1>
      <h1 className="my-10 mx-8 md:text-3xl text-xl font-semibold ">
        Fill out information about yourself to get your free customized workout!
      </h1>
      <PlanCreationForm showStepNumber={true} />
    </div>
  );
};

export default page;
