"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoPreview({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 },
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
          document.body.addEventListener("click", () => video.play(), {
            once: true,
          });
        });
      }
    };

    if (isVisible) {
      playVideo();
    }
  }, [isVisible]);

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg">
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        preload="auto"
        playsInline
        className="h-full w-full object-cover"
      />
    </div>
  );
}
