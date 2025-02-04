import type { NavLink as NavLinkType } from "@/types";
import {
	HomeIcon,
	CodeBracketIcon,
	CircleStackIcon,
	EnvelopeIcon,
	UserIcon,
} from "@heroicons/react/24/solid";

export const navLinks: NavLinkType[] = [
	{
		label: "Home",
		href: "#home",
		Icon: HomeIcon,
	},
	{ label: "About", href: "#about", Icon: UserIcon },
	{ label: "Stack", href: "#stack", Icon: CircleStackIcon },
	{ label: "Projects", href: "#projects", Icon: CodeBracketIcon },
	{ label: "Contact", href: "#contact", Icon: EnvelopeIcon },
];
