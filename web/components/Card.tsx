import Image from 'next/image';
import Button from './Button';
import { FC, ReactNode } from 'react';
import fameImage from '@/assets/fame.png'
import { title } from 'process';
import { motion } from 'framer-motion';
interface Props {
    children: ReactNode;
    bg: string;
    borderColor?: string;
    i: number
}
const Card: FC<Props> = ({ children, bg, i, borderColor }) => {
    return (

        <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.2, delay: i * 0.05 }}
            viewport={{ once: true }}
            style={{ backgroundColor: bg || "white", borderColor: borderColor || "black" }} className='flex-col p-3 m-2 lg:m-4 min-w-[300px] rounded-md border-2 border-black w-[75vw] sm:max-w-[40vw] lg:max-w-[25vw] xl:max-w-[20vw] h-fit' >
            {children}
        </motion.div>

    );
}

export default Card;
