import Signupform from "@/components/forms/Signupform";
import { getAuthSession } from "@/lib/nextauth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();
  if (session?.user) {
    return redirect("/Dashboard");
  }

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-10 md:mt-0 gap-20 ">
        {/* Dark overlay */}
        <div className="  items-start ">
          <div className="flex flex-col pl-5 gap-2">
            <p className="lg:text-6xl text-5xl  font-bold ">
              Hard work,
              <br />
              Harder <span className="italic text-indigo-500">GAINS.</span>
            </p>
            <p className="md:text-3xl text-2xl  font-semibold">
              Reach your limits & get to the next{" "}
              <span className="text-indigo-500">level</span>
            </p>
          </div>
          <div className="flex mt-3 gap-3">
            <Signupform />
          </div>
        </div>{" "}
        <div className="relative">
          <Image
            width={600}
            height={300}
            src="/gym3.webp"
            alt="heroImage"
            className="w-[600px] -mt-20 md:-mt-10 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
