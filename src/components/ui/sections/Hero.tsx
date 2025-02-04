import AnimatedGreeting from "../animations/AnimatedGreeting";
import ExternalLink from "../elements/ExternalLink";
import Section from "@/components/layout/Section";

import HeroArtwork from "../elements/HeroArtwork";

const Hero = () => {
	return (
		<Section
			id="home"
			className="flex flex-col-reverse justify-center items-center lg:flex-row lg:items-end lg:justify-start"
		>
			<div className="">
				<h1 className="text-4xl 2xl:text-6xl mb-2 md:mb-14 2xl:mb-20">
					<AnimatedGreeting />
					<br /> I&apos;m{" "}
					<span className="font-bold">Pascal Ramy</span>
				</h1>

				<div className="">
					<ExternalLink
						href="https://www.linkedin.com/in/pascal-ramy/"
						label="Linkedin"
					/>
					<ExternalLink href="/Pascal_Ramy_CV.pdf" label="Resume" />
				</div>
				<h2 className="mb-4 2xl:text-xl">
					Software Developer based in{" "}
					<span className="font-semibold">Montreal, Canada</span>
				</h2>
			</div>
			<HeroArtwork />
		</Section>
	);
};
export default Hero;
