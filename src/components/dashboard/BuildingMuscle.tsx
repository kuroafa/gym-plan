"use client";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import TrainingAppointmentForm from "../forms/TrainingAppointmentForm";

const BuildingMuscle = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="">
        {open && (
          <div>
            <div
              onClick={handleClose}
              className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70 p-5 z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: "80%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "80%" }}
              transition={{ delay: 0, duration: 0.2, ease: "linear" }}
              viewport={{ once: true }}
              className="fixed top-[20%] left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-10 z-50"
            >
              <div className="absolute top-3 right-5">
                <X size={40} onClick={handleClose} />
              </div>
              <div className="grid gap-5 grid-cols-1 mt-10 lg:grid-cols-2">
                <div>
                  <h1 className="italic font-extrabold text-4xl my-5">
                    Create a session
                  </h1>
                  <TrainingAppointmentForm handleClose={handleClose} />
                </div>
                <div className="hidden lg:block bg-cover bg-center bg-no-repeat rounded-lg" style={{ backgroundImage: 'url("/gym.webp")' }}></div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
      <div className="grid">
        <button
          onClick={handleOpen}
          className="flex items-center gap-2 hover:bg-white hover:text-black text-xl font-semibold bg-black rounded-[30px] justify-center text-white py-4 px-10"
        >
          Create new session
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default BuildingMuscle;
