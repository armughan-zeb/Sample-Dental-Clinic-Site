import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | SmileCare Pro",
  description: "Read the Terms of Service of SmileCare Pro regarding dental bookings, cancellations, and treatment policies.",
};

export default function TermsPage() {
  return (
    <div className="relative w-full py-24 bg-white">
      <div className="max-w-[800px] mx-auto px-6 pt-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-dark-navy mb-6">
          Terms of Service
        </h1>
        <p className="text-light-text text-xs mb-8">Last Updated: July 5, 2026</p>

        <div className="prose prose-slate max-w-none flex flex-col gap-6 text-light-text text-sm sm:text-base leading-relaxed">
          <p>
            Welcome to SmileCare Pro. By accessing our website or booking dental appointments with our clinic, you agree to comply with the following Terms of Service.
          </p>

          <h2 className="font-heading font-bold text-lg text-dark-navy mt-4">1. Appointments & Confirmations</h2>
          <p>
            Online reservation requests are subject to clinical availability. A booking request submitted through this website is not finalized until our front desk contacts you directly via call or message to lock in your slot.
          </p>

          <h2 className="font-heading font-bold text-lg text-dark-navy mt-4">2. Cancellations & Re-scheduling</h2>
          <p>
            To help us serve emergency cases and other scheduled patients efficiently, we kindly request at least 24 hours notice for any cancellations or re-scheduling. This helps us allocate vacant slots to patients experiencing active tooth pain.
          </p>

          <h2 className="font-heading font-bold text-lg text-dark-navy mt-4">3. Medical Liability Disclaimer</h2>
          <p>
            The educational information provided on our blog, FAQs, or service pages is intended for general patient awareness and is not a substitute for diagnostic checkups under clinical chairs. Exact treatment outcomes depend entirely on individual anatomical structures and diagnostic scans.
          </p>
        </div>
      </div>
    </div>
  );
}
