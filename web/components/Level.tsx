import React, { FC } from 'react'
import levelsNoise from '../assets/levelsNoise.svg'
import Image from 'next/image'

interface Props {
  level: "01" | "02" | "03" | "04"
}

const Level: FC<Props> = ({ level }) => {
  return (
    <div className='relative'>
      <Image className='w-full h-full bg-white' src={levelsNoise} alt='' />
      <h1 className='absolute text-5xl font-extrabold text-center uppercase -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-stone-500 xl:text-7xl lg:text-6xl'>Level {level}</h1>
    </div>
  )
}

export default Level
