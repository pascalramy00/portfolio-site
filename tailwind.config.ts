import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			screens: {
				smallDesktop: { min: "1024px", max: "1270px" },
			},
			animation: {
				sway: "sway 3s ease-in-out infinite",
				marquee: "marquee 15s linear infinite",
				marquee2: "marquee2 15s linear infinite",
			},
			keyframes: {
				sway: {
					"0%": { transform: "rotate(2deg)" },
					"50%": { transform: "rotate(-2deg)" },
					"100%": { transform: "rotate(2deg)" },
				},
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				marquee2: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0%)" },
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
