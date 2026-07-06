import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/FadeIn";

// Detailed Blog Articles Data
const articlesDetails: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    author: string;
    authorRole: string;
    excerpt: string;
    content: string[];
  }
> = {
  "laser-teeth-whitening-safety-results": {
    title: "How Laser Teeth Whitening Works: Safety & Results",
    category: "Cosmetic",
    date: "July 2, 2026",
    readTime: "4 Min Read",
    image: "/images/clinic_interior.png",
    author: "Dr. Sana Khan",
    authorRole: "Cosmetic Dentist Specialist",
    excerpt: "Learn how modern Zoom laser dental whitening lifts deep stains from coffee and aging safely without harming your teeth's enamel.",
    content: [
      "Teeth discoloration is a natural consequence of aging, dietary habits (like regular consumption of chai, coffee, and spices), and lifestyle factors. While many patients turn to DIY whitening pastes, clinical teeth whitening remains the safest and most effective method for dramatic results.",
      "At SmileCare Pro, we utilize the Zoom LED laser whitening system. This clinical procedure combines a concentrated hydrogen peroxide bleaching gel with a blue LED laser light. The laser acts as an accelerator, breaking down the stain pigments inside the enamel micro-pores without dissolving or stripping the enamel itself.",
      "One major concern patients have is tooth sensitivity. DIY kits often cause pain because they lack customized gum shields. In a clinical setting, we apply a gingival barrier (a protective gel shield) over your gums and cure it before applying the whitening gel. This ensures that the bleaching agent never makes contact with soft tissue, completely preventing chemical burns or severe pulp sensitivity.",
      "The entire procedure takes less than 60 minutes and is completed in three 15-minute cycles. On average, patients see a brightness improvement of 6 to 8 shades in a single chair visit. To sustain your results, we recommend avoiding dark-colored liquids for the first 48 hours and using our custom-fitted touch-up trays once a year.",
    ],
  },
  "dental-implants-vs-bridges": {
    title: "Dental Implants vs. Bridges: Which Option is Right for You?",
    category: "Restorative",
    date: "June 25, 2026",
    readTime: "6 Min Read",
    image: "/images/smile_after.png",
    author: "Dr. Harris Raza",
    authorRole: "Oral & Maxillofacial Surgeon",
    excerpt: "We compare the clinical lifespan, chewing force recovery, and structural bone health differences between implants and bridges.",
    content: [
      "Replacing a missing tooth is essential not just for the aesthetics of your smile, but for the alignment of your remaining teeth, the efficiency of your digestion, and the health of your jawbone. The two primary treatments are dental implants and dental bridges.",
      "A dental bridge consists of a prosthetic tooth anchored to the healthy teeth on either side. While a bridge is a quick and aesthetic fix, it requires shaving down the enamel of neighboring teeth to mount the supportive crowns. Furthermore, because a bridge sits above the gums, it does not stimulate the underlying jawbone, which leads to gradual bone loss over time.",
      "A dental implant, on the other hand, replaces both the root and crown. A bio-compatible titanium post is placed directly into the jawbone. Over 3 to 6 months, the bone fuses with the titanium in a process called osteointegration. Once secure, a custom zirconia crown is fitted onto the post. This replicates 100% of natural chewing force and keeps the jawbone healthy and stimulated.",
      "In terms of cost and longevity, bridges usually need replacement every 7 to 10 years due to wear and decay under the crowns. Dental implants represent a higher upfront investment but boast a lifetime success rate of over 98% with standard hygiene, making implants the most cost-effective solution in the long run.",
    ],
  },
  "prevent-childhood-cavities-tips": {
    title: "5 Crucial Tips to Prevent Childhood Cavities Early",
    category: "Pediatric",
    date: "June 18, 2026",
    readTime: "5 Min Read",
    image: "/images/clinic_reception.png",
    author: "Dr. Sana Khan",
    authorRole: "Cosmetic & General Dentistry Consultant",
    excerpt: "Pediatric experts outline early teeth cleaning, flossing, healthy eating habits, and fissure sealants to shield children's smiles.",
    content: [
      "Childhood tooth decay (cavities) is one of the most common chronic diseases among children in Pakistan. Early cavities in baby teeth can impact the development of permanent adult teeth, cause speech difficulties, and lead to painful dental infections.",
      "1. Start Cleaning Early: Do not wait for teeth to emerge. Wipe your infant's gums with a clean, damp cloth after feedings. As soon as the first tooth emerges (usually around 6 months), start brushing with a soft, infant-sized toothbrush and a smear of fluoride toothpaste.",
      "2. Monitor Night Bottle Feeding: Avoid putting your baby to sleep with a bottle of milk, juice, or sweetened liquids. The sugars pool around the teeth for hours, causing rapid decay known as 'baby bottle tooth decay.'",
      "3. Limit Sugary Snacks and Sticky Foods: Biscuits, candies, and dried fruits stick to children's teeth. Encourage snacks like cheese, yogurt, and fresh fruits that stimulate saliva flow, which naturally rinses away acid-producing bacteria.",
      "4. Apply Preventive Pit and Fissure Sealants: Back molars have deep grooves where toothbrush bristles cannot reach. Our pediatric dentists can apply thin protective coatings (sealants) to these surfaces, shielding them from food debris and acid.",
      "5. Visit the Dentist by Age One: The World Dental Association recommends children have their first dental checkup by their first birthday. This helps detect early decay and builds a positive relationship, preventing future dental phobias.",
    ],
  },
  "sterilization-protocols-checklist": {
    title: "Sterilization Protocols: What to Check in a Dental Clinic",
    category: "Clinical Safety",
    date: "June 10, 2026",
    readTime: "5 Min Read",
    image: "/images/clinic_interior.png",
    author: "Dr. Aftab Ahmed",
    authorRole: "Clinical Director",
    excerpt: "A guide on Class B vacuum autoclaving, WHO sterilization packs, and chemical pre-treatment standard checklist for patients.",
    content: [
      "Patient safety is the absolute foundation of clinical medicine. In dental procedures, where tools make contact with saliva and blood, maintaining a 100% sterile environment is critical to prevent cross-contamination of viruses like Hepatitis B, Hepatitis C, and HIV.",
      "At SmileCare Pro, we adhere to the highest international sterilization standards. When selecting a dental clinic, patients should feel empowered to verify sterilization procedures. Here is the clinical checklist you should look out for:",
      "Class B Autoclaving: Traditional gravity-displacement sterilizers are insufficient for complex hollow dental drills. A Class B vacuum autoclave uses pre-vacuum pulses to draw out all air, ensuring superheated steam penetrates 100% of all internal chambers of the handpieces. Verify that your clinic uses Class B sterilizers.",
      "Hermetically Sealed Packs: All handpieces, mirrors, and scaling tips must be sealed in individual sterilization pouches containing chemical indicators. These pouches must be opened only in your presence. If instruments are lying loose on a tray, they are not sterile.",
      "Disposable Consumables: Patient drapes, suction tips, syringes, and gloves must be strictly single-use and disposed of in medical waste containers immediately after the session.",
    ],
  },
  "clear-aligners-vs-braces": {
    title: "Clear Aligners vs. Braces: Which Straightens Teeth Faster?",
    category: "Orthodontics",
    date: "June 03, 2026",
    readTime: "4 Min Read",
    image: "/images/smile_before.png",
    author: "Dr. Aftab Ahmed",
    authorRole: "Consultant Orthodontist",
    excerpt: "Comparing aesthetics, cleaning habits, treatment timelines, and joint pressure between aligners and braces.",
    content: [
      "Crooked or crowded teeth are traditionally treated using dental braces. In recent years, clear aligners (removable transparent plastic trays) have become highly popular. How do these two orthodontic options compare in terms of speed, hygiene, and comfort?",
      "Traditional braces consist of metal or ceramic brackets bonded to the teeth and connected by a wire. They exert continuous, multi-directional force. Clear aligners, such as Invisalign, are removable trays custom-milled from digital 3D scans. They shift teeth incrementally, and patients switch to a new set of trays every 1-2 weeks.",
      "Treatment speed depends on complexity. For mild to moderate crowding, clear aligners are often faster (averaging 10 to 14 months) because the computer-guided trays move teeth simultaneously. However, for severe bite corrections or rotated teeth, traditional braces are more effective and faster because the wire system handles complex root movements better.",
      "Hygiene and lifestyle are where aligners excel. Since they are removable, you can eat any food and brush or floss normally. Braces require careful brushing to avoid plaque buildup around brackets. In conclusion, aligners are perfect for working professionals seeking invisible aesthetics and easy hygiene, while braces remain the gold standard for severe orthodontic cases.",
    ],
  },
};

