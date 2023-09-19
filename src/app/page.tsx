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
    return redirect("/Dashboard");
  }
  return (
<div className=' sm:bg-center-bottom bg-center-left' style={{ position: 'relative', backgroundImage: 'url("/gymguy.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
  {/* Dark overlay */}

  <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-5 xl:px-40 py-20 h-[750px] relative">
    <div className="flex flex-col gap-20">
      <div className="flex flex-col  gap-2">
        <p className="lg:text-9xl text-7xl whitespace-nowrap font-bold ">Hard work,<br/>Harder <span className="italic text-lime-500">GAINS.</span></p>
        <p className="md:text-3xl text-2xl text-lime-400 font-semibold">Reach your limits &  get to the next level</p>
        <div className="flex mt-3 gap-3">
          <Button variant={'outline'} className="text-xl ">Start Workouts</Button>
          <Button variant={'outline'} className="text-xl ">Learn More</Button>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>


  )
}
