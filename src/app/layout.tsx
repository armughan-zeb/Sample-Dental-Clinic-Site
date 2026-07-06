import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SmileCare Pro | Premium Dental Clinic in Karachi",
    template: "%s | SmileCare Pro",
  },
  description:
    "Karachi's trusted dental clinic for teeth whitening, implants, braces, veneers, and more. PMC certified. Book instantly on WhatsApp.",
  keywords: ["dental clinic Karachi", "teeth whitening Karachi", "dental implants Pakistan", "PMC dentist"],
  openGraph: {
    title: "SmileCare Pro | Premium Dental Clinic in Karachi",
    description: "Karachi's trusted dental clinic. Book your appointment on WhatsApp.",
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
