"use client"

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import TeamCardForGrid from '@/components/TeamCardForGrid'
import team_members_technical from "@/content/team_members.json"
import team_members_design from "@/content/team_members_design.json"
import team_members_managers from "@/content/team_members_managers.json"
import Footer from '@/components/Footer'

export default function Team() {
    const [curtab, setCurtab] = useState(0)
  return (
    <main id='main-thing' className='h-[100vh] overflow-scroll overflow-x-hidden snap-y'>
        <Navbar theme={"light"} />
        <div className="sm:grid-cols-12 sm:grid p-10 mt-24 gap-16">
            <div className="xl:col-span-4 lg:col-span-4 md:col-span-3 col-span-8 text-white pt-24">
                <h1 className={`font-extrabold ${curtab ===0 ?"text-pastel_red" : curtab===1 ? "text-pastel_blue" : "text-pastel_green"} uppercase lg:text-3xl md:text-2xl text-4xl`}>Meet The Team</h1>
                <p className="mt-4 font-light">We’ve got a strong team filled with caffeine addicted developers, gradients loving designers and machine like working managers.</p>
                <div className="mt-8 flex flex-col gap-2">
                    <p onClick={() => setCurtab(0)} className={`${curtab === 0 ? "text-pastel_red underline underline-offset-4 team-tab-after" : "text-grey"} hover:text-pastel_red cursor-pointer`}>Techies</p>
                    <p onClick={() => setCurtab(1)} className={`${curtab === 1 ? "text-pastel_blue underline underline-offset-4 team-tab-after" : "text-grey"} hover:text-blue cursor-pointer`}>Designers</p>
                    <p onClick={() => setCurtab(2)} className={`${curtab === 2 ? "text-pastel_green underline underline-offset-4 team-tab-after" : "text-grey"} hover:text-green cursor-pointer`}>Managers</p>
                </div>
            </div>
            <div className="xl:col-span-8 lg:col-span-8 md:col-span-9 col-span-12 text-white grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-3 sm:mt-0 mt-16">
                {curtab === 0 ? team_members_technical.map((mem, i) => <TeamCardForGrid i={i} key={"mem" + i} title={mem.name} img={mem.img} subtitle={mem.position} />) : curtab === 1 ? team_members_design.map((mem, i) => <TeamCardForGrid i={i} key={"mem" + i} title={mem.name} img={mem.img} subtitle={mem.position} />) : team_members_managers.map((mem, i) => <TeamCardForGrid i={i} key={"mem" + i} title={mem.name} img={mem.img} subtitle={mem.position} />)}
            </div>
        </div>
        <Footer bg={curtab === 0 ? "bg-pastel_red" : curtab ===1 ? "bg-pastel_blue" : "bg-pastel_green"} />
    </main>
  )
}
