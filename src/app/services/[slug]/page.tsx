import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, Calendar, ArrowLeft, Clock, ShieldCheck, Stethoscope, Sparkles } from "lucide-react";
import FadeIn from "@/components/FadeIn";

// Services Data Dictionary
const servicesDetails: Record<
  string,
  {
    title: string;
    tagline: string;
    description: string;
    details: string;
    benefits: string[];
    process: { step: string; desc: string }[];
    quickFacts: { label: string; value: string }[];
  }
> = {
  "teeth-whitening": {
    title: "Teeth Whitening",
    tagline: "Brighten your smile up to 8 shades in just 60 minutes",
    description: "Professional laser teeth whitening is a safe, effective, and clinical procedure to lift deep-set stains and discoloration from coffee, aging, and food.",
    details: "Unlike over-the-counter whitening kits that can damage enamel and trigger tooth sensitivity, SmileCare Pro uses clinical-grade Zoom laser systems. The bleaching gel is activated under the safe supervision of our senior cosmetic dentist, delivering long-lasting brightness while fully protecting your gums.",
    benefits: [
      "Instantly brightens teeth by 6 to 8 shades",
      "Painless clinical laser session takes under 1 hour",
      "Custom take-home touch-up kits included",
      "Safe, controlled gums protection shields",
    ],
    process: [
      { step: "1. Enamel Assessment", desc: "Our dentist checks your enamel density and pre-cleans the tooth surfaces to ensure optimal gel absorption." },
      { step: "2. Gums Protection", desc: "A soft, fluid dam barrier is placed over your gums to fully shield them from the whitening compound." },
      { step: "3. Laser Activation", desc: "The clinical bleaching gel is applied and activated under our Zoom LED laser light for three 15-minute cycles." },
    ],
    quickFacts: [
      { label: "Procedure Duration", value: "45 - 60 Minutes" },
      { label: "Anesthesia Needed", value: "None (Pain-free)" },
      { label: "Results Visible", value: "Immediately in-chair" },
      { label: "Longevity", value: "1 - 2 Years with care" },
    ],
  },
  "dental-implants": {
    title: "Dental Implants",
    tagline: "The gold standard for permanent replacement of missing teeth",
    description: "Dental implants are titanium posts surgically placed into the jawbone, acting as artificial roots onto which durable porcelain crowns are fitted.",
    details: "Implants offer a permanent, non-shifting alternative to traditional dentures or bridges. Under strict WHO sterile protocols, our oral surgeon places Swiss-manufactured titanium implants that fuse naturally with your bone (osteointegration), restoring 100% of your chewing force and facial structure.",
    benefits: [
      "Feels, functions, and looks exactly like natural teeth",
      "Prevents bone loss and preserves facial structure",
      "No shifting, slipping, or dental adhesives required",
      "Lifetime durability with proper oral hygiene",
    ],
    process: [
      { step: "1. 3D Digital Scan", desc: "We map your jawbone thickness using high-definition CBCT scans to plan precise implant placement." },
      { step: "2. Implant Placement", desc: "Under painless local anesthesia, the titanium implant post is gently placed into the jawbone." },
      { step: "3. Crown Fitting", desc: "After healing (3-6 months), a custom, metal-free zirconia crown is securely anchored to the implant." },
    ],
    quickFacts: [
      { label: "Procedure Duration", value: "45 - 90 Minutes per post" },
      { label: "Anesthesia Needed", value: "Local Anesthesia" },
      { label: "Recovery Period", value: "3 - 5 Days soft diet" },
      { label: "Success Rate", value: "Over 98% clinically" },
    ],
  },
  "root-canal": {
    title: "Root Canal Treatment",
    tagline: "Save your natural teeth and eliminate toothache pain",
    description: "A root canal is a highly precise restorative treatment designed to remove infected pulp from inside a tooth's root canals, preventing tooth loss.",
    details: "A deep cavity, cracked tooth, or trauma can let bacteria infect the nerve pulp. If left untreated, it leads to severe abscesses. Our endodontists use advanced rotary micro-instruments to clean, shape, and hermetically seal the canals painlessly in a single visit.",
    benefits: [
      "Instantly relieves severe throbbing tooth pain",
      "Saves your natural tooth from extraction",
      "Prevents the spread of infection to other teeth",
      "Painless procedure using advanced rotary tools",
    ],
    process: [
      { step: "1. Painless Anesthetic", desc: "We administer local numbing to ensure you feel absolutely zero pain during the procedure." },
      { step: "2. Infection Removal", desc: "The infected nerve pulp is carefully extracted from the root chambers using flexible micro-files." },
      { step: "3. Seal & Crown", desc: "The cleaned canals are filled with biocompatible material and sealed. We recommend a crown to restore strength." },
    ],
    quickFacts: [
      { label: "Procedure Duration", value: "45 - 75 Minutes" },
      { label: "Anesthesia Needed", value: "Local Anesthesia" },
      { label: "Average Visits", value: "1 - 2 Visits" },
      { label: "Success Rate", value: "Over 95% durability" },
    ],
  },
  "braces": {
    title: "Orthodontics & Braces",
    tagline: "Align your teeth and achieve a balanced, confident bite",
    description: "Orthodontic treatments correct crooked teeth, crowded arches, and jaw misalignment using traditional braces or invisible clear aligners.",
    details: "Straightening your teeth is vital for speech, chewing, and long-term joint health. We offer ceramic braces, self-ligating metal braces, and modern transparent clear aligners (invisible braces) for children, teenagers, and working professionals.",
    benefits: [
      "Perfectly aligns teeth and jaw structure",
      "Reduces risks of cavities and gum diseases",
      "Improves digestion by enhancing chewing force",
      "Clear, invisible aligner options available",
    ],
    process: [
      { step: "1. 3D Digital Scan", desc: "We scan your dental arches digitally to plan the precise orthodontic movement path." },
      { step: "2. Bracket Placement", desc: "For braces, brackets are bonded and activated. For aligners, custom clear trays are delivered." },
      { step: "3. Routine Adjusts", desc: "Braces are adjusted monthly, while aligner patients switch trays every 1-2 weeks." },
    ],
    quickFacts: [
      { label: "Treatment Duration", value: "12 - 24 Months" },
      { label: "Comfort Level", value: "Mild pressure after adjustment" },
      { label: "Visits Required", value: "Every 4 - 6 Weeks" },
      { label: "Ages Supported", value: "Kids, Teens, & Adults" },
    ],
  },
  "veneers": {
    title: "Porcelain Veneers",
    tagline: "Get a flawless Hollywood smile with custom veneers",
    description: "Veneers are wafer-thin, custom-fabricated porcelain shells bonded to the front of your teeth to correct color, chips, gaps, or mild crowding.",
    details: "Veneers are the ultimate cosmetic dentistry solution. Our expert cosmetic consultants design your smile digitally, preparing your teeth minimally to place premium porcelain shells that mimic the light-reflecting properties of natural enamel.",
    benefits: [
      "Closes gaps, aligns teeth, and fixes chips",
      "Resistant to coffee, tea, and smoking stains",
      "Looks completely natural with translucent finishes",
      "Durable aesthetic results that last decades",
    ],
    process: [
      { step: "1. Smile Design", desc: "We design your smile digitally and construct a temporary wax model for your review." },
      { step: "2. Tooth Prep", desc: "A microscopic layer (0.3mm) of enamel is prepared to allow the veneers to lie flat." },
      { step: "3. Bond & Cement", desc: "Your hand-crafted porcelain veneers are permanently bonded to your teeth using clinical resin." },
    ],
    quickFacts: [
      { label: "Total Visits", value: "2 - 3 Sessions" },
      { label: "Anesthesia Needed", value: "None or local numbing" },
      { label: "Enamel Prep", value: "Minimal (0.3mm)" },
      { label: "Durability", value: "10 - 15 Years with care" },
    ],
  },
  "crowns": {
    title: "Porcelain Crowns & Bridges",
    tagline: "Restore broken or weak teeth with premium crowns",
    description: "A crown (cap) is a custom sleeve that covers a damaged, cracked, or weak tooth, while a bridge replaces one or more missing teeth by anchoring to neighboring teeth.",
    details: "We utilize advanced, metal-free materials like Zirconia and E-max porcelain. These crowns are designed using CAD/CAM digital machinery, ensuring an exceptionally precise fit, extreme durability, and a color match indistinguishable from natural enamel.",
    benefits: [
      "Restores structural strength to broken/weak teeth",
      "Indistinguishable from natural teeth (metal-free)",
      "Protects root-canal treated teeth from splitting",
      "Prevents neighboring teeth from shifting",
    ],
    process: [
      { step: "1. Tooth Shaping", desc: "The target tooth is gently shaped to accommodate the thickness of the crown." },
      { step: "2. Digital Scanning", desc: "We take a digital scan of your mouth—no gooey impression trays required." },
      { step: "3. Crown Bonding", desc: "The custom-milled crown is permanently cemented and adjusted for a perfect bite." },
    ],
    quickFacts: [
      { label: "Total Visits", value: "2 Sessions" },
      { label: "Anesthesia Needed", value: "Local Anesthesia" },
      { label: "Materials Used", value: "Zirconia or E-Max Ceramic" },
      { label: "Durability", value: "10 - 15 Years" },
    ],
  },
  "emergency-dentistry": {
    title: "Emergency Dental Care",
    tagline: "Immediate 24/7 pain relief and trauma care",
    description: "Emergency dentistry covers immediate clinical treatments for severe toothaches, dental abscesses, jaw trauma, bleeding gums, or knocked-out teeth.",
    details: "Dental emergencies can be incredibly painful and risky. Our clinic is equipped with emergency specialists and a dedicated helpline open 24/7. We guarantee same-day priority appointments to manage pain, arrest bleeding, and save dislodged teeth.",
    benefits: [
      "Same-day emergency walk-in bookings guaranteed",
      "Immediate pain management and diagnostics",
      "Helpline open 24/7 for trauma and tooth pain",
      "Saves knocked-out or fractured teeth",
    ],
    process: [
      { step: "1. Immediate Relief", desc: "We prioritize emergency patients, administering pain blocks or anesthetics immediately." },
      { step: "2. Rapid Diagnostic", desc: "Digital X-rays are taken instantly to find root fractures or deep abscess infections." },
      { step: "3. Urgent Treatment", desc: "We perform emergency pulpotomies, extractions, or splinting to secure teeth." },
    ],
    quickFacts: [
      { label: "Response Time", value: "Immediate (Same-day priority)" },
      { label: "Helpline Status", value: "Open 24/7 (+92 300 1234567)" },
      { label: "Anesthesia Needed", value: "Local or Sedation blocks" },
      { label: "Emergency Fee", value: "No extra surcharge" },
    ],
  },
  "children-dentistry": {
    title: "Children's Dentistry",
    tagline: "Gentle, anxiety-free pediatric dental care for kids",
    description: "Pediatric dentistry focuses on specialized oral health care for infants, toddlers, children, and teenagers, emphasizing preventative habits.",
    details: "Children's teeth require special care to ensure proper jaw and adult teeth development. Our pediatric dentists work in a warm, welcoming environment using gentle terms, ensuring kids learn to love dental visits. We offer tooth sealants, fluoride shields, and painless fillings.",
    benefits: [
      "Fun, anxiety-free clinic environment for kids",
      "Fluoride coatings to shield teeth from decay",
      "Preventive pit and fissure sealants",
      "Monitors teeth alignment and growth patterns",
    ],
    process: [
      { step: "1. Friendly Orientation", desc: "We show your child the clinic instruments using fun, non-threatening names." },
      { step: "2. Gentle Checkup", desc: "We clean teeth gently and examine jaw growth and alignment patterns." },
      { step: "3. Preventive Shields", desc: "If needed, we apply quick, pain-free sealants or fluoride gels to prevent cavities." },
    ],
    quickFacts: [
      { label: "Ideal Starting Age", value: "1 Year or first tooth" },
      { label: "Procedure Nature", value: "Gentle, preventative & fun" },
      { label: "Anesthesia", value: "Rarely needed (laughing gas option)" },
      { label: "Routine Frequency", value: "Every 6 Months" },
    ],
  },
};

