import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = { title: "About Us | SmileCare Pro" };

const WA_LINK =
  "https://wa.me/923197301342?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20SmileCare%20Pro.";

const TEAM = [
  {
    name: "Dr. Aftab Ahmed",
    role: "Clinic Director & Orthodontist",
    credentials: "BDS, FCPS Orthodontics · PMC Reg. 12345",
    img: "/images/dentist_doctor.png",
  },
  {
    name: "Dr. Sarah Malik",
    role: "Implantologist & Cosmetic Surgeon",
    credentials: "BDS, MDS Implantology · PMC Reg. 67890",
    img: "/images/dentist_doctor.png",
  },
];

const VALUES = [
  {
    num: "01",
    title: "Clinical Precision",
    desc: "Every treatment plan is evidence-based, reviewed against the latest NICE guidelines, and tailored to each patient's anatomy.",
  },
  {
    num: "02",
    title: "Radical Transparency",
    desc: "No hidden charges. No upselling. We explain every cost, every step, and every alternative before you commit to anything.",
  },
  {
    num: "03",
    title: "Sterilisation Standards",
    desc: "Class B vacuum autoclave sterilisation on all instruments. ISO 9001:2015 certified. Audited bi-annually by an independent body.",
  },
  {
    num: "04",
    title: "Lifetime Aftercare",
    desc: "Post-treatment check-ups, free emergency consultations, and a direct WhatsApp line to your treating doctor — always.",
  },
];

const STATS = [
  { value: "2009", label: "Founded" },
  { value: "5,000+", label: "Patients" },
  { value: "8", label: "Specialists" },
  { value: "4.9★", label: "Google" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#020817] pt-32 pb-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div>
            <span className="eyebrow">About Us</span>
            <h1 className="heading-xl text-white mb-5">
              Built on Trust.<br />
              <span className="text-gradient">Driven by Excellence.</span>
            </h1>
            <p className="text-[#94A3B8] text-[17px] leading-relaxed max-w-md">
              SmileCare Pro was founded in 2009 with a single belief: that world-class dental care should be accessible, transparent, and completely free of anxiety.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 pb-1">
            {STATS.map((s) => (
              <div key={s.label} className="border-l border-white/10 pl-4">
                <div className="font-heading font-bold text-white text-2xl">{s.value}</div>
                <div className="text-[#475569] text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <FadeIn>
            <span className="eyebrow">Our Principles</span>
            <h2 className="heading-lg text-[#0F172A] mb-12 max-w-lg">
              What We Stand For.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E2E8F0] border border-[#E2E8F0] rounded-xl overflow-hidden">
            {VALUES.map((v) => (
              <FadeIn key={v.num}>
                <div className="bg-white p-8 md:p-10 h-full hover:bg-[#F8FAFC] transition-colors">
                  <div className="text-[#06B6D4] font-heading font-bold text-sm mb-4">{v.num}</div>
                  <h3 className="font-heading font-bold text-[#0F172A] text-lg mb-3">{v.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-[#F8FAFC]">
        <div className="container mx-auto">
          <FadeIn className="mb-12">
            <span className="eyebrow">The Team</span>
            <h2 className="heading-lg text-[#0F172A]">
              Meet the Consultants.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TEAM.map((doctor) => (
              <FadeIn key={doctor.name}>
                <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden flex flex-col sm:flex-row hover:border-[#06B6D4]/30 hover:shadow-sm transition-all">
                  <div className="relative w-full sm:w-[180px] aspect-[4/3] sm:aspect-auto shrink-0">
                    <Image
                      src={doctor.img}
                      alt={doctor.name}
                      fill
                      sizes="180px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center gap-1">
                    <h3 className="font-heading font-bold text-[#0F172A] text-lg">{doctor.name}</h3>
                    <p className="text-[#06B6D4] text-sm font-medium">{doctor.role}</p>
                    <p className="text-[#94A3B8] text-xs mt-1">{doctor.credentials}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Interior */}
      <section className="section bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <span className="eyebrow">Our Facility</span>
            <h2 className="heading-lg text-[#0F172A] mb-5">
              A Clinic Designed<br />for Your Comfort.
            </h2>
            <p className="text-[#64748B] text-[16px] leading-relaxed mb-6">
              From the waiting area to the treatment chair, every corner of SmileCare Pro has been designed to reduce anxiety and elevate the experience.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Private treatment rooms",
                "Digital X-ray (80% less radiation)",
                "Class B autoclave sterilisation",
                "Intraoral camera consultations",
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-[#334155] text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
            <Link href="/gallery" className="btn-ghost-dark">
              View full gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
          <FadeIn>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/clinic_reception.png"
                alt="SmileCare Pro clinic reception"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-section py-24">
        <div className="container mx-auto text-center">
          <FadeIn>
            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl tracking-tight mb-4">
              Ready to Meet the Team?
            </h2>
            <p className="text-[#94A3B8] text-[16px] mb-8 max-w-sm mx-auto">
              Book a free consultation and see the clinic for yourself.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary mx-auto">
              Book on WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
