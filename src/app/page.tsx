import Hero from "@/components/ui/sections/Hero";
import Contact from "@/components/ui/sections/Contact";
import About from "@/components/ui/sections/About";
import Stack from "@/components/ui/sections/Stack";
import Projects from "@/components/ui/sections/Projects";

import ChevronAnimation from "@/components/ui/animations/ChevronAnimation";
import ScrollToTop from "@/components/ui/animations/ScrollToTop";

export default function Home() {
	return (
		<main className="p-4 md:p-20 md:pt-0 flex-col overflow-x-hidden">
			<Hero />
			<About />
			<Stack />
			<Projects />
			<Contact />
			<ChevronAnimation className="absolute bottom-0 left-[46%] lg:left-[50%]" />
			<ScrollToTop />
			<div className="hidden lg:block lg:w-1/6"></div>
		</main>
	);
}
