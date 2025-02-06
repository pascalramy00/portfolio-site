import ContactForm from "../elements/ContactForm";
import Section from "@/components/layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import SectionContent from "../../layout/SectionContent";

import AvailabilityBanner from "../elements/AvailabilityBanner";

const Contact = () => {
	return (
		<Section id="contact" className="flex-col">
			<SectionTitle title={`Want to work together?\rReach out.`}>
				<AvailabilityBanner />
			</SectionTitle>
			<SectionContent>
				<ContactForm />
			</SectionContent>
		</Section>
	);
};
export default Contact;
