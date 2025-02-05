"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

import throttle from "lodash/throttle";

const ScrollToTopButton = () => {
	const [show, setShow] = useState(false);
	const [footerOffset, setFooterOffset] = useState(16); // Default bottom position

	useEffect(() => {
		const handleScroll = throttle(() => {
			const scrollY = window.scrollY;
			const footer = document.querySelector("footer");
			const footerTop = footer ? footer.getBoundingClientRect().top : 0;
			const threshold = window.innerHeight - 40; // Adjust threshold for better UX

			if (footerTop <= threshold) {
				setFooterOffset(footerTop + threshold);
				//setFooterOffset(Math.max(16, footerTop - threshold));
			} else {
				setFooterOffset(16);
			}

			setShow(scrollY > 200);
		}, 200); // ✅ Throttle to improve performance

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.button
			className="fixed right-6 md:right-14 smallDesktop:right-[52px] lg:right-[74px] border p-3 rounded-full shadow-lg bg-white hover:bg-black dark:text-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all z-50"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0 }}
			transition={{ duration: 0.3 }}
			style={{ bottom: `${footerOffset}px` }}
		>
			<ArrowUpIcon className="w-6 h-6 z-50" />
		</motion.button>
	);
};

export default ScrollToTopButton;
