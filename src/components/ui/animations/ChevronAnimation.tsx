"use client";

import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const ChevronAnimation = ({ className }: { className: string }) => {
	return (
		<div className={`${className} flex flex-col items-center`}>
			<motion.div
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 1.5,
					ease: "easeInOut",
					repeat: Infinity,
					repeatType: "reverse",
				}}
			>
				<ChevronDownIcon className="w-8 h-8 text-gray-500" />
			</motion.div>
		</div>
	);
};

export default ChevronAnimation;
