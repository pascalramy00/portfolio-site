import Link from "next/link";

import type { Project } from "@/types";
import VideoPreview from "./VideoPreview";
import FeatureBanner from "./FeatureBanner";
import ExternalLink from "./ExternalLink";

const Project = ({
	project: {
		title,
		description,
		story,
		date,
		url,
		videoUri,
		stack,
		features,
	},
}: {
	project: Project;
}) => {
	return (
		<li className="flex flex-col md:w-[48%] smallDesktop:w-[48%] smallDesktop:flex-col lg:w-full lg:flex-row  mt-10">
			{/* Left Column: Video */}
			<div className="w-full smallDesktop:w-full lg:w-1/2 flex-shrink-0">
				{videoUri && <VideoPreview src={videoUri} />}
			</div>

			{/* Right Column: Info */}
			<div className="w-full smallDesktop:w-full lg:w-1/2 flex flex-col justify-between px-0 smallDesktop:px-0 smallDesktop:mt-2 smallDesktop:justify-between mt-2 lg:mt-0 lg:px-10">
				{/* Top Row */}
				<div>
					<div className="flex items-baseline gap-4 mb-1">
						<h3 className="text-xl font-bold">{title}</h3>
						<h4 className="text-lg">{description}</h4>
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
				</div>

				{/* Bottom Row */}
				<div>
					<ul className="flex flex-wrap">
						{stack.map(({ name, Icon, url }, i) => (
							<li key={i}>
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
					{features && <FeatureBanner features={features} />}
				</div>
			</div>
		</li>
	);
};
export default Project;