// Generate static routes at build time
export async function generateStaticParams() {
  return Object.keys(servicesDetails).map((slug) => ({
    slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesDetails[slug];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | SmileCare Pro`,
    description: `${service.tagline}. Learn about the clinical procedure, benefits, and steps at Karachi's premium dental clinic.`,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesDetails[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="relative w-full">
      {/* Page Header Banner */}
      <section className="relative bg-gradient-to-b from-[#EBF6F9] via-[#FAFCFD] to-[#FAFCFD] pt-32 pb-16 overflow-hidden border-b border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
            Procedure Details
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dark-navy mb-4">
            {service.title}
          </h1>
          <p className="text-light-text text-base sm:text-lg max-w-2xl leading-relaxed">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Descriptions, Benefits & Steps */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Overview */}
            <FadeIn>
              <h2 className="font-heading font-bold text-2xl text-dark-navy mb-4">Treatment Overview</h2>
              <p className="text-light-text text-base leading-relaxed mb-4">{service.description}</p>
              <p className="text-light-text text-base leading-relaxed">{service.details}</p>
            </FadeIn>

            {/* Benefits */}
            <FadeIn>
              <h2 className="font-heading font-bold text-2xl text-dark-navy mb-5">Clinical Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-light-text text-sm leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Process Steps */}
            <FadeIn>
              <h2 className="font-heading font-bold text-2xl text-dark-navy mb-6">What to Expect: Step-by-Step</h2>
              <div className="space-y-6 relative before:absolute before:left-[18px] before:top-2 before:bottom-2 before:w-0.5 before:bg-borders/60">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex gap-6 relative z-10 group">
                    <div className="w-9 h-9 rounded-full bg-white border border-borders shadow-sm text-primary flex items-center justify-center font-heading font-bold text-sm shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-dark-navy">{step.step}</h4>
                      <p className="text-light-text text-sm leading-relaxed mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Sticky Sidebar Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="border border-borders bg-[#FAFCFD] p-6 lg:p-8 rounded-2xl shadow-sm flex flex-col gap-6">
              <div>
                <h3 className="font-heading font-bold text-lg text-dark-navy mb-1">Quick Treatment Facts</h3>
                <p className="text-light-text text-xs">Standard facts gathered by our medical staff</p>
              </div>

              {/* Facts list */}
              <div className="flex flex-col gap-3">
                {service.quickFacts.map((fact, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-borders/50 last:border-b-0">
                    <span className="text-light-text text-xs font-semibold">{fact.label}</span>
                    <span className="text-dark-navy text-xs font-bold font-sans">{fact.value}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 mt-2">
                <Link
                  href="/contact#appointment"
                  className="w-full py-3 bg-primary hover:bg-primary/95 text-white font-semibold rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300 text-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" /> Book Appointment
                </Link>
                <a
                  href={`https://wa.me/923001234567?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(service.title)}%20treatment%20at%20SmileCare%20Pro.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] text-white font-semibold rounded-lg text-center shadow hover:shadow-md transition-all duration-300 text-sm flex items-center justify-center gap-2"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-3 p-3 bg-white border border-borders/60 rounded-xl">
                <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                <div className="text-[11px] text-light-text leading-tight">
                  All procedures are covered by our <strong>sterilization & safety protocols</strong>. PMC Certified.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
