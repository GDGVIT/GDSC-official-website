import React from 'react'
import Image from 'next/image'
import Card from './Card'
import Link from 'next/link'
type Props = {
    img: string
    title: string
    subtitle?: string;
    i: number;
    linkto: string;
}

const SeeMore = ({ img, title, subtitle, i, linkto }: Props) => {
    return (
        <Card bg='transparent' borderColor='transparent' i={i}>
            <Link href={linkto}>
            <div className='hover:bg-white hover:bg-opacity-60 p-3 rounded-md'>
                <h2 className='my-3 font-sans text-2xl font-semibold'>
                    {title}
                </h2>
                <h3>
                    {subtitle}
                </h3>
            </div>
            </Link>
        </Card>
    )
}
export default SeeMore
