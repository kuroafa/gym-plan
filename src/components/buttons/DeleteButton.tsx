"use client";

import { DeleteSchema } from "@/lib/type";
import { useRouter } from "next/navigation";
import { GrClose } from "react-icons/gr";
import React from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@mui/material";

type Props = {
  id: string;
};

const DeleteButton = ({ id }: Props) => {
  const router = useRouter();
  const deletePlan = (AppointmentId: string) => {
    try {
      const response = fetch("/api/plans", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: AppointmentId,
        }),
      }); 
      router.refresh();
      router.push("/planPage");
      
      
    } catch (error) {
      console.log(`${error} deleting appointment`);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>
         <button className="text-white bg-black rounded-[30px] text-xl px-3 hover:bg-indigo-400 font-medium" variant="outlined">Delete</button>
        </DialogTrigger>
        <DialogContent className="flex flex-col items-start z-[500000000]">
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            You are deleting this plan forever
          </DialogDescription>
          <button
            onClick={() => deletePlan(id)}
           
            className="self-end bg-indigo-400 rounded-[30px] "
          >
            Delete
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteButton;