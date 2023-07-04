
import Image from 'next/image';
import Button from './Button';
import { FC } from 'react';
interface Props {
    theme: "light" | "dark"
}
const Navbar: FC<Props> = ({ theme = "light" }) => {
    return (
        <div className='p-10 fixed flex justify-between w-full'>
            <Image src={"/logo-white.png"} width={300} height={300} alt='Logo' />
            <Button>Menu</Button>
        </div>
    );
}

export default Navbar;