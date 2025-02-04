"use client";
import { motion } from "framer-motion";
import ContactForm from "../elements/ContactForm";
import Section from "@/components/layout/Section";
import SectionTitle from "../elements/SectionTitle";
import SectionContent from "../elements/SectionContent";

const Contact = () => {
	return (
		<Section id="contact" className="flex-col">
			<motion.div
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<SectionTitle>
					Want to work together?
					<br />
					Reach out.
				</SectionTitle>
				<div className="flex items-center justify-start mb-3">
					<span className="inline-block w-2 h-2 mr-2 bg-green-500 rounded-full"></span>
					<h3 className="">available for work and projects</h3>
				</div>
			</motion.div>
			<SectionContent>
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					<ContactForm />
				</motion.div>
			</SectionContent>
			{/* </div> */}
		</Section>
	);
};
export default Contact;
