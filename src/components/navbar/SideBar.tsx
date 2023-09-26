"use client";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { GiGymBag } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { GrPlan } from "react-icons/gr";
import { GiMeal } from "react-icons/gi";
import { GoSignOut } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { signOut } from "next-auth/react";
import Link from "next/link";

type Props = {};

const SideBar = (props: Props) => {
  const [open, setOpen] = useState(false);

  // Toggle the sidebar when the hamburger icon is clicked
  const toggleSidebar = () => {
    setOpen(!open);
    // Toggle overflow class on the body
    if (!open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };
  return (
    <div className=" ">
      <div className=" relative z-40  ">
        <Hamburger toggled={open} toggle={toggleSidebar} />
      </div>
      <div>
        {open && (
          <div className="absolute left-0 top-0 z-30 overflow-no-scroll flex flex-col justify-center items-center gap-10 text-8xl bg-gray-200 h-full w-full">
          
              <Link href="/WorkoutPage">Workouts</Link>
              <Link href="/WorkoutPage">Workouts</Link>
              <Link href="/WorkoutPage">Workouts</Link>
         
            
          </div>
        )}
        {/* <div className="flex items-center mb-5 gap-5">
          <GoSignOut
            className="bg-gray-500 hover:bg-lime-200 text-5xl rounded p-2 cursor-pointer block float-left"
            onClick={() => {
              signOut().catch(console.error);
            }}
          />
          <h1
            className={`text-white origin-left font-normal md:text-3xl text-2xl ${
              !open && "scale-0"
            }`}
          >
            Log Out
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default SideBar;
