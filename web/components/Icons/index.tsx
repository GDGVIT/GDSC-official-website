'use client'

import Link from "next/link";
import Image from "next/image";
import { getIcon } from "./icons";


type Props = {
    icon: string,
    link: string,
    name: string,
    small?: boolean
    xsmall?: boolean
}

const Icon = ({ icon, name, link, small, xsmall }: Props) => {
    return (
        <Link target="blank" href={link} className={`flex items-center ${xsmall ? "w-[1.5rem] h-[1.5rem]" : small ? "w-[2rem] h-[2rem]": "w-[3rem] h-[3rem]"} opacity-60 hover:opacity-100`} >
            <Image  src={getIcon(icon)} alt={name} layout="responsive" />
        </Link>
    );
}

export default Icon;
