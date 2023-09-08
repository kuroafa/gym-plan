import Footer from '@/components/Footer'
import Hero from '@/components/Main/Hero'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/db'
import { getAuthSession } from '@/lib/nextauth'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getAuthSession()
  if (session?.user) {
    return redirect("/planner");
  }
  return (
  <div className=''>
       <div className=" grid xl:grid-cols-2 md:grid-cols-1 gap-5 xl:px-40 py-20 ">
        <div className="flex flex-col gap-20">
          <div className=" flex flex-col px-5 gap-2">
            
            <p className="lg:text-8xl text-5xl whitespace-nowrap  font-bold">Hard work,<br/>Harder <span className="italic">GAINS.</span></p>
            <p className="md:text-2xl text-xl ">Reach your limits & get to the next level</p>
            <div className="flex  gap-3 ">
              <Button className="text-xl">Start Planning</Button>
              <Button className="text-xl">Learn More</Button>
            </div>
          </div>
         
        </div>
        <div className="">
          <img alt="girl image" src="/gymgirl.png" />
        </div>
         <Footer/>
      </div>
    
  </div>
  )
}
