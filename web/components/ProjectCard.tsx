import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from './Card'
type Props = {
    img: string
    title: string
    description?: string
    link?: string;
    i: number;
}

const ProjectCard = ({ img, title, description, link, i }: Props) => {
    return (
        <Card bg="transparent" i={i}>
            <div className='w-full border-2 border-black rounded-md '>
                <div style={{ width: '100%', overflow: 'hidden' }}>
                    <Image
                        src={img}
                        layout='responsive'
                        width={300}
                        height={300}
                        objectFit='contain'
                        alt='proj'
                        className='aspect-video'
                    />
                </div>
            </div>
            <h2 className='my-3 font-sans text-3xl font-semibold'>
                {title}
            </h2>
            <h3 className='mb-2'>
                {description}
            </h3>
            <Link className='border-black hover:border-b-2 hover:mb-[-1px] mt-auto' target='blank' href={`${link}`}>View More</Link>
        </Card>
    )
}
export default ProjectCard
