"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923001234567?text=Hi%2C%20I%20would%20like%2520to%20book%20an%20appointment%20with%20SmileCare%20Pro."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group relative"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.209-1.362a9.98 9.98 0 0 0 4.8 1.226h.004c5.502 0 9.99-4.474 9.99-9.986 0-2.67-1.037-5.178-2.922-7.062A9.925 9.925 0 0 0 12.012 2zm5.799 14.156c-.249.702-1.446 1.288-1.996 1.37-.5.075-1.15.132-3.354-.78-2.818-1.166-4.636-4.043-4.777-4.229-.14-.187-1.144-1.52-1.144-2.899 0-1.38.72-2.057.979-2.333.259-.276.567-.345.756-.345.19 0 .379.002.543.01.173.008.406-.065.635.489.233.563.799 1.947.868 2.086.069.14.115.302.022.489-.092.187-.14.302-.276.46-.138.158-.291.353-.415.474-.138.135-.282.283-.12.56.162.278.718 1.182 1.539 1.91.64.57 1.18.94 1.507 1.077.328.138.52.115.715-.11.196-.225.834-.97 1.057-1.302.222-.33.443-.277.747-.164.305.113 1.937.913 2.271 1.079.333.167.556.249.605.334.049.085.049.493-.2.115z" />
        </svg>
        <span className="absolute right-14 bg-dark-navy text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Phone Call Button */}
      <a
        href="tel:+923001234567"
        className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group relative"
        aria-label="Call Clinic"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute right-14 bg-dark-navy text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Call +92 300 1234567
        </span>
      </a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="flex items-center justify-center w-12 h-12 bg-white text-dark-navy border border-borders rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group relative"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
            <span className="absolute right-14 bg-dark-navy text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Scroll to Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
