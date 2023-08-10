import Image from 'next/image';
import Button from './Button';
import { FC, ReactNode } from 'react';
import fameImage from '@/assets/fame.png'
import { title } from 'process';
import Card from './Card';
interface Props {
    title: ReactNode;
}
const FameCard: FC<Props> = ({ title }) => {
    return (
        <Card bg={'white'}>
            <div className='w-full p-5 border-2 border-black rounded-md '>
                <Image src={fameImage} layout='responsive' width={300} height={300} alt='Logo' />
            </div>
            <h2 className='my-3 font-mono text-3xl'>
                {title}
            </h2>
        </Card>
    );
}

export default FameCard;