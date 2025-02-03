import { NavLinkProps } from "@/types";
import Link from "next/link";

const NavLink = ({ label, href, isActive }: NavLinkProps) => {
	return (
		<Link
			href={href}
			className={`px-4 pl-0 py-2 ${isActive ? "font-bold" : ""}`}
		>
			{label}
		</Link>
	);
};
export default NavLink;
