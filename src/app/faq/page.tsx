import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { HelpCircle, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | SmileCare Pro",
  description: "Read frequently asked questions about dental implants, root canal treatments, sterilization protocols, and insurance panels at SmileCare Pro.",
};

const defaultFaqs = [
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
    answer: "We partner with major local and international health insurance providers in Pakistan, including Jubilee Life, EFU Allianz, and Adamjee Insurance. We recommend checking with your provider to confirm what percentage of your treatment is covered.",
  },
  {
    question: "What is your sterilization protocol?",
    answer: "We adhere strictly to international WHO standards and CDC guidelines. Every instrument undergoes chemical pre-treatment, ultrasonic cleaning, and vacuum-autoclaving (Class B sterilization) before being sealed in individual sterile packs opened right in front of you.",
  },
];

export default function FAQPage() {
  // Generate JSON-LD FAQ Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": defaultFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="relative w-full">
      {/* FAQ Schema Inject */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page Header */}
      <section className="relative bg-gradient-to-b from-[#EBF6F9] via-[#FAFCFD] to-[#FAFCFD] pt-32 pb-16 overflow-hidden border-b border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center relative z-10">
          <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
            Common Inquiries
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dark-navy mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-light-text text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Have questions about dental treatments, clinical safety, pricing, or appointments? Explore our answers.
          </p>
        </div>
      </section>

      {/* FAQ Accordions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <FAQAccordion />
        </div>
      </section>

      {/* Contact Callout Banner */}
      <section className="py-20 bg-[#FAFCFD] border-t border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <span className="text-primary text-xs uppercase tracking-wider font-bold block">
              Still Have Questions?
            </span>
            <h2 className="font-heading font-bold text-3xl text-dark-navy">
              Reach Out to Our Support Team
            </h2>
            <p className="text-light-text text-sm sm:text-base leading-relaxed">
              If your question isn't listed here, feel free to contact our clinic reception. We are here to advise you on treatments, installments, or booking slots.
            </p>
          </div>

          <div className="bg-white border border-borders p-8 rounded-2xl shadow-sm flex flex-col sm:flex-row gap-6 justify-around items-center">
            <a
              href="tel:+923001234567"
              className="flex flex-col items-center text-center gap-2 group hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-light-text mt-2">Call Front Desk</span>
              <span className="text-sm font-bold text-dark-navy mt-1 group-hover:text-primary transition-colors">
                +92 300 1234567
              </span>
            </a>
            <div className="w-px h-16 bg-borders hidden sm:block" />
            <a
              href="mailto:info@smilecarepro.pk"
              className="flex flex-col items-center text-center gap-2 group hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-light-text mt-2">Email Inquiries</span>
              <span className="text-sm font-bold text-dark-navy mt-1 group-hover:text-primary transition-colors">
                info@smilecarepro.pk
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Reservation Banner */}
      <section className="py-24 bg-dark-navy relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#FAFCFD_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center relative z-10 flex flex-col items-center gap-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl leading-tight max-w-xl">
            Book Your Diagnostic Consultation Online
          </h2>
          <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
            Ready to schedule a dental cleaning, cavity check, or cosmetic scan? Get started with our online booking form.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Link
              href="/contact#appointment"
              className="px-8 py-3.5 bg-primary text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Book Appointment
            </Link>
            <a
              href="https://wa.me/923001234567"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold rounded-lg shadow transition-all flex items-center gap-2"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
