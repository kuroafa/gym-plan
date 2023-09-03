import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className=' h-full flex gap-3 flex-col items-start pl-5 xl:pl-20 pt-20'>
        <h1 className='font-medium text-6xl '>Stay Fit, Clear, Organized & most of all <span className='font-bold'>GYMIFIED</span></h1>
         <div className='flex gap-2 flex-col '>
            <h1 className='font-normal text-4xl  '>What We Offer?</h1>
             <ul>
                <li className='text-2xl font-medium flex items-center gap-2'><img src='/check.png' className='w-[30px]' alt='check'/>Organize your workouts</li>
                <li className='text-2xl font-medium flex items-center gap-2'><img src='/check.png' className='w-[30px]' alt='check'/>Build a workout plan</li>
             </ul>
         </div>
         <Button className='text-xl'>
            Check it out
         </Button>
         <div>
         <Image
            className=""
            width={400}
            height={300}
            src="/lifting.gif"
            alt="GIF"
          />
         </div>
    </div>
  )
}

export default Hero