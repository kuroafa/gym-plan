import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

type Props = {};

const BMIform = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [mass, setMass] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [result, setResult] = useState<string | number | null>(null); // Initialize with null
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
  const handleClose = () => {
    setOpen(false);
    // Clear input fields and result when closing the modal
    setMass("");
    setHeight("");
    setResult(null);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const calculateBmi = () => {
    // Check if either height or mass is not a valid number
    if (isNaN(parseFloat(height)) || isNaN(parseFloat(mass))) {
      setResult("Please enter valid height and weight.");
      return;
    }

    // Calculate BMI using the formula
    const bmi = parseFloat(mass) / (parseFloat(height) ** 2);

    setResult(bmi.toFixed(2));
    setOpen(false)
  };

  return (
    <div className="mt-3">
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
         <h1 className="text-xl font-medium">Calculate your Body Mass Index</h1>
              <>
                <Input
                  placeholder="Weight"
                  value={mass}
                  onChange={(e) => {
                    setMass(e.target.value);
                  }}
                />
                <Input
                  placeholder="Height"
                  value={height}
                  onChange={(e) => {
                    setHeight(e.target.value);
                  }}
                />
                <Button onClick={calculateBmi}> Calculate BMI</Button>
              </>
          
          </Box>
        </Fade>
      </Modal>
      <div className="flex items-center gap-2">
          <Button onClick={handleOpen}>Calculate BMI</Button>
         
      </div>
    </div>
  );
};

export default BMIform;

