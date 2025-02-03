"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "../ui/NavLink";
import { navLinks } from "@/data/navLinks";

import DarkModeToggle from "../ui/ThemeSwitch";

const MainNavigation = () => {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);
	const closeMenu = () => setIsMenuOpen(false);

	const isActive = (href: string) => pathname === href;

	return (
		<>
			{isMenuOpen && (
				<div
					className="fixed inset-0 z-40 lg:hidden"
					onClick={closeMenu}
				/>
			)}

			<nav
				className="w-full absolute top-0 left-0 bg-background flex z-50"
				aria-label="Main Navigation"
			>
				<div className="w-full flex justify-between items-start px-4 md:px-20 py-6">
					{/* Mobile Hamburger Button */}
					<button
						onClick={toggleMenu}
						className="lg:hidden p-2 focus:outline-none"
						aria-label="Toggle Navigation"
					>
						<span className="block w-6 h-0.5 bg-foreground mb-1"></span>
						<span className="block w-6 h-0.5 bg-foreground mb-1"></span>
						<span className="block w-6 h-0.5 bg-foreground "></span>
					</button>

					{/* Desktop Menu */}
					<ul className="hidden lg:flex lg:items-center lg:space-x-16">
						{navLinks.map(({ label, href, Icon }) => (
							<li
								key={href}
								onClick={closeMenu}
								className="transition-transform duration-300 hover:scale-110 "
							>
								<NavLink
									label={label}
									href={href}
									Icon={Icon}
									isActive={isActive(href)}
									aria-current={
										isActive(href) ? "page" : undefined
									}
								/>
							</li>
						))}
					</ul>
				</div>

				{/* Mobile Menu */}
				{/* <div className="absolute top-[78px] lg:hidden w-full bg-background"> */}
				<div
					className={`absolute top-[78px] lg:hidden w-full bg-background shadow-lg transition-transform duration-300 ${
						isMenuOpen
							? "translate-y-0 opacity-100"
							: "-translate-y-full opacity-0"
					}`}
				>
					<ul
						className={`${
							isMenuOpen ? "block" : "hidden"
						}  py-4 px-6 md:px-20 shadow-lg lg:hidden`}
					>
						{navLinks.map(({ label, href, Icon }) => (
							<li key={href} onClick={closeMenu}>
								<NavLink
									label={label}
									href={href}
									Icon={Icon}
									isActive={pathname == href}
									aria-current={
										isActive(href) ? "page" : undefined
									}
								/>
							</li>
						))}
					</ul>
				</div>
				<div className="absolute top-0 right-0">
					<DarkModeToggle />
				</div>
			</nav>
		</>
	);
};
export default MainNavigation;
