import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/layout/Navigation";
import Providers from "@/utils/providers";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://pascalramy.com"),
	title: "Portfolio | Pascal Ramy",
	description: "Creative full-stack developer portfolio showcasing projects.",
	openGraph: {
		title: "Portfolio | Pascal Ramy",
		description: "Creative full-stack developer portfolio.",
		url: "https://pascalramy.com",
		siteName: "Portfolio | Pascal Ramy",
		images: [
			{
				url: "/images/og_image_portfolio.png",
				width: 1200,
				height: 630,
			},
		],
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon_64x64.png" type="image/png" />
				<link rel="icon" href="/favicon_32x32.png" type="image/png" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
			>
				<Providers>
					<Navigation />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
