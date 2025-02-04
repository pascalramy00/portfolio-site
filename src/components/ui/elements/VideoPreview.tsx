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
		if (isVisible && videoRef.current) {
			videoRef.current.play();
		}
	}, [isVisible]);

	return (
		<video
			ref={videoRef}
			src={src}
			loop
			muted
			playsInline
			className="rounded-lg w-full h-auto"
		/>
	);
}
