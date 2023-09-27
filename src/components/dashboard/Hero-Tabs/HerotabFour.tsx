import TrainingAppointmentForm from "@/components/forms/TrainingAppointmentForm";
import WorkoutSessions from "@/components/dashboard/WorkoutSessions";
import { Trainer } from "@prisma/client";
import React from "react";

type Props = {
  trainerData: Trainer[];
};

const HerotabFour = ({ trainerData }: Props) => {
  return (
    <div className="grid grid-cols-1">
      <WorkoutSessions trainerData={trainerData} />
    </div>
  );
};

export default HerotabFour;
