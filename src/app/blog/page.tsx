import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Dental Health Blog | SmileCare Pro",
  description: "Read clinical articles and oral health tips written by our PMC specialists. Keep your smile white, healthy, and cavity-free.",
};

const blogPosts = [
  {
    title: "How Laser Teeth Whitening Works: Safety & Results",
    category: "Cosmetic",
    date: "July 2, 2026",
    readTime: "4 Min Read",
    excerpt: "Learn how modern Zoom laser dental whitening lifts deep stains from coffee and aging safely without harming your teeth's enamel.",
    image: "/images/clinic_interior.png",
    slug: "laser-teeth-whitening-safety-results",
    featured: true,
  },
  {
    title: "Dental Implants vs. Bridges: Which Option is Right for You?",
    category: "Restorative",
    date: "June 25, 2026",
    readTime: "6 Min Read",
    excerpt: "We compare the clinical lifespan, chewing force recovery, and structural bone health differences between implants and bridges.",
    image: "/images/smile_after.png",
    slug: "dental-implants-vs-bridges",
    featured: false,
  },
  {
    title: "5 Crucial Tips to Prevent Childhood Cavities Early",
    category: "Pediatric",
    date: "June 18, 2026",
    readTime: "5 Min Read",
    excerpt: "Pediatric experts outline early teeth cleaning, flossing, healthy eating habits, and fissure sealants to shield children's smiles.",
    image: "/images/clinic_reception.png",
    slug: "prevent-childhood-cavities-tips",
    featured: false,
  },
  {
    title: "Sterilization Protocols: What to Check in a Dental Clinic",
    category: "Clinical Safety",
    date: "June 10, 2026",
    readTime: "5 Min Read",
    excerpt: "A guide on Class B vacuum autoclaving, WHO sterilization packs, and chemical pre-treatment standard checklist for patients.",
    image: "/images/clinic_interior.png",
    slug: "sterilization-protocols-checklist",
    featured: false,
  },
  {
    title: "Clear Aligners vs. Braces: Which Straightens Teeth Faster?",
    category: "Orthodontics",
    date: "June 03, 2026",
    readTime: "4 Min Read",
    excerpt: "Comparing aesthetics, cleaning habits, treatment timelines, and joint pressure between aligners and braces.",
    image: "/images/smile_before.png",
    slug: "clear-aligners-vs-braces",
    featured: false,
  },
];

export default function BlogHubPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="relative w-full">
      {/* Page Header */}
      <section className="relative bg-gradient-to-b from-[#EBF6F9] via-[#FAFCFD] to-[#FAFCFD] pt-32 pb-16 overflow-hidden border-b border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center relative z-10">
          <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
            Knowledge Hub
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dark-navy mb-4">
            Dental Health Blog
          </h1>
          <p className="text-light-text text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Read dental education and tips verified by our PMC certified dental specialist consultants.
          </p>
        </div>
      </section>

      {/* Featured Post (Hero layout) */}
      {featuredPost && (
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 md:px-20">
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border border-borders/60 bg-[#FAFCFD] p-6 md:p-8 rounded-[24px] shadow-sm hover:shadow-md transition-all duration-300">
                {/* Image */}
                <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden border border-borders">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Content */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-xs text-light-text">
                    <span className="text-primary font-bold uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span>&bull;</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-dark-navy leading-tight hover:text-primary transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h2>
                  <p className="text-light-text text-sm leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="w-full h-px bg-borders/60 my-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-light-text text-xs">{featuredPost.date}</span>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-primary font-sans text-xs font-bold uppercase tracking-wider hover:text-primary/80 transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Grid of Regular Posts */}
      <section className="py-16 bg-[#FAFCFD] border-t border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <h3 className="font-heading font-bold text-xl text-dark-navy mb-10 uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" /> Latest Articles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regularPosts.map((post, idx) => (
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
                      <p className="text-light-text text-xs leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                    <span className="text-light-text text-[11px] mt-4 block border-t border-borders/50 pt-4">
                      {post.date}
                    </span>
                  </div>
                </Link>
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
            Want to Discuss a Specific Case?
          </h2>
          <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
            Book an diagnostic examination with our consultants to address tooth pain or cosmetic smile goals.
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
              WhatsApp Doctor Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
