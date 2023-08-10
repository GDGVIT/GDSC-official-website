
import Image from 'next/image';
import Button from './Button';
import { FC } from 'react';
interface Props {
    theme: "light" | "dark"
}
const Navbar: FC<Props> = ({ theme = "light" }) => {
    return (
        <div style={{ color: theme === "light" ? "white" : "black" }} className='fixed top-0 left-0 right-0 z-10 flex justify-between w-full p-10'>
            <Image src={theme === 'light' ? "/logo-white.png" : "/logo-black.png"} width={300} height={300} alt='Logo' />
            <Button theme={theme}>Menu</Button>
        </div>
    );
}

export default Navbar;