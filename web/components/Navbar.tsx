
import Image from 'next/image';
import Button from './Button';
import { FC } from 'react';
interface Props {
    theme: "light" | "dark"
}
const Navbar: FC<Props> = ({ theme = "light" }) => {
    return (
        <div className='fixed top-0 left-0 right-0 z-10 flex justify-between w-full p-10'>
            <Image src={"/logo-white.png"} width={300} height={300} alt='Logo' />
            <Button theme={theme}>Menu</Button>
        </div>
    );
}

export default Navbar;