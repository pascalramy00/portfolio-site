import Section from "@/components/layout/Section";
import SectionTitle from "../elements/SectionTitle";
import SectionContent from "../elements/SectionContent";
import AboutSectionLinks from "../elements/AboutSectionLinks";
import FeatureBanner from "../elements/FeatureBanner";

import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

const About = () => {
	const filePath = path.join(process.cwd(), "src", "content", "about.md");
	const markdown = fs.readFileSync(filePath, "utf-8");
	return (
		<Section id="about" className="flex flex-col z-20">
			<SectionTitle title="About Me" className="md:inline-block">
				<h3 className="hidden md:inline-block ml-0 md:ml-10 font-bold">
					<span className="mx-2">Reliabilty</span>
					<span className="mx-2">•</span>
					<span className="mx-2">Security</span>
					<span className="mx-2">•</span>
					<span className="mx-2">Performance</span>
					<span className="mx-2">•</span>
					<span className="mx-2">Responsiveness</span>
					<span className="mx-2">•</span>
					<span className="mx-2">Aesthetics</span>

					{/* Reliability • Security • Performance • Responsiveness •
					Aesthetics */}
				</h3>
				<FeatureBanner
					className="block mb-4 md:hidden"
					features={[
						"Reliability",
						"Security",
						"Responsiveness",
						"Performance",
						"Aesthetics",
					]}
				/>
			</SectionTitle>
			<SectionContent className="min-h-full flex-grow flex flex-col justify-between">
				<ReactMarkdown
					className="prose"
					components={{
						p: ({ children }) => <p className="mb-4">{children}</p>,
					}}
				>
					{markdown}
				</ReactMarkdown>

				<AboutSectionLinks />
			</SectionContent>
		</Section>
	);
};
export default About;
