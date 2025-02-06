"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "../ui/elements/NavLink";
import { navLinks } from "@/data/navLinks";
import { Bars3Icon } from "@heroicons/react/24/solid";

import DarkModeToggle from "../ui/elements/ThemeSwitch";

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
						className="lg:hidden px-2 md:px-0 focus:outline-none"
						aria-label="Toggle Navigation"
					>
						<Bars3Icon className="w-6 h-6" />
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
									className="px-4 pl-0 flex items-center gap-2"
									aria-current={
										isActive(href) ? "page" : undefined
									}
								/>
							</li>
						))}
					</ul>
				</div>

				{/* Mobile Menu */}
				<div
					className={`absolute top-[60px] rounded lg:hidden bg-background shadow-lg transition-transform duration-300 ${
						isMenuOpen
							? "translate-y-0 opacity-100"
							: "-translate-y-full opacity-0"
					}`}
				>
					<ul
						className={`${
							isMenuOpen ? "block" : "hidden"
						}  pt-2 px-6 md:px-20 shadow-lg lg:hidden`}
					>
						{navLinks.map(({ label, href, Icon }) => (
							<li key={href} onClick={closeMenu}>
								<NavLink
									label={label}
									href={href}
									Icon={Icon}
									className="pr-4 pb-3 flex items-center gap-2"
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
