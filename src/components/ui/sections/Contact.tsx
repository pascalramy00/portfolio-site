import ContactForm from "../elements/ContactForm";
import Section from "@/components/layout/Section";
import SectionTitle from "../elements/SectionTitle";
import SectionContent from "../elements/SectionContent";

const Contact = () => {
	return (
		<Section id="contact" className="flex-col">
			<SectionTitle title={`Want to work together?\rReach out.`}>
				<div className="flex items-center justify-start my-3 text-lg font-normal">
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
