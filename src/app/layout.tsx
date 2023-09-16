import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import SideBar from "@/components/navbar/SideBar";
import { getAuthSession } from "@/lib/nextauth";
import UserAccountNav from "@/components/navbar/UserAccountNav";
import { Button } from "@/components/ui/button";

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
        {!session?.user && <Navbar />}
        <div
          className={cn(
            inter.className,
            `antialiased flex flex-col ${session?.user ? "flex-row" : ""}`
          )}
        >
          {!!session?.user && (
            <div className=" absolute z-[999]">
              <SideBar />
            </div>
          )}
          <div className="flex-col flex p-5 ml-[65px] w-full">
            <div className="flex items-center  justify-between">
              <h1 className="pl-5 text-lg font-medium">
                Welcome, {session?.user.name?.slice(0, 7)}
              </h1>
             
              <div className="pr-10">
                {session ? <UserAccountNav user={session?.user} /> : null}
              </div>
            </div>
            <div className={`${!!session?.user ? " " : " "} mt-5  `}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