// Generate static routes at build time
export async function generateStaticParams() {
  return Object.keys(articlesDetails).map((slug) => ({
    slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesDetails[slug];

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | SmileCare Pro Blog`,
    description: article.excerpt,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesDetails[slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="relative w-full">
      {/* Page Header */}
      <section className="relative bg-gradient-to-b from-[#EBF6F9] via-[#FAFCFD] to-[#FAFCFD] pt-32 pb-16 overflow-hidden border-b border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
            {article.category}
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] text-dark-navy leading-tight mb-6 max-w-4xl">
            {article.title}
          </h1>

          {/* Author info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-light-text border-t border-borders/50 pt-6 mt-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-xs">
                {article.author.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <span className="font-semibold text-dark-navy block">{article.author}</span>
                <span className="text-[10px] block">{article.authorRole}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-light-text/60" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-light-text/60" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Text Content */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Article Text */}
          <div className="lg:col-span-8">
            <FadeIn>
              {/* Main Banner Image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-borders mb-10 shadow-sm">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Paragraphs */}
              <div className="prose prose-slate max-w-none flex flex-col gap-6 text-light-text text-[15px] sm:text-base leading-relaxed">
                {article.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="border border-borders bg-[#FAFCFD] p-6 lg:p-8 rounded-2xl shadow-sm flex flex-col gap-6">
              <div>
                <h3 className="font-heading font-bold text-lg text-dark-navy mb-1">Clinic Consultation</h3>
                <p className="text-light-text text-xs">Direct care from PMC consultants</p>
              </div>
              <p className="text-light-text text-xs leading-relaxed">
                Have questions about whitening, braces, or root canals? Book a diagnostic checkup online today.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact#appointment"
                  className="w-full py-3 bg-primary hover:bg-primary/95 text-white font-semibold rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300 text-sm flex items-center justify-center gap-2"
                >
                  Book Appointment
                </Link>
                <a
                  href="https://wa.me/923001234567"
                  className="w-full py-3 bg-white border border-borders hover:bg-borders/20 text-dark-navy font-semibold rounded-lg text-center shadow-sm transition-all duration-300 text-sm flex items-center justify-center gap-2"
                >
                  WhatsApp Doctor Desk
                </a>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white border border-borders/60 rounded-xl">
                <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                <div className="text-[11px] text-light-text leading-tight">
                  All treatments follow <strong>Class B vacuum autoclave standards</strong> for 100% sterile safety.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
