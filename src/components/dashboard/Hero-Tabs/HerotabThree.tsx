import PlanPage from "@/components/PlanPage";
import Stats from "@/components/Stats";
import TrainingAppointmentForm from "@/components/TrainingAppointmentForm";
import PlanForm from "@/components/forms/PlanForm";
import { Plan } from "@prisma/client";
import React from "react";

type Props = {
  planData: Plan[]
};
const PlanFormStyles = {
    // backgroundImage: `url("/gymgirl.png")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
}

const HerotabThree = ({planData}: Props) => {
  return (
    <div  className="grid lg:grid-cols-2 gap-5">
      <div style={PlanFormStyles} className="rounded-[30px]  ">
        <h2 className="text-3xl font-semibold  my-2">Plan Form</h2>
        <PlanForm />
      </div>
  <div>
    <div className="rounded-[30px]">
    <PlanPage planData={planData}/>
    <div className=" rounded-[40px] mx-5 px-2">
    <Stats planData={planData}/>
    </div>
    </div>
  </div>
    </div>
  );
};

export default HerotabThree;
