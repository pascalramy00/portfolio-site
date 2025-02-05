"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);
	const [bottomOffset, setBottomOffset] = useState(16); // Default 16px from bottom

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const viewportHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const distanceToBottom =
				documentHeight - (scrollY + viewportHeight);
			const isMobile = window.innerWidth < 768; // Adjust breakpoint if needed

			if (isMobile) {
				setBottomOffset(distanceToBottom < 80 ? 86 : 16); // Smaller offsets for mobile
			} else {
				setBottomOffset(distanceToBottom < 164 ? 124 : 40); // Desktop and tablet offsets
			}

			setIsVisible(scrollY > 300);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.button
			className="fixed right-6 md:right-20 smallDesktop:right-[52px] lg:right-[74px] z-50 rounded-full p-3 shadow-lg transition bg-white hover:bg-black dark:text-black hover:text-white dark:hover:bg-white dark:hover:text-black"
			style={{ bottom: `${bottomOffset}px` }}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
			exit={{ opacity: 0, scale: 0.8 }}
			transition={{ duration: 0.3, ease: "easeOut" }}
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			aria-label="Scroll to top"
		>
			<ArrowUpIcon className="h-6 w-6" />
		</motion.button>
	);
}
