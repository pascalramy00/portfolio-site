import { NavLinkProps } from "@/types";
import Link from "next/link";

const NavLink = ({ label, href, Icon, isActive }: NavLinkProps) => {
	return (
		<Link
			href={href}
			className={`px-4 pl-0 py-2${isActive ? "font-bold" : ""}`}
		>
			<div className="flex items-center gap-2">
				<Icon className="w-5 h-5" />
				{label}
			</div>
		</Link>
	);
};
export default NavLink;
