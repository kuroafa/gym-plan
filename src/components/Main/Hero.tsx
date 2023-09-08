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
    <div className='  flex gap-3 flex-col items-start pl-3 xl:pl-20 pt-5'>
      <div className="  mb-5 text-2xl ">welcome {session?.user.name}</div>
        <h1 className='font-medium md:text-6xl text-4xl '>Stay Fit, Clear, Organized & most of all <span className='font-bold'>GYMIFIED</span></h1>
         <div className='flex gap-2 flex-col '>
            <h1 className='font-normal md:text-4xl text-2xl '>What We Offer?</h1>
             <ul>
                <li className='md:text-2xl text-xl font-medium flex items-center gap-2'><img src='/check.png' className='w-[30px]' alt='check'/>Organize your workouts</li>
                <li className='md:text-2xl text-xl font-medium flex items-center gap-2'><img src='/check.png' className='w-[30px]' alt='check'/>Build a workout plan</li>
             </ul>
         </div>  
    </div>
  )
}

export default Hero