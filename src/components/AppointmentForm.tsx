"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, Phone, MessageSquare, CheckCircle, ChevronDown, Sparkles } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^((\+92)|(0092)|(0))?3\d{9}$/, {
    message: "Please enter a valid Pakistani mobile number (e.g., 03001234567)",
  }),
  treatment: z.string().min(1, "Please select a treatment"),
  date: z.string().min(1, "Please select a preferred date"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const treatments = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Root Canal Treatment",
  "Orthodontics (Braces)",
  "Kids Dentistry",
  "Teeth Whitening",
  "Porcelain Veneers & Crowns",
  "Emergency Dental Care",
];

export default function AppointmentForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      treatment: "",
      date: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSuccess(true);
    reset();
  };

  return (
    <div className="relative w-full max-w-xl mx-auto bg-white rounded-2xl border border-borders shadow-xl p-8 lg:p-10 overflow-hidden">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Book Online
              </span>
              <h3 className="font-heading font-bold text-2xl text-dark-navy">
                Schedule Your Visit
              </h3>
              <p className="text-light-text text-sm mt-2">
                Fill in the details below, and our coordinator will confirm your slot.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name field */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-dark-navy">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-light-text" />
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    placeholder="Muhammad Ali"
                    className={`w-full pl-10 pr-4 py-3 bg-[#FAFCFD] border rounded-lg text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-200"
                        : "border-borders focus:border-primary focus:ring-primary/10"
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-xs font-medium">{errors.name.message}</p>
                )}
              </div>

              {/* Phone field */}
              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-xs font-semibold text-dark-navy">
                  Mobile Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-light-text" />
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    placeholder="03001234567"
                    className={`w-full pl-10 pr-4 py-3 bg-[#FAFCFD] border rounded-lg text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.phone
                        ? "border-red-500 focus:ring-red-200"
                        : "border-borders focus:border-primary focus:ring-primary/10"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs font-medium">{errors.phone.message}</p>
                )}
              </div>

              {/* Treatment field */}
              <div className="space-y-1.5">
                <label htmlFor="treatment" className="text-xs font-semibold text-dark-navy">
                  Select Treatment
                </label>
                <div className="relative">
                  <select
                    id="treatment"
                    {...register("treatment")}
                    className={`w-full px-3.5 py-3 bg-[#FAFCFD] border rounded-lg text-sm transition-all focus:outline-none focus:ring-2 appearance-none ${
                      errors.treatment
                        ? "border-red-500 focus:ring-red-200"
                        : "border-borders focus:border-primary focus:ring-primary/10"
                    }`}
                  >
                    <option value="">Choose a treatment...</option>
                    {treatments.map((treatment) => (
                      <option key={treatment} value={treatment}>
                        {treatment}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-light-text pointer-events-none" />
                </div>
                {errors.treatment && (
                  <p className="text-red-500 text-xs font-medium">{errors.treatment.message}</p>
                )}
              </div>

              {/* Preferred Date field */}
              <div className="space-y-1.5">
                <label htmlFor="date" className="text-xs font-semibold text-dark-navy">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-light-text" />
                  <input
                    type="date"
                    id="date"
                    {...register("date")}
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full pl-10 pr-4 py-3 bg-[#FAFCFD] border rounded-lg text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.date
                        ? "border-red-500 focus:ring-red-200"
                        : "border-borders focus:border-primary focus:ring-primary/10"
                    }`}
                  />
                </div>
                {errors.date && (
                  <p className="text-red-500 text-xs font-medium">{errors.date.message}</p>
                )}
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-dark-navy">
                  Additional Notes (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-light-text" />
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={3}
                    placeholder="Tell us about any specific dental concerns or preferences..."
                    className="w-full pl-10 pr-4 py-3 bg-[#FAFCFD] border border-borders rounded-lg text-sm transition-all focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-primary text-white font-sans text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  "Request Appointment"
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mb-6"
            >
              <CheckCircle className="w-8 h-8" />
            </motion.div>
            <h3 className="font-heading font-bold text-2xl text-dark-navy mb-3">
              Request Received!
            </h3>
            <p className="text-light-text text-sm max-w-sm leading-relaxed mb-8">
              Thank you for choosing SmileCare Pro. Our representative will contact you on your mobile number within 2 hours to confirm your appointment slot.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="px-6 py-2.5 bg-dark-navy text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              Book Another Visit
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
