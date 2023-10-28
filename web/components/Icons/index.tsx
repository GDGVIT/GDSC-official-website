'use client'

import Link from "next/link";
import Image from "next/image";
import { getIcon } from "./icons";


type Props = {
    icon: string,
    link: string,
    name: string,
    small?: boolean
}

const Icon = ({ icon, name, link, small }: Props) => {
    return (
        <Link target="blank" href={link} className={`flex items-center ${small ? "w-[2rem] h-[2rem]": "w-[3rem] h-[3rem]"}`} >
            <Image src={getIcon(icon)} alt={name} layout="responsive" />
        </Link>
    );
}

export default Icon;
