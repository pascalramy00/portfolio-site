export type IconType = ForwardRefExoticComponent<
	Omit<SVGProps<SVGSVGElement>, "ref">
>;

export type NavLink = {
	label: string;
	href: string;
	Icon?: IconType;
};

export type NavLinkProps = NavLink & {
	isActive?: boolean;
};

export type Technology = {
	name: string;
	url: string;
	Icon: IconType;
	description: string;
};

export type Stack = Technology[];

export type Project = {
	title: string;
	description: string;
	story: string;
	features?: string[];
	url: string;
	videoUri: string;
	stack: Stack;
	date: Date;
};
