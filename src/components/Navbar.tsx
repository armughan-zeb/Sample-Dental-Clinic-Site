"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export const WA_LINK =
  "https://wa.me/923197301342?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20SmileCare%20Pro.";

const NAV_LINKS = [
  { name: "Home",     href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery",  href: "/gallery" },
  { name: "About",    href: "/about" },
  { name: "Contact",  href: "/contact" },
];

function ToothIcon({ color = "#FFFFFF" }: { color?: string }) {
  return (
    <svg width="24" height="28" viewBox="0 0 20 24" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M10 1C6.8 1 4 3.9 4 7.5c0 1.1.2 2.3.6 3.5L6.5 22h2l1.5-4.5L11.5 22h2l1.9-11C15.8 9.8 16 8.6 16 7.5 16 3.9 13.2 1 10 1z"
        fill={color}
      />
      <path
        d="M7.5 10.5 Q10 13 12.5 10.5"
        stroke="#06B6D4"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const pathname                    = usePathname();
  const isHome                      = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Transparent over dark hero only on home; white everywhere else
  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          transparent
            ? "bg-transparent border-b border-transparent"
            : "bg-white/90 backdrop-blur-xl border-b border-[#E2E8F0] shadow-sm"
        }`}
      >
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 focus:outline-none" aria-label="SmileCare Pro home">
            <ToothIcon color={transparent ? "#FFFFFF" : "#0A0A0A"} />
            <span
              className={`font-heading font-extrabold text-[20px] tracking-tight transition-colors ${
                transparent ? "text-white" : "text-[#0A0A0A]"
              }`}
            >
              SmileCare<span className="text-[#06B6D4]">Pro</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-medium tracking-wide transition-colors focus:outline-none ${
                    transparent
                      ? active ? "text-white" : "text-white/60 hover:text-white"
                      : active ? "text-[#0A0A0A]" : "text-[#64748B] hover:text-[#0A0A0A]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={transparent ? "btn-primary" : "btn-primary-dark"}
              style={{ padding: "0.5rem 1.25rem", fontSize: "0.8rem" }}
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation"
            className={`md:hidden p-2 rounded-md transition-colors ${
              transparent ? "text-white/70 hover:text-white" : "text-[#64748B] hover:text-[#0A0A0A]"
            }`}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-16 z-40 bg-white border-b border-[#E2E8F0] md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto py-5 flex flex-col gap-0.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3.5 text-[15px] font-medium border-b border-[#E2E8F0] last:border-0 transition-colors ${
                pathname === link.href ? "text-[#0A0A0A]" : "text-[#64748B]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-dark w-full mt-5"
          >
            Book Appointment on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
