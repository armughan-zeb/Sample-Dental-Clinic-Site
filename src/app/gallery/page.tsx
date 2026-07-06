"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Maximize2, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const galleryCategories = ["All", "Treatment Rooms", "Lobby & Reception", "Specialists"];

const galleryItems = [
  {
    title: "High-Tech Treatment Room",
    category: "Treatment Rooms",
    image: "/images/clinic_interior.png",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Luxury Reception Waiting Area",
    category: "Lobby & Reception",
    image: "/images/clinic_reception.png",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Patient Consultation Desk",
    category: "Lobby & Reception",
    image: "/images/clinic_interior.png",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Clinical Director Dr. Aftab Ahmed",
    category: "Specialists",
    image: "/images/dentist_doctor.png",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Surgical Operatory Suite",
    category: "Treatment Rooms",
    image: "/images/clinic_reception.png",
    span: "md:col-span-2 md:row-span-1",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="relative w-full">
      {/* Page Header */}
      <section className="relative bg-gradient-to-b from-[#EBF6F9] via-[#FAFCFD] to-[#FAFCFD] pt-32 pb-16 overflow-hidden border-b border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center relative z-10">
          <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
            Clinic Tour
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dark-navy mb-4">
            Our Clinic Gallery
          </h1>
          <p className="text-light-text text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Take a virtual tour of SmileCare Pro. Explore our luxurious waiting lounges, advanced sterile treatment suites, and meet our consultants.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 flex flex-wrap justify-center items-center gap-3">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-[#FAFCFD] border border-borders text-light-text hover:text-dark-navy hover:bg-borders/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`relative rounded-2xl overflow-hidden shadow-sm group border border-borders cursor-pointer ${item.span}`}
                  onClick={() => setSelectedImage(item.image)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-dark-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                    <span className="self-end p-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </span>
                    <div>
                      <span className="text-[10px] text-accent uppercase font-bold tracking-wider">
                        {item.category}
                      </span>
                      <h4 className="font-heading font-bold text-base mt-1">{item.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Image Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-navy/95 z-50 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all duration-300"
              aria-label="Close fullscreen view"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Wrap */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Fullscreen dental clinic view"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Reservation Banner */}
      <section className="py-24 bg-dark-navy relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#FAFCFD_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center relative z-10 flex flex-col items-center gap-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl leading-tight max-w-xl">
            Want to See it in Person?
          </h2>
          <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
            Reserve your consultation slot online today. Experience Pakistan's first-class clinical dental care first-hand.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Link
              href="/contact#appointment"
              className="px-8 py-3.5 bg-primary text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Book Clinic Visit
            </Link>
            <a
              href="https://wa.me/923001234567"
              className="px-8 py-3.5 bg-[#25D366] border border-transparent text-white font-semibold rounded-lg shadow hover:shadow-md transition-all flex items-center gap-2"
            >
              WhatsApp Front Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
