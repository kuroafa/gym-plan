import Footer from "@/components/dashboard/Footer";
import Hero from "@/components/Main/Hero";
import Signupform from "@/components/forms/Signupform";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";



export default async function Home() {
  const session = await getAuthSession();
  if (session?.user) {
    return redirect("/Dashboard");
  }
 

  return (
   
      <div  className=" sm:bg-center-bottom bg-center-left ">
        {/* Dark overlay */}
        <div className="grid md:grid-cols-2 ">
          <div className="grid xl:grid-cols-2  md:grid-cols-1 gap-5  h-[750px] ">
            <div className="flex flex-col gap-20">
              <div className="flex flex-col relative z-[500] gap-2">
                <p className="lg:text-9xl text-7xl whitespace-nowrap font-bold ">
                  Hard work,
                  <br />
                  Harder <span className="italic text-orange-500">GAINS.</span>
                </p>
                <p className="md:text-3xl text-2xl  font-semibold">
                  Reach your limits & get to the next{" "}
                  <span className="text-orange-500">level</span>
                </p>
                <div className="flex mt-3 gap-3">
                  <Signupform />
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/signuppageimage.jpg" alt="heroImage" className="w-[600px] mt-5 rounded-xl" />
          </div>
        </div>
        <Footer />
  
    </div>
  );
}
