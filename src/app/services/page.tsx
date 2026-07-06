import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = { title: "Dental Services | SmileCare Pro" };

const WA_LINK =
  "https://wa.me/923197301342?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20a%20dental%20treatment.";

const SERVICES = [
  {
    name: "Teeth Whitening",
    tagline: "Brighter in a single session.",
    desc: "Our professional in-chair whitening uses medical-grade carbamide peroxide gel activated under precision LED light. Achieve 6–8 shades brighter in under an hour — no sensitivity, no shortcuts.",
    details: ["In-chair LED whitening", "Take-home maintenance kit", "Sensitivity-free protocol", "Results last 12–18 months"],
    duration: "60 minutes",
    from: "PKR 8,000",
  },
  {
    name: "Dental Implants",
    tagline: "Permanent. Natural-feeling. Lifelong.",
    desc: "Titanium implant fixtures are placed directly into the jawbone, integrating with your natural bone over 6–8 weeks. The result is a crown that looks, bites, and feels identical to a natural tooth.",
    details: ["Swiss-grade titanium fixtures", "Ceramic or zirconia crown", "Bone grafting if required", "10-year warranty on fixtures"],
    duration: "2–4 visits",
    from: "PKR 75,000",
  },
  {
    name: "Root Canal Treatment",
    tagline: "Save the tooth. Eliminate the pain.",
    desc: "Modern root canal therapy is painless with effective local anesthesia. We remove infected pulp, clean the canals, and seal the tooth — preserving it for years to come.",
    details: ["Digital X-ray diagnosis", "Rotary endodontics system", "Rubber-dam isolation", "Permanent ceramic crown restoration"],
    duration: "1–2 visits",
    from: "PKR 12,000",
  },
  {
    name: "Braces & Clear Aligners",
    tagline: "Straight teeth. Precise science.",
    desc: "Whether you prefer traditional metal brackets or transparent aligner trays, we map out your full treatment digitally so you see the projected result before we begin.",
    details: ["Digital smile simulation", "Metal, ceramic, or clear aligners", "Retainers included", "Monthly follow-up appointments"],
    duration: "12–18 months",
    from: "PKR 35,000",
  },
  {
    name: "Porcelain Veneers",
    tagline: "A smile makeover in two visits.",
    desc: "Wafer-thin porcelain shells are custom-crafted to cover discoloration, chips, gaps, or asymmetry. Minimal tooth preparation, maximum impact.",
    details: ["Digital shade matching", "IPS e.max lithium disilicate ceramic", "Minimal enamel removal", "Stain and chip resistant"],
    duration: "2 visits / 10 days",
    from: "PKR 15,000 per tooth",
  },
  {
    name: "Scaling & Polishing",
    tagline: "The foundation of healthy teeth.",
    desc: "Professional ultrasonic scaling removes calculus and plaque from above and below the gum line that a toothbrush cannot reach — the single most preventive procedure in dentistry.",
    details: ["Ultrasonic + hand scaling", "Air polishing & stain removal", "Periodontal pocket assessment", "Fluoride treatment included"],
    duration: "45 minutes",
    from: "PKR 3,500",
  },
  {
    name: "Cosmetic Dentistry",
    tagline: "Complete smile design.",
    desc: "A full smile makeover combining multiple procedures — whitening, veneers, contouring, and bonding — designed digitally first so you approve the result before any work begins.",
    details: ["Digital Smile Design (DSD)", "Combination treatment planning", "Full mockup & preview", "Customised payment plan"],
    duration: "Varies by case",
    from: "Custom quote",
  },
  {
    name: "Pediatric Dentistry",
    tagline: "Gentle care for young patients.",
    desc: "Our pediatric team is trained to work with children from age 2 upwards — making every visit calm and positive with distraction techniques, child-friendly instruments, and patience-first protocols.",
    details: ["Child-friendly environment", "Fluoride treatments & sealants", "Habit counselling", "Parent education"],
    duration: "30 minutes",
    from: "PKR 2,500",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#020817] pt-32 pb-20">
        <div className="container mx-auto">
          <span className="eyebrow">Services</span>
          <h1 className="heading-xl text-white mb-5 max-w-2xl">
            Comprehensive Care,<br />
            <span className="text-gradient">Zero Compromise.</span>
          </h1>
          <p className="text-[#94A3B8] text-[17px] max-w-lg leading-relaxed">
            Eight specialties under one PMC-certified roof. Browse treatments below, then book a free consultation on WhatsApp.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white section">
        <div className="container mx-auto">
          <div className="space-y-0 divide-y divide-[#E2E8F0] border border-[#E2E8F0] rounded-xl overflow-hidden">
            {SERVICES.map((svc, idx) => (
              <FadeIn key={svc.name}>
                <div className="p-8 md:p-10 bg-white hover:bg-[#F8FAFC] transition-colors group">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

                    {/* Left: Name + tagline */}
                    <div className="md:col-span-1">
                      <div className="text-[#06B6D4] text-xs font-bold uppercase tracking-widest mb-2">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <h2 className="font-heading font-bold text-[#0F172A] text-xl mb-1.5 group-hover:text-[#06B6D4] transition-colors">
                        {svc.name}
                      </h2>
                      <p className="text-[#64748B] text-sm">{svc.tagline}</p>
                    </div>

                    {/* Center: Description + details */}
                    <div className="md:col-span-1">
                      <p className="text-[#64748B] text-sm leading-relaxed mb-4">{svc.desc}</p>
                      <ul className="space-y-1.5">
                        {svc.details.map((d) => (
                          <li key={d} className="flex items-center gap-2 text-[#334155] text-sm">
                            <span className="w-1 h-1 rounded-full bg-[#06B6D4] shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Price + CTA */}
                    <div className="md:col-span-1 flex flex-col md:items-end justify-between gap-5">
                      <div>
                        <div className="text-[11px] text-[#94A3B8] uppercase tracking-wider font-semibold mb-1">Starting from</div>
                        <div className="font-heading font-bold text-[#0F172A] text-lg">{svc.from}</div>
                        <div className="text-[#94A3B8] text-xs mt-1">Duration: {svc.duration}</div>
                      </div>
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary self-start md:self-auto"
                      >
                        Book Now <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Insurance note */}
          <div className="mt-12 p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[#0F172A] text-sm">Insurance & Installment Plans</p>
              <p className="text-[#64748B] text-sm mt-1">
                We partner with Jubilee Life, EFU Allianz, and Adamjee Insurance. 0% installment plans available on major treatments.
              </p>
            </div>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark shrink-0">
              Ask about pricing <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
