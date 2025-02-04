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

export type Project = {
	title: string;
	url: string;
	date: Date;
	shortDescription: string;
	stack: string[];
};

export type Technology = {
	name: string;
	url: string;
	Icon: IconType;
	description: string;
};

export type Stack = Technology[];
