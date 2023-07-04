import { GetStaticProps } from 'next';
import { ReactNode, FC } from 'react';

interface Props {
    children?: ReactNode
}

const Button: FC<Props> = ({ children }) => {
    return (
        <div className='border-2 border-white text-white w-fit h-fit rounded-full px-5 py-1 flex justify-center items-center cursor-pointer'>
            {children}
        </div>
    );
}

export default Button;