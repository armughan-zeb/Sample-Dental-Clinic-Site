import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Activity,
  Heart,
  Star,
  Clock,
  ArrowRight,
  Check,
  Stethoscope,
  Award,
  Sparkles,
  Calendar,
} from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import AppointmentForm from "@/components/AppointmentForm";
import FAQAccordion from "@/components/FAQAccordion";
import Counter from "@/components/Counter";
import FadeIn from "@/components/FadeIn";

// Services Data
const homeServices = [
  {
    title: "General Dentistry",
    description: "Comprehensive dental checkups, cleaning, fillings, and preventive care for healthy teeth.",
    icon: Stethoscope,
    href: "/services/general-dentistry",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, crowns, contouring, and aesthetic improvements.",
    icon: Sparkles,
    href: "/services/veneers",
  },
  {
    title: "Dental Implants",
    description: "Permanent, natural-looking replacement for missing teeth with top-grade titanium implants.",
    icon: Activity,
    href: "/services/dental-implants",
  },
  {
    title: "Root Canal Therapy",
    description: "Highly precise, pain-free treatments to save infected teeth and relieve deep aches.",
    icon: Heart,
    href: "/services/root-canal",
  },
  {
    title: "Orthodontics (Braces)",
    description: "Align your smile with traditional braces or clear, invisible aligners for kids & adults.",
    icon: Shield,
    href: "/services/braces",
  },
  {
    title: "Kids Dentistry",
    description: "Gentle and friendly dental care tailored for infants, children, and teens.",
    icon: SmileIcon, // Custom or simple icon
    href: "/services/children-dentistry",
  },
  {
    title: "Teeth Whitening",
    description: "Professional laser teeth whitening to lift stains and brighten your smile in one visit.",
    icon: Sparkles,
    href: "/services/teeth-whitening",
  },
  {
    title: "Emergency Dental Care",
    description: "24/7 priority emergency relief for tooth trauma, severe bleeding, or sudden pain.",
    icon: Clock,
    href: "/services/emergency-dentistry",
  },
];

function SmileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

// Blog Data
const blogPosts = [
  {
    title: "How Laser Teeth Whitening Works: Safety & Results",
    category: "Cosmetic",
    date: "July 2, 2026",
    readTime: "4 Min Read",
    image: "/images/clinic_interior.png",
    slug: "laser-teeth-whitening-safety-results",
  },
  {
    title: "Dental Implants vs. Bridges: Which Option is Right for You?",
    category: "Restorative",
    date: "June 25, 2026",
    readTime: "6 Min Read",
    image: "/images/smile_after.png",
    slug: "dental-implants-vs-bridges",
  },
  {
    title: "5 Crucial Tips to Prevent Childhood Cavities Early",
    category: "Pediatric",
    date: "June 18, 2026",
    readTime: "5 Min Read",
    image: "/images/clinic_reception.png",
    slug: "prevent-childhood-cavities-tips",
  },
];

