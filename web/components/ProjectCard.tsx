import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from './Card'
type Props = {
    img: string
    title: string
    description?: string
    slug?: string
}

const ProjectCard = ({ img, title, description, slug }: Props) => {
    return (
        <Card bg="transparent">
            <div className='w-full border-2 border-black rounded-md '>
                <Image src={img} layout='responsive' width={300} height={300} alt='Logo' />
            </div>
            <h2 className='my-3 font-sans text-3xl font-semibold'>
                {title}
            </h2>
            <h3 className='mb-2'>
                {description}
            </h3>
            <Link className='border-black hover:border-b-2' href={`/projects/${slug}`}>View More</Link>
        </Card>
    )
}
export default ProjectCard