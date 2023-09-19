import WorkoutPage from "@/components/Main/WorkoutPage";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { Plan } from "@prisma/client";
import { Divider } from "antd";
import { redirect } from "next/navigation";
import { platform } from "os";
import React from "react";

type Props = {
  planData: Plan[];
};

const page = async ({ planData }: Props) => {
  const session = await getAuthSession();
  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <WorkoutPage planData={planData} />
    </div>
  );
};

export default page;
