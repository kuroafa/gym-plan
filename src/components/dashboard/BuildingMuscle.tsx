"use client";
import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import GymWorkout from "@/components/dashboard/GymWorkout";
import { motion } from "framer-motion";

import { muscleBuildingWorkouts } from "../utils/Data";
import Image from "next/image";
import { Button } from "@mui/material";
import TrainingAppointmentForm from "../forms/TrainingAppointmentForm";
import { ChevronRight, X } from "lucide-react";

type Props = {};

const BuildingMuscle: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const [openGym, setOpenGym] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const ModelStyles = {
    position: "fixed",
    top: "30%",
    left: "0",
    borderRadius: "10px",
    overflow: "auto",
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
    padding: "50px",
    zIndex: 500,
  };
  const OverlayStyle = {
    position: "fixed",
    top: "0",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: "50px",
    zIndex: 400,
  };
  const bgStyle = {
    position: "relative",
    backgroundImage: `url("/gym.webp")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "30px",
    zIndex: 400,
  };
  return (
    <>
      <div className="">
        {open && (
          <div>
            <div onClick={handleClose} style={OverlayStyle} />
            <motion.div
              initial={{ opacity: 0, y: "80%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "80%" }}
              transition={{ delay: 0, duration: 0.2, ease: "linear" }}
              viewport={{ once: true }}
              style={ModelStyles}
            >
              <div className="absolute top-3 right-5">
                <X size={40} onClick={handleClose} />
              </div>
              <div className="grid gap-5 grid-cols-1 mt-10 lg:grid-cols-2">
                <div>
                  <h1 className="italic font-extrabold text-4xl my-5 ">
                    Create a session{" "}
                  </h1>
                  <TrainingAppointmentForm handleClose={handleClose} />
                </div>
                <div className="hidden lg:block" style={bgStyle}></div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
      <div className="grid ">
        <button
          className="flex items-center gap-2 hover:bg-white hover:text-black sm:text-xl font-semibold bg-black rounded-[30px] justify-center text-white  py-4 px-10"
          onClick={handleOpen}
        >
          Create new session
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default BuildingMuscle;
{
  /* {currentWorkout ? (
              <div className="flex flex-col text-center gap-10">
                <div className=" flex flex-col gap-1">
                  <h2 className="text-5xl">{currentWorkout.exercise}</h2>
                  <p className="text-3xl">
                    Set {currentSet} of {currentWorkout.sets}
                  </p>
                  <p className="text-2xl">Reps {currentWorkout.reps}</p>
                </div>
                <p className="text-xl font-semibold">
                  {isResting
                    ? `Rest for ${timer} seconds`
                    : `Time Remaining: ${timer} seconds`}
                </p>
              </div>
            ) : (
              <div>
                <p className="text-xl font-bold">Take a 15-Second Break</p>
              </div>
            )} */
}
