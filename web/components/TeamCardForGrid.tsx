import React from "react";
import Image from "next/image";
import Card from "./Card";
import Icon from "./Icons";
type Props = {
	img: string;
	title: string;
	subtitle?: string;
	i: number;
	github?: string;
	linkedin?: string;
	link?: string;
};

const TeamCardForGrid = ({
	img,
	title,
	subtitle,
	i,
	github,
	link,
	linkedin,
}: Props) => {
	return (
		<div className="bg-white flex-col p-3 m-2 lg:m-4 rounded-md border-2 border-black flex">
			<div className="w-full border-2 border-black rounded-md ">
				<div
					className="aspect-square"
					style={{ width: "100%", overflow: "hidden" }}
				>
					<Image
						src={img}
						sizes="100vw"
						width={300}
						height={300}
						className="w-full min-h-full object-center"
						alt="pfp"
					/>
				</div>
			</div>
			<h2 className="my-3 font-sans xl:text-2xl text-xl font-semibold text-black">
				{title}
			</h2>
			<h3 className="text-grey">{subtitle}</h3>
			<div className="flex gap-2 justify-end mt-auto pt-2">
				{link ? (
					<Icon icon="web" xsmall link={link || ""} name="userweb" />
				) : null}
				{github ? (
					<Icon
						icon="githubdark"
						xsmall
						link={github || ""}
						name="usergh"
					/>
				) : null}
				{linkedin ? (
					<Icon
						icon="linkedindark"
						xsmall
						link={linkedin || ""}
						name="userli"
					/>
				) : null}
			</div>
		</div>
	);
};
export default TeamCardForGrid;
