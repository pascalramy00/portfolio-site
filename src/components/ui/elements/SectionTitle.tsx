"use client";

import { motion } from "framer-motion";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.div
			initial={{ y: 50, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }} // Added delay
			viewport={{ once: true, amount: 0.2 }}
		>
			<h2 className="text-2xl font-semibold mb-4">{children}</h2>
		</motion.div>
	);
};
export default SectionTitle;
