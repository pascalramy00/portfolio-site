"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoPreview({ src }: { src: string }) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => setIsVisible(entry.isIntersecting),
			{ threshold: 0.5 }
		);
		if (videoRef.current) observer.observe(videoRef.current);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!videoRef.current) return;

		const video = videoRef.current;

		const playVideo = () => {
			const playPromise = video.play();
			if (playPromise !== undefined) {
				playPromise.catch(() => {
					console.log("Autoplay blocked, trying workaround...");
					// Try playing again after a user interaction
					document.body.addEventListener(
						"click",
						() => video.play(),
						{ once: true }
					);
				});
			}
		};

		// Play when visible
		if (isVisible) {
			playVideo();
		}
	}, [isVisible]);

	return (
		<>
			<video
				ref={videoRef}
				src={src}
				loop
				muted
				preload="auto"
				playsInline
				className="rounded-lg w-full h-auto"
			/>
		</>
	);
}
