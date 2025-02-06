import Section from "@/components/layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import SectionContent from "../../layout/SectionContent";

import { projects } from "@/data/projects";
import Project from "@/components/ui/elements/Project";

const Projects = () => {
	return (
		<Section id="projects">
			<SectionTitle title="Recent Projects"></SectionTitle>
			<SectionContent>
				<ul className="w-full md:flex md:justify-between smallDesktop:flex smallDesktop:justify-between lg:block">
					{projects.map((project, i) => (
						<Project key={i} project={project} />
					))}
				</ul>
			</SectionContent>
		</Section>
	);
};
export default Projects;
