"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Hi there,", "Bonjour", "Cześć", "Hola", "مرحباً"];

const AnimatedGreeting = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % words.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);
	return (
		<AnimatePresence mode="wait">
			<motion.span
				key={words[index]}
				initial={{ rotateX: 90, opacity: 0 }}
				animate={{ rotateX: 0, opacity: 1 }}
				exit={{ rotateX: -90, opacity: 0 }}
				transition={{ duration: 0.5, ease: "easeInOut" }}
				className={`inline-block w-full h-[3rem] ${
					index === 4 && "text-5xl"
				}`}
			>
				{words[index]}
			</motion.span>
		</AnimatePresence>
	);
};
export default AnimatedGreeting;
