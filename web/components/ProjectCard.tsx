import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from './Card'
import Icon from './Icons'
type Props = {
    img: string
    title: string
    description?: string
    link?: string;
    i: number;
    github?: string[];
}

const ProjectCard = ({ img, title, description, link, i, github }: Props) => {
    return (
        <Card bg="transparent" i={i}>
            <div className='w-full border-2 border-black rounded-md '>
                <div style={{ width: '100%', overflow: 'hidden' }}>
                    <Image
                        src={img}
                        // layout='responsive'
                        sizes='100vw'
                        width={300}
                        height={300}
                        // objectFit='contain'
                        alt='proj'
                        className='aspect-video w-full h-auto object-cover'
                    />
                </div>
            </div>
            <h2 className='my-3 font-sans text-3xl font-semibold'>
                {title}
            </h2>
            <h3 className='mb-2'>
                {description}
            </h3>
            {/* <Link className='border-black hover:border-b-2 hover:mb-[-1px] mt-auto' target='blank' href={`${link}`}>View More</Link> */}
            <div className='flex gap-2 justify-end mt-auto'>
                {link ?
                <Icon icon='web' xsmall link={link || ""} name='projweb' />
                : null}
                {github ?
                github.map((gh, i) => (
                    <Icon key={i} icon='githubdark' xsmall link={gh || ""} name='projgh' />
                ))
                : null}
            </div>
        </Card>
    )
}
export default ProjectCard
