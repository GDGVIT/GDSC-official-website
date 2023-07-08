"use client"
import Navbar from '@/components/Navbar'
import { Unbounded } from 'next/font/google'
import hqImage from "@/assets/hq.svg"
import Image from 'next/image'
import Section from '@/components/Section'
import Icon from '@/components/Icons'
import socials from "@/content/social.json"
export default function Home() {


  return (
    <main>
      <Navbar theme='light' />
      <Section color="dark">
        <div className='flex flex-col lg:flex-row w-[100%] h-[50%] items-center sticky top-0 left-0'>
          <div className='relative flex-[0.5] lg:flex-1 w-[80%] h-[100%]'>
            <div className='absolute lg:min-w-[26vw] w-[20%] h-[50%] left-[50%] -translate-x-[50%]  bottom-0'>
              <Image className='absolute bottom-0' src={hqImage} layout="responsive" alt='Heaquarters Image' />
            </div>
          </div>
          <div className='flex-1'>
            <div className='w-[90%] lg:w-[80%] h-[80%] text-center flex flex-col lg:text-right mx-auto'>
              <h1 className='font-sans text-[3.5rem] font-extrabold text-pastel_red mb-5'>
                WE ARE GDSC-VIT
              </h1>
              <p className='mb-10 font-mono text-3xl md:text-2xl'>
                We think slightly out of the box, we believe that a club’s resources must not only be channeled into conducting events but also to propagate learning and teaching, symbiotically.
                <br /> <br />
                That said, we conduct two Flagship events, namely, DevFest and WomenTechies, and tons of insightful workshops!
              </p>
              <div className='m-auto lg:m-0 self-end max-w-[700px] w-[100%] flex justify-evenly lg:justify-between'>
                {socials.map(social => <Icon {...social} />)}
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section color='blue'>

      </Section>
    </main >
  )
}
