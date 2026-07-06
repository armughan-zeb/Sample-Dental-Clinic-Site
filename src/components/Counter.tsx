"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  target: number;
  duration?: number; // in ms
  suffix?: string;
}

export default function Counter({ target, duration = 1500, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = target;
          if (start === end) return;

          const totalFrames = Math.min(Math.floor(duration / 16), 100);
          const increment = end / totalFrames;
          let currentFrame = 0;

          const timer = setInterval(() => {
            currentFrame++;
            setCount(Math.floor(increment * currentFrame));

            if (currentFrame >= totalFrames) {
              setCount(end);
              clearInterval(timer);
            }
          }, 16); // ~60fps

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}
