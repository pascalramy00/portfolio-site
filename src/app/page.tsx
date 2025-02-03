import ContactForm from "@/components/ui/ContactForm";
import CorneredRectangle from "@/components/ui/CorneredRectangle";
import ExternalLink from "@/components/ui/ExternalLink";

import HeroArtwork from "@/components/ui/HeroArtwork";

export default function Home() {
	return (
		<main className="md:p-20 md:pt-0 p-4 flex-col">
			<section
				id="home"
				className="h-screen py-20 flex flex-col-reverse justify-center items-center lg:flex-row lg:items-end lg:justify-start"
			>
				<div className="">
					<h1 className="text-4xl 2xl:text-6xl mb-2 md:mb-14 2xl:mb-20">
						Hi there,
						<br /> I&apos;m{" "}
						<span className="font-bold">Pascal Ramy</span>
					</h1>

					<div className="">
						<ExternalLink
							href="https://www.linkedin.com/in/pascal-ramy/"
							label="Linkedin"
						/>
						<ExternalLink
							href="/Pascal_Ramy_CV.pdf"
							label="Resume"
						/>
						<ExternalLink
							href="https://github.com/pascalramy00/portfolio-site"
							label="Source Code"
						/>
					</div>
					<h2 className="mb-4 2xl:text-xl">
						Software Developer based in{" "}
						<span className="font-semibold">Montreal, Canada</span>
					</h2>
				</div>

				<HeroArtwork />
			</section>
			<section className="min-h-screen py-20 flex flex-col lg:flex-row">
				<div className="w-full lg:w-2/6 mr-4">
					<h2 className="text-2xl font-semibold mb-2">
						Want to work together?
						<br />
						Send me a message!
					</h2>
					<ContactForm />
				</div>
				<div className="w-full lg:w-1/2 px-4">
					<CorneredRectangle>
						<h3 className="text-2xl font-semibold mb-2">
							About Me
						</h3>
						{/* <p>I&apos;m a hard worker. </p> */}

						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Accusantium quidem, aspernatur modi tenetur
							nemo praesentium numquam maiores odit illum tempore
							ipsum ipsam aperiam! Consequuntur excepturi pariatur
							consequatur voluptatum quis sint.
						</p>
					</CorneredRectangle>
				</div>
				<div className="hidden lg:block lg:w-1/6"></div>
			</section>
		</main>
	);
}
