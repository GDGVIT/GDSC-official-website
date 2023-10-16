
import Image from 'next/image';
import Button from './Button';
import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import socials from "@/content/social.json"
import Icon from './Icons';
import { scroller } from 'react-scroll'
import { useRouter } from 'next/navigation';
interface Props {
  theme: "light" | "dark"
  landing?: boolean
}
const Navbar: FC<Props> = ({ theme = "light", landing }) => {
  const router = useRouter()
  const [menu, setMenu] = useState(false)
  const scrollToSection = (section: string) => {
    setMenu(false)
    router.push("/")
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
      {landing ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2 }} style={{ color: (theme === "light" || menu) ? "white" : "black" }} className='fixed top-0 left-0 right-0 flex justify-between w-full gap-4 p-10 z-[100] items-center'>
          <div className='flex-row flex gap-1 items-center'>
            <Image className='h-8 w-20' src={(theme === 'light' || menu) ? "/newlogo.svg" : "/newlogo.svg"} width={80} height={100} alt='Logo' />
            <Button onClick={() => { router.push("/") }} theme={(theme === 'light' || menu) ? 'light' : 'dark'}>GDSC-VIT</Button>
          </div>
          <Button onClick={() => { setMenu(!menu); theme = "light" }} theme={(theme === 'light' || menu) ? 'light' : 'dark'}>{menu ? "Close" : "Menu"}</Button>
        </motion.div>
      ) : (
        <div style={{ color: (theme === "light" || menu) ? "white" : "black" }} className='fixed top-0 left-0 right-0 flex justify-between w-full gap-4 p-10 z-[100]'>
          <Image src={(theme === 'light' || menu) ? "/newlogo.svg" : "/newlogo.svg"} width={70} height={100} alt='Logo' />
          <Button onClick={() => { router.push("/") }} theme={(theme === 'light' || menu) ? 'light' : 'dark'}>Back</Button>
        </div>
      )

      }
      <div id="myNav" className={`relative flex-col flex overlay ${menu ? "h-full" : "h-0"}`}>
        <div className="px-16 text-black overlay-content pt-60">
          <h1 onClick={() => scrollToSection("home")} className='font-sans text-[3rem] font-extrabold w-min text-grey hover:text-pastel_red mb-5 cursor-pointer'>
            Home
          </h1>
          <h1 onClick={() => scrollToSection("fame")} className='font-sans text-[3rem] font-extrabold w-min text-grey hover:text-pastel_red mb-5 cursor-pointer'>
            Achievements
          </h1>
          <h1 onClick={() => scrollToSection("events")} className='font-sans text-[3rem] font-extrabold w-min text-grey hover:text-pastel_red mb-5 cursor-pointer'>
            Events
          </h1>
          <h1 onClick={() => scrollToSection("team")} className='font-sans text-[3rem] font-extrabold w-min text-grey hover:text-pastel_red mb-5 cursor-pointer'>
            Team
          </h1>
          <h1 onClick={() => scrollToSection("projects")} className='font-sans text-[3rem] font-extrabold w-min text-grey hover:text-pastel_red mb-5 cursor-pointer'>
            Projects
          </h1>
          <h1 onClick={() => scrollToSection("blogs")} className='font-sans text-[3rem] font-extrabold w-min text-grey hover:text-pastel_red mb-5 cursor-pointer'>
            Blogs
          </h1>
          <h1 onClick={() => scrollToSection("footer")} className='font-sans text-[3rem] font-extrabold w-min text-grey hover:text-pastel_red mb-5 cursor-pointer'>
            Contact Us
          </h1>
        </div>
        {/* <div className='mx-auto max-w-[700px] mt-auto mb-14 w-[100%] flex justify-evenly lg:justify-between'>
                {socials.map((social, i) => <Icon key={"soc" + i} {...social} />)}
            </div> */}
      </div>
    </>
  );
}

export default Navbar;
