"use client";

import { useState } from "react";
import { Calendar, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CalendlyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(true)}
        className="group flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition-all duration-300"
      >
        <Calendar className="w-5 h-5" />
        Schedule Consultation
        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[99999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)} // Close on overlay click
            />

            {/* Modal Content */}
            <motion.div
              className="fixed z-[99999] top-1/2 left-1/2 w-[90%] max-w-3xl -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Book Your Free Consultation
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Embedded Calendly */}
              <iframe
                src="https://calendly.com/siriusamarketing/consultation"
                width="100%"
                height="600"
                className="rounded-lg border border-gray-200 dark:border-gray-700"
                frameBorder="0"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CalendlyModal;
