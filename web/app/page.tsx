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
import { motion, useScroll, useTransform } from "framer-motion"
import FameCard from '@/components/FameCard'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import TeamCard from '@/components/TeamCard'
import team_members from "@/content/team_members_board.json"
import events from "@/content/events.json"
import projects from "@/content/projects.json"
import fame from "@/content/fame.json"
import ProjectCard from '@/components/ProjectCard'
import blogs from "@/content/blogs.json"
import BlogListItem from '@/components/BlogListItem'
import HorizontalTranslate from '../components/HorizontalTranslate'
import styled from 'styled-components'
import React from 'react'
import Level from '@/components/Level'
import StartAnim from '@/components/StartAnim'
import { useScreenWidth } from '@/hooks/useScreenWidth'
import { useNumInView } from '@/hooks/useNumInView'
import { useScrollDirection } from 'react-use-scroll-direction'
import { Element } from 'react-scroll'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogsList from '@/components/BlogsList'
import { Provider } from './provider'
import BlogCover from '@/components/BlogCover'
import SeeMore from '@/components/SeeMore'
import { useRouter } from 'next/navigation'
import { scroller } from 'react-scroll'
import Footer from '@/components/Footer'

const CardsContainer = styled.div`
    position: relative;
    padding: 0 0 0 100px;
    display: flex;
    flex-flow: row nowrap;
    overflow-y:hidden;
  `;

