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
    img: "/images/female_dentist.png",
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
  { value: "1,200+", label: "Patients" },
  { value: "8", label: "Specialists" },
  { value: "4.9★", label: "Google" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0A0A0A] pt-32 pb-16 md:pt-48 md:pb-32">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">
          <div>
            <span className="eyebrow">About Us</span>
            <h1 className="heading-xl !text-white mb-6">
              Built on Trust.<br />
              <span className="text-gradient">Driven by Excellence.</span>
            </h1>
            <p className="text-[#A3A3A3] text-[17px] leading-relaxed max-w-md">
              SmileCare Pro was founded in 2009 with a single belief: that world-class dental care should be accessible, transparent, and completely free of anxiety.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 pb-2">
            {STATS.map((s) => (
              <div key={s.label} className="border-l border-white/10 pl-5">
                <div className="font-heading font-bold !text-white text-3xl">{s.value}</div>
                <div className="text-[#737373] text-[11px] font-semibold uppercase tracking-wider mt-1">{s.label}</div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E2E8F0] border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
            {VALUES.map((v) => (
              <FadeIn key={v.num}>
                <div className="bg-white p-6 sm:p-10 md:p-12 h-full hover:bg-[#F8FAFC] transition-colors">
                  <div className="text-[#06B6D4] font-heading font-bold text-sm mb-5">{v.num}</div>
                  <h3 className="font-heading font-bold text-[#0A0A0A] text-xl mb-3">{v.title}</h3>
                  <p className="text-[#64748B] text-[15px] leading-relaxed">{v.desc}</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM.map((doctor) => (
              <FadeIn key={doctor.name}>
                <div className="card overflow-hidden flex flex-col sm:flex-row group">
                  <div className="relative w-full sm:w-[220px] aspect-[4/5] sm:aspect-auto shrink-0 overflow-hidden">
                    <Image
                      src={doctor.img}
                      alt={doctor.name}
                      fill
                      sizes="220px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center gap-2">
                    <h3 className="font-heading font-bold text-[#0A0A0A] text-xl">{doctor.name}</h3>
                    <p className="text-[#06B6D4] text-[15px] font-semibold">{doctor.role}</p>
                    <p className="text-[#64748B] text-sm mt-2 leading-relaxed">{doctor.credentials}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Interior */}
      <section className="section bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <FadeIn>
            <span className="eyebrow">Our Clinic</span>
            <h2 className="heading-lg text-[#0F172A] mb-5">
              15 Years of Clinical<br />Excellence in Abbottabad.
            </h2>
            <p className="text-[#64748B] text-[16px] leading-relaxed mb-8">
              Founded in 2009, SmileCare Pro has grown into one of Abbottabad's most trusted dental practices — built on a foundation of medical rigour, patient empathy, and zero shortcuts.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Private treatment rooms",
                "Digital X-ray (80% less radiation)",
                "Class B autoclave sterilisation",
                "Intraoral camera consultations",
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-[#334155] text-[15px] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#06B6D4] shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
            <Link href="/gallery" className="btn-ghost-dark">
              View full gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
          <FadeIn>
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-sm ring-1 ring-[#E2E8F0]">
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
      <section className="bg-dark-section py-32 border-t border-white/10">
        <div className="container mx-auto text-center">
          <FadeIn>
            <h2 className="heading-lg !text-white mb-5">
              Ready to Meet the Team?
            </h2>
            <p className="text-[#A3A3A3] text-[17px] mb-10 max-w-sm mx-auto leading-relaxed">
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
