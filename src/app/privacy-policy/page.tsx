import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | SmileCare Pro",
  description: "Read the Privacy Policy of SmileCare Pro regarding patient diagnostic data and website form submissions.",
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-light-text text-xs mb-8">Last Updated: July 5, 2026</p>

        <div className="prose prose-slate max-w-none flex flex-col gap-6 text-light-text text-sm sm:text-base leading-relaxed">
          <p>
            At SmileCare Pro, we take the confidentiality of your personal and medical diagnostics extremely seriously. This Privacy Policy describes how we collect, process, and safeguard the information you provide via our website form submissions and appointment reservation systems.
          </p>

          <h2 className="font-heading font-bold text-lg text-dark-navy mt-4">1. Information We Collect</h2>
          <p>
            When you use our online appointment form or message our desk, we gather personal identifying details necessary to schedule and confirm your treatment, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your full name and contact information (phone number, email address).</li>
            <li>Your preferred treatment selections and date choices.</li>
            <li>Any medical comments or symptoms you choose to share in the notes field.</li>
          </ul>

          <h2 className="font-heading font-bold text-lg text-dark-navy mt-4">2. How We Use Your Data</h2>
          <p>
            We process your information strictly for clinical coordination purposes, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reviewing your treatment request and allocating appropriate clinic slots.</li>
            <li>Calling or messaging you on your mobile number to confirm bookings.</li>
            <li>Filing dental insurance panel claims under your authorization.</li>
          </ul>

          <h2 className="font-heading font-bold text-lg text-dark-navy mt-4">3. Data Sharing & Security</h2>
          <p>
            We do not sell, trade, or share your medical details or contact numbers with third-party marketers. Your diagnostic data is accessed exclusively by our licensed PMC specialists and front desk coordinators. We use encrypted databases to store form submissions to prevent unauthorized data access.
          </p>
        </div>
      </div>
    </div>
  );
}
