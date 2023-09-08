import { fullConfig } from '@/config/tailwind';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import medium from "@/assets/medium-blog.svg"
import blogBadge from "@/assets/blog-badge.svg"

const BlogCover = ({ i: key, text }: { i: number, text: string }) => {
    return (<div className='items-center justify-center flex-1 hidden h-full md:flex'>
        <div className='relative w-[70%] aspect-square'>
            <div style={{ backgroundColor: (fullConfig.theme?.colors && key % 2 !== 0) ? fullConfig.theme.colors.blue as string : "white" }} className='absolute z-10 w-full transition-all border-2 border-black rounded-md aspect-square'></div>
            <div style={{ backgroundColor: (fullConfig.theme?.colors && key % 2 === 0) ? fullConfig.theme.colors.blue as string : "white" }} className='absolute z-0 w-full transition-all border-2 border-black rounded-md aspect-square -rotate-12'></div>
            <div className='absolute bottom-[10%] left-[10%] w-[20%] h-[60px] z-20'>
                <Image src={medium} alt="medium blog" fill />
            </div>
            <div style={{ rotate: `${key}0deg` }} className='absolute bottom-[2%] right-[2%] w-[50%] aspect-square z-20 transition-all'>
                <Image src={blogBadge} alt="medium blog" fill />
            </div>
            <h1 className='absolute z-30 font-mono text-5xl font-semibold text-black top-4 left-4'>{text}</h1>
        </div>
    </div>
    )
}


export default BlogCover;