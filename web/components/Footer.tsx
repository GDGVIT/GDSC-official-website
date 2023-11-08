import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FC } from 'react';
import { scroller } from 'react-scroll';
import socials from '@/content/social.json';
import Icon from './Icons';
import Link from 'next/link';

interface Props {
  bg?: string;
}

const Footer: FC<Props> = ({ bg }) => {
  const router = useRouter();

  const scrollToSection = (section: string) => {
    router.push('/');
    localStorage.setItem('visited', 'true');
    scroller.scrollTo(section, {
      duration: 1500,
      delay: 150,
      smooth: true,
      containerId: 'main-thing',
      // offset: 50,
    });
  };
  return (
    // <div className={`w-full p-16 ${bg}`}>
    //     <p className="text-center">Made with &#9829; by GDSC-VIT</p>
    // </div>
    <div className={`relative w-[100vw] text-white max-h-fit snap-y`}>
      <div className={`"absolute w-full bg-${bg} top-0 -mt-1 py-2"`}></div>
      {/* add an image sticking to the bottom of this div and with some margin on top */}
      <Image
        alt="footer"
        src={'/footer-clouds.svg'}
        width={200}
        height={200}
        className={`w-full h-auto pt-8 bg-${bg}`}
      />
      <div className="absolute bottom-0 flex flex-col items-center w-full gap-8 px-20 lg:px-32 xl:gap-10 lg:gap-6 sm:gap-4 ga">
        <div className="flex-row flex-wrap justify-between hidden w-full gap-5 sm:flex">
          <Link
            target="blank"
            href={
              'https://gdsc.community.dev/vellore-institute-of-technology-vit-vellore/'
            }
            className="flex flex-col gap-2"
          >
            <Image
              className="w-20 h-8 mb-3"
              src={'/newlogowhite.svg'}
              width={80}
              height={100}
              alt="Logo"
            />
            <p className="pl-2 uppercase">Google Developer</p>
            <p className="pl-2 uppercase">Students Clubs VIT</p>
          </Link>
          <div className="flex flex-col gap-2 uppercase xl:gap-4">
            <h1
              onClick={() => scrollToSection('fame')}
              className="font-bold cursor-pointer w-min"
            >
              Achievements
            </h1>
            <h1
              onClick={() => scrollToSection('events')}
              className="font-bold cursor-pointer w-min"
            >
              Events
            </h1>
            <h1
              onClick={() => router.push('/team')}
              className="font-bold cursor-pointer w-min"
            >
              Team
            </h1>
            <h1
              onClick={() => scrollToSection('projects')}
              className="font-bold cursor-pointer w-min"
            >
              Projects
            </h1>
          </div>
        </div>
        <p className="items-center hidden gap-1 pl-2 text-sm sm:flex">
          <Icon
            icon="mail"
            xsmall
            name="mail"
            link="mailto:dscvitvellore@gmail.com"
          />{' '}
          dscvitvellore@gmail.com
        </p>
        <div className="flex justify-between gap-3 lg:m-0">
          {socials.map((social, i) => (
            <Icon small key={'soc' + i} {...social} />
          ))}
        </div>
        <p className="px-3 font-light text-gray-300">
          Made with &#128153; by GDSC-VIT
        </p>
        <p className="px-3 pb-6 -mt-2 text-sm font-light text-gray-300">
          Copyright &copy;{new Date().getFullYear()}, All rights reserved.
        </p>
        <p className='hidden text-center'>Kaunsa Club sab se SEXY<br />GDSC GDSC</p>
      </div>
    </div>
  );
};

export default Footer;
