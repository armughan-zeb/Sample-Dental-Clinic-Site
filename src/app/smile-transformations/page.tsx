import type { Metadata } from "next";
import Link from "next/link";
import { Check, Calendar, ArrowRight, Star } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Smile Transformations | SmileCare Pro",
  description: "Browse actual before & after patient smile transformation case studies (veneers, braces, teeth whitening, implants) at SmileCare Pro.",
};

const transformationCases = [
  {
    title: "Full Arch Veneers Transformation",
    category: "Cosmetic Dentistry",
    duration: "2 Weeks (2 Visits)",
    patient: "Kamran S.",
    concern: "Chipped, stained, and spacing gaps in the front teeth.",
    result: "Custom E-Max porcelain veneers bonded for a natural, bright, and aligned smile.",
    avatar: "/images/avatar_zain.png",
  },
  {
    title: "Laser Teeth Whitening Case",
    category: "Teeth Whitening",
    duration: "1 Hour (1 Visit)",
    patient: "Ayesha K.",
    concern: "Severe caffeine discoloration and enamel yellowing.",
    result: "Zoom laser whitening treatment lifted stains, brightening the shade by 8 levels.",
    avatar: "/images/avatar_ayesha.png",
  },
  {
    title: "Single Tooth Implant Replacement",
    category: "Dental Implants",
    duration: "4 Months (3 Visits)",
    patient: "Dr. Zain M.",
    concern: "Missing front tooth due to sports injury, causing joint strain.",
    result: "Straumann titanium implant post topped with a custom zirconia ceramic crown.",
    avatar: "/images/avatar_zain.png",
  },
  {
    title: "Clear Aligner Crowding Correction",
    category: "Orthodontics",
    duration: "14 Months",
    patient: "Sarah A.",
    concern: "Severe overlapping crowding in the lower and upper dental arches.",
    result: "24 custom clear aligner sets shifted teeth into perfect, clean alignment.",
    avatar: "/images/avatar_ayesha.png",
  },
];

export default function TransformationsPage() {
  return (
    <div className="relative w-full">
      {/* Page Header */}
      <section className="relative bg-gradient-to-b from-[#EBF6F9] via-[#FAFCFD] to-[#FAFCFD] pt-32 pb-16 overflow-hidden border-b border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center relative z-10">
          <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
            Case Studies
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dark-navy mb-4">
            Smile Transformations
          </h1>
          <p className="text-light-text text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Witness the real results of dental care. Explore before and after cosmetic, orthodontic, and implant cases.
          </p>
        </div>
      </section>

      {/* Interactive Slider Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Slider Left */}
          <div className="lg:col-span-6">
            <BeforeAfterSlider />
          </div>

          {/* Slider Right */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:gap-8">
            <div>
              <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
                Featured Case study
              </span>
              <h2 className="font-heading font-bold text-3xl text-dark-navy">
                In-Chair Whitening & Alignment Check
              </h2>
              <p className="text-light-text text-sm sm:text-base leading-relaxed mt-4">
                This case study showcases the combined results of a professional laser whitening treatment and cosmetic dental contouring. The patient wanted to resolve severe yellowing and slight uneven edges in the upper front teeth.
              </p>
            </div>

            {/* Case Facts */}
            <div className="grid grid-cols-2 gap-6 bg-[#FAFCFD] border border-borders p-6 rounded-2xl">
              <div>
                <p className="text-[10px] text-light-text font-semibold uppercase tracking-wider">Concern</p>
                <p className="font-heading font-bold text-sm text-dark-navy mt-1">Stains & Mild Jagged Edges</p>
              </div>
              <div>
                <p className="text-[10px] text-light-text font-semibold uppercase tracking-wider">Treatment</p>
                <p className="font-heading font-bold text-sm text-primary mt-1">Laser Zoom + Contouring</p>
              </div>
              <div>
                <p className="text-[10px] text-light-text font-semibold uppercase tracking-wider">Duration</p>
                <p className="font-heading font-bold text-sm text-dark-navy mt-1">60 Minutes</p>
              </div>
              <div>
                <p className="text-[10px] text-light-text font-semibold uppercase tracking-wider">Satisfaction</p>
                <p className="font-heading font-bold text-sm text-success mt-1 flex items-center gap-1">
                  5.0 <Star className="w-3.5 h-3.5 fill-current" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Other Cases */}
      <section className="py-24 bg-[#FAFCFD] border-t border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
              Case Portfolio
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-navy mb-4">
              More Patient Case Results
            </h2>
            <p className="text-light-text text-sm sm:text-base leading-relaxed">
              Explore how our PMC consultants restore confidence and health using specialized cosmetic and surgical treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationCases.map((c, idx) => (
              <FadeIn key={idx} delay={idx * 0.04}>
                <div className="bg-white border border-borders p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Top row Info */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-primary text-[10px] font-bold uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-full">
                        {c.category}
                      </span>
                      <span className="text-light-text text-xs font-semibold">{c.duration}</span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-dark-navy mb-3">{c.title}</h3>
                    <div className="w-full h-px bg-borders/50 my-4" />

                    {/* Patient Context */}
                    <div className="space-y-3">
                      <p className="text-sm text-light-text leading-relaxed">
                        <strong>Patient Concern:</strong> {c.concern}
                      </p>
                      <p className="text-sm text-light-text leading-relaxed">
                        <strong>Clinical Solution:</strong> {c.result}
                      </p>
                    </div>
                  </div>

                  {/* Foot Profile */}
                  <div className="flex items-center justify-between border-t border-borders/50 pt-6 mt-8">
                    <span className="text-xs text-light-text">
                      Patient: <strong>{c.patient}</strong>
                    </span>
                    <Link
                      href="/contact#appointment"
                      className="text-primary text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 hover:text-primary/80 transition-colors"
                    >
                      <span>Request Similar Result</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Reservation Banner */}
      <section className="py-24 bg-dark-navy relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#FAFCFD_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center relative z-10 flex flex-col items-center gap-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl leading-tight max-w-xl">
            Get Your Personalized Smile Plan
          </h2>
          <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
            Interested in veneers, implants, or aligners? Schedule a diagnostic consultation today to map your treatment.
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
              Consult via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
