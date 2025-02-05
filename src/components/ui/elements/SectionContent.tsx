"use client";
import { motion } from "framer-motion";

const SectionContent = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<motion.div
			initial={{ y: 75, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
			viewport={{ once: true, amount: 0 }} // Adjust amount to control when it triggers
			className={`${className} w-full lg:w-5/6`}
		>
			{children}
		</motion.div>
	);
};
export default SectionContent;
