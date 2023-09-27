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
import TrainingAppointmentForm from "@/components/forms/TrainingAppointmentForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
              <div className="flex items-center w-full">
                {" "}
              </div>

              <div className="">
                {session ? (
                  <div className="pr-5 mt-1 flex items-center gap-2 ">
                  </div>
                ) : null}
              </div>
            </div>
            <div
              className={`${!!session?.user ? " " : " "} md:mt-0 mt-10 md:p-5 p-0  `}
            >
              {children}
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              {/* Same as */}
              <ToastContainer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
