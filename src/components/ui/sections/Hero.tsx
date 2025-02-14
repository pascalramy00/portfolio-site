import AnimatedGreeting from "../animations/AnimatedGreeting";
import ExternalLink from "../elements/ExternalLink";
import Section from "@/components/layout/Section";

// import HeroArtwork from "../elements/HeroArtwork";
import HeroOptimizedArtwork from "../elements/HeroOptimizedArtwork";

const Hero = () => {
	return (
		<Section
			id="home"
			className="flex flex-col-reverse justify-center items-center  lg:flex-row lg:pt-20 lg:items-end lg:justify-start"
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
					<ExternalLink
						href="/docs/Pascal_Ramy_Software_Developer.pdf"
						label="Resume"
					/>
				</div>
				<h2 className="mb-4 2xl:text-xl">
					Software Developer based in{" "}
					<strong className="font-semibold">Montreal, Canada</strong>
				</h2>
			</div>
			<HeroOptimizedArtwork />
		</Section>
	);
};
export default Hero;
