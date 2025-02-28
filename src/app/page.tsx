import Hero from "@/components/ui/sections/Hero";
import Contact from "@/components/ui/sections/Contact";
import About from "@/components/ui/sections/About";
import Stack from "@/components/ui/sections/Stack";
import Projects from "@/components/ui/sections/Projects";
import ChevronAnimation from "@/components/ui/animations/ChevronAnimation";
import ScrollToTop2 from "@/components/ui/animations/ScrollToTop2";
import ScrollProgressBar from "@/components/ui/animations/ScrollProgressBar";

export default function Home() {
	return (
		<main className="p-4 pb-10 md:px-20 md:py-0 overflow-x-hidden">
			<Hero />
			<About />
			<Stack />
			<Projects />
			<Contact />
			<ChevronAnimation className="absolute bottom-0 left-[46%] lg:left-[50%]" />
			<ScrollToTop2 />
			<ScrollProgressBar />
			<div className="hidden lg:block lg:w-1/6"></div>
		</main>
	);
}
