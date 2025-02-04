"use client";

import { NavLinkProps } from "@/types";
import Link from "next/link";

const scrollToSection = (id: string) => {
	const section = document.getElementById(id);
	if (section) {
		section.scrollIntoView({ behavior: "smooth", block: "start" });
	}
};

const NavLink = ({ label, href, Icon, isActive }: NavLinkProps) => {
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault(); // Prevent default anchor behavior
		scrollToSection(href.substring(1)); // Remove "#" and scroll
	};
	return (
		<Link
			href={href}
			onClick={handleClick}
			className={`px-4 pl-0 ${isActive ? "font-bold" : ""}`}
		>
			<div className="flex items-center gap-2">
				{Icon && <Icon className="w-5 h-5" />}
				{label}
			</div>
		</Link>
	);
};
export default NavLink;
