import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Compass } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact & Book Appointment | SmileCare Pro",
  description: "Contact SmileCare Pro in DHA Phase 5, Karachi, Pakistan. View clinic operating hours, phone numbers, location directions, and book appointments online.",
};

export default function ContactPage() {
  return (
    <div className="relative w-full">
      {/* Page Header */}
      <section className="relative bg-gradient-to-b from-[#EBF6F9] via-[#FAFCFD] to-[#FAFCFD] pt-32 pb-16 overflow-hidden border-b border-borders/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center relative z-10">
          <span className="text-primary text-xs uppercase tracking-wider font-bold block mb-3">
            Get In Touch
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dark-navy mb-4">
            Contact & Bookings
          </h1>
          <p className="text-light-text text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Have a question or ready to schedule your visit? Reach out to our front desk or book online.
          </p>
        </div>
      </section>

      {/* Main Split Content */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Info, Hours & Map Mockup */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Direct Info */}
            <div className="flex flex-col gap-6">
              <h2 className="font-heading font-bold text-2xl text-dark-navy">Clinic Details</h2>
              <ul className="flex flex-col gap-5 text-sm text-light-text">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-dark-navy block">Physical Address</span>
                    <span className="leading-relaxed mt-1 block">
                      Building 42-C, 10th Commercial Lane, DHA Phase 5, Karachi, Pakistan
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-dark-navy block">Phone Support</span>
                    <a href="tel:+923001234567" className="leading-relaxed mt-1 block hover:text-primary transition-colors">
                      +92 300 1234567
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-dark-navy block">Email Inquiries</span>
                    <a href="mailto:info@smilecarepro.pk" className="leading-relaxed mt-1 block hover:text-primary transition-colors">
                      info@smilecarepro.pk
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Operating Hours */}
            <div className="flex flex-col gap-5">
              <h2 className="font-heading font-bold text-2xl text-dark-navy flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Operating Hours
              </h2>
              <div className="border border-borders rounded-xl bg-[#FAFCFD] overflow-hidden">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 9:00 PM" },
                  { day: "Saturday", hours: "9:00 AM - 9:00 PM" },
                  { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
                  { day: "Emergency Support", hours: "24/7 Hours Helpline" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center px-5 py-3 border-b border-borders/50 last:border-b-0 last:bg-red-50/20"
                  >
                    <span className={`text-xs font-semibold ${idx === 3 ? "text-red-600" : "text-light-text"}`}>
                      {item.day}
                    </span>
                    <span className={`text-xs font-bold ${idx === 3 ? "text-red-600" : "text-dark-navy"}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Location Map Card */}
            <div className="border border-borders bg-[#FAFCFD] p-6 rounded-2xl shadow-sm flex flex-col gap-4">
              <h3 className="font-heading font-bold text-base text-dark-navy flex items-center gap-2">
                <Compass className="w-5 h-5 text-primary" /> Directions
              </h3>
              <p className="text-light-text text-xs leading-relaxed">
                Located centrally in DHA Phase 5, Karachi. Easily accessible from Zamzama Commercial Area and Khayaban-e-Ittehad. Safe, secure parking is available directly in front of the clinic.
              </p>
              <div className="aspect-[16/9] bg-slate-200 rounded-xl border border-borders relative overflow-hidden flex items-center justify-center text-center">
                {/* Visual placeholder representation of map grid */}
                <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:12px_12px]" />
                <div className="absolute w-[80%] h-px bg-primary/20" />
                <div className="absolute h-[80%] w-px bg-primary/20" />
                <div className="relative z-10 p-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2 shadow-lg animate-bounce">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <span className="font-heading font-bold text-xs text-dark-navy block">SmileCare Pro Clinic</span>
                  <span className="text-[10px] text-light-text block mt-0.5">DHA Phase 5, Karachi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment booking form */}
          <div className="lg:col-span-7" id="appointment">
            <FadeIn>
              <AppointmentForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Sterility Banner */}
      <section className="py-20 bg-dark-navy text-white text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#FAFCFD_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 relative z-10 flex flex-col items-center gap-6">
          <ShieldCheck className="w-12 h-12 text-accent" />
          <h2 className="font-heading font-bold text-2xl sm:text-3xl max-w-xl leading-tight">
            PMC Registered & WHO Sterile Standard Clinic
          </h2>
          <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
            All consultations are conducted under clinical guidelines, utilizing Class B vacuum autoclaving. Your health and safety are fully secured.
          </p>
        </div>
      </section>
    </div>
  );
}
