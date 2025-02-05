"use client";

import { NavLinkProps } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavLink = ({ label, href, Icon, className }: NavLinkProps) => {
	const router = useRouter();

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		// If it's a section link (e.g., #about)
		if (href.startsWith("#")) {
			e.preventDefault();

			const section = document.querySelector(href);
			if (section) {
				section.scrollIntoView({ behavior: "smooth" });
			} else {
				router.push("/"); // Redirect to homepage if section isn't found
			}
		}
	};
	return (
		<Link href={href} onClick={handleClick} className={className}>
			{Icon && <Icon className="w-5 h-5" />}
			{label}
		</Link>
	);
};
export default NavLink;
