"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const ScrollToTopButton = () => {
	const [show, setShow] = useState(false);
	const [scrollingDown, setScrollingDown] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Check if scrolling down or up
			if (currentScrollY > lastScrollY) {
				setScrollingDown(true);
			} else if (currentScrollY < lastScrollY) {
				setScrollingDown(false);
			}

			// Only show the button when we scroll past a certain point
			if (currentScrollY > 200) {
				setShow(true);
			} else {
				setShow(false);
			}

			// Update last scroll position for future comparisons
			setLastScrollY(currentScrollY);
		};

		// Listen to scroll event
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	// Prevent flickering and smooth transition based on scrolling direction
	useEffect(() => {
		if (scrollingDown) {
			setShow(false);
		} else {
			if (window.scrollY === 0) {
				setShow(false);
			}
		}
	}, [scrollingDown]);

	return (
		<motion.button
			className="fixed bottom-6 right-6 md:right-14 lg:right-[70px] bg-background border p-3 rounded-full shadow-lg hover:bg-gray-200 transition-all z-50"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0 }}
			transition={{ duration: 0.3 }}
		>
			<ArrowUpIcon className="w-6 h-6 z-50" />
		</motion.button>
	);
};

export default ScrollToTopButton;
