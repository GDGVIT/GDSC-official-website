"use client";
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import TeamCardForGrid from '@/components/TeamCardForGrid';
import team_members_board from "@/content/team_members_board.json";
import team_members_technical from "@/content/team_members.json";
import team_members_design from "@/content/team_members_design.json";
import team_members_managers from "@/content/team_members_managers.json";
import Footer from '@/components/Footer';

export default function Team() {
    const mainRef = useRef(null);

    const [curTab, setCurTab] = useState('Board');

    const scrollOptions = (section:string) => {
        const sectionElement = document.querySelector(`#${section}`);
        console.log(sectionElement)
        // scroll to sectionElement
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior:'smooth' });
        }
    };

    useEffect(() => {
        // Define an observer function
        const handleIntersection: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Update curTab based on the section in view
                    setCurTab(entry.target.id);
                }
            });
        };

        // Create an Intersection Observer
        const observer = new IntersectionObserver(handleIntersection, {
            root: mainRef.current,
            rootMargin: '0px',
            threshold: 0.5, // Adjust the threshold as needed
        });

        // Observe the sections
        const sections = ['Board', 'Technical', 'Design', 'Managers'];
        sections.forEach((section) => {
            const sectionElement = document.querySelector(`#${section}`);
            if (sectionElement) {
                observer.observe(sectionElement);
            }
        });

        return () => {
            // Clean up the observer when the component unmounts
            observer.disconnect();
        };
    }, [mainRef]);

    return (
        <main id='main-thing' className='h-[100vh] overflow-scroll overflow-x-hidden snap-y' ref={mainRef}>
            <Navbar theme={"light"} />
            <div className="grid gap-16 p-10 mt-24 sm:grid-cols-12 sm:grid">
                <div className="col-span-8 pt-24 text-white xl:col-span-4 lg:col-span-4 md:col-span-3">
                    <div className="sticky top-[150px]">
                        <h1 className={`font-extrabold ${curTab === "Board" ? "text-yellow" : curTab === "Technical" ? "text-pastel_green" : curTab === "Design" ? "text-pastel_blue" : "text-pastel_red"} uppercase lg:text-3xl md:text-2xl text-4xl`}>Meet The Team</h1>
                        <p className="mt-4 font-light">
                            We’ve got a strong team filled with caffeine addicted developers, gradients loving designers, and machine-like working managers.
                        </p>
                        <div className="flex flex-col gap-2 mt-8 pointer-events-auto">
                            <p onClick={() => scrollOptions('Board')} className={`w-fit ${curTab === "Board" ? "text-yellow underline underline-offset-4 team-tab-after" : "text-grey"} hover:text-yellow cursor-pointer`}>Board</p>
                            <p onClick={() => scrollOptions('Technical')} className={`w-fit ${curTab === "Technical" ? "text-pastel_green underline underline-offset-4 team-tab-after" : "text-grey"} hover:text-pastel_green cursor-pointer`}>Techies</p>
                            <p onClick={() => scrollOptions('Design')} className={`w-fit ${curTab === "Design" ? "text-pastel_blue underline underline-offset-4 team-tab-after" : "text-grey"} hover:text-pastel_blue cursor-pointer`}>Designers</p>
                            <p onClick={() => scrollOptions('Managers')} className={`w-fit ${curTab === "Managers" ? "text-pastel_red underline underline-offset-4 team-tab-after" : "text-grey"} hover:text-pastel_red cursor-pointer`}>Managers</p>
                        </div>
                    </div>
                </div>
                <div className="grid col-span-12 mt-16 text-white xl:col-span-8 lg:col-span-8 md:col-span-9 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-3 sm:mt-0">
                    <div id="Board" className='flex'>
                        <h2 className="font-extrabold text-yellow m-auto uppercase lg:text-5xl md:text-4xl text-6xl">
                            B
                        </h2>
                    </div>
                    {team_members_board.map((mem, i) => (
                        <TeamCardForGrid
                            i={i}
                            key={"mem" + i}
                            title={mem.name}
                            img={mem.img}
                            subtitle={mem.position}
                            github={mem.github}
                            linkedin={mem.linkedin}
                            link={mem.link}
                        />
                    ))}
                    <div id="Technical" className='flex'>
                        <h2 className="font-extrabold text-pastel_green m-auto uppercase lg:text-5xl md:text-4xl text-6xl">
                            T
                        </h2>
                    </div>
                    {team_members_technical.map((mem, i) => (
                        <TeamCardForGrid
                            i={i}
                            key={"mem" + i}
                            title={mem.name}
                            img={mem.img}
                            subtitle={mem.position}
                            github={mem.github}
                            linkedin={mem.linkedin}
                        />
                    ))}
                    <div id="Design" className='flex'>
                        <h2 className="font-extrabold text-pastel_blue m-auto uppercase lg:text-5xl md:text-4xl text-6xl">
                            D
                        </h2>
                    </div>
                    {team_members_design.map((mem, i) => (
                        <TeamCardForGrid
                            i={i}
                            key={"mem" + i}
                            title={mem.name}
                            img={mem.img}
                            subtitle={mem.position}
                            linkedin={mem.linkedin}
                        />
                    ))}
                    <div id="Managers" className='flex'>
                        <h2 className="font-extrabold text-pastel_red m-auto uppercase lg:text-5xl md:text-4xl text-6xl">
                            M
                        </h2>
                    </div>
                    {team_members_managers.map((mem, i) => (
                        <TeamCardForGrid
                            i={i}
                            key={"mem" + i}
                            title={mem.name}
                            img={mem.img}
                            subtitle={mem.position}
                            linkedin={mem.linkedin}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
