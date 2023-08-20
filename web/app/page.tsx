"use client"
import Navbar from '@/components/Navbar'
import { Unbounded } from 'next/font/google'
import hqImage from "@/assets/hq.svg"
import cylinder from "@/assets/cylinder-unscreen.gif"
import Image from 'next/image'
import Section from '@/components/Section'
import Icon from '@/components/Icons'
import socials from "@/content/social.json"
import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useScroll } from "framer-motion"
import FameCard from '@/components/FameCard'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import TeamCard from '@/components/TeamCard'
import team_members from "@/content/team_members.json"
import projects from "@/content/projects.json"
import ProjectCard from '@/components/ProjectCard'
import blogs from "@/content/blogs.json"
import BlogListItem from '@/components/BlogListItem'
import HorizontalTranslate from '../components/HorizontalTranslate'
import styled from 'styled-components'
import React from 'react'
import Level from '@/components/Level'

const CardsContainer = styled.div`
    position: relative;
    height: 100%;
    padding: 0 0 0 100px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  `;

export default function Home() {
  const [page, setPage] = useState("home");
  const mainRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll({ container: mainRef })
  const setIntersecting = useCallback((page: string) => {
    setPage(page)
  }, [setPage])

  useEffect(() => {
    console.log(page)
  }, [page])

  useEffect(() => {
    console.log(scrollY)
  }, [scrollY])
  return (
    <main id='main-thing' ref={mainRef} className='h-[100vh] overflow-scroll overflow-x-hidden'>
      <Navbar theme={page === "home" ? 'light' : "dark"} />
      <Section color="dark" page="home" setIntersecting={setIntersecting}>

        <motion.div initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 2 }} className='flex flex-col-reverse lg:flex-row w-[100%] h-[100vh] items-center relative top-0 left-0'>
          <div className='relative flex-[0.5] lg:flex-1 w-[80%] h-[100%]'>
            <div className='absolute lg:min-w-[26vw] w-[75%] sm:w-[40%] h-[50%] left-[50%] -translate-x-[50%]  bottom-0'>
              <Image className='absolute bottom-0' src={hqImage} layout="responsive" alt='Heaquarters Image' />
              <Image className='absolute bottom-[80%] left-3' src={cylinder} layout='responsive' alt='cylinder' />
            </div>
          </div>
          <div className='flex-1'>
            <div className='w-[90%] lg:w-[80%] h-[80%] text-center flex flex-col items-center justify-center lg:text-right mx-auto'>
              <h1 className='font-sans text-[2.5rem] md:text-[3.5rem] font-extrabold text-pastel_red mb-5'>
                WE ARE GDSC-VIT
              </h1>
              <p className='mb-10 font-mono text-xl md:text-2xl'>
                We think slightly out of the box, we believe that a club’s resources must not only be channeled into conducting events but also to propagate learning and teaching, symbiotically.
                <br /> <br />
                That said, we conduct two Flagship events, namely, DevFest and WomenTechies, and tons of insightful workshops!
              </p>
              <div className='mx-auto lg:m-0 self-end max-w-[700px] w-[100%] flex justify-evenly lg:justify-between'>
                {socials.map((social, i) => <Icon key={"soc" + i} {...social} />)}
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
      <Section color='blue' page='fame' setIntersecting={setIntersecting}>
        <div className='top-0 left-0 w-full py-[8vh] text-dark'>
          <motion.div initial={{ scale: 1.5 }} whileInView={{ scale: 1 }} viewport={{ once: false, amount: 1 }} transition={{ duration: 1 }} className='w-[100vw] lg:w-[30vw] lg:min-w-[600px] mx-auto'>
            <h1 className='font-sans text-[3rem] font-extrabold text-center tracking-wider' >WALL OF FAME</h1>
            <p className='font-mono text-xl tracking-[1.8rem] ml-10 text-center'>ACHIEVEMENTS</p>
          </motion.div>
        </div>
        <div className='text-dark mt-[20vh] top-[50vh] -translate-y-[50%] left-[50%] '>
          <div className='flex justify-start w-[90vw] mx-auto overflow-scroll'>
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
      <Level level={"04"} />
      <Section color='green' page='events' setIntersecting={setIntersecting}>
        <div className='top-0 left-0 w-full py-[8vh] text-dark'>
          <motion.div initial={{ scale: 1.5 }} whileInView={{ scale: 1 }} viewport={{ once: false, amount: 1 }} transition={{ duration: 1 }} className='w-[100vw] lg:w-[30vw] lg:min-w-[600px] mx-auto'>
            <h1 className='font-sans text-[3rem] font-extrabold text-center tracking-wider'>EVENTS</h1>
          </motion.div>
        </div>
        <div className='text-dark mt-[20vh] top-[50vh] -translate-y-[50%] left-[50%] '>
          <div className='flex justify-start w-[90vw] mx-auto overflow-scroll'>
          </div>
        </div>
      </Section>
      <Level level={"03"} />
      <Section color='yellow' page='team' >
        <HorizontalTranslate title={"Meet the Team"}>
          <CardsContainer className='text-dark'>
            {/* <SampleCards /> */}
            {team_members.map((mem, i) => <TeamCard key={"mem" + i} title={mem.name} img={mem.img} subtitle={mem.position} />)}
          </CardsContainer>
        </HorizontalTranslate>
      </Section>
      <Level level={"02"} />
      <Section color='pastel_red' page='projects' >
        <HorizontalTranslate title={"Projects"}>
          <CardsContainer className='text-dark'>
            {projects.map((proj, i) => <ProjectCard key={"mem" + i} {...proj} />)}
          </CardsContainer>
        </HorizontalTranslate>
      </Section>
      <Level level={"01"} />
      <Section color='blue' page='blogs' >

        <div className='flex flex-col md:flex-row p-5 h-[100vh] items-center'>
          <div className='flex-1 hidden md:block'>
            <Image src="/blogs.svg" alt="" width={500} height={500} layout='responsive' />
          </div>
          <div className='w-full p-5 text-black md:flex-1 h-fit'>
            <div className='flex flex-col'>
              <motion.h1 className='text-black font-sans text-[3rem] font-extrabold tracking-wider'>Blogs</motion.h1>
              <div className='self-center flex-1 block m-2 max max-h-[50vh] aspect-square md:hidden'>
                <Image src="/blogs.svg" alt="" width={300} height={300} layout='responsive' />
              </div>

              <div className='flex flex-col overflow-scroll h-fit max-h-[60vh]'>{blogs.map((blog, i) => <BlogListItem key={"blog" + i} {...blog} />)}</div>
            </div>
          </div>
        </div>

      </Section>
    </main >
  )
}
