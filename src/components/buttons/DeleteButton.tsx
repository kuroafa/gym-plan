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
import { ChevronRight, Trash2 } from "lucide-react";

type Props = {
  id: string;
};

const DeleteButton = ({ id }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const deletePlan = async (AppointmentId: string) => {
    try {
      setLoading(true);
      const response = await fetch("/api/plans", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: AppointmentId,
        }),
      }); 
      router.refresh();
     
      
      
    } catch (error) {
      console.log(`${error} deleting appointment`);
    } finally{
      setLoading(false);
    }
  };

  return (
    <>
     
          <button
            onClick={() => deletePlan(id)}
           
            className="self-end bg-indigo-400 text-xl px-3 text-white py-2 rounded-[30px] flex gap-2 items-center "
          >
            {loading ? "deleting..." : "Delete plan"}<Trash2 />
          </button>
     
    </>
  );
};

export default DeleteButton;