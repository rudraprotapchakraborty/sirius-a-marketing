"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const CallToAction: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-white/50 to-white/10 dark:from-gray-900/40 dark:to-gray-800/10 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-300 dark:border-gray-700 max-w-4xl mx-auto p-10 text-center overflow-hidden my-6">
      {/* Elegant Glow Effect - Non-interactive */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-indigo-400/30 blur-[100px] opacity-50 pointer-events-none"></div>

      <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Partner with Sirius A Marketing
        </span>
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Elevate your business with expert marketing strategies. Schedule a complimentary consultation today.
      </p>

      {/* Contact Info */}
      <div className="mt-6 space-y-2">
        <p className="text-lg font-medium text-gray-900 dark:text-white flex items-center justify-center gap-2">
          📞 Call us:{" "}
          <Link
            href="tel:+4407362622636"
            className="text-purple-600 dark:text-purple-400 hover:underline transition-colors"
          >
            +44 07362 622636
          </Link>
        </p>
        <p className="text-lg font-medium text-gray-900 dark:text-white flex items-center justify-center gap-2">
          📧 Email:{" "}
          <Link
            href="mailto:siriusmarketing@gmail.com"
            className="text-purple-600 dark:text-purple-400 hover:underline transition-colors"
          >
            contact@siriusamarketing.com
          </Link>
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-8">
        <Link href="/contact">
          <button className="px-6 py-3 text-lg font-semibold rounded-full shadow-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition-transform duration-300 hover:scale-105">
            Schedule Consultation
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;