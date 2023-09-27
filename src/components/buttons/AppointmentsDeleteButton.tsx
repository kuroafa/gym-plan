"use client";

import { DeleteSchema } from "@/lib/type";
import { useRouter } from "next/navigation";
import { GrClose } from "react-icons/gr";
import React, { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@mui/material";
import { X } from "lucide-react";

type Props = {
  id: string;
};

const AppointmentsDeleteButton = ({ id }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const deleteAppointment = async (AppointmentId: string) => {
    try {
      setLoading(true)
      const response = await fetch("/api/trainer", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: AppointmentId,
        }),
      });
      router.refresh();
      router.push("/Dashboard");
    } catch (error) {
      console.log(`${error} deleting appointment`);
    }finally{
      setLoading(false)
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>
        <button
            className="self-end w-20 text-xl px-3 font-bold py-2 rounded-[10px] "
          >
             <X size={50} />
          </button>
        </DialogTrigger>
        <DialogContent className="flex flex-col items-start z-[500000000]">
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            You are deleting this session forever
          </DialogDescription>

          <button
            onClick={() => deleteAppointment(id)}
            className="self-end bg-indigo-400 text-sm px-3 text-white py-2 rounded-[20px] "
          >
            {loading ? "Deleting..." : "Delete Session"}
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AppointmentsDeleteButton;
