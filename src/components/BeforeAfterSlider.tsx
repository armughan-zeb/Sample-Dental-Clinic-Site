"use client";

import { useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage = "/images/smile_before.png",
  afterImage = "/images/smile_after.png",
  beforeLabel = "Before",
  afterLabel = "After Treatment",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto overflow-hidden rounded-2xl border border-borders shadow-xl select-none group">
      {/* Before Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={beforeImage}
          alt="Before smile dental transformation"
          fill
          sizes="(max-width: 768px) 100vw, 42rem"
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-dark-navy/80 backdrop-blur-sm text-white font-sans text-xs font-semibold rounded-md border border-white/10 uppercase tracking-wider">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Foreground, clipped) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <Image
          src={afterImage}
          alt="After smile dental transformation"
          fill
          sizes="(max-width: 768px) 100vw, 42rem"
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-primary/95 backdrop-blur-sm text-white font-sans text-xs font-semibold rounded-md border border-white/10 uppercase tracking-wider">
          {afterLabel}
        </div>
      </div>

      {/* Vertical Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Drag Handle Button */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-primary border border-primary shadow-lg flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-200">
          <svg
            className="w-5 h-5 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M8 9l-4 4 4 4m8 0l4-4-4-4"
            />
          </svg>
        </div>
      </div>

      {/* Invisible range input for dragging */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        aria-label="Smile transformation slider"
      />
    </div>
  );
}
