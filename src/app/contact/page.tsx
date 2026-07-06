import type { Metadata } from "next";
import { ArrowRight, Phone, Clock, MapPin } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = { title: "Contact | SmileCare Pro" };

const WA_LINK =
  "https://wa.me/923197301342?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20SmileCare%20Pro.";

const HOURS = [
  { day: "Monday – Saturday", hours: "11:00 AM – 8:00 PM" },
  { day: "Sunday",             hours: "12:00 PM – 5:00 PM" },
  { day: "Emergency",          hours: "Available 24 / 7" },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0A0A0A] pt-48 pb-32">
        <div className="container mx-auto">
          <span className="eyebrow">Contact</span>
          <h1 className="heading-xl !text-white mb-6">
            Let&rsquo;s Talk.
          </h1>
          <p className="text-[#A3A3A3] text-[17px] max-w-md leading-relaxed">
            No forms, no callbacks, no waiting. Reach us directly on WhatsApp and we&rsquo;ll respond within minutes.
          </p>
        </div>
      </section>

      {/* Contact cards + WhatsApp */}
      <section className="section bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Info */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn>
              {/* Address */}
              <div className="card p-8 flex gap-6 items-start hover:border-[#06B6D4]/40 transition-colors">
                <div className="w-12 h-12 bg-[#F0FDFE] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#06B6D4]" />
                </div>
                <div>
                  <p className="font-heading font-bold text-[#0A0A0A] text-lg mb-2">Address</p>
                  <p className="text-[#64748B] text-[15px] leading-relaxed">
                    Main Mansehra Road<br />
                    Mandian, Abbottabad, Pakistan
                  </p>
                  <p className="text-[#94A3B8] text-xs font-medium uppercase tracking-wider mt-3">
                    Near Ayub Medical Complex
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              {/* Phone */}
              <div className="card p-8 flex gap-6 items-start hover:border-[#06B6D4]/40 transition-colors">
                <div className="w-12 h-12 bg-[#F0FDFE] rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#06B6D4]" />
                </div>
                <div>
                  <p className="font-heading font-bold text-[#0A0A0A] text-lg mb-2">Phone</p>
                  <a href="tel:+923197301342" className="text-[#64748B] text-[15px] hover:text-[#06B6D4] transition-colors font-medium">
                    +92 319 7301342
                  </a>
                  <p className="text-[#94A3B8] text-xs font-medium uppercase tracking-wider mt-3">Available during clinic hours</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              {/* Hours */}
              <div className="card p-8 flex gap-6 items-start hover:border-[#06B6D4]/40 transition-colors">
                <div className="w-12 h-12 bg-[#F0FDFE] rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#06B6D4]" />
                </div>
                <div className="w-full">
                  <p className="font-heading font-bold text-[#0A0A0A] text-lg mb-4">Opening Hours</p>
                  <div className="space-y-3">
                    {HOURS.map((h) => (
                      <div key={h.day} className="flex items-center justify-between text-[15px]">
                        <span className="text-[#64748B]">{h.day}</span>
                        <span className={`font-semibold ${h.day === "Emergency" ? "text-[#06B6D4]" : "text-[#0A0A0A]"}`}>
                          {h.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: WhatsApp CTA */}
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="p-10 bg-[#0A0A0A] rounded-[2rem] flex flex-col gap-8 sticky top-32 shadow-xl ring-1 ring-white/10">
                <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center wa-pulse shadow-lg">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.847L.057 23.5l5.797-1.522A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.89 9.89 0 01-5.031-1.372l-.361-.214-3.741.981.999-3.648-.235-.374A9.865 9.865 0 012.1 12C2.1 6.525 6.525 2.1 12 2.1S21.9 6.525 21.9 12 17.475 21.9 12 21.9z"/>
                  </svg>
                </div>

                <div>
                  <h2 className="heading-md text-white mb-3">
                    Book via WhatsApp
                  </h2>
                  <p className="text-[#A3A3A3] text-[15px] leading-relaxed">
                    The fastest way to reach us. We reply within minutes during working hours.
                  </p>
                </div>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-center"
                >
                  Open WhatsApp <ArrowRight className="w-4 h-4" />
                </a>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-[#737373] text-[13px] text-center font-medium">
                    Or call us at{" "}
                    <a href="tel:+923197301342" className="text-[#D4D4D8] hover:text-white transition-colors">
                      +92 319 7301342
                    </a>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
