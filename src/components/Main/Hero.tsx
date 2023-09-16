import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { getAuthSession } from '@/lib/nextauth'
import { redirect } from 'next/navigation'
import PlanHero from './planner/PlanHero'

type Props = {}

const Hero = async (props: Props) => {
   const session = await getAuthSession();
   if (!session?.user) {
     return redirect("/");
   }
  return (
    <div className='  flex  flex-col items-start pl-3 xl:pl-20 pt-5'>
      {/* <div className="  mb-5 text-2xl ">welcome {session?.user.name}</div>
        <h1 className='font-medium md:text-6xl text-4xl '>Stay Fit, Clear, Organized & most of all <span className='font-bold'>GYMIFIED</span></h1>
        <div className=" pt-2">
        <div className=" grid xl:grid-cols-2 grid-cols-1  ">
          <div>
            <h1 className="md:text-4xl text-3xl  py-4">
              Benefits of working out on a daily basies
            </h1>
            <h2 className="text-3xl font-semibold pb-2">Health Benefits</h2>
            <ul>
              <li className="text-xl font-medium flex items-center gap-2 ">
                <Image
                  src="/check-box.png"
                  width={40}
                  height={40}
                  alt="check"
                />
                Maintaining health
              </li>
              <li className="text-xl font-medium flex items-center gap-2 ">
                <Image
                  src="/check-box.png"
                  width={40}
                  height={40}
                  alt="check"
                />
                Creating habits that are healthy
              </li>
              <li className="text-xl font-medium flex items-center gap-2">
                <Image
                  src="/check-box.png"
                  width={40}
                  height={40}
                  alt="check"
                />
                Being flexable
              </li>
              <li className="text-xl font-medium flex items-center gap-2">
                <Image
                  src="/check-box.png"
                  width={40}
                  height={40}
                  alt="check"
                />
                breathing better
              </li>
              <li className="text-xl font-medium flex items-center gap-2">
                <Image
                  src="/check-box.png"
                  width={40}
                  height={40}
                  alt="check"
                />
                Happier life
              </li>
            </ul>
            <div className="flex gap-5 py-10">
              <div className="text-center">
                <h2 className="text-2xl font-bold">100%</h2>
                <h3 className="text-xl">Higher Energy</h3>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">HIGHER</h2>
                <h3 className="text-xl">Confidence</h3>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">MOTIVATION</h2>
                <h3 className="text-xl">Breaking Boundries</h3>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default Hero