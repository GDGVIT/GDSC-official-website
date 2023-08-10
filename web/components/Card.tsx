import Image from 'next/image';
import Button from './Button';
import { FC, ReactNode } from 'react';
import fameImage from '@/assets/fame.png'
import { title } from 'process';
interface Props {
    children: ReactNode;
    bg: string
}
const Card: FC<Props> = ({ children, bg }) => {
    return (
        <div style={{ backgroundColor: bg || "white" }} className='flex-col p-3 m-2 lg:m-4 min-w-[300px] rounded-md border-2 border-black w-[80vw] sm:max-w-[40vw] lg:max-w-[25vw] xl:max-w-[15vw]'>
            {children}
        </div>
    );
}

export default Card;