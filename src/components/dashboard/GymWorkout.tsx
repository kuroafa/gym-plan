"use client";
import React, { useState } from "react";
import PlanForm from "../forms/PlanForm";
import { motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";

const GymWorkout = () => {
  const [openGym, setOpenGym] = useState(false);

  const handleGymClose = () => {
    setOpenGym(false);
  };
  const handleGymOpen = () => {
    setOpenGym(true);
  };

  return (
    <>
      <div className="">
        {openGym && (
          <div>
            <div
              onClick={handleGymClose}
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
                <X size={40} onClick={handleGymClose} />
              </div>
              <div className="grid gap-5 grid-cols-1 mt-10 lg:grid-cols-2">
                <div className="items-start">
                  <h1 className="text-4xl text-left font-extrabold italic">
                    Create new Plan
                  </h1>
                  <PlanForm handleClose={handleGymClose} />
                </div>
                <div
                  className="hidden lg:block bg-cover bg-center bg-no-repeat rounded-lg"
                  style={{ backgroundImage: 'url("/gym2.webp")' }}
                ></div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
      <div className="grid">
        <button
          onClick={handleGymOpen}
          className="flex items-center hover:bg-black hover:text-white text-xl font-semibold bg-indigo-500 rounded-[30px] justify-center text-white py-4 px-10"
        >
          Create Plan
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default GymWorkout;
