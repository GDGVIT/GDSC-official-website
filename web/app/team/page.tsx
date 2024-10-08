"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import TeamCardForGrid from "@/components/TeamCardForGrid";
import team_members_board from "@/content/team_members_board.json";
import team_members_technical from "@/content/team_members.json";
import team_members_design from "@/content/team_members_design.json";
import team_members_managers from "@/content/team_members_managers.json";
import Footer from "@/components/Footer";
import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion";

export default function Team() {
	const mainRef = useRef(null);

	const { scrollYProgress } = useScroll({ container: mainRef });
	const scaleTransform = useTransform(scrollYProgress, [0, 0.08], [2, 1]);
	const leftTransform = useTransform(
		scrollYProgress,
		[0, 0.08],
		["37%", "3%"]
	);
	const topTransform = useTransform(
		scrollYProgress,
		[0, 0.08],
		["35%", "13%"]
	);
	// opacityTransform for full opacity for 90% of path, then fade out
	const opacityTransform = useTransform(scrollYProgress, [0.8, 1.0], [1, 0]);
	const arrowOpacityTransform = useTransform(
		scrollYProgress,
		[0.0, 0.03],
		[1, 0]
	);
	const hiddenTransform = useTransform(
		scrollYProgress,
		[0.03, 0.031],
		["flex", "hidden"]
	);
	const fadeTransform = useTransform(
		scrollYProgress,
		[0.4, 0.41],
		["none", "block"]
	);

	const [hookedYPostion, setHookedYPosition] = React.useState(0);
	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		setHookedYPosition(latest);
	});

	const [curTab, setCurTab] = useState("");

	const scrollOptions = (section: string) => {
		const sectionElement = document.querySelector(`#${section}`);
		// console.log(sectionElement)
		// scroll to sectionElement
		if (sectionElement) {
			sectionElement.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		// Define an observer function
		const handleIntersection: IntersectionObserverCallback = (
			entries: IntersectionObserverEntry[]
		) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Update curTab based on the section in view
					setCurTab(entry.target.id);
				}
			});
		};

		// Create an Intersection Observer
		const observer = new IntersectionObserver(handleIntersection, {
			root: mainRef.current,
			rootMargin: "0px",
			threshold: 0.5, // Adjust the threshold as needed
		});

		// Observe the sections
		const sections = ["Board", "Technical", "Design", "Managers"];
		sections.forEach((section) => {
			const sectionElement = document.querySelector(`#${section}`);
			if (sectionElement) {
				observer.observe(sectionElement);
			}
		});

		return () => {
			// Clean up the observer when the component unmounts
			observer.disconnect();
		};
	}, [mainRef]);

	return (
		<main
			id="main-thing"
			className="h-[100vh] overflow-scroll overflow-x-hidden snap-y"
			ref={mainRef}
		>
			<Navbar theme={"light"} />
			<div className="lg:block hidden h-[100vh]"></div>
			<motion.div
				style={{
					scale: scaleTransform,
					left: leftTransform,
					top: topTransform,
					opacity: opacityTransform,
				}}
				className="lg:block hidden fixed pointer-events-none left-[50px] w-7/12 text-white xl:w-4/12 lg:w-4/12 md:w-3/12 pr-2"
			>
				<h1
					className={`font-extrabold ${
						curTab === "Board"
							? "text-yellow"
							: curTab === "Technical"
							? "text-pastel_green"
							: curTab === "Design"
							? "text-pastel_blue"
							: curTab === "Managers"
							? "text-pastel_red"
							: "text-yellow"
					} uppercase lg:text-3xl md:text-2xl text-4xl`}
				>
					Meet The Team
				</h1>
				<p className="mt-4 font-light">
					We’ve got a strong team filled with caffeine addicted
					developers, gradients loving designers, and machine-like
					working managers.
				</p>
				<div className="flex flex-col gap-2 mt-8 w-fit">
					<p
						onClick={() => scrollOptions("Board")}
						className={`w-fit pointer-events-auto ${
							curTab === "Board"
								? "text-yellow underline underline-offset-4 team-tab-after"
								: "text-grey"
						} hover:text-yellow cursor-pointer`}
					>
						Board
					</p>
					<p
						onClick={() => scrollOptions("Technical")}
						className={`w-fit pointer-events-auto ${
							curTab === "Technical"
								? "text-pastel_green underline underline-offset-4 team-tab-after"
								: "text-grey"
						} hover:text-pastel_green cursor-pointer`}
					>
						Techies
					</p>
					<p
						onClick={() => scrollOptions("Design")}
						className={`w-fit pointer-events-auto ${
							curTab === "Design"
								? "text-pastel_blue underline underline-offset-4 team-tab-after"
								: "text-grey"
						} hover:text-pastel_blue cursor-pointer`}
					>
						Designers
					</p>
					<p
						onClick={() => scrollOptions("Managers")}
						className={`w-fit pointer-events-auto ${
							curTab === "Managers"
								? "text-pastel_red underline underline-offset-4 team-tab-after"
								: "text-grey"
						} hover:text-pastel_red cursor-pointer`}
					>
						Managers
					</p>
				</div>
				{/* down arrow symbol, centred, use html symbol */}
				<motion.div
					style={{
						opacity: arrowOpacityTransform,
						display: hiddenTransform,
					}}
					className="justify-center absolute bottom-0 left-1/2 -translate-x-1/2 xl:-mb-16 -mb-12"
				>
					<p
						onClick={() => scrollOptions("Board")}
						className="hover:cursor-pointer text-grey text-2xl animate-bounce pointer-events-auto"
					>
						&#8964;
					</p>
				</motion.div>
			</motion.div>
			<div className="xs:grid gap-16 p-10 mt-24 md:grid-cols-12 sm:grid">
				<div className="col-span-8 pt-24 text-white xl:col-span-4 lg:col-span-4 md:col-span-3">
					<div className="lg:hidden block sticky top-[150px] sm:text-base text-2xl">
						<h1
							className={`font-extrabold ${
								curTab === "Board"
									? "text-yellow"
									: curTab === "Technical"
									? "text-pastel_green"
									: curTab === "Design"
									? "text-pastel_blue"
									: curTab === "Managers"
									? "text-pastel_red"
									: "text-yellow"
							} uppercase lg:text-3xl md:text-2xl text-4xl`}
						>
							Meet The Team
						</h1>
						<p className="mt-4 font-light">
							We’ve got a strong team filled with caffeine
							addicted developers, gradients loving designers, and
							machine-like working managers.
						</p>
						<div className="flex flex-col sm:gap-2 gap-4 mt-8 pointer-events-auto">
							<p
								onClick={() => scrollOptions("Board")}
								className={`w-fit ${
									curTab === "Board"
										? "text-yellow underline underline-offset-4 team-tab-after"
										: "text-grey"
								} hover:text-yellow cursor-pointer`}
							>
								Board
							</p>
							<p
								onClick={() => scrollOptions("Technical")}
								className={`w-fit ${
									curTab === "Technical"
										? "text-pastel_green underline underline-offset-4 team-tab-after"
										: "text-grey"
								} hover:text-pastel_green cursor-pointer`}
							>
								Techies
							</p>
							<p
								onClick={() => scrollOptions("Design")}
								className={`w-fit ${
									curTab === "Design"
										? "text-pastel_blue underline underline-offset-4 team-tab-after"
										: "text-grey"
								} hover:text-pastel_blue cursor-pointer`}
							>
								Designers
							</p>
							<p
								onClick={() => scrollOptions("Managers")}
								className={`w-fit ${
									curTab === "Managers"
										? "text-pastel_red underline underline-offset-4 team-tab-after"
										: "text-grey"
								} hover:text-pastel_red cursor-pointer`}
							>
								Managers
							</p>
						</div>
					</div>
				</div>
				<div className="grid col-span-12 mt-16 text-white xl:col-span-8 lg:col-span-8 md:col-span-9 sm:mt-0">
					<div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-3">
						<div
							id="Board"
							className="sm:flex flex lg:py-0 sm:py-10 py-24"
						>
							<h2 className="font-extrabold text-yellow m-auto uppercase lg:text-3xl sm:text-2xl text-6xl">
								Board
							</h2>
						</div>
						{team_members_board.map((mem, i) => (
							<TeamCardForGrid
								i={i}
								key={"mem" + i}
								title={mem.name}
								img={mem.img}
								subtitle={mem.position}
								github={mem.github}
								linkedin={mem.linkedin}
								link={mem.link}
							/>
						))}
					</div>
					<div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-3">
						<div
							id="Technical"
							className="sm:flex flex lg:py-0 sm:py-10 py-24"
						>
							<h2 className="font-extrabold text-pastel_green m-auto uppercase lg:text-3xl sm:text-2xl text-6xl">
								Techies
							</h2>
						</div>
						{team_members_technical.map((mem, i) => (
							<TeamCardForGrid
								i={i}
								key={"mem" + i}
								title={mem.name}
								img={mem.img}
								subtitle={mem.position}
								github={mem.github}
								linkedin={mem.linkedin}
								link={mem.link}
							/>
						))}
					</div>
					<div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-3">
						<div
							id="Design"
							className="sm:flex flex lg:py-0 sm:py-10 py-24"
						>
							<h2 className="font-extrabold text-pastel_blue m-auto uppercase lg:text-3xl sm:text-2xl text-6xl">
								Designers
							</h2>
						</div>
						{team_members_design.map((mem, i) => (
							<TeamCardForGrid
								i={i}
								key={"mem" + i}
								title={mem.name}
								img={mem.img}
								subtitle={mem.position}
								github={mem.github}
								linkedin={mem.linkedin}
								link={mem.link}
							/>
						))}
					</div>
					<div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-3">
						<div
							id="Managers"
							className="sm:flex flex lg:py-0 sm:py-10 py-24"
						>
							<h2 className="font-extrabold text-pastel_red m-auto uppercase lg:text-3xl sm:text-2xl text-6xl">
								Managers
							</h2>
						</div>
						{team_members_managers.map((mem, i) => (
							<TeamCardForGrid
								i={i}
								key={"mem" + i}
								title={mem.name}
								img={mem.img}
								subtitle={mem.position}
								github={mem.github}
								linkedin={mem.linkedin}
								link={mem.link}
							/>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
}
