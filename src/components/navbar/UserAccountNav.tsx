"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
// import { LogOut } from "lucide-react";
import UserAvatar from "./UserAvatar";
import HoverNavbar from "../HoverNavbar";
import { useRouter } from "next/navigation";


type Props = {
  user: Pick<User, "name" | "image" | "email">;
};

const UserAccountNav = ({ user }: Props) => {
    const [isGenerating, setIsGenerating] = useState(false);
  const [workouts, setWorkouts] = useState([]);
  const [hasFetchedData, setHasFetchedData] = useState(false); // Track whether data has been fetched
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const getWorkouts = async () => {
    try {
      setIsGenerating(true);
      const response = await fetch("api/workouts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setWorkouts(data);
    } catch (error) {
      console.error("Error fetching workouts", error); // Fix the error message here
    } finally {
      setIsGenerating(false);
    }
    
  };
  const clearUsers = async () => {
    try {
      setIsDeleting(true);
      const response = await fetch("api/workouts", {
        method: "DELETE",
      });
      const clearResult = await response.json();
      router.refresh();
      setIsDeleting(false);
      if (clearResult.message === "Data cleared successfully") {
        
      }
    } catch (error) {
      if (error) {
       
      }
    }
  };
  return (
    <div className="flex items-center  gap-5">
      <DropdownMenu>
        <DropdownMenuTrigger>
          {/* user avatar */}
          <UserAvatar user={user} />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="bg-white z-[20] rounded-xl mt-2 flex flex-col items-start justify-start p-3 border-2 "
          align="end"
        >
          <div className="flex items-center justify-start gap-2 p-2 ">
            <div className="flex flex-col space-y-1 leading-none">
              {user.name && <p className="font-medium">{user.name}</p>}
              {user.email && (
                <p className="w-[200px truncate text-sm text-zinc-700">
                  {user.email}
                </p>
              )}
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="p-2" asChild></DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-red-300 flex items-center cursor-pointer p-2"
            onClick={(e) => {
              e.preventDefault();
              signOut().catch(console.error);
            }}
          >
            Sign Out
            {/* <LogOut className="w-4 h-4 ml-2" /> */}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserAccountNav;
