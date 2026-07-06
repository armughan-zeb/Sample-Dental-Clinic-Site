"use client";

import { useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfterSlider({
  beforeSrc = "/images/smile_before.png",
  afterSrc  = "/images/smile_after.png",
  beforeAlt = "Before dental treatment",
  afterAlt  = "After dental treatment",
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden select-none border border-[#E2E8F0] group">

      {/* Before (base layer) */}
      <div className="absolute inset-0">
        <Image src={beforeSrc} alt={beforeAlt} fill sizes="(max-width: 768px) 100vw, 680px" className="object-cover" priority />
        <span className="absolute bottom-4 right-4 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest rounded">
          Before
        </span>
      </div>

      {/* After (clipped foreground) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)` }}
      >
        <Image src={afterSrc} alt={afterAlt} fill sizes="(max-width: 768px) 100vw, 680px" className="object-cover" priority />
        <span className="absolute bottom-4 left-4 px-2.5 py-1 bg-[#06B6D4]/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest rounded">
          After
        </span>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-lg border border-[#E2E8F0] flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-200">
          <svg className="w-4 h-4 text-[#06B6D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l-4 4 4 4m8 0l4-4-4-4" />
          </svg>
        </div>
      </div>

      {/* Invisible range input */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        aria-label="Drag to compare before and after"
      />
    </div>
  );
}
