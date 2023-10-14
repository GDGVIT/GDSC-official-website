import Link from 'next/link'
import React from 'react'

type Props = {
    name: string,
    by: string,
    link: string,
    i: number,
    onHover: (key: number, text: string) => void
}

const BlogListItem = ({ name, by, link, onHover, i }: Props) => {
    return (
        <div className='flex justify-between p-5 border-b-2 border-black first-of-type:border-t-2' onMouseOver={() => {
            onHover(i, name)
        }}>
            <div className='flex flex-col px-2 text-lg'>
                <h2>
                    {name}
                </h2>
                <p className='text-sm font-thin'>A blog by {by}</p>
            </div>
            <div>
                <Link target='blank' href={link} className='whitespace-nowrap'>
                    View →
                </Link>
            </div>
        </div>
    )
}

export default BlogListItem
