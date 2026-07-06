import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "SmileCare Pro | Premium Dental Clinic in Abbottabad",
};

const WA_LINK =
  "https://wa.me/923197301342?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20SmileCare%20Pro.";

const SERVICES = [
  {
    name: "Teeth Whitening",
    desc: "Professional-grade whitening — visibly brighter in a single session.",
    from: "From PKR 8,000",
  },
  {
    name: "Dental Implants",
    desc: "Permanent titanium implants that look and function like natural teeth.",
    from: "From PKR 75,000",
  },
  {
    name: "Root Canal",
    desc: "Pain-free endodontic treatment to save and restore an infected tooth.",
    from: "From PKR 12,000",
  },
  {
    name: "Braces & Aligners",
    desc: "Metal braces or clear aligners for a perfectly straight, confident smile.",
    from: "From PKR 35,000",
  },
  {
    name: "Porcelain Veneers",
    desc: "Ultra-thin ceramic shells for an instant, lasting smile transformation.",
    from: "PKR 15,000 / tooth",
  },
  {
    name: "Scaling & Cleaning",
    desc: "Deep tartar removal and polishing to protect your gums and teeth.",
    from: "From PKR 3,500",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "After years of being embarrassed by my smile, SmileCare Pro gave me veneers that changed my life. The team was professional from start to finish.",
    name: "Ayesha R.",
    title: "Marketing Director, Abbottabad",
    rating: 5,
  },
  {
    quote:
      "I came in for an implant after avoiding dentists for years. The process was genuinely painless. I can't believe I waited so long.",
    name: "Dr. Zain M.",
    title: "Physician, Lahore",
    rating: 5,
  },
  {
    quote:
      "My kids actually look forward to their dental appointments here. The staff is warm, patient, and incredibly skilled.",
    name: "Fatima K.",
    title: "Teacher, Abbottabad",
    rating: 5,
  },
];

const FAQS = [
  {
    question: "Is dental treatment painful at SmileCare Pro?",
    answer:
      "We use modern anesthesia and gentle techniques to ensure all procedures are as comfortable as possible. Most patients report little to no discomfort during treatment.",
  },
  {
    question: "Do you offer installment plans?",
    answer:
      "Yes. We offer 0% interest installment plans on major treatments like dental implants, braces, and veneers. Our team will walk you through flexible payment options at your first consultation.",
  },
  {
    question: "Are you PMC registered?",
    answer:
      "Absolutely. SmileCare Pro is a fully licensed and PMC-registered dental facility. All our consultants hold valid PMDC/PMC registration numbers, which are available on request.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "The simplest way is to tap the 'Book Appointment' button anywhere on the site — it opens a pre-filled WhatsApp message directly to our clinic. We typically respond within minutes during working hours.",
  },
];

const TRUST_POINTS = [
  "PMC & PMDC registered consultants",
  "ISO 9001:2015 sterile-certified facility",
  "0% installment plans available",
  "Emergency dental care available",
];

