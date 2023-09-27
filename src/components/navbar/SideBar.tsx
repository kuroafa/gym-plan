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
import { motion } from "framer-motion";
import Image from "next/image";

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
      {open && (
        <div
          onClick={toggleSidebar}
          className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-20"
        ></div>
      )}
      <div className=" relative z-40  ">
        <Hamburger toggled={open} toggle={toggleSidebar} />
      </div>
      <div>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "-80%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ delay: 0, duration: 0.2, ease: "linear" }}
            viewport={{ once: true }}
            className="absolute left-0 top-0 z-30 overflow-no-scroll flex flex-col justify-between  items-center gap-2 font-semibold pt-10  bg-gray-200 h-full w-72"
          >
            <div className="flex flex-col gap-5">
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{ opacity: 1, x: "0%" }}
                transition={{ delay: 0, duration: 0.3, ease: "linear" }}
                viewport={{ once: true }}
                className=" mb-10"
              >
                <h1 className="text-5xl font-extrabold ">GYMIFY</h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{ opacity: 1, x: "0%" }}
                transition={{ delay: 0, duration: 0.3, ease: "linear" }}
                viewport={{ once: true }}
              >
                <Link
                  className="text-2xl flex gap-2 items-center"
                  href="/Dashboard"
                >
                  <p>Dashboard</p>{" "}
                  <Image
                    src="/right-arrow.png"
                    className="mt-1"
                    alt="arrow"
                    width={20}
                    height={30}
                  />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{ opacity: 1, x: "0%" }}
                transition={{ delay: 0, duration: 0.3, ease: "linear" }}
                viewport={{ once: true }}
              >
                <Link
                  className="text-2xl flex gap-2 items-center"
                  href="/WorkoutsPage"
                >
                  <p>Workouts</p>{" "}
                  <Image
                    src="/right-arrow.png"
                    className="mt-1"
                    alt="arrow"
                    width={20}
                    height={30}
                  />
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              transition={{ delay: 0, duration: 0.3, ease: "linear" }}
              viewport={{ once: true }}
              className="rounded-[30px] bg-indigo-300 mb-20 p-3 cursor-pointer hover:bg-lime-200"
              onClick={() => {
                signOut().catch(console.error);
              }}
            >
              <div className="flex items-center gap-5">
                <GoSignOut className="  text-5xl rounded p-2 cursor-pointer block float-left" />
                <h1
                  className={`origin-left font-semibold md:text-3xl text-2xl ${
                    !open && "scale-0"
                  }`}
                >
                  Log Out
                </h1>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
