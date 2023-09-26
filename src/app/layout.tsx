import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import SideBar from "@/components/navbar/SideBar";
import { getAuthSession } from "@/lib/nextauth";
import UserAccountNav from "@/components/navbar/UserAccountNav";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PlanForm from "@/components/forms/PlanForm";
import TrainingAppointmentForm from "@/components/TrainingAppointmentForm";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gymify",
  description: "Gym Daily Planner",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();
  return (
    <html lang="en">
      <body>
        {" "}
         <Navbar />
        {/* {session?.user && (
          <div className=" absolute z-[999]">
            <SideBar />
          </div>
        )} */}
        <div
          className={cn(
            inter.className,
            `antialiased flex flex-col ${session?.user ? "flex-row" : ""}`
          )}
        >
          <div
            className={`flex-col flex p-5 ${session?.user ? "" : ""} w-full`}
          >
            <div className="flex items-center  justify-end">
              {/* {session?.user ? (
                <h1 className="pl-5 text-2xl font-medium">
                  {" "}
                  Welcome,<br/> {session?.user.name}
                </h1>
              ) : (
                ""
              )} */}
              <div className="flex items-center w-full">
                {" "}
                {/* <Image
            width={80}
            height={40}
              src="/muscle.png"
              alt="muscle"
              className=" bg-white rounded-full p-2"
            /> */}
              </div>

              <div className="">
                {session ? (
                  <div className="pr-5 mt-1 flex items-center gap-2 ">
        

                    {/* <UserAccountNav user={session?.user} /> */}
                  </div>
                ) : null}
              </div>
            </div>
            <div
              className={`${
                !!session?.user ? " " : " "
              } md:mt-1 md:p- p-0  `}
            >
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
