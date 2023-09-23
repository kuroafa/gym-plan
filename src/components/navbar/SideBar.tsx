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
  };

  return (
    <div className="absolute ">
      <div
        className={`bg-black h-full w-72 md:pl-4 pl-2 flex flex-col justify-between transition-all duration-300 ${
          open ? "left-0" : "-left-72"
        } fixed`}
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 ">
            <div className="flex">
              <Link href="/Dashboard" className="items-center flex ">
                <div className="flex items-center gap-5">
                  <MdDashboard className="bg-gray-300 text-5xl rounded p-2 cursor-pointer block float-left" />
                  <h1
                    className={`text-white origin-left font-medium md:text-5xl text-3xl ${
                      !open && "scale-0"
                    }`}
                  >
                    Dashboard
                  </h1>
                </div>
              </Link>
              <div className="bg-orange-500 mt-4 rounded-full gap-2 py-2 md:ml-[55px] ml-[103px] flex items-center  px-5 text-3xl top-5 cursor-pointer origin-left font-medium">
                <div className=" mt-2   text-white">
                  <Hamburger toggled={open} toggle={toggleSidebar} />
                </div>
                <Link href="/Dashboard">
                  <h1
                    className={`rounded-lg md:text-5xl text-3xl font-bold italic text-white ${
                      open && "scale-0 hidden"
                    }`}
                  >
                    Gymify
                  </h1>
                </Link>
              </div>
            </div>
            <Link href="/planPage" className="items-center flex ">
              <div className="flex items-center gap-5">
                <GrPlan className="bg-gray-500 hover:bg-gray-200 text-5xl rounded p-2 cursor-pointer block float-left" />
                <h1
                  className={`text-white origin-left  font-normal md:text-3xl text-2xl  ${
                    !open && "scale-0"
                  }`}
                >
                  Plan
                </h1>
              </div>
            </Link>
            <Link href="/WorkoutsPage" className="items-center flex ">
              <div className="flex items-center gap-5">
                <CgGym className="bg-gray-500 hover:bg-gray-200 text-5xl rounded p-2 cursor-pointer block float-left" />
                <h1
                  className={`text-white origin-left  font-normal md:text-3xl text-2xl  ${
                    !open && "scale-0"
                  }`}
                >
                  Workout
                </h1>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex items-center mb-5 gap-5">
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
        </div>
      </div>
    </div>
  );
};

export default SideBar;
