"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Marketing Director",
    location: "Karachi",
    rating: 5,
    avatar: "/images/avatar_ayesha.png",
    text: "SmileCare Pro completely changed my perspective on dental treatments. The cosmetic whitening procedure was entirely painless, and the team was incredibly professional. My smile has never looked better!",
  },
  {
    name: "Dr. Zain Malik",
    role: "Orthopedic Surgeon",
    location: "Lahore",
    rating: 5,
    avatar: "/images/avatar_zain.png",
    text: "As a medical professional, I am extremely selective about clinic environments. Their sterilization protocols, high-tech digital scans, and pain-free implant procedure exceeded my expectations.",
  },
  {
    name: "Kamran Sheikh",
    role: "Business Owner",
    location: "Faisalabad",
    rating: 5,
    avatar: "", // Will render beautiful fallback initials
    text: "The porcelain veneers they designed for me are outstanding. They look incredibly natural, and the treatment plan was transparent and affordable. It has significantly boosted my confidence.",
  },
  {
    name: "Fatima Lodhi",
    role: "High School Teacher",
    location: "Rawalpindi",
    rating: 5,
    avatar: "", // Fallback
    text: "I brought my 8-year-old for emergency root canal therapy. The pediatric specialist was so gentle and patient. She felt no pain at all, and the service was outstanding.",
  },
];

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [isHovered, setIsHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      if (emblaApi) emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay functionality (5 seconds, pauses on hover)
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (!isHovered) {
        emblaApi.scrollNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi, isHovered]);

  return (
    <div
      className="relative w-full max-w-5xl mx-auto px-4 py-8 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel viewport */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_48%] min-w-0"
            >
              <div className="glass-card h-full p-8 rounded-2xl border border-borders shadow-sm flex flex-col justify-between hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div>
                  {/* Star Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-primary/10 rotate-180" />
                  </div>

                  {/* Testimonial Quote */}
                  <p className="font-sans text-[#1E293B] text-[15px] leading-relaxed italic mb-8">
                    "{t.text}"
                  </p>
                </div>

                {/* Patient Profile */}
                <div className="flex items-center gap-4">
                  {t.avatar ? (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-borders">
                      <Image
                        src={t.avatar}
                        alt={`${t.name} Portrait`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center font-heading font-bold text-sm tracking-wide">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                  <div>
                    <h4 className="font-heading font-bold text-sm text-dark-navy">
                      {t.name}
                    </h4>
                    <p className="text-light-text text-xs mt-0.5">
                      {t.role} &bull; <span className="text-primary font-medium">{t.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={scrollPrev}
          className="p-2.5 rounded-full bg-white border border-borders shadow-sm text-dark-navy hover:text-primary hover:border-primary hover:shadow transition-all duration-250 active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Carousel Dots */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                selectedIndex === idx ? "w-6 bg-primary" : "w-2 bg-borders"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="p-2.5 rounded-full bg-white border border-borders shadow-sm text-dark-navy hover:text-primary hover:border-primary hover:shadow transition-all duration-250 active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
