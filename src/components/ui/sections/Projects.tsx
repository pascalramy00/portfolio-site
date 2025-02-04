import Section from "@/components/layout/Section";
import SectionTitle from "../elements/SectionTitle";
import SectionContent from "../elements/SectionContent";

import { projects } from "@/data/projects";
import VideoPreview from "../elements/VideoPreview";
import Link from "next/link";
import ExternalLink from "../elements/ExternalLink";
import FeatureBanner from "../elements/FeatureBanner";

const Projects = () => {
	return (
		<Section id="projects">
			<SectionTitle>Recent Projects</SectionTitle>
			<SectionContent>
				<ul>
					{projects.map(
						(
							{
								title,
								description,
								story,
								url,
								videoUri,
								date,
								features,
								stack,
							},
							i
						) => (
							<li
								key={i}
								className="flex items-start justify-start mt-10"
							>
								<div className="w-1/2 flex-shrink-0">
									{videoUri && (
										<VideoPreview src={videoUri} />
									)}
								</div>

								<div className="flex flex-col w-1/2 px-10">
									<div className="flex items-baseline gap-4 mb-1">
										<h3 className="text-xl font-bold">
											{title}
										</h3>
										<h4 className="text-lg">
											{description}
										</h4>
									</div>

									<div className="flex items-center gap-3">
										<p>
											{date.toLocaleDateString("en-US", {
												month: "long",
												year: "numeric",
											})}
										</p>
										<span className="block w-2 h-2 bg-foreground rounded-full"></span>
										<ExternalLink
											href={url}
											label="Visit"
											className="my-1"
										/>
									</div>
									<p className="mb-2">{story}</p>
									<ul className="flex flex-wrap">
										{stack.map(({ name, Icon, url }, i) => (
											<li key={i} className="">
												<Link
													href={url}
													className="flex items-center gap-2 border mr-2 mb-2 py-1 px-2 rounded-lg hover:scale-105 transition-all duration-200 ease-in-out"
												>
													<Icon />
													{name}
												</Link>
											</li>
										))}
									</ul>
									{features && (
										<FeatureBanner features={features} />
									)}
								</div>
							</li>
						)
					)}
				</ul>
			</SectionContent>
		</Section>
	);
};
export default Projects;
