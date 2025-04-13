"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Calendar, ArrowRight, X } from "lucide-react";
import Link from "next/link";

const CallToAction: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-b from-white/50 to-white/10 dark:from-gray-900/40 dark:to-gray-800/10 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-300 dark:border-gray-700 max-w-4xl mx-auto p-10 text-center overflow-hidden my-12 flex flex-col items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-indigo-400/30 blur-[100px] opacity-50 pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight"
        >
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Partner with Sirius A Marketing
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          Elevate your business with expert marketing strategies. Schedule a complimentary consultation today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Link href="tel:+4407362622636">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-5 py-3 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md border border-gray-200 dark:border-gray-700"
            >
              <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-gray-900 dark:text-white font-medium">+44 07362 622636</span>
            </motion.div>
          </Link>

          <Link href="mailto:contact@siriusamarketing.com">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-5 py-3 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md border border-gray-200 dark:border-gray-700"
            >
              <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-gray-900 dark:text-white font-medium">contact@siriusamarketing.com</span>
            </motion.div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            Schedule Consultation
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[99999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal Wrapper (Flex Centering) */}
            <motion.div
              className="fixed inset-0 z-[99999] flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Modal Box */}
              <motion.div
                className="w-[90%] max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Book Your Free Consultation
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Calendly iframe */}
                <iframe
                  src="https://calendly.com/contact-siriusamarketing/30min"
                  width="100%"
                  height="600"
                  className="rounded-lg border border-gray-200 dark:border-gray-700"
                  frameBorder="0"
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CallToAction;
