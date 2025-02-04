"use client";

import { motion, useScroll } from "framer-motion";

const ScrollProgressBar = () => {
	const { scrollYProgress } = useScroll(); // Track scroll progress (0 to 1)

	return (
		<motion.div
			className="fixed top-0 left-0 h-1 w-full bg-foreground z-50"
			style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
		/>
	);
};

export default ScrollProgressBar;
