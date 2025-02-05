"use client";

import { NavLinkProps } from "@/types";
import Link from "next/link";

const scrollToSection = (id: string) => {
	const section = document.getElementById(id);
	if (section) {
		section.scrollIntoView({ behavior: "smooth", block: "start" });
	}
};

const NavLink = ({ label, href, Icon, className }: NavLinkProps) => {
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault(); // Prevent default anchor behavior
		scrollToSection(href.substring(1)); // Remove "#" and scroll
	};
	return (
		<Link href={href} onClick={handleClick} className={className}>
			{Icon && <Icon className="w-5 h-5" />}
			{label}
		</Link>
	);
};
export default NavLink;
