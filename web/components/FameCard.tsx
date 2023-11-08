import Image from 'next/image';
import Button from './Button';
import { FC, ReactNode } from 'react';
import { title } from 'process';
import Card from './Card';
interface Props {
    title: ReactNode;
    i: number;
    img: string;
}
const FameCard: FC<Props> = ({ title, i, img }) => {
    return (
        <Card bg={'white'} i={i}>
            <div className='w-full border-2 border-black rounded-md aspect-square overflow-hidden'>
                <Image src={img} className='w-full object-cover h-auto aspect-square' width={300} height={300} alt='Logo' />
            </div>
            <h2 className='my-3 font-mono text-1xl'>
                {title}
            </h2>
        </Card>
    );
}

export default FameCard;
