import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ShieldCheck, Heart, Award, ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About Us | SmileCare Pro",
  description: "Learn about SmileCare Pro, Karachi's premium dental clinic. Read about our PMC-certified consultants, sterilization standards, and patient-first values.",
};

export default function AboutPage() {
  return (
    <div className="relative w-full">
      {/* Page Header */}
      <section className="relative bg-gradient-to-b from-[#EBF6F9] via-[#FAFCFD] to-[#FAFCFD] pt-32 pb-16 overflow-hidden border-b border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center relative z-10">
          <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
            Our Story
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dark-navy mb-4">
            About SmileCare Pro
          </h1>
          <p className="text-light-text text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Delivering pain-free, world-class dental treatments in a state-of-the-art sterile clinic. Registered PMC facility in Karachi.
          </p>
        </div>
      </section>

      {/* Main Clinic Mission & Values */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <FadeIn>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-navy leading-tight">
                Our Mission: Restoring Health, One Smile at a Time
              </h2>
              <p className="text-light-text text-sm sm:text-base leading-relaxed mt-4">
                SmileCare Pro was founded to challenge the traditional, anxiety-inducing dental experience. We believe that visits to the dentist should feel comfortable, transparent, and entirely pain-free.
              </p>
              <p className="text-light-text text-sm sm:text-base leading-relaxed mt-4">
                By investing in cutting-edge diagnostics (like digital 3D scans and laser dentistry) and maintaining a team of highly-specialized consultants, we provide dental care that meets international guidelines right here in Pakistan.
              </p>
            </FadeIn>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-borders/50">
              {[
                "100% PMC-Registered Consultants",
                "WHO Class B Autoclave Sterility",
                "Computerized Pain-Free Sedation",
                "Transparent, Upfront Treatment Costs",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-heading font-semibold text-sm text-dark-navy">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden border border-borders shadow-2xl bg-slate-100">
            <Image
              src="/images/clinic_interior.png"
              alt="Inside SmileCare Pro Clinic"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-[#FAFCFD] border-y border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
              Our Principles
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-navy mb-4">
              The Values That Guide Us
            </h2>
            <p className="text-light-text text-sm sm:text-base leading-relaxed">
              We hold ourselves to the highest standards of safety, quality, and clinical ethics in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white border border-borders p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-dark-navy mb-3">
                Unmatched Sterilization
              </h3>
              <p className="text-light-text text-sm leading-relaxed">
                We implement a strict Class-B vacuum autoclave protocol. Every medical instrument is sealed in sterile packets and opened only in your presence.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white border border-borders p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-dark-navy mb-3">
                Patient-First Comfort
              </h3>
              <p className="text-light-text text-sm leading-relaxed">
                From luxury wait lobbies to dental chairs equipped with entertainment options, we aim to eliminate dental anxiety and ensure total physical comfort.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white border border-borders p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-dark-navy mb-3">
                Certified Clinical Talent
              </h3>
              <p className="text-light-text text-sm leading-relaxed">
                We do not hire junior operators to perform critical procedures. All specialized treatments are executed exclusively by PMC-certified consultants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner Section */}
      <section className="py-24 bg-dark-navy relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#FAFCFD_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center relative z-10 flex flex-col items-center gap-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl leading-tight max-w-2xl">
            Experience the Next Level of Healthcare Dentistry
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Reserve your consultation with our senior dental specialists today and start your journey towards a healthier, brighter smile.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
            <Link
              href="/contact#appointment"
              className="px-8 py-3.5 bg-primary text-white text-center font-sans text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
            >
              Book Online Appointment
            </Link>
            <a
              href="https://wa.me/923001234567"
              className="px-8 py-3.5 bg-[#25D366] text-white text-center font-sans text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Chat on WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
