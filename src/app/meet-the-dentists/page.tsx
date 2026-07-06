import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Mail, Phone, Shield } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Meet Our Dentists | SmileCare Pro",
  description: "Meet the specialized medical team at SmileCare Pro. Read about our PMC-certified consultants, their educational backgrounds, and certifications.",
};

const specialists = [
  {
    name: "Dr. Aftab Ahmed",
    title: "Clinical Director & Consultant Orthodontist",
    image: "/images/dentist_doctor.png",
    degree: "BDS, FCPS (Orthodontics)",
    experience: "15+ Years",
    pmc: "PMC Reg No: 12345-D",
    languages: "English, Urdu, Punjabi",
    education: [
      "Fellowship in Orthodontics (FCPS) - College of Physicians & Surgeons Pakistan",
      "Bachelor of Dental Surgery (BDS) - Nishtar Institute of Dentistry, Multan",
      "Advanced Invisalign Provider Training - Dubai, UAE",
    ],
    certifications: [
      "Member of the World Federation of Orthodontists (WFO)",
      "Executive Committee Member, Pakistan Association of Orthodontists",
      "Certified Dental Laser Specialist",
    ],
  },
  {
    name: "Dr. Sana Khan",
    title: "Consultant Cosmetic Dentist & Endodontist",
    image: "/images/avatar_ayesha.png",
    degree: "BDS, MDS (Operative Dentistry & Aesthetics)",
    experience: "10+ Years",
    pmc: "PMC Reg No: 98765-D",
    languages: "English, Urdu",
    education: [
      "Master of Dental Surgery (MDS) - Karachi University",
      "Bachelor of Dental Surgery (BDS) - Dow University of Health Sciences, Karachi",
      "Aesthetic Smile Design Residency - AACD Academy, Chicago, USA",
    ],
    certifications: [
      "Affiliate Member of the American Academy of Cosmetic Dentistry (AACD)",
      "Active Member of the Pakistan Dental Association",
      "Hands-on Certificate in Advanced Micro-Endodontics",
    ],
  },
  {
    name: "Dr. Harris Raza",
    title: "Oral & Maxillofacial Surgeon",
    image: "/images/avatar_zain.png",
    degree: "BDS, FCPS (Oral & Maxillofacial Surgery)",
    experience: "12+ Years",
    pmc: "PMC Reg No: 54321-D",
    languages: "English, Urdu, Sindhi",
    education: [
      "Fellowship in Maxillofacial Surgery (FCPS) - Abbasi Shaheed Hospital, Karachi",
      "Bachelor of Dental Surgery (BDS) - Liaquat University of Medical & Health Sciences, Jamshoro",
      "Advanced Trauma & Dental Implant Training - Geneva, Switzerland",
    ],
    certifications: [
      "Fellow of the Association of Oral & Maxillofacial Surgeons of Pakistan",
      "Specialist implantologist certified by Straumann (Switzerland)",
      "Certified Provider of Advanced Trauma Life Support (ATLS)",
    ],
  },
];

export default function MeetDentistsPage() {
  return (
    <div className="relative w-full">
      {/* Page Header */}
      <section className="relative bg-gradient-to-b from-[#EBF6F9] via-[#FAFCFD] to-[#FAFCFD] pt-32 pb-16 overflow-hidden border-b border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center relative z-10">
          <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
            Clinical Leadership
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dark-navy mb-4">
            Meet the Specialists
          </h1>
          <p className="text-light-text text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Our clinic is led by certified medical specialists holding fellowship degrees and post-graduate dental training.
          </p>
        </div>
      </section>

      {/* Profiles Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 flex flex-col gap-24">
          {specialists.map((doc, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <FadeIn key={idx} direction={isEven ? "left" : "right"}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-borders/40 pb-16 last:border-b-0 last:pb-0">
                  {/* Left Column: Image & Badges */}
                  <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-borders shadow-md">
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-[#FAFCFD] border border-borders p-4 rounded-xl flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-dark-navy">
                        <Shield className="w-4 h-4 text-primary shrink-0" />
                        <span>{doc.pmc}</span>
                      </div>
                      <div className="w-full h-px bg-borders/50 my-1" />
                      <p className="text-xs text-light-text leading-relaxed">
                        <strong>Experience:</strong> {doc.experience} <br />
                        <strong>Languages:</strong> {doc.languages}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Bio Details */}
                  <div className="lg:col-span-8 flex flex-col gap-6">
                    <div>
                      <h2 className="font-heading font-bold text-3xl text-dark-navy">{doc.name}</h2>
                      <p className="text-primary font-heading font-semibold text-sm mt-1.5">{doc.title}</p>
                      <p className="text-light-text text-xs mt-1 font-sans">{doc.degree}</p>
                    </div>

                    {/* Education */}
                    <div>
                      <h3 className="font-heading font-bold text-sm text-dark-navy uppercase tracking-wider mb-3">
                        Education & Qualifications
                      </h3>
                      <ul className="space-y-2">
                        {doc.education.map((edu, eIdx) => (
                          <li key={eIdx} className="flex gap-2.5 items-start text-sm text-light-text leading-relaxed">
                            <Check className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certifications */}
                    <div>
                      <h3 className="font-heading font-bold text-sm text-dark-navy uppercase tracking-wider mb-3">
                        Professional Board Certifications
                      </h3>
                      <ul className="space-y-2">
                        {doc.certifications.map((cert, cIdx) => (
                          <li key={cIdx} className="flex gap-2.5 items-start text-sm text-light-text leading-relaxed">
                            <Check className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quick Button */}
                    <div className="pt-4">
                      <Link
                        href={`/contact#appointment`}
                        className="inline-flex items-center justify-center px-6 py-2.5 bg-dark-navy hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-all duration-300"
                      >
                        Request Consultation with {doc.name.split(" ")[0]}
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-dark-navy relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#FAFCFD_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center relative z-10 flex flex-col items-center gap-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl leading-tight max-w-xl">
            Choose Expert Dental Care
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg leading-relaxed">
            Our medical specialists are ready to provide you with painless, high-precision dental treatments.
          </p>
          <Link
            href="/contact#appointment"
            className="px-8 py-3.5 bg-primary text-white text-center font-sans text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
