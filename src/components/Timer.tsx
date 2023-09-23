import { Button } from "@mui/material";
import React from "react";
import { useTimer } from "react-timer-hook";

type Props = {
  expiryTimestamp: Date;
};

const Timer = ({ expiryTimestamp }: Props) => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div >
      <div className="xl:text-9xl text-8xl">
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 mt-5">
          <Button variant="outlined" className="bg-green-500 text-black border-lime-500 hover:bg-green-300 hover:border-black" onClick={start}>Start</Button>
          <Button variant="outlined" className="bg-red-500 text-black border-red-500 hover:bg-red-300 hover:border-black" onClick={pause}>Pause</Button>
          <Button variant="outlined" className=" text-black border-blue-500 hover:bg-orange-300 hover:border-black" onClick={resume}>Resume</Button>
          <Button variant="outlined"  className="bg-orange-500 text-black border-lime-500 hover:bg-lime-300 hover:border-black"
            onClick={() => {
              // Restarts to 5 minutes timer
              const time = new Date();
              time.setSeconds(time.getSeconds() + 60);
              restart(time);
            }}
          >
            Restart
          </Button>
      </div>
    </div>
  );
};

export default Timer;
