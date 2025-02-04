"use client";
import { motion } from "framer-motion";
import ContactForm from "../elements/ContactForm";
import Section from "@/components/layout/Section";

const Contact = () => {
	return (
		<Section id="contact" className="flex-col">
			<div className="md:w-5/6 lg:w-2/3">
				<motion.div
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					<h2 className="text-2xl font-semibold mb-2">
						Want to work together?
						<br />
						Reach out.
					</h2>
					<div className="flex items-center justify-start">
						<span className="inline-block w-2 h-2 mr-2 bg-green-500 rounded-full"></span>
						<h3>available for work and projects</h3>
					</div>
				</motion.div>
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					<ContactForm />
				</motion.div>
			</div>
		</Section>
	);
};
export default Contact;
