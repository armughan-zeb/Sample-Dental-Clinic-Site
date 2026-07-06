import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Activity, Heart, Shield, Stethoscope, Clock, Smile } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Dental Services | SmileCare Pro",
  description: "Browse our premium dental treatments in Karachi, Pakistan. We offer cosmetic smile design, dental implants, root canal therapy, braces, and emergency services.",
};

const allServices = [
  {
    title: "Teeth Whitening",
    slug: "teeth-whitening",
    icon: Sparkles,
    desc: "Brighten your smile up to 8 shades in a single laser session. Completely safe and monitored by senior cosmetic consultants.",
    highlight: "Laser Zoom System",
  },
  {
    title: "Dental Implants",
    slug: "dental-implants",
    icon: Activity,
    desc: "Titanium implants that look, feel, and function like natural teeth. Permanent replacement under sterile protocols.",
    highlight: "Straumann Certified",
  },
  {
    title: "Root Canal Therapy",
    slug: "root-canal",
    icon: Heart,
    desc: "Advanced micro-endodontics to eliminate pain and save damaged/decayed teeth. Quick and 100% painless treatment.",
    highlight: "Pain-Free Guarantee",
  },
  {
    title: "Orthodontics (Braces)",
    slug: "braces",
    icon: Shield,
    desc: "Straighten teeth using metal, ceramic, or modern invisible clear aligners. Customized treatment paths for all ages.",
    highlight: "Clear Aligners Option",
  },
  {
    title: "Porcelain Veneers",
    slug: "veneers",
    icon: Sparkles,
    desc: "Custom wafer-thin porcelain shells bonded to the front of teeth for a dramatic smile transformation.",
    highlight: "Aesthetic Design",
  },
  {
    title: "Dental Crowns",
    slug: "crowns",
    icon: Stethoscope,
    desc: "Restore heavily damaged teeth with metal-free porcelain or zirconia crowns that blend naturally with your teeth.",
    highlight: "Metal-Free Zirconia",
  },
  {
    title: "Emergency Dentistry",
    slug: "emergency-dentistry",
    icon: Clock,
    desc: "Immediate relief for severe toothache, dental trauma, crown loss, or active oral bleeding. 24/7 emergency hotline.",
    highlight: "24/7 Immediate Help",
  },
  {
    title: "Children's Dentistry",
    slug: "children-dentistry",
    icon: Smile,
    desc: "Friendly, anxiety-free pediatric dental checkups, cleaning, sealants, and cavity fillings for kids and teens.",
    highlight: "Kid-Friendly Environment",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative w-full">
      {/* Page Header */}
      <section className="relative bg-gradient-to-b from-[#EBF6F9] via-[#FAFCFD] to-[#FAFCFD] pt-32 pb-16 overflow-hidden border-b border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center relative z-10">
          <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
            Treatments & Solutions
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dark-navy mb-4">
            Our Dental Services
          </h1>
          <p className="text-light-text text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            From basic preventive care to complex surgical implants, we provide exceptional dental care with modern equipment.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.04} className="h-full">
                  <div className="group h-full bg-[#FAFCFD] border border-borders/60 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1.5 flex flex-col justify-between">
                    <div>
                      {/* Top Row: Icon & Tag */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 bg-white rounded-xl border border-borders shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                        </div>
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {service.highlight}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="font-heading font-bold text-xl text-dark-navy mb-3">
                        {service.title}
                      </h3>
                      <p className="text-light-text text-sm leading-relaxed mb-8">
                        {service.desc}
                      </p>
                    </div>

                    {/* Bottom Link */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-primary font-sans text-xs font-bold uppercase tracking-wider hover:text-primary/80 transition-colors mt-auto"
                    >
                      <span>Explore Procedure Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Checklist Banner */}
      <section className="py-20 bg-dark-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#FAFCFD_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 relative z-10 flex flex-col items-center gap-6">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl max-w-xl leading-tight">
            Need Advice on What Treatment is Right for You?
          </h2>
          <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
            Reserve a diagnostic scan and checkup with our specialist consultants today. We will design a customized dental plan with transparent costing.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Link
              href="/contact#appointment"
              className="px-8 py-3.5 bg-primary text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Request Consultation
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
