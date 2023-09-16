"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronLeftCircle } from "lucide-react";
import { GiGymBag } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { GrPlan } from "react-icons/gr";
import { GiMeal } from "react-icons/gi";
import { GoSignOut } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import Hamburger from "hamburger-react";
type Props = {};

const SideBar = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="  ">
      <div
        className={`bg-black h-full flex  flex-col justify-between ${
          !!open ? "w-72 p-4 " : "w-20 p-2 "
        } fixed`}
      >
        <div className="flex flex-col  gap-5">
          <div
            className={`bg-white rounded flex items-center justify-between px-6   text-3xl  top-5  cursor-pointer origin-left font-medium  ${
              !open && "-left-5"
            }`}
          >
            <div className="-ml-4">
              <Hamburger toggled={open} toggle={setOpen} />
            </div>
            <h1 className={`${
              !open && "scale-0"
            }`}>Gymify</h1>
          </div>
       
          <div className="flex flex-col gap-3">
            <Link href="/Dashboard" className="items-center flex ">
              <div className="flex items-center gap-5">
                <MdDashboard className="bg-gray-300 text-5xl rounded p-2 cursor-pointer block float-left" />
                <h1
                  className={`text-white origin-left font-medium text-2xl ${
                    !open && "scale-0"
                  }`}
                >
                  Dashboard
                </h1>
              </div>
            </Link>
            <Link href="/WorkoutsPage" className="items-center flex ">
              <div className="flex items-center gap-5">
                <CgGym className="bg-gray-500 hover:bg-gray-200 text-5xl rounded p-2 cursor-pointer block float-left" />
                <h1
                  className={`text-white origin-left  font-normal text-xl  ${
                    !open && "scale-0"
                  }`}
                >
                  Workouts
                </h1>
              </div>
            </Link>
            <Link href="/" className="items-center flex ">
              <div className="flex items-center gap-5">
                <GrPlan className="bg-gray-500 hover:bg-gray-200 text-5xl rounded p-2 cursor-pointer block float-left" />
                <h1
                  className={`text-white origin-left  font-normal text-xl  ${
                    !open && "scale-0"
                  }`}
                >
                  Plans
                </h1>
              </div>
            </Link>
            <Link href="/" className="items-center flex ">
              <div className="flex items-center gap-5">
                <GiMeal className="bg-gray-500 hover:bg-gray-200 text-5xl rounded p-2 cursor-pointer block float-left" />
                <h1
                  className={`text-white origin-left  font-normal text-xl  ${
                    !open && "scale-0"
                  }`}
                >
                  Meals+
                </h1>
              </div>
            </Link>
          </div>
        </div>
        <Link href="/" className="items-center flex ">
          <div className="flex items-center gap-5">
            <GoSignOut
              className="bg-gray-500 hover:bg-gray-200 text-5xl rounded p-2 cursor-pointer block float-left"
              onClick={() => {
                signOut().catch(console.error);
              }}
            />
            <h1
              className={`text-white origin-left  font-normal text-xl  ${
                !open && "scale-0"
              }`}
            >
              Log Out
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
