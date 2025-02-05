import ContactForm from "../elements/ContactForm";
import Section from "@/components/layout/Section";
import SectionTitle from "../elements/SectionTitle";
import SectionContent from "../elements/SectionContent";

const Contact = () => {
	return (
		<Section id="contact" className="flex-col">
			<SectionTitle>
				Want to work together?
				<br />
				Reach out.
				<div className="flex items-center justify-start mb-3">
					<span className="inline-block w-2 h-2 mr-2 bg-green-500 rounded-full"></span>
					<h3 className="">available for work and projects</h3>
				</div>
			</SectionTitle>
			<SectionContent>
				<ContactForm />
			</SectionContent>
		</Section>
	);
};
export default Contact;
