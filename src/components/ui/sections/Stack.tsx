import Section from "@/components/layout/Section";
import SectionTitle from "@/components/layout/SectionTitle";
import SectionContent from "../../layout/SectionContent";

import { stack } from "@/data/stack";
import Link from "next/link";

const Stack = () => {
	return (
		<Section id="stack">
			<SectionTitle title="What I Use"></SectionTitle>
			<SectionContent>
				<ul className="grid gap-6 sm:grid-cols-2 smallDesktop:grid-cols-2 lg:grid-cols-3">
					{stack.map(({ name, url, Icon, description }, i) => {
						return (
							<li
								key={i}
								className="p-2 border rounded-xl transition-transform hover:scale-105"
							>
								<Link
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3"
								>
									<Icon className="w-10 h-10 fill-current" />

									<div className="flex flex-col">
										<span className="font-semibold text-lg">
											{name}
										</span>
										<span className="font-light opacity-70 text-nowrap">
											{description}
										</span>
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</SectionContent>
		</Section>
	);
};
export default Stack;
