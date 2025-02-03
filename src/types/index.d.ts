export type NavLink = {
	label: string;
	href: string;
};

export type NavLinkProps = NavLink & {
	isActive: boolean;
};

export type Project = {
	title: string;
	url: string;
	date: Date;
	shortDescription: string;
	stack: string[];
};
