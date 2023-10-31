import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FC } from 'react'
import { scroller } from 'react-scroll'
import socials from "@/content/social.json"
import Icon from './Icons'
import Link from 'next/link'

interface Props {
    bg?: string
}

const Footer: FC<Props> = ({bg}) => {
  const router = useRouter()

  const scrollToSection = (section: string) => {
    router.push("/")
    localStorage.setItem("visited", 'true')
    scroller.scrollTo(section, {
      duration: 1500,
      delay: 150,
      smooth: true,
      containerId: 'main-thing',
      // offset: 50,
    })
  }
  return (
    // <div className={`w-full p-16 ${bg}`}>
    //     <p className="text-center">Made with &#9829; by GDSC-VIT</p>
    // </div>
    <div className={`relative w-[100vw] text-white max-h-fit snap-y`}>
      <div className={`"absolute w-full bg-${bg} top-0 -mt-1 py-2"`}></div>
      {/* add an image sticking to the bottom of this div and with some margin on top */}
      <Image alt='footer' src={"/footer-clouds.svg"} width={200} height={200} className={`w-full h-auto pt-8 bg-${bg}`} />
      <div className='absolute bottom-0 w-full flex flex-col lg:px-32 px-20 xl:gap-14 lg:gap-10 gap-4 items-center'>
        <div className="sm:flex hidden w-full flex-row justify-between gap-5 flex-wrap">
          <Link target='blank' href={"https://gdsc.community.dev/vellore-institute-of-technology-vit-vellore/"} className='flex flex-col gap-2'>
            <Image className='h-8 w-20 mb-3' src={"/newlogowhite.svg"} width={80} height={100} alt='Logo' />
            <p className='pl-2 uppercase'>Google Developer</p>
            <p className='pl-2 uppercase'>Students Clubs VIT</p>
          </Link>
          <div className='flex flex-col xl:gap-4 gap-2 uppercase'>
            <h1 onClick={() => scrollToSection("fame")} className='font-bold w-min cursor-pointer'>
              Achievements
            </h1>
            <h1 onClick={() => scrollToSection("events")} className='font-bold w-min cursor-pointer'>
              Events
            </h1>
            <h1 onClick={() => router.push("/team")} className='font-bold w-min cursor-pointer'>
              Team
            </h1>
            <h1 onClick={() => scrollToSection("projects")} className='font-bold w-min cursor-pointer'>
              Projects
            </h1>
          </div>
        </div>
        <p className='pl-2 flex gap-1 text-sm items-center'><Icon icon='mail' xsmall name='mail' link='mailto:dscvitvellore@gmail.com' /> dscvitvellore@gmail.com</p>
        <div className='lg:m-0 gap-3 flex justify-between'>
          {socials.map((social, i) => <Icon small key={"soc" + i} {...social} />)}
        </div>
        <p className='pb-6 px-3 font-light text-gray-300'>Made with &#128153; by GDSC-VIT</p>
      </div>
    </div>
  )
}

export default Footer
