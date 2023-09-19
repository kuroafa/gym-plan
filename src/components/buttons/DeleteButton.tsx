"use client";

import { DeleteSchema } from "@/lib/type";
import { useRouter } from "next/navigation";
import { GrClose } from "react-icons/gr";
import React from "react";
import { Button } from "../ui/button";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  id: string;
};

const DeleteButton = ({ id }: Props) => {
  const router = useRouter();
  const deleteAppointment = (AppointmentId: string) => {
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
          <h1 className="text-xl font-medium italic hover:bg-gray-200  shadow-lg shadow-lime-500 px-5 py-2 rounded-xl">Delete</h1>
        </DialogTrigger>
        <DialogContent className="flex flex-col items-start">
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            You are deleting this plan forever
          </DialogDescription>
          <Button
            onClick={() => deleteAppointment(id)}
            variant="destructive"
            className="self-end"
          >
            Delete
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteButton;