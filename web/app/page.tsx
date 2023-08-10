"use client"
import Navbar from '@/components/Navbar'
import { Unbounded } from 'next/font/google'
import hqImage from "@/assets/hq.svg"
import cylinder from "@/assets/cylinder-unscreen.gif"
import Image from 'next/image'
import Section from '@/components/Section'
import Icon from '@/components/Icons'
import socials from "@/content/social.json"
import { useCallback, useEffect, useState } from 'react'
import FameCard from '@/components/FameCard'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import TeamCard from '@/components/TeamCard'
import team_members from "@/team_members.json"
import projects from "@/projects.json"
import ProjectCard from '@/components/ProjectCard'
export default function Home() {
  const [page, setPage] = useState("home");
  const setIntersecting = useCallback((page: string) => {
    setPage(page)
  }, [setPage])

  return (
    <main>
      <Navbar theme={page === "home" ? 'light' : "dark"} />
      <Section color="dark" page="home" setIntersecting={setIntersecting}>

        <div className='flex flex-col lg:flex-row w-[100%] h-[50%] items-center sticky top-0 left-0'>
          <div className='relative flex-[0.5] lg:flex-1 w-[80%] h-[100%]'>
            <div className='absolute lg:min-w-[26vw] w-[20%] h-[50%] left-[50%] -translate-x-[50%]  bottom-0'>
              <Image className='absolute bottom-0' src={hqImage} layout="responsive" alt='Heaquarters Image' />
              <Image className='absolute bottom-[80%] left-3' src={cylinder} layout='responsive' alt='cylinder' />
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
                {socials.map((social, i) => <Icon key={"soc" + i} {...social} />)}
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section color='blue' page='fame'>
        <div className='sticky top-0 left-0 w-full py-[8vh] text-dark'>
          <div className='w-[100vw] lg:w-[30vw] lg:min-w-[600px] mx-auto'>
            <h1 className='font-sans text-[3rem] font-extrabold text-center tracking-wider'>WALL OF FAME</h1>
            <p className='font-mono text-xl tracking-[1.8rem] ml-10 text-center'>ACHIEVEMENTS</p>
          </div>
        </div>
        <div className='text-dark mt-[20vh] top-[50vh] -translate-y-[50%] left-[50%] sticky'>
          <div className='flex justify-center sm:justify-start w-[90vw] mx-auto overflow-scroll'>
            <FameCard title={<>Best Club <br /> Award 2019</>} />
            <FameCard title={<>Best Club <br /> Award 2019</>} />
            <FameCard title={<>Best Club <br /> Award 2019</>} />
            <FameCard title={<>Best Club <br /> Award 2019</>} />
            <FameCard title={<>Best Club <br /> Award 2019</>} />
            <FameCard title={<>Best Club <br /> Award 2019</>} />
            <FameCard title={<>Best Club <br /> Award 2019</>} />
          </div>
        </div>
      </Section>
      <Section color='green' page='fame' >
        <div className='sticky top-0 left-0 w-full py-[8vh] text-dark'>
          <div className='w-[100vw] lg:w-[30vw] lg:min-w-[600px] mx-auto'>
            <h1 className='font-sans text-[3rem] font-extrabold text-center tracking-wider'>EVENTS</h1>
          </div>
        </div>
        <div className='text-dark mt-[20vh] top-[50vh] -translate-y-[50%] left-[50%] sticky'>
          <div className='flex justify-start w-[90vw] mx-auto overflow-scroll'>
          </div>
        </div>
      </Section>
      <Section color='yellow' page='fame' >
        <div className='sticky top-0 left-0 w-full py-[8vh] text-dark'>
          <div className='w-[100vw] lg:w-[30vw] lg:min-w-[600px] mx-auto'>
            <h1 className='font-sans text-[3rem] font-extrabold text-center tracking-wider'>MEET THE TEAM</h1>
          </div>
        </div>
        <div className='text-dark mt-[20vh] top-[50vh] -translate-y-[50%] left-[50%] sticky'>
          <div className='flex justify-center sm:justify-start w-[90vw] mx-auto overflow-scroll'>
            {team_members.map((mem, i) => <TeamCard key={"mem" + i} title={mem.name} img={mem.img} subtitle={mem.position} />)}
          </div>
        </div>
      </Section>
      <Section color='pastel_red' page='fame' >
        <div className='sticky top-0 left-0 w-full py-[8vh] text-dark'>
          <div className='w-[100vw] lg:w-[30vw] lg:min-w-[600px] mx-auto'>
            <h1 className='font-sans text-[3rem] font-extrabold text-center tracking-wider'>Projects</h1>
          </div>
        </div>
        <div className='text-dark mt-[20vh] top-[50vh] -translate-y-[50%] left-[50%] sticky'>
          <div className='flex justify-center sm:justify-start w-[90vw] mx-auto overflow-scroll'>
            {projects.map((proj, i) => <ProjectCard key={"mem" + i} {...proj} />)}
          </div>
        </div>
      </Section>
    </main >
  )
}
