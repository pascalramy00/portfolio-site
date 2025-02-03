import type { NavLink as NavLinkType } from "@/types";
import {
	HomeIcon,
	CodeBracketIcon,
	CircleStackIcon,
	EnvelopeIcon,
} from "@heroicons/react/24/solid";

export const navLinks: NavLinkType[] = [
	{
		label: "Home",
		href: "/",
		Icon: HomeIcon,
	},
	{ label: "Projects", href: "/projects", Icon: CodeBracketIcon },
	{ label: "Stack", href: "/stack", Icon: CircleStackIcon },
	{ label: "Contact", href: "/contact", Icon: EnvelopeIcon },
];
