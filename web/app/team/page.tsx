"use client"

import React, { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import TeamCardForGrid from '@/components/TeamCardForGrid'
import team_members_board from "@/content/team_members_board.json"
import team_members_technical from "@/content/team_members.json"
import team_members_design from "@/content/team_members_design.json"
import team_members_managers from "@/content/team_members_managers.json"
import Footer from '@/components/Footer'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

export default function Team() {
    const mainRef = useRef<HTMLDivElement | null>(null)
    const [curtab, setCurtab] = useState(0)
    const { scrollYProgress } = useScroll({ container: mainRef })
    const scaleTransform = useTransform(scrollYProgress, [0, 0.4], [2, 1])
    const leftTransform = useTransform(scrollYProgress, [0, 0.4], ['40%', '5%'])
    const fadeTransform = useTransform(scrollYProgress, [0.4, 0.41], ['none', 'block'])

    const [hookedYPostion, setHookedYPosition] = React.useState(0);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setHookedYPosition(latest);
    })



    return (
        <main id='main-thing' className='h-[100vh] overflow-scroll overflow-x-hidden snap-y' ref={mainRef}>
            <Navbar theme={"light"} />
            <div className='h-[100vh]'>

            </div>
            <motion.div style={{ scale: scaleTransform, left: leftTransform }} className='fixed top-[40%] left-[50px] pointer-events-none text-white w-[30vw] '>
                <h1 className={`font-extrabold ${curtab === 0 ? "text-yellow" : curtab === 1 ? "text-pastel_green" : curtab === 2 ? "text-pastel_blue" : "text-pastel_red"} uppercase lg:text-3xl md:text-2xl text-4xl`}>Meet The Team</h1>
                <p className="mt-4 font-light">We’ve got a strong team filled with caffeine addicted developers, gradients loving designers and machine like working managers.</p>
                <div style={{ display: hookedYPostion > 0.4 ? 'block' : 'none' }} className="flex flex-col gap-2 mt-8 pointer-events-auto">
                    <p onClick={() => setCurtab(0)} className={`${curtab === 0 ? "text-yellow underline underline-offset-4 team-tab-after" : "text-grey"} hover:text-yellow cursor-pointer`}>Board</p>
                    <p onClick={() => setCurtab(1)} className={`${curtab === 1 ? "text-pastel_green underline underline-offset-4 team-tab-after" : "text-grey"} hover:text-pastel_green cursor-pointer`}>Techies</p>
                    <p onClick={() => setCurtab(2)} className={`${curtab === 2 ? "text-pastel_blue underline underline-offset-4 team-tab-after" : "text-grey"} hover:text-blue cursor-pointer`}>Designers</p>
                    <p onClick={() => setCurtab(3)} className={`${curtab === 3 ? "text-pastel_red underline underline-offset-4 team-tab-after" : "text-grey"} hover:text-red cursor-pointer`}>Managers</p>
                </div>
            </motion.div >
            <div className="gap-16 p-10 mt-24 sm:grid-cols-12 sm:grid">
                <div className="col-span-8 pt-24 text-white xl:col-span-4 lg:col-span-4 md:col-span-3">

                </div>

                <div className="grid col-span-12 mt-16 text-white xl:col-span-8 lg:col-span-8 md:col-span-9 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-3 sm:mt-0">
                    {curtab === 0 ? team_members_board.map((mem, i) => <TeamCardForGrid i={i} key={"mem" + i} title={mem.name} img={mem.img} subtitle={mem.position} />) : curtab === 1 ? team_members_technical.map((mem, i) => <TeamCardForGrid i={i} key={"mem" + i} title={mem.name} img={mem.img} subtitle={mem.position} />) : curtab === 2 ? team_members_design.map((mem, i) => <TeamCardForGrid i={i} key={"mem" + i} title={mem.name} img={mem.img} subtitle={mem.position} />) : team_members_managers.map((mem, i) => <TeamCardForGrid i={i} key={"mem" + i} title={mem.name} img={mem.img} subtitle={mem.position} />)}
                </div>
            </div>
            <Footer bg={curtab === 0 ? "bg-yellow" : curtab === 1 ? "bg-pastel_green" : curtab === 2 ? "bg-pastel_blue" : "bg-pastel_red"} />
        </main >
    )
}
