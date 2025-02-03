"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	let switchSrc = "/artwork_light_switch_on.png";
	let lightbulbSrc = "/artwork_lightbulb_off.png";

	if (resolvedTheme === "dark") {
		switchSrc = "/artwork_light_switch_off.png";
		lightbulbSrc = "/artwork_lightbulb_on.png";
	} else if (resolvedTheme === "light") {
		switchSrc = "/artwork_light_switch_on.png";
		lightbulbSrc = "/artwork_lightbulb_off.png";
	}

	return (
		<div
			className="relative lg:fixed flex items-end top-0 right-0 
		w-[100px] h-[150px] 
		md:w-[140px] md:h-[210px]
		smallDesktop:w-[150px] smallDesktop:h-[225px]
		lg:w-[200px] lg:h-[300px]"
		>
			<button
				onClick={() =>
					setTheme((prev) => (prev === "light" ? "dark" : "light"))
				}
				className="absolute left-[28%] bottom-[-6px] md:left-[34%] md:bottom-2 smallDesktop:left-[36%] smallDesktop:bottom-3 lg:left-[40%] lg:bottom-8 2xl:left-[40%] 2xl:bottom-8 z-10 "
			>
				<Image
					src={switchSrc}
					alt="light switch"
					width={40}
					height={48}
					className=""
				/>
			</button>
			<Image
				src={lightbulbSrc}
				alt="lightbulb"
				fill
				className="object-contain"
			/>
		</div>
	);
};
export default ThemeSwitch;