export default function Home() {
  const [page, setPage] = useState("home");
  const mainRef = useRef<HTMLDivElement>(null)
  const fameRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const numFameInView = useNumInView({ ref: fameRef, arr: fame })
  const numProjectInView = useNumInView({ ref: projectRef, arr: projects })
  const numTeamInView = useNumInView({ ref: teamRef, arr: team_members })
  // const { isScrollingDown } = useScrollDirection(mainRef?.current || undefined)
  const screenWidth = useScreenWidth()
  const { scrollYProgress } = useScroll({ container: mainRef })
  const [startAnimationComplete, setStartAnimationComplete] = useState(false);
  const router = useRouter()
  const setIntersecting = useCallback((page: string) => {
    setPage(page)
  }, [setPage])

  useEffect(() => {
    if (mainRef.current)
      mainRef.current?.scrollTo({ top: 0, behavior: "instant" })

  }, [mainRef.current])
  const sliderRef = useRef<Slider | null>(null);
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const [hoveringKey, setHoveringKey] = useState(0)
  const [hoveringText, setHoveringText] = useState("");

  const scrollToSection = (section: string) => {
    router.push("/")
    scroller.scrollTo(section, {
      duration: 1500,
      delay: 150,
      smooth: true,
      containerId: 'main-thing',
      // offset: 50,
    })
  }

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: false,
    beforeChange: (_: any, next: any) => { setSlideIndex(next); },
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  const inputRanges = {
    fame: screenWidth > 650 ? [0.02, 0.09] : [0.02, 0.07],
    event: screenWidth > 650 ? [0.15, 0.22] : [0.1, 0.15],
    team: screenWidth > 650 ? [0.3, 0.35] : [0.18, 0.23],
    project: screenWidth > 650 ? [0.65, 0.73] : [0.6, 0.65]
  }
  const outputRanges = {
    fame: screenWidth > 650 ? [1.5, 1] : [1.3, 1],
    event: screenWidth > 650 ? [1.5, 1] : [1.5, 1],
    team: screenWidth > 650 ? [1.5, 1] : [1.2, 1],
    project: screenWidth > 650 ? [1.5, 1] : [1.5, 1]
  }

  const fameScale = useTransform(scrollYProgress, inputRanges.fame, outputRanges.fame)
  const eventScale = useTransform(scrollYProgress, inputRanges.event, outputRanges.event)
  const teamScale = useTransform(scrollYProgress, inputRanges.team, outputRanges.team)
  const projectScale = useTransform(scrollYProgress, inputRanges.project, outputRanges.project)

  const onHover = useCallback((key: number, text: string) => {
    setHoveringKey(key)
    setHoveringText(text)
  }, [])

  useEffect(() => {
    // console.log(hoveringKey)
  }, [hoveringKey])

  useEffect(() => {
    if (localStorage.getItem('visited') === 'true') {
      setStartAnimationComplete(true)
    }
  }, [])

  useEffect(() => {
    if (startAnimationComplete) {
      localStorage.removeItem("visited")
    }
  }, [startAnimationComplete])


  return <main id='main-thing' ref={mainRef} className='h-[100vh] overflow-auto overflow-x-hidden snap-y'>
    {!startAnimationComplete && <StartAnim onComplete={() => { setStartAnimationComplete(true) }} />}
    {
      startAnimationComplete &&
      <>
        <Element name="home" />
        <Navbar landing theme={page === "home" ? 'light' : "dark"} />
        <Section color="dark" page="home" setIntersecting={setIntersecting}>

          <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 2 }} className='flex flex-col-reverse lg:flex-row w-[100%] h-[100vh] items-center relative top-0 left-0'>
            <div className='relative flex-[0.5] lg:flex-1 w-[80%] h-[100%]'>
              <div className='absolute lg:min-w-[26vw] w-[75%] sm:w-[40%] h-[50%] left-[50%] -translate-x-[50%]  bottom-0'>
                <Image className='absolute bottom-0' src={hqImage} layout="responsive" alt='Heaquarters Image' />
                {/* <Image className='absolute bottom-[80%] left-3' src={cylinder} layout='responsive' alt='cylinder' /> */}
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
                  That said, we conduct Flagship events such as DevJams, Hexathon and WomenTechies, and tons of insightful workshops!
                </p>
                <div className='mx-auto lg:m-0 self-end max-w-[700px] w-[100%] flex justify-evenly lg:justify-between'>
                  {socials.map((social, i) => <Icon key={"soc" + i} {...social} />)}
                </div>
              </div>
            </div>
          </motion.div>
        </Section>
        <Element name="fame" />
        <Section color='blue' page='fame' setIntersecting={setIntersecting}>
          {/* <motion.div className='top-0 left-0 w-full pt-[15vh] mb-20 text-dark' style={{ scale: fameScale }} initial={{ scale: 0 }} >
            <div className='w-[100vw] lg:w-[30vw] lg:min-w-[600px] mx-auto'>
              <h1 className='font-sans text-[3rem] font-extrabold text-center tracking-wider' >WALL OF FAME</h1>
              <p className='font-mono text-xl tracking-[1.8rem] ml-10 text-center'>ACHIEVEMENTS</p>
            </div>
          </motion.div>
          <div className='h-[50vh] flex items-center text-dark'>
            <div className='flex justify-start w-[90vw] mx-auto overflow-x-scroll overflow-y-hidden' ref={fameRef}>
              {fame.map((f, i) => <FameCard key={"fame" + i} i={(numFameInView > i) ? i : 0} title={f.title} />)}
            </div>
          </div> */}
          <HorizontalTranslate mainRef={mainRef} title={"Wall of Fame"} style={{ scale: fameScale }}>
            <CardsContainer style={{ paddingLeft: screenWidth > 650 ? "100px" : "5vw", paddingRight: screenWidth > 650 ? "100px" : "5vw" }} className='text-dark' ref={fameRef}>
              {fame.map((f, i) => <FameCard key={"fame" + i} i={(numFameInView > i) ? i : 0} title={f.title} />)}
            </CardsContainer>
          </HorizontalTranslate>
        </Section>
        <Level level={"04"} />
        <Element name="events" />
        <Section snap color='pastel_green' page='events' setIntersecting={setIntersecting}>
          <motion.div style={{ scale: eventScale }} className='top-0 left-0 w-full pt-[15vh] text-dark'>
            <div className='w-[100vw] lg:w-[30vw] lg:min-w-[600px] mx-auto'>
              <h1 className='font-sans text-[3rem] font-extrabold text-center tracking-wider'>EVENTS</h1>
            </div>
          </motion.div>
          <div className='flex flex-col text-dark'>
            {/* <div className='flex justify-start w-[90vw] mx-auto overflow-scroll'> */}
            <div className='w-5/6 h-full mx-auto mt-[10vh] p-4 pb-3 bg-white border-2 border-black rounded-md'>
              <Slider ref={sliderRef} {...settings}>
                {events.map((event, i) => {
                  return (
                    event.photos.map((pic, j) => {
                      return (
                        <div
                          style={{
                            width: '100%',
                            overflow: 'hidden',
                            aspectRatio: '1/1', // Sets the aspect ratio to 1:1 (square)
                          }}
                          key={`event${i}pic${j}`}
                        >
                          <div
                            style={{
                              width: '100%',
                              paddingBottom: '100%', // 1:1 aspect ratio, e.g., 100% width and 100% height
                              position: 'relative',
                              overflow: 'hidden',
                            }}
                          >
                            <Image
                              style={{
                                position: 'absolute',
                              }}
                              // width={300}
                              // height={300}
                              src={pic.img}
                              fill
                              sizes='100vw'
                              // layout='fill' // Fills the parent container
                              // objectFit='cover' // Enlarges/shrinks the image to cover the container
                              alt='event'
                              className='object-cover '
                            />
                          </div>
                        </div>
                      )
                    })
                  )
                })}
              </Slider>
              {/* </div> */}
            </div>
            <div className='relative w-5/6 mx-auto mb-10 text-white mt-14'>
              <hr className='border top-[18%] border-white bg-white absolute w-full border-2' />
              <div className="flex flex-row justify-evenly">
                {events.map((event, i) => {
                  return (
                    <div key={"eventname" + i} onClick={() => sliderRef.current?.slickGoTo(i * 3)} className='flex flex-col items-center cursor-pointer'>
                      <div className={`${slideIndex / 3 == i ? "w-8" : "w-4"} transition-all h-8 rounded-md bg-white`}></div>
                      <p className='mt-2 text-center w-min'>{event.name}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Section>
        <Level level={"03"} />
        <Element name="team" />
        <Section snap color='yellow' page='team' >
          <HorizontalTranslate mainRef={mainRef} title={"Meet the Team"} style={{ scale: teamScale }}>
            <CardsContainer style={{ paddingLeft: screenWidth > 650 ? "100px" : "5vw" }} className='text-dark' ref={teamRef}>
              {/* <SampleCards /> */}
              {team_members.map((mem, i) => <TeamCard i={(numTeamInView > i) ? i : 0} key={"mem" + i} title={mem.name} link={mem.link} github={mem.github} linkedin={mem.linkedin} img={mem.img} subtitle={mem.position} />)}
              <SeeMore linkto='/team' i={(numTeamInView > team_members.length) ? team_members.length : 0} img='#' title='See All' subtitle='Cool Peeps ;)' />
            </CardsContainer>
          </HorizontalTranslate>
        </Section>
        <Level level={"02"} />
        <Element name="projects" />
        <Section color='pastel_red' page='projects' >
          <HorizontalTranslate mainRef={mainRef} title={"Projects"} style={{ scale: projectScale }}>
            <CardsContainer style={{ paddingLeft: screenWidth > 650 ? "100px" : "5vw", paddingRight: screenWidth > 650 ? "100px" : "5vw" }} className='text-dark' ref={projectRef}>
              {projects.map((proj, i) => <ProjectCard i={(numProjectInView > i) ? i : 0} key={"mem" + i} {...proj} />)}
              <SeeMore linkto='https://github.com/GDGVIT/' i={(numProjectInView > projects.length) ? projects.length : 0} img='#' title='See All' subtitle='Groundbreaking Stuff :0' />
            </CardsContainer>
          </HorizontalTranslate>
        </Section>
        <Level level={"01"} />
        <Element name="blogs" />
        <Section snap color='pastel_blue' page='blogs' >

          <div className='flex flex-col md:flex-row xl:p-16 p-5 pt-[11vh] h-[100vh] items-center'>
            <BlogCover i={hoveringKey} text={hoveringText} />
            <div className='w-full p-5 text-black md:flex-1 h-fit'>
              <div className='flex flex-col'>
                <motion.h1 className='text-black font-sans text-[3rem] font-extrabold tracking-wider'>Blogs</motion.h1>

                <Provider><BlogsList startAnimationComplete={false} onHover={onHover} /></Provider>
              </div>
            </div>
          </div>

        </Section>
        <Element name="footer" />
        <Footer bg='pastel_blue' />
      </>}
  </main >



}
