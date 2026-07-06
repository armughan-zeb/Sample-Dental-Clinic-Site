"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "Are your dentists registered with the PMC / PMDC?",
    answer: "Yes, all our dentists and specialists are fully registered with the Pakistan Medical Commission (PMC) / Pakistan Medical & Dental Council (PMDC). They hold post-graduate qualifications (like FCPS, MDS, or foreign certifications) and have extensive clinical experience.",
  },
  {
    question: "Do you offer pain-free dental procedures?",
    answer: "Absolutely. We specialize in minimally invasive dentistry and use advanced local anesthetics, electronic syringe delivery systems, and computerized sedation options to ensure that root canals, extractions, and implant placements are completely painless.",
  },
  {
    question: "How long does a dental implant procedure take?",
    answer: "A standard implant placement takes about 30 to 60 minutes in our chair. However, the complete integration of the implant into the bone (osteointegration) requires 3 to 6 months before the final custom crown is fitted. We provide highly aesthetic temporary crowns during this period.",
  },
  {
    question: "What are your clinic operating hours?",
    answer: "SmileCare Pro is open 7 days a week from 9:00 AM to 9:00 PM for scheduled appointments. For severe toothaches, trauma, or bleeding, we provide emergency support 24/7. Please call our emergency helpline at +92 300 1234567.",
  },
  {
    question: "Do you accept dental insurance?",
    answer: "We partner with major local and international health insurance providers in Pakistan, including Jubilee Life, Allianz EFU, and Adamjee Insurance. We recommend checking with your provider to confirm what percentage of your treatment is covered.",
  },
  {
    question: "What is your sterilization protocol?",
    answer: "We adhere strictly to international WHO standards and CDC guidelines. Every instrument undergoes chemical pre-treatment, ultrasonic cleaning, and vacuum-autoclaving (Class B sterilization) before being sealed in individual sterile packs opened right in front of you.",
  },
];

export default function FAQAccordion({ faqs = defaultFaqs }: { faqs?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-borders rounded-xl bg-white overflow-hidden transition-all duration-300 hover:border-primary/30 shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-semibold text-base text-dark-navy pr-4">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0 text-primary"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-5 pt-0 border-t border-borders/50 text-light-text text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
