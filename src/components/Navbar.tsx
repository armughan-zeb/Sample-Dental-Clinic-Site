"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Simplify desktop links to reduce clutter, keeping all for mobile
const desktopLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Transformations", href: "/smile-transformations" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const mobileLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Clinic", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Transformations", href: "/smile-transformations" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3.5 border-b border-borders/40"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          {/* Logo Left */}
          <Link href="/" className="flex items-center gap-2 group focus:outline-none">
            <motion.div
              animate={{ scale: isScrolled ? 0.95 : 1 }}
              transition={{ duration: 0.3 }}
              className="font-heading font-bold text-xl lg:text-2xl tracking-tight text-dark-navy flex items-center gap-1.5"
            >
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-lg font-bold shadow-md shadow-primary/20 transition-transform duration-300 group-hover:rotate-6">
                S
              </span>
              SmileCare<span className="text-primary">Pro</span>
            </motion.div>
          </Link>

          {/* Navigation Center (Clean, spacious, 5 links) */}
          <nav className="hidden lg:flex items-center gap-10">
            {desktopLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-sans text-[13px] font-semibold uppercase tracking-wider transition-colors duration-300 py-1.5 focus:outline-none focus-visible:text-primary ${
                    isActive ? "text-primary" : "text-light-text hover:text-dark-navy"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Buttons (Single CTA for premium look) */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/contact#appointment"
              className="px-6 py-2.5 bg-primary hover:bg-primary/95 text-white font-sans text-xs font-bold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-dark-navy hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] z-40 bg-white lg:hidden flex flex-col justify-between p-6 border-t border-borders/50 shadow-xl"
          >
            <div className="flex flex-col gap-3 overflow-y-auto py-4">
              {mobileLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className={`block font-heading text-base font-bold py-2 border-b border-borders/30 ${
                        isActive ? "text-primary border-primary/20" : "text-dark-navy"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 border-t border-borders/60 pt-6 pb-12">
              <a
                href="tel:+923001234567"
                className="flex items-center justify-center gap-3 w-full py-3 bg-[#FAFCFD] border border-borders/80 text-dark-navy font-semibold rounded-xl text-center hover:bg-borders/20 transition-all"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>+92 300 1234567</span>
              </a>
              <Link
                href="/contact#appointment"
                className="w-full py-3.5 bg-primary text-white font-semibold rounded-xl text-center shadow-lg shadow-primary/20 hover:bg-primary/95 transition-all"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
