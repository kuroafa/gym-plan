"use client";
import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

import { Button } from "../ui/button";
import { LongListOutdoorParkWorkouts } from "./Data";

type Props = {};


// This is a long list of outdoor park workouts that you can use for your fitness routine.

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
const OutDoorWorkout = (props: Props) => {
  const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [timer, setTimer] = useState<number>(0); // Ensure timer is treated as a number
  const [isResting, setIsResting] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (currentWorkoutIndex < LongListOutdoorParkWorkouts.length) {
      const currentWorkout = LongListOutdoorParkWorkouts[currentWorkoutIndex];
      if (!isResting) {
        const restTimeInSeconds = currentWorkout.restTime;
        setTimer(restTimeInSeconds);
        const interval = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        const workoutTimer = setTimeout(() => {
          setIsResting(true);
          clearInterval(interval);
        }, restTimeInSeconds * 1000);

        return () => {
          clearTimeout(workoutTimer);
          clearInterval(interval);
        };
      } else {
        // Resting
        const restInterval = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        const restTimer = setTimeout(() => {
          setIsResting(false);
          if (currentSet < currentWorkout.sets) {
            setCurrentSet((prevSet) => prevSet + 1); // Move to the next set
          } else {
            setCurrentSet(1); // Reset sets and move to the next workout
            setCurrentWorkoutIndex((prevIndex) => prevIndex + 1); // Move to the next workout
          }
          clearInterval(restInterval);
        }, timer * 1000);

        return () => {
          clearTimeout(restTimer);
          clearInterval(restInterval);
        };
      }
    }
  }, [currentWorkoutIndex, currentSet, isResting]);

  const currentWorkout = LongListOutdoorParkWorkouts[currentWorkoutIndex];

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {currentWorkout ? (
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
            )}
          </Box>
        </Fade>
      </Modal>
      <Button onClick={handleOpen}>Start Workout</Button>
    </div>
  );
};

export default OutDoorWorkout;
