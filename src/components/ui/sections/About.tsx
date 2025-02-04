import CorneredRectangle from "../elements/CorneredRectangle";
import Section from "@/components/layout/Section";

const About = () => {
	return (
		<Section id="about" className="flex flex-col lg:flex-row z-20">
			<div className="w-full lg:w-1/2 px-4">
				<CorneredRectangle>
					<h3 className="text-2xl font-semibold mb-2">About Me</h3>
					{/* <p>I&apos;m a hard worker. </p> */}

					<p>
						I am a dedicated full-stack developer with strong
						practical knowledge in modern web technologies such as
						[insert relevant technologies here]. I earned a Computer
						Science degree from McGill University, where I honed my
						discipline, focus, and competitive spirit. With years of
						experience in the service industry while studying, I’ve
						become a dynamic, service-oriented individual with
						strong communication skills and the ability to handle
						diverse interactions. I’m constantly driven to improve.
						Fluent in English, French, and Polish, with proficiency
						in conversational Arabic and Spanish, I am creative and
						passionate about developing innovative solutions across
						both front-end and back-end technologies. I thrive in
						collaborative environments, and I pride myself on
						delivering quality, stable, durable, scalable work. If
						you’d like to discuss how my skills can contribute to
						your team, feel free to reach out!
					</p>
				</CorneredRectangle>
			</div>
		</Section>
	);
};
export default About;
