import React from 'react';
import Image from 'next/image';
import Card from './Card';
type Props = {
  img: string;
  title: string;
  subtitle?: string;
  i: number;
  github?: string;
  linkedin?: string;
  link?: string;
};

import Icon from './Icons';

const TeamCard = ({
  img,
  title,
  subtitle,
  i,
  linkedin,
  github,
  link,
}: Props) => {
  return (
    <Card bg="white" i={i}>
      <div className="w-full border-2 border-black rounded-md">
        <div
          className="aspect-square"
          style={{ width: '100%', overflow: 'hidden' }}
        >
          <Image
            src={img}
            sizes="100vw"
            width={300}
            height={300}
            className="w-full h-auto object-cover"
            alt="pfp"
          />
        </div>
      </div>
      <h2 className="my-3 font-sans text-2xl font-semibold">{title}</h2>
      <h3>{subtitle}</h3>
      <div className="flex gap-2 justify-end mt-auto pt-2">
        {link ? (
          <Icon icon="web" xsmall link={link || ''} name="userweb" />
        ) : null}
        {github ? (
          <Icon icon="githubdark" xsmall link={github || ''} name="usergh" />
        ) : null}
        {linkedin ? (
          <Icon
            icon="linkedindark"
            xsmall
            link={linkedin || ''}
            name="userli"
          />
        ) : null}
      </div>
    </Card>
  );
};
export default TeamCard;
