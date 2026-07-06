import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = { title: "Clinic Gallery | SmileCare Pro" };

const PHOTOS = [
  {
    src: "/images/clinic_interior.png",
    alt: "SmileCare Pro treatment suite",
    caption: "Treatment Suite",
    span: "md:col-span-2",
  },
  {
    src: "/images/clinic_reception.png",
    alt: "SmileCare Pro reception and waiting area",
    caption: "Reception",
    span: "md:col-span-1",
  },
  {
    src: "/images/dentist_doctor.png",
    alt: "Lead consultant dentist at SmileCare Pro",
    caption: "Our Team",
    span: "md:col-span-1",
  },
  {
    src: "/images/smile_before.png",
    alt: "Patient before veneer treatment",
    caption: "Before — Veneers",
    span: "md:col-span-1",
  },
  {
    src: "/images/smile_after.png",
    alt: "Patient after veneer treatment at SmileCare Pro",
    caption: "After — Veneers",
    span: "md:col-span-1",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#020817] pt-32 pb-20">
        <div className="container mx-auto">
          <span className="eyebrow">Gallery</span>
          <h1 className="heading-xl text-white mb-5">
            Inside SmileCare Pro.
          </h1>
          <p className="text-[#94A3B8] text-[17px] max-w-md leading-relaxed">
            A look at our facilities, our team, and the results we deliver.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PHOTOS.map((photo) => (
              <FadeIn key={photo.src} className={photo.span}>
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden group">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#020817]/0 group-hover:bg-[#020817]/40 transition-all duration-300 flex items-end p-5">
                    <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                      {photo.caption}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="text-center text-[#94A3B8] text-sm mt-10">
            More photos available on our{" "}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#06B6D4] hover:underline"
            >
              Instagram
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
