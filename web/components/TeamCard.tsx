import React from 'react'
import Image from 'next/image'
import Card from './Card'
type Props = {
    img: string
    title: string
    subtitle?: string;
    i: number;
}

const TeamCard = ({ img, title, subtitle, i }: Props) => {
    return (
        <Card bg='white' i={i}>
            <div className='w-full border-2 border-black rounded-md'>
                <Image src={img} layout='responsive' width={300} height={300} alt='Logo' />
            </div>
            <h2 className='my-3 font-sans text-2xl font-semibold'>
                {title}
            </h2>
            <h3>
                {subtitle}
            </h3>
        </Card>
    )
}
export default TeamCard
