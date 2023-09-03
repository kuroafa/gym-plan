import Footer from '@/components/Footer'
import Hero from '@/components/Main/Hero'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/db'
import { getAuthSession } from '@/lib/nextauth'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getAuthSession()
  if (session?.user) {
    return redirect("/planner");
  }
  return (
  <div className=''>
    <Hero/>
    <Footer/>
  </div>
  )
}
