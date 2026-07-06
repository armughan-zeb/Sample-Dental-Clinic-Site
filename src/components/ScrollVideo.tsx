"use client";

import { useRef, useEffect } from "react";
import { Star } from "lucide-react";

export default function ScrollVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let currentProgress = 0;
    let targetProgress = 0;

    const handleScroll = () => {
      // Calculate how far we've scrolled. We'll scrub the video over the first 800px of scroll.
      const maxScroll = 800;
      let rawProgress = window.scrollY / maxScroll;
      if (rawProgress > 1) rawProgress = 1;
      if (rawProgress < 0) rawProgress = 0;
      
      targetProgress = rawProgress;
    };

    const updateVideo = () => {
      if (videoRef.current && !isNaN(videoRef.current.duration)) {
        // Smooth interpolation (lerp) for buttery smooth scrubbing
        currentProgress += (targetProgress - currentProgress) * 0.1;
        
        // Only update if there's a meaningful change to prevent unnecessary repaints
        if (Math.abs(currentProgress - targetProgress) > 0.001) {
            videoRef.current.currentTime = videoRef.current.duration * currentProgress;
        }
      }
      animationFrameId = requestAnimationFrame(updateVideo);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Kick off the loop
    animationFrameId = requestAnimationFrame(updateVideo);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Preload metadata so we know the duration immediately
  return (
    <div className="relative z-10 w-full max-w-[460px] mx-auto group">
      {/* Container */}
      <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/20 bg-[#0A0A0A]">
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Glassmorphic overlay badge for extra flair */}
        <div className="absolute bottom-8 left-8 right-8 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 cursor-default">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#06B6D4]/20 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 text-[#06B6D4]" fill="currentColor" />
            </div>
            <div>
              <p className="text-white font-heading font-bold text-[15px]">Scroll to Play</p>
              <p className="text-[#A3A3A3] text-xs mt-1 leading-tight">Video scrubs dynamically with scroll.</p>
            </div>
          </div>
        </div>

        {/* Subdued gradient fade to seamlessly blend bottom edge */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none opacity-50" />
      </div>
    </div>
  );
}
