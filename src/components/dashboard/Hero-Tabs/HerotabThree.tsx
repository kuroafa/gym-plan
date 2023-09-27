import MealSlide from "@/components/dashboard/MealSlide";
import PlanPage from "@/components/dashboard/PlanPage";
import Stats from "@/components/Stats";
import TrainingAppointmentForm from "@/components/forms/TrainingAppointmentForm";
import PlanForm from "@/components/forms/PlanForm";
import { Plan } from "@prisma/client";
import React from "react";

type Props = {
  planData: Plan[];
};
const PlanFormStyles = {
  // backgroundImage: `url("/gymgirl.png")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

const HerotabThree = ({ planData }: Props) => {
  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <div style={PlanFormStyles} className="rounded-[30px] ">
        <h2 className="text-3xl font-semibold  my-2">Create A Plan</h2>
        <PlanPage planData={planData} />
      </div>
      <div className="rounded-[30px] grid grid-cols-1 ">
        <MealSlide planData={planData} />
      </div>
    </div>
  );
};

export default HerotabThree;