const STATS = [
  { value: "1,200+", label: "Patients Treated" },
  { value: "15+",    label: "Years Experience" },
  { value: "4.9★",   label: "Google Rating" },
  { value: "8",      label: "Specialties" },
];

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO (Live Background Video) ─────────────────────── */}
      <section className="relative bg-[#0A0A0A] flex flex-col overflow-hidden">
        {/* ─── MOBILE LAYOUT ─── */}
        <div className="relative flex flex-col md:hidden">
          {/* Video — 16:9 box, nothing cropped */}
          <div className="relative w-full overflow-hidden bg-[#0A0A0A]" style={{ aspectRatio: "16/9" }}>
            <video
              src="/images/Dentist_working_with_patient's_t…_202607062108.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
            {/* Soft bottom fade into dark bg */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
          </div>

          {/* Text content below video on mobile */}
          <div className="px-5 pt-4 pb-14">
            <div className="badge-premium mb-4 animate-fade-in-up text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#06B6D4]" />
              PMC Certified · Est. 2009
            </div>
            <h1 className="!text-white font-heading font-bold text-[2.4rem] leading-[1.1] tracking-tight mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Dental Care<br />
              That <span className="text-gradient">Sets the Standard.</span>
            </h1>
            <p className="text-[#A3A3A3] text-[15px] leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              World-class treatments, transparent pricing, and zero compromise on your comfort. Trusted by Abbottabad.
            </p>
            <div className="flex flex-col gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center w-full">
                Book on WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/services" className="btn-ghost-light justify-center w-full text-center">
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* ─── DESKTOP LAYOUT ─── */}
        <div className="hidden md:flex items-center min-h-[90vh] pt-28 pb-16 relative">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              src="/images/Dentist_working_with_patient's_t…_202607062108.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-right-top opacity-80"
            />
          </div>

          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-[#0A0A0A]/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 opacity-40" />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 pointer-events-none z-10 opacity-20"
            style={{
              backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Hero Content */}
          <div className="container mx-auto relative z-20">
            <div className="max-w-2xl">
              <div className="badge-premium mb-6 animate-fade-in-up">
                <CheckCircle2 className="w-4 h-4 text-[#06B6D4]" />
                PMC Certified · Est. 2009
              </div>
              <h1 className="heading-xl !text-white mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Dental Care<br />
                That <span className="text-gradient">Sets the Standard.</span>
              </h1>
              <p className="text-[#A3A3A3] text-[17px] leading-relaxed mb-10 max-w-[440px] animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                World-class treatments, transparent pricing, and zero compromise on your comfort. Trusted by the Abbottabad community.
              </p>
              <div className="flex items-center gap-4 flex-wrap animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book on WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/services" className="btn-ghost-light">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1.5. STATS BAR ──────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-12 border-b border-white/10 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="pl-6 border-l border-white/10">
                <div className="text-white font-heading font-bold text-3xl tracking-tight mb-1">{s.value}</div>
                <div className="text-[#737373] text-[11px] font-semibold uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. SERVICES PREVIEW ─────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <FadeIn>
            <span className="eyebrow">What We Treat</span>
            <h2 className="heading-lg text-[#0F172A] mb-4 max-w-xl">
              Eight Specialties.<br />One Trusted Clinic.
            </h2>
            <p className="text-[#64748B] text-[16px] leading-relaxed max-w-lg mb-12">
              From a routine clean to a full smile redesign — we handle it all under one roof, with specialists you can trust.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2E8F0] border border-[#E2E8F0] rounded-2xl overflow-hidden">
            {SERVICES.map((svc) => (
              <FadeIn key={svc.name}>
                <div className="bg-white p-8 h-full flex flex-col gap-3 hover:bg-[#F8FAFC] transition-colors group">
                  <h3 className="font-heading font-semibold text-[#0A0A0A] text-[16px] group-hover:text-[#06B6D4] transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed flex-1">{svc.desc}</p>
                  <span className="text-[#06B6D4] text-xs font-semibold">{svc.from}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/services" className="btn-ghost-dark">
              View all treatments <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. ABOUT TEASER ─────────────────────────────────────── */}
      <section className="section bg-dark-section">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <FadeIn>
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden ring-1 ring-white/10">
              <Image
                src="/images/clinic_interior.png"
                alt="SmileCare Pro clinic interior"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Copy */}
          <FadeIn>
            <span className="eyebrow">Our Clinic</span>
            <h2 className="heading-lg text-white mb-5">
              15 Years of Clinical<br />Excellence in Abbottabad.
            </h2>
            <p className="text-[#A3A3A3] text-[16px] leading-relaxed mb-8">
              Founded in 2009, SmileCare Pro has grown into one of Abbottabad&apos;s most trusted dental practices — built on a foundation of medical rigour, patient empathy, and zero shortcuts.
            </p>
            <ul className="space-y-4 mb-10">
              {TRUST_POINTS.map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-[#D4D4D8] text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-ghost-light">
              About the clinic <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── 4. BEFORE / AFTER ───────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="eyebrow">Transformations</span>
            <h2 className="heading-lg text-[#0F172A]">The Results Speak<br />for Themselves.</h2>
          </FadeIn>
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <BeforeAfterSlider
                beforeSrc="/images/smile_before.png"
                afterSrc="/images/smile_after.png"
                beforeAlt="Before dental treatment"
                afterAlt="After dental treatment at SmileCare Pro"
              />
              <p className="text-center text-[#64748B] text-xs mt-6 font-medium tracking-wide uppercase">
                Actual patient result · 6 Porcelain Veneers · 2 visits
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 5. TESTIMONIALS ─────────────────────────────────────── */}
      <section className="section bg-[#F8FAFC]">
        <div className="container mx-auto">
          <FadeIn className="mb-12">
            <span className="eyebrow">Patient Stories</span>
            <h2 className="heading-lg text-[#0F172A]">Trusted by the<br />Abbottabad Community.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <FadeIn key={t.name}>
                <div className="card p-8 h-full flex flex-col gap-5">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#06B6D4] text-[#06B6D4]" />
                    ))}
                  </div>
                  <p className="text-[#334155] text-[15px] leading-relaxed flex-1 font-medium">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="pt-5 border-t border-[#E2E8F0]">
                    <p className="font-semibold text-[#0A0A0A] text-sm">{t.name}</p>
                    <p className="text-[#64748B] text-xs mt-0.5">{t.title}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ──────────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <span className="eyebrow">Common Questions</span>
            <h2 className="heading-lg text-[#0F172A] mb-4">
              Everything You<br />Need to Know.
            </h2>
            <p className="text-[#64748B] text-[16px] leading-relaxed mb-8 max-w-sm">
              Can&rsquo;t find your answer? Reach out directly on WhatsApp — we typically respond within minutes.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-dark">
              Ask on WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
          <FadeIn>
            <FAQAccordion items={FAQS} />
          </FadeIn>
        </div>
      </section>

      {/* ── 7. FINAL CTA ────────────────────────────────────────── */}
      <section className="bg-dark-section py-32 border-t border-white/10">
        <div className="container mx-auto text-center">
          <FadeIn>
            <h2 className="heading-lg text-white mb-5">
              Your Best Smile Starts Here.
            </h2>
            <p className="text-[#A3A3A3] text-[17px] mb-10 max-w-md mx-auto leading-relaxed">
              No forms. No waiting rooms. Book your consultation directly on WhatsApp and we&rsquo;ll confirm within minutes.
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
