"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999zm-4 0h2c0-2.761-2.238-5-5-5v2c1.657 0 3 1.343 3 3zm-3 5.5c-1.25 0-2.5-.5-3.5-1.5S8 12.75 8 11.5c0-.667-.333-1-1-1H4c-.667 0-1 .333-1 1 0 6.627 5.373 12 12 12 .667 0 1-.333 1-1v-3c0-.667-.333-1-1-1z" />
    </svg>
  );
}

export default function FloatingCallButton() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="hidden md:flex fixed z-40 flex-col items-end" style={{ bottom: "32px", right: "24px" }}>
      <AnimatePresence>
        {open && (
          <motion.div
            key="contact-panel"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-3 w-64 rounded-2xl bg-[#1E293B] shadow-2xl overflow-hidden"
          >
            {/* Panel header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <span className="text-white font-semibold text-sm">Contact us</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close contact panel"
                className="text-white/50 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Contact rows */}
            <div className="px-4 py-3 flex flex-col gap-3">

              {/* Phone */}
              <a
                href="tel:01150000000"
                className="flex items-center gap-3 group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#DC2626]/20 text-[#DC2626] flex-shrink-0">
                  <PhoneIcon className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-white/50 text-xs">Call us</p>
                  <p className="text-white font-semibold text-sm group-hover:text-[#E67E22] transition-colors">0115 000 0000</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@northcrestroofing.co.uk"
                className="flex items-center gap-3 group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#E67E22]/20 text-[#E67E22] flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <div>
                  <p className="text-white/50 text-xs">Email us</p>
                  <p className="text-white font-semibold text-sm group-hover:text-[#E67E22] transition-colors leading-tight">hello@northcrest<br />roofing.co.uk</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/441150000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#16A34A]/20 text-[#16A34A] flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </span>
                <div>
                  <p className="text-white/50 text-xs">WhatsApp</p>
                  <p className="text-white font-semibold text-sm group-hover:text-[#16A34A] transition-colors">Send a message</p>
                </div>
              </a>

              {/* Hours */}
              <div className="pt-1 border-t border-white/10">
                <p className="text-white/40 text-xs">Mon to Sat, 8am to 6pm</p>
                <p className="text-white/40 text-xs">Emergency line 24/7</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close contact panel" : "Open contact details"}
        aria-expanded={open}
        className="floating-call-btn flex items-center justify-center w-14 h-14 rounded-full bg-[#DC2626] hover:bg-[#b91c1c] shadow-lg shadow-[#DC2626]/40 text-white transition-colors duration-150 focus:outline-none focus:ring-4 focus:ring-[#DC2626]/50"
        initial={{ scale: 0, opacity: 0 }}
        animate={mounted ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.div
              key="close"
              className="w-6 h-6 flex items-center justify-center"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="phone"
              className="w-6 h-6 flex items-center justify-center"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <PhoneIcon className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
