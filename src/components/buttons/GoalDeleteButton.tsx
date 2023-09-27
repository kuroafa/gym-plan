"use client";

import { DeleteSchema } from "@/lib/type";
import { useRouter } from "next/navigation";
import { GrClose } from "react-icons/gr";
import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

type Props = {
  id: string;
};

const GoalDeleteButton = ({ id }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const deleteGoal = async (GoalId: string) => {
    try {
      setLoading(true);
      const response = await fetch("/api/Goals", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: GoalId,
        }),
      });

      router.refresh();
      router.push("/Dashboard");
    } catch (error) {
      console.log(`${error} deleting goal`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => deleteGoal(id)}
        className="bg-indigo-400 text-white rounded-[30px] p-2"
      >
        {loading ? "Clearing..." : "Clear Goal"}
      </button>
    </>
  );
};

export default GoalDeleteButton;
