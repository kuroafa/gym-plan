import { getAuthSession } from "@/lib/nextauth";
import Link from "next/link";
import React from "react";
import { prisma } from "@/lib/db";


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@mui/material";
import Hamburger from "hamburger-react";
import SideBar from "./SideBar";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSession();
  const getAllPlan = await prisma.plan.findMany();

  return (
    <div className=" ">
      <div className="flex lg:px-6 px-3 items-center justify-between h-20 mt-5  w-full ">
        <div className="flex items-center  gap-5">
          <Link href="/" className="items-center flex ">
            <h1 className="rounde-lg text-5xl font-extrabold p-4  ">Gymify</h1>
          </Link>
          {/* <div>
              <h1 className="text-xl font-normal ">
                Welcome to Gymify,{" "}
                <span className="font-semibold">{session?.user.name}</span>
              </h1>
            </div> */}
        </div>

        <div className="flex gap-5 pr-5 items-center">
          {!session?.user ?  <Link href='/SigninPage'>
            <button className="text-xl font-semibold rounded-[20px] bg-black text-white  px-6 py-2">
                Sign in
            </button>
          </Link> : <SideBar/> }
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
