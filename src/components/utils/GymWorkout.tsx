'use client'
import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";


import { GymBuildingWorkouts } from "./Data";
import Image from "next/image";
import { Button } from "@mui/material";
import GymModalContent from "../GymModalContent";

type Props = {
  onClose: () => void;
  open: boolean;
};

  
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
const GymWorkout: React.FC<Props> = ({ onClose, open }) => {

  const ModelStyles = {
    position: "fixed",
    top: "13%",
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

  return (
    <>
    <div className="">
      {open && (
        <div>
          <div onClick={onClose} style={OverlayStyle} />
          <div style={ModelStyles}>
            <GymModalContent/>
          </div>
        </div>
      )}
    </div>
  </>
  );
};

export default GymWorkout;