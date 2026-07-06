import Link from "next/link";

const WA_LINK =
  "https://wa.me/923197301342?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20SmileCare%20Pro.";

const LINKS = [
  { label: "Services", href: "/services" },
  { label: "Gallery",  href: "/gallery" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#020817] border-t border-white/8">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <svg width="20" height="24" viewBox="0 0 20 24" fill="none" aria-hidden="true">
                <path d="M10 1C6.8 1 4 3.9 4 7.5c0 1.1.2 2.3.6 3.5L6.5 22h2l1.5-4.5L11.5 22h2l1.9-11C15.8 9.8 16 8.6 16 7.5 16 3.9 13.2 1 10 1z" fill="#F1F5F9"/>
                <path d="M7.5 10.5 Q10 13 12.5 10.5" stroke="#06B6D4" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
              </svg>
              <span className="font-heading font-bold text-[16px] text-white tracking-tight">
                SmileCare<span className="text-[#06B6D4]">Pro</span>
              </span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-[240px]">
              PMC certified dental clinic serving Karachi since 2009. Your comfort is our standard.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#06B6D4] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.847L.057 23.5l5.797-1.522A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.89 9.89 0 01-5.031-1.372l-.361-.214-3.741.981.999-3.648-.235-.374A9.865 9.865 0 012.1 12C2.1 6.525 6.525 2.1 12 2.1S21.9 6.525 21.9 12 17.475 21.9 12 21.9z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#475569] mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[#94A3B8] hover:text-white text-sm font-medium transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#475569] mb-5">
              Visit Us
            </p>
            <address className="not-italic space-y-3 text-[#94A3B8] text-sm">
              <p>Block 10, Main Khayaban-e-Hafiz<br />DHA Phase 5, Karachi, Pakistan</p>
              <p>
                <a href="tel:+923197301342" className="hover:text-white transition-colors">
                  +92 319 7301342
                </a>
              </p>
              <p>
                Mon – Sat: 11:00 AM – 8:00 PM<br />
                Sunday: 12:00 PM – 5:00 PM
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-xs">
            © {new Date().getFullYear()} SmileCare Pro. All rights reserved.
          </p>
          <p className="text-[#334155] text-xs">
            PMC Registered · ISO 9001:2015 Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
