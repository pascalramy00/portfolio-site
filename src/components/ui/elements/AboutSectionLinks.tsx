"use client";

import NavLink from "./NavLink";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

const AboutSectionLinks = () => {
	const classes =
		"flex flex-row-reverse justify-start items-center border gap-2 py-2 px-3 rounded-xl bg-black text-white hover:bg-white hover:text-black dark:bg-grey-200 dark:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-300 hover:scale-105";
	return (
		<div className="flex flex-col md:flex-row gap-4 mt-4">
			<NavLink
				href="#stack"
				label="See what I work with"
				Icon={ArrowDownIcon}
				className={classes}
			/>

			<NavLink
				href="#projects"
				label="Checkout my recent projects"
				Icon={ArrowDownIcon}
				className={classes}
			/>

			<NavLink
				href="#contact"
				label="Get in touch"
				Icon={ArrowDownIcon}
				className={classes}
			/>
		</div>
	);
};
export default AboutSectionLinks;
