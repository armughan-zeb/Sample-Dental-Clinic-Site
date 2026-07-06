import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck, HelpCircle, Calendar, MessageCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Transparent Dental Pricing | SmileCare Pro",
  description: "View our transparent dental treatment pricing guide in Pakistan. Learn about our EFU/Jubilee insurance integrations and interest-free installment plans.",
};

const priceLists = [
  {
    category: "Preventative & General",
    items: [
      { name: "Consultation & 3D Digital Scan", price: "Free (With Treatment)" },
      { name: "Scaling & Polishing (Dental Cleaning)", price: "5,000 - 8,000 PKR" },
      { name: "Composite Cavity Fillings (Per Tooth)", price: "4,000 - 6,000 PKR" },
      { name: "Simple Tooth Extraction", price: "5,000 - 9,000 PKR" },
    ],
  },
  {
    category: "Cosmetic & Aesthetics",
    items: [
      { name: "Zoom Laser Teeth Whitening (In-Chair)", price: "25,000 PKR" },
      { name: "Premium Porcelain Veneers (Per Tooth)", price: "35,000 - 45,000 PKR" },
      { name: "E-Max Ceramic Crowns (Per Tooth)", price: "28,000 - 35,000 PKR" },
      { name: "Dental Bonding (Aesthetic Repairs)", price: "8,000 - 12,000 PKR" },
    ],
  },
  {
    category: "Restorative & Surgical",
    items: [
      { name: "Single Tooth Dental Implant (Straumann)", price: "80,000 - 120,000 PKR" },
      { name: "Painless Root Canal Therapy (Rotary)", price: "12,000 - 18,000 PKR" },
      { name: "Wisdom Tooth Surgical Extraction", price: "15,000 - 25,000 PKR" },
      { name: "Bone Grafting / Sinus Lift", price: "30,000 - 50,000 PKR" },
    ],
  },
  {
    category: "Orthodontics & Braces",
    items: [
      { name: "Metal Braces (Standard Ortho)", price: "150,000 - 200,000 PKR" },
      { name: "Ceramic / Self-Ligating Braces", price: "220,000 - 280,000 PKR" },
      { name: "Clear Aligners (Invisible Braces)", price: "300,000 - 450,000 PKR" },
      { name: "Orthodontic Retainers (Per Arch)", price: "15,000 PKR" },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="relative w-full">
      {/* Page Header */}
      <section className="relative bg-gradient-to-b from-[#EBF6F9] via-[#FAFCFD] to-[#FAFCFD] pt-32 pb-16 overflow-hidden border-b border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center relative z-10">
          <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
            Financial Transparency
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dark-navy mb-4">
            Dental Treatment Pricing
          </h1>
          <p className="text-light-text text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            We believe in honest, upfront pricing with no hidden charges. Explore our standard fee ranges and interest-free installment plans.
          </p>
        </div>
      </section>

      {/* Installment Plan Callout */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="bg-gradient-to-r from-dark-navy to-primary text-white p-8 md:p-10 rounded-2xl border border-white/5 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-48 h-48 bg-white/5 rounded-full filter blur-2xl pointer-events-none" />
            <div className="flex flex-col gap-2 max-w-xl z-10">
              <span className="text-accent text-xs font-bold uppercase tracking-wider">Easy Monthly Installments</span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl leading-tight">
                0% Interest Installment Plans for Braces & Implants
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mt-2">
                We offer flexible payment options to make high-ticket procedures accessible. Start your braces treatment from just <strong>8,000 PKR / month</strong> with zero interest or processing surcharges.
              </p>
            </div>
            <Link
              href="/contact#appointment"
              className="px-8 py-3.5 bg-accent text-dark-navy font-semibold rounded-lg shadow hover:scale-[1.02] transition-transform duration-200 shrink-0 z-10"
            >
              Apply for Installment Plan
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Tables Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {priceLists.map((list, idx) => (
            <FadeIn key={idx} delay={idx * 0.04}>
              <div className="border border-borders bg-[#FAFCFD] p-8 rounded-2xl h-full shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl text-dark-navy mb-6 pb-3 border-b border-borders/60">
                    {list.category}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {list.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-start gap-4">
                        <span className="text-light-text text-sm leading-tight">{item.name}</span>
                        <span className="text-dark-navy text-sm font-bold shrink-0 font-sans">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-borders/50 pt-6 mt-8 flex items-center justify-between text-xs text-light-text">
                  <span>* Subject to clinic checkup</span>
                  <Link href="/contact#appointment" className="text-primary font-bold uppercase tracking-wider hover:underline">
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Insurance partners */}
      <section className="py-20 bg-[#FAFCFD] border-t border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-1">
              Insurance Partnerships
            </span>
            <h2 className="font-heading font-bold text-3xl text-dark-navy">
              Accepted Dental Insurances
            </h2>
            <p className="text-light-text text-sm sm:text-base leading-relaxed">
              SmileCare Pro partners with major corporate and local insurance networks to facilitate hassle-free dental claims. We provide direct panel claim settlement and detailed medical reports for reimbursement.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 text-sm text-light-text">
              <div className="flex items-center gap-2">
                <Check className="w-4.5 h-4.5 text-primary" /> Jubilee Life Insurance Panel
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4.5 h-4.5 text-primary" /> EFU Allianz Corporate Settlement
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4.5 h-4.5 text-primary" /> Adamjee Insurance Claims
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4.5 h-4.5 text-primary" /> Detailed Diagnostic Invoicing
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white border border-borders p-6 lg:p-8 rounded-2xl shadow-sm">
            <h3 className="font-heading font-bold text-lg text-dark-navy mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary" /> Insurance FAQ
            </h3>
            <p className="text-light-text text-xs leading-relaxed mb-4">
              <strong>Is cosmetic dental whitening covered by insurance?</strong> <br />
              Most insurance policies in Pakistan cover therapeutic dental treatments (cleaning, root canals, fillings) but do not cover cosmetic enhancements like veneers or whitening.
            </p>
            <p className="text-light-text text-xs leading-relaxed">
              <strong>How do I file a panel claim?</strong> <br />
              Please present your insurance card at our front desk prior to your consult. Our billing team will verify your coverage caps and handle the paperwork directly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Reservation Banner */}
      <section className="py-24 bg-dark-navy relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#FAFCFD_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center relative z-10 flex flex-col items-center gap-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl leading-tight max-w-xl">
            Book Your Consultation Today
          </h2>
          <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
            Get an exact price quote for your customized smile treatment plan. Fill in the online form or message our front desk.
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
              className="px-8 py-3.5 bg-[#25D366] text-white font-semibold rounded-lg shadow hover:shadow-md transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4.5 h-4.5" /> Direct WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
