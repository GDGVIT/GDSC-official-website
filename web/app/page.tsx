import Navbar from '@/components/Navbar'
import { Unbounded } from 'next/font/google'
import hqImage from "@/assets/hq.svg"
import Image from 'next/image'
import Section from '@/components/Section'
export default function Home() {
  return (
    <main>
      <Navbar theme='light' />
      <Section color="dark">
        <div className='flex flex-col lg:flex-row h-[100%] items-center'>
          <div className='flex-1 '>
            <div className='absolute w-[40vw] h-[90vh] bottom-[50%] left-[50%] -translate-x-[50%] lg:left-0 lg:translate-x-0 lg:bottom-0'>
              <Image src={hqImage} layout="fill" alt='Heaquarters Image' />
            </div>
          </div>
          <div className='flex-1'>
            <div className='w-[80%] h-[80%] text-center lg:text-right mx-auto'>
              <h1 className='font-sans text-[3.5rem] font-extrabold text-pastel_red mb-5'>
                WE ARE GDSC-VIT
              </h1>
              <p className='font-mono text-3xl md:text-2xl'>
                We think slightly out of the box, we believe that a club’s resources must not only be channeled into conducting events but also to propagate learning and teaching, symbiotically.
                <br /> <br />
                That said, we conduct two Flagship events, namely, DevFest and WomenTechies, and tons of insightful workshops!
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section>

      </Section>
    </main >
  )
}
