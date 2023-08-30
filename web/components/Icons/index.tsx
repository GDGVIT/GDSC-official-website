'use client'

import Link from "next/link";
import Image from "next/image";
import { getIcon } from "./icons";


type Props = {
    icon: string,
    link: string,
    name: string
}

const Icon = ({ icon, name, link }: Props) => {
    return (
        <Link href={link} className="flex items-center w-[3rem] h-[3rem]" >
            <Image src={getIcon(icon)} alt={name} layout="responsive" />
        </Link>
    );
}

export default Icon;
