import React from 'react'
import Image from 'next/image'
import Card from './Card'
type Props = {
    img: string
    title: string
    subtitle?: string;
    i: number;
}

const TeamCardForGrid = ({ img, title, subtitle, i }: Props) => {
    return (
        <div className='bg-white flex-col p-3 m-2 lg:m-4 rounded-md border-2 border-black flex'>
            <div className='w-full border-2 border-black rounded-md '>
                <Image src={img} layout='responsive' width={300} height={300} alt='Logo' />
            </div>
            <h2 className='my-3 font-sans xl:text-2xl text-xl font-semibold text-black'>
                {title}
            </h2>
            <h3 className='text-grey'>
                {subtitle}
            </h3>
        </div>
    )
}
export default TeamCardForGrid
