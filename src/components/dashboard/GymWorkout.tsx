"use client";
import React, { useEffect, useState } from "react";
import PlanForm from "../forms/PlanForm";
import { motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";

type Props = {};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const GymWorkout: React.FC<Props> = () => {
  const [openGym, setOpenGym] = useState(false);

  const handleGymClose = () => {
    setOpenGym(false);
  };
  const handleGymOpen = () => {
    setOpenGym(true);
  };

  const ModelStyles = {
    position: "fixed",
    top: "30%",
    left: "0",
    borderRadius: "20px",
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
    backgroundImage: `url("/gym2.webp")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "30px",
    zIndex: 400,
  };
  return (
    <>
      <div className="">
        {openGym && (
          <div>
            <div onClick={handleGymClose} style={OverlayStyle} />
            <motion.div
              initial={{ opacity: 0, y: "80%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "80%" }}
              transition={{ delay: 0, duration: 0.2, ease: "linear" }}
              viewport={{ once: true }}
              style={ModelStyles}
            >
              <div className="absolute top-3 right-5">
                <X size={40} onClick={handleGymClose} />
              </div>
              <div className="grid gap-5 grid-cols-1 mt-10 lg:grid-cols-2">
                <div className="items-start">
                  <h1 className="text-4xl text-start font-extrabold italic">
                    Create new Plan
                  </h1>
                  <PlanForm handleClose={handleGymClose} />
                </div>
                <div className="hidden lg:block" style={bgStyle}></div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
      <div className=" grid">
        <button
          onClick={handleGymOpen}
          className=" flex items-center hover:bg-black hover:text-white sm:text-xl gap-2 font-semibold bg-indigo-500 rounded-[30px] justify-center text-white py-4 px-10"
        >
          Create Plan
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default GymWorkout;
