import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FC } from 'react'
import { scroller } from 'react-scroll'

interface Props {
    bg?: string
}

const Footer: FC<Props> = ({bg}) => {
  const router = useRouter()

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
  return (
    // <div className={`w-full p-16 ${bg}`}>
    //     <p className="text-center">Made with &#9829; by GDSC-VIT</p>
    // </div>
    <div className={`relative w-[100vw] text-white max-h-fit snap-y bg-${bg}`}>
      {/* add an image sticking to the bottom of this div and with some margin on top */}
      <Image alt='footer' src={"/footer-clouds.svg"} width={200} height={200} className='w-full h-auto pt-8' />
      <div className='absolute bottom-0 w-full flex flex-col lg:px-32 px-20 lg:gap-20 gap-1 items-center'>
        <div className="sm:flex hidden w-full flex-row justify-between gap-5 flex-wrap">
          <div className='flex flex-col gap-2'>
            <Image className='h-8 w-20 mb-3' src={"/newlogowhite.svg"} width={80} height={100} alt='Logo' />
            <p className='pl-2 uppercase'>Google Developer</p>
            <p className='pl-2 uppercase'>Students Clubs</p>
          </div>
          <div className='uppercase'>
            <h1 onClick={() => scrollToSection("fame")} className='font-bold w-min mb-5 cursor-pointer'>
              Achievements
            </h1>
            <h1 onClick={() => scrollToSection("events")} className='font-bold w-min mb-5 cursor-pointer'>
              Events
            </h1>
            <h1 onClick={() => scrollToSection("team")} className='font-bold w-min mb-5 cursor-pointer'>
              Team
            </h1>
            <h1 onClick={() => scrollToSection("projects")} className='font-bold w-min mb-5 cursor-pointer'>
              Projects
            </h1>
          </div>
        </div>
        <p className='py-6 px-3 font-light text-gray-300'>Made with &#128153; by GDSC-VIT</p>
      </div>
    </div>
  )
}

export default Footer