export default function HomePage() {
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "SmileCare Pro Premium Dental Clinic",
    "image": "https://smilecarepro.pk/images/dentist_doctor.png",
    "@id": "https://smilecarepro.pk/#dentist",
    "url": "https://smilecarepro.pk",
    "telephone": "+923001234567",
    "priceRange": "PKR",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Building 42-C, 10th Commercial Lane, DHA Phase 5",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "postalCode": "75500",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.8239,
      "longitude": 67.0345
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://facebook.com/smilecarepro",
      "https://instagram.com/smilecarepro"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://smilecarepro.pk"
      }
    ]
  };

  return (
    <div className="relative w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* 1. Hero Section */}
      <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 bg-gradient-to-b from-[#EBF6F9] via-[#FAFCFD] to-[#FAFCFD] overflow-hidden">
        {/* Background Subtle Mesh / Dots */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0E7490_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center w-full">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:gap-8 z-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-white border border-borders shadow-sm px-3.5 py-1.5 rounded-full text-xs font-semibold text-dark-navy">
              <span className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </span>
              <span className="w-1 h-1 rounded-full bg-borders" />
              <span>4.9 Google Rating</span>
              <span className="w-1 h-1 rounded-full bg-borders" />
              <span className="text-primary font-bold">PMC Registered Clinic</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[54px] text-dark-navy leading-[1.1] tracking-tight">
              Exceptional Dental Care <br />
              <span className="text-gradient">For Every Smile.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-light-text text-base sm:text-lg leading-relaxed max-w-lg">
              Experience world-class, pain-free dental treatments in a state-of-the-art facility. Under the care of our PMC certified specialists, your comfort and smile are our top priorities.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#appointment"
                className="px-8 py-3.5 bg-primary text-white text-center font-sans text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-[2px]"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="px-8 py-3.5 bg-white border border-borders text-dark-navy hover:bg-[#FAFCFD] text-center font-sans text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-[2px]"
              >
                View Treatments
              </Link>
            </div>

            {/* Small trust logos */}
            <div className="flex items-center gap-6 pt-2 border-t border-borders/55 mt-4">
              <div className="flex flex-col">
                <span className="font-heading font-bold text-dark-navy text-sm">PMC & PMDC</span>
                <span className="text-light-text text-[11px] uppercase tracking-wider font-semibold">Registered Facility</span>
              </div>
              <div className="w-px h-8 bg-borders" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-dark-navy text-sm">ISO 9001:2015</span>
                <span className="text-light-text text-[11px] uppercase tracking-wider font-semibold">Sterile Certified</span>
              </div>
              <div className="w-px h-8 bg-borders" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-dark-navy text-sm">15+ Years</span>
                <span className="text-light-text text-[11px] uppercase tracking-wider font-semibold">Clinical Excellence</span>
              </div>
            </div>
          </div>

          {/* Hero Right Doctor Image with floating cards */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Premium backdrop glow */}
            <div className="absolute w-[80%] aspect-square rounded-full bg-primary/5 filter blur-3xl -z-10" />

            {/* Doctor Image */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[24px] overflow-hidden border border-borders shadow-2xl bg-white">
              <Image
                src="/images/dentist_doctor.png"
                alt="SmileCare Pro Dental Doctor"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Card 1: 5000+ Patients */}
            <div className="absolute top-16 -left-10 lg:-left-20 bg-white/95 border border-borders/60 shadow-lg px-4 py-3 rounded-xl flex items-center gap-3 animate-float-card-1">
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-light-text font-semibold uppercase tracking-wider">Patients Served</p>
                <p className="font-heading font-bold text-sm text-dark-navy">5,000+ Happy Patients</p>
              </div>
            </div>

            {/* Floating Card 2: 4.9 Rating */}
            <div className="absolute bottom-24 -right-10 lg:-right-16 bg-white/95 border border-borders/60 shadow-lg px-4 py-3 rounded-xl flex items-center gap-3 animate-float-card-2">
              <div className="w-8 h-8 rounded-lg bg-[#EAB308]/10 text-[#EAB308] flex items-center justify-center shrink-0">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div>
                <p className="text-[10px] text-light-text font-semibold uppercase tracking-wider">Patient Rating</p>
                <p className="font-heading font-bold text-sm text-dark-navy">4.9 Overall Rating</p>
              </div>
            </div>

            {/* Floating Card 3: 24/7 Emergency Care */}
            <div className="absolute bottom-12 -left-10 lg:-left-16 bg-white/95 border border-borders/60 shadow-lg px-4 py-3 rounded-xl flex items-center gap-3 animate-float-card-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-light-text font-semibold uppercase tracking-wider">Urgent Support</p>
                <p className="font-heading font-bold text-sm text-dark-navy">Emergency Care Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trusted By Insurance & Associations Strip */}
      <section className="bg-white border-y border-borders/50 py-8">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-light-text text-xs uppercase tracking-wider font-semibold">
            Partnered with Leading Providers & Associations
          </p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-40 grayscale">
            {["Jubilee Life", "EFU Allianz", "JCI Standards", "Jinnah Med", "Adamjee"].map((logo) => (
              <span key={logo} className="font-heading font-bold text-slate-700 text-base tracking-tight">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Statistics Section (4 Columns) */}
      <section className="py-20 bg-dark-navy text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {[
            { target: 5000, suffix: "+", label: "Happy Patients" },
            { target: 15, suffix: "+", label: "Years Experience" },
            { target: 98, suffix: "%", label: "Positive Reviews" },
            { target: 7, suffix: " Days", label: "Clinic Open" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <span className="font-heading font-bold text-4xl sm:text-5xl text-accent">
                <Counter target={stat.target} suffix={stat.suffix} />
              </span>
              <span className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          {/* Header */}
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
              Comprehensive Dentistry
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-navy mb-4">
              Premium Dental Services
            </h2>
            <p className="text-light-text text-sm sm:text-base leading-relaxed">
              We offer a complete suite of general, aesthetic, and restorative dental procedures using the latest technology.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.04} className="h-full">
                  <Link
                    href={service.href}
                    className="group flex flex-col justify-between h-full bg-[#FAFCFD] border border-borders/60 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1.5"
                  >
                    <div>
                      <div className="w-12 h-12 bg-white rounded-xl border border-borders shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-dark-navy mb-3">
                        {service.title}
                      </h3>
                      <p className="text-light-text text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-primary font-sans text-xs font-bold uppercase tracking-wider mt-auto group-hover:text-primary/80">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="py-24 bg-[#FAFCFD] border-t border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Graphic Grid */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-borders shadow-md">
                <Image
                  src="/images/clinic_interior.png"
                  alt="Modern treatment room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-borders shadow-md mt-6">
                <Image
                  src="/images/clinic_reception.png"
                  alt="Clinic reception waiting area"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Interactive badge overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark-navy text-white px-6 py-4 rounded-2xl shadow-2xl border border-white/10 text-center shrink-0">
              <Award className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="font-heading font-bold text-lg">WHO Standard</p>
              <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">100% Sterile Clinic</p>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="order-1 lg:order-2 flex flex-col gap-6 lg:gap-8">
            <div>
              <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
                Why Choose SmileCare Pro
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-navy mb-4">
                Clinical Excellence Meets Premium Care
              </h2>
              <p className="text-light-text text-sm sm:text-base leading-relaxed">
                We are dedicated to providing Karachi's patients with premium, customized dental care using cutting-edge technologies in a luxurious, sterile environment.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Latest Equipment", desc: "Digital 3D scans & laser drills" },
                { title: "Pain-Free Procedures", desc: "Computerized anesthetic delivery" },
                { title: "Experienced Specialists", desc: "PMC registered FCPS/MDS doctors" },
                { title: "Sterilized Environment", desc: "WHO Class B autoclave protocols" },
                { title: "Affordable Plans", desc: "Transparent pricing & easy installs" },
                { title: "Emergency Support", desc: "24/7 hotline for toothache & trauma" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-dark-navy group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-light-text text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Smile Transformations (Before & After) */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
              Patient Transformations
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-navy mb-4">
              Smile Transformations
            </h2>
            <p className="text-light-text text-sm sm:text-base leading-relaxed">
              Drag the slider to view the incredible smile results from actual cosmetic and orthodontic cases at SmileCare Pro.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <BeforeAfterSlider />
            <div className="text-center mt-6">
              <Link
                href="/smile-transformations"
                className="inline-flex items-center gap-1.5 text-primary font-sans text-xs font-bold uppercase tracking-wider hover:text-primary/80 transition-colors"
              >
                <span>View All Transformations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Meet the Dentists */}
      <section className="py-24 bg-[#FAFCFD] border-t border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
              Medical Specialists
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-navy mb-4">
              Meet Our Dental Experts
            </h2>
            <p className="text-light-text text-sm sm:text-base leading-relaxed">
              Our clinical team consists of PMC-registered dental consultants with specialized qualifications and decades of cumulative experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Dentist 1 */}
            <div className="bg-white border border-borders rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/dentist_doctor.png"
                  alt="Dr. Aftab Ahmed"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-primary text-[10px] font-bold uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full">
                  Clinical Director & Orthodontist
                </span>
                <h3 className="font-heading font-bold text-xl text-dark-navy mt-2">Dr. Aftab Ahmed</h3>
                <p className="text-light-text text-xs mt-1">BDS, FCPS (Orthodontics) &bull; 15+ Years Experience</p>
                <div className="w-full h-px bg-borders/50 my-4" />
                <ul className="space-y-2 text-xs text-light-text">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-primary" /> Specialist in Braces & Clear Aligners
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-primary" /> Member, Pakistan Dental Association
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-primary" /> PMC Reg No: 12345-D
                  </li>
                </ul>
              </div>
            </div>

            {/* Dentist 2 */}
            <div className="bg-white border border-borders rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/avatar_ayesha.png"
                  alt="Dr. Sana Khan"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-primary text-[10px] font-bold uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full">
                  Cosmetic Dentistry Consultant
                </span>
                <h3 className="font-heading font-bold text-xl text-dark-navy mt-2">Dr. Sana Khan</h3>
                <p className="text-light-text text-xs mt-1">BDS, MDS (Oral Aesthetics) &bull; 10+ Years Experience</p>
                <div className="w-full h-px bg-borders/50 my-4" />
                <ul className="space-y-2 text-xs text-light-text">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-primary" /> Specialist in Veneers, Crowns & Smile Design
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-primary" /> Advanced Training, AACD (USA)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-primary" /> PMC Reg No: 98765-D
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Clinic Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
              Gallery Tour
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-navy mb-4">
              Tour Our Luxury Clinic
            </h2>
            <p className="text-light-text text-sm sm:text-base leading-relaxed">
              Explore our premium, sterile patient zones, reception lobby, and treatment consultation chairs.
            </p>
          </div>

          {/* Pinterest Masonry layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-sm group">
              <Image
                src="/images/clinic_interior.png"
                alt="Sterile dental operatory room"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dark-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-4 py-2 bg-white text-dark-navy text-xs font-semibold rounded-lg shadow">
                  View Treatment Suite
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm group md:col-span-1">
              <Image
                src="/images/clinic_reception.png"
                alt="Luxury clinic waiting area"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dark-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-4 py-2 bg-white text-dark-navy text-xs font-semibold rounded-lg shadow">
                  View Reception Lobby
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/3] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-sm group">
              <Image
                src="/images/dentist_doctor.png"
                alt="Consultation desk"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dark-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-4 py-2 bg-white text-dark-navy text-xs font-semibold rounded-lg shadow">
                  View Consultation Desk
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials Section */}
      <section className="py-24 bg-[#FAFCFD] border-t border-borders/30 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="text-center mb-12 max-w-xl mx-auto">
            <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
              Patient Reviews
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-navy mb-4">
              What Our Patients Say
            </h2>
            <p className="text-light-text text-sm sm:text-base leading-relaxed">
              Read real feedback from dental implants, veneers, and braces patients treated at SmileCare Pro.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* 10. Appointment Section */}
      <section id="appointment" className="py-24 bg-dark-navy relative overflow-hidden">
        {/* Subtle mesh background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#FAFCFD_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* Left description */}
          <div className="lg:col-span-5 text-white flex flex-col gap-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/20 text-accent rounded-full text-xs font-semibold uppercase tracking-wider self-start">
              <Calendar className="w-3.5 h-3.5" /> Direct Reservation
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl leading-tight">
              Ready to Restore Your Healthy Smile?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Schedule your consultation online today. Choose your treatment and preferred date, and our patient care team will get back to you with slot confirmations.
            </p>
            <div className="w-full h-px bg-white/10 my-2" />
            <div className="flex flex-col gap-4 text-xs sm:text-sm text-slate-300">
              <p className="flex items-center gap-3">
                <Check className="w-4 h-4 text-accent" /> Over 98% Patient Satisfaction Score
              </p>
              <p className="flex items-center gap-3">
                <Check className="w-4 h-4 text-accent" /> Strictly Pain-Free, Certified Dentistry
              </p>
              <p className="flex items-center gap-3">
                <Check className="w-4 h-4 text-accent" /> Flexible, Interest-Free Installments for Braces/Implants
              </p>
            </div>
          </div>

          {/* Right White Card Form */}
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
              Got Questions?
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-light-text text-sm sm:text-base leading-relaxed">
              Find answers to the most common queries about dental treatments, sterilization, and pricing.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* 12. Blog Section */}
      <section className="py-24 bg-[#FAFCFD] border-t border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
              Dental Health Resource
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-navy mb-4">
              Latest from Dental Blog
            </h2>
            <p className="text-light-text text-sm sm:text-base leading-relaxed">
              Keep your teeth clean, healthy, and shining with clinical advice and oral health tips from our experts.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <FadeIn key={idx} delay={idx * 0.04} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full bg-white border border-borders rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-light-text mb-3">
                        <span className="text-primary font-bold uppercase tracking-wide">
                          {post.category}
                        </span>
                        <span>&bull;</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-heading font-bold text-base text-dark-navy group-hover:text-primary transition-colors duration-250 mb-3 leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                    <span className="text-light-text text-xs mt-4 block border-t border-borders/50 pt-4">
                      {post.date}
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
