
import Image from 'next/image';
import Button from './Button';
import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import socials from "@/content/social.json"
import Icon from './Icons';
import {scroller} from 'react-scroll'
interface Props {
    theme: "light" | "dark"
}
const Navbar: FC<Props> = ({ theme = "light" }) => {
    const [menu, setMenu] = useState(false)
    const scrollToSection = (section:string) => {
        setMenu(false)
        scroller.scrollTo(section, {
            duration: 1500,
            delay: 150,
            smooth: true,
            containerId: 'main-thing',
            // offset: 50,
        })
    }
    return (
        <>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2 }} style={{ color: (theme === "light" || menu) ? "white" : "black" }} className='fixed top-0 left-0 right-0 z-10 flex justify-between w-full p-10'>
            <Image src={(theme === 'light' || menu) ? "/logo-white.png" : "/logo-black.png"} width={300} height={300} alt='Logo' />
            <Button onClick={() => {setMenu(!menu); theme = "light"}} theme={(theme === 'light' || menu) ? 'light' : 'dark'}>{menu ? "Close" :"Menu"}</Button>
        </motion.div>
        <div id="myNav" className={`overlay ${menu ? "h-full" : "h-0"}`}>
            <div className="overlay-content text-black px-16 pt-60">
                <h1 onClick={() => scrollToSection("home")} className='font-sans text-[2rem] md:text-[3rem] font-extrabold w-min text-grey hover:text-pastel_red mb-5 cursor-pointer'>
                  Home
                </h1>
                <h1 onClick={() => scrollToSection("fame")} className='font-sans text-[2rem] md:text-[3rem] font-extrabold w-min text-grey hover:text-pastel_red mb-5 cursor-pointer'>
                  Achievements
                </h1>
                <h1 onClick={() => scrollToSection("events")} className='font-sans text-[2rem] md:text-[3rem] font-extrabold w-min text-grey hover:text-pastel_red mb-5 cursor-pointer'>
                  Events
                </h1>
                <h1 onClick={() => scrollToSection("team")} className='font-sans text-[2rem] md:text-[3rem] font-extrabold w-min text-grey hover:text-pastel_red mb-5 cursor-pointer'>
                  Team
                </h1>
                <h1 onClick={() => scrollToSection("projects")} className='font-sans text-[2rem] md:text-[3rem] font-extrabold w-min text-grey hover:text-pastel_red mb-5 cursor-pointer'>
                  Projects
                </h1>
                <h1 onClick={() => scrollToSection("blogs")} className='font-sans text-[2rem] md:text-[3rem] font-extrabold w-min text-grey hover:text-pastel_red mb-5 cursor-pointer'>
                  Blogs
                </h1>
                <h1 onClick={() => scrollToSection("footer")} className='font-sans text-[2rem] md:text-[3rem] font-extrabold w-min text-grey hover:text-pastel_red mb-5 cursor-pointer'>
                  Contact Us
                </h1>
            </div>
            <div className='mx-auto max-w-[700px] mt-20 w-[100%] flex justify-evenly lg:justify-between'>
                {socials.map((social, i) => <Icon key={"soc" + i} {...social} />)}
            </div>
        </div>
        </>
    );
}

export default Navbar;
