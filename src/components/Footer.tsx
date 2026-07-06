import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-navy text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        {/* Column 1: Clinic Info */}
        <div className="flex flex-col gap-6">
          <div className="font-heading font-bold text-2xl tracking-tight text-white flex items-center gap-1.5">
            <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-lg font-bold shadow-md shadow-primary/20">
              S
            </span>
            SmileCare<span className="text-accent">Pro</span>
          </div>
          <p className="text-light-text text-sm leading-relaxed text-slate-400">
            A premium, conversion-focused dental clinic delivering world-class dental care. Experience painless procedures, modern equipment, and highly certified specialists in Pakistan.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" className="p-2 rounded-lg bg-slate-800 hover:bg-primary hover:-translate-y-1 transition-all duration-300 text-slate-400 hover:text-white" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://instagram.com" className="p-2.5 rounded-lg bg-slate-800 hover:bg-primary hover:-translate-y-1 transition-all duration-300 text-slate-400 hover:text-white" aria-label="Instagram">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://twitter.com" className="p-2.5 rounded-lg bg-slate-800 hover:bg-primary hover:-translate-y-1 transition-all duration-300 text-slate-400 hover:text-white" aria-label="Twitter">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" className="p-2 rounded-lg bg-slate-800 hover:bg-primary hover:-translate-y-1 transition-all duration-300 text-slate-400 hover:text-white" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="flex flex-col gap-5">
          <h3 className="font-heading font-semibold text-base text-white tracking-wider uppercase">Our Services</h3>
          <ul className="flex flex-col gap-3">
            {[
              { name: "Teeth Whitening", href: "/services/teeth-whitening" },
              { name: "Dental Implants", href: "/services/dental-implants" },
              { name: "Root Canal Treatment", href: "/services/root-canal" },
              { name: "Orthodontics (Braces)", href: "/services/braces" },
              { name: "Porcelain Veneers", href: "/services/veneers" },
              { name: "Dental Crowns", href: "/services/crowns" },
              { name: "Emergency Dentistry", href: "/services/emergency-dentistry" },
              { name: "Children's Dentistry", href: "/services/children-dentistry" },
            ].map((service) => (
              <li key={service.name}>
                <Link
                  href={service.href}
                  className="text-slate-400 hover:text-accent text-sm transition-colors duration-250 flex items-center gap-1 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-accent transition-colors" />
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="flex flex-col gap-5">
          <h3 className="font-heading font-semibold text-base text-white tracking-wider uppercase">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            {[
              { name: "Home", href: "/" },
              { name: "About Clinic", href: "/about" },
              { name: "Meet the Dentists", href: "/meet-the-dentists" },
              { name: "Smile Gallery", href: "/gallery" },
              { name: "Before & After", href: "/smile-transformations" },
              { name: "Transparent Pricing", href: "/pricing" },
              { name: "Dental Blog", href: "/blog" },
              { name: "Frequently Asked Questions", href: "/faq" },
              { name: "Contact & Booking", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-slate-400 hover:text-accent text-sm transition-colors duration-250"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Details */}
        <div className="flex flex-col gap-5">
          <h3 className="font-heading font-semibold text-base text-white tracking-wider uppercase">Get In Touch</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-1">
            Have questions or want to request an appointment? Reach out to our front desk.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-slate-400 text-sm leading-relaxed">
                Building 42-C, 10th Commercial Lane, DHA Phase 5, Karachi, Pakistan
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <a href="tel:+923001234567" className="text-slate-400 hover:text-white text-sm transition-colors">
                +92 300 1234567
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent shrink-0" />
              <a href="mailto:info@smilecarepro.pk" className="text-slate-400 hover:text-white text-sm transition-colors">
                info@smilecarepro.pk
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-xs text-center md:text-left">
          &copy; {new Date().getFullYear()} SmileCare Pro. All rights reserved. Registered PMC/PMDC Dental Facility.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/privacy-policy" className="text-slate-500 hover:text-slate-400 text-xs transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-slate-500 hover:text-slate-400 text-xs transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
