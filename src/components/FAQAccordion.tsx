"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#E2E8F0]">
      {items.map((item, idx) => (
        <div key={idx} className="py-5">
          <button
            onClick={() => setOpen(open === idx ? null : idx)}
            className="flex items-start justify-between w-full text-left gap-4 group focus:outline-none"
            aria-expanded={open === idx}
          >
            <span className={`font-heading font-semibold text-[15px] leading-snug transition-colors ${
              open === idx ? "text-[#06B6D4]" : "text-[#0F172A] group-hover:text-[#06B6D4]"
            }`}>
              {item.question}
            </span>
            <span className="shrink-0 mt-0.5 text-[#94A3B8]">
              {open === idx
                ? <Minus className="w-4 h-4" />
                : <Plus  className="w-4 h-4" />}
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-300 ${
            open === idx ? "max-h-64 mt-3" : "max-h-0"
          }`}>
            <p className="text-[#64748B] text-sm leading-relaxed pr-8">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
