"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999zm-4 0h2c0-2.761-2.238-5-5-5v2c1.657 0 3 1.343 3 3zm-3 5.5c-1.25 0-2.5-.5-3.5-1.5S8 12.75 8 11.5c0-.667-.333-1-1-1H4c-.667 0-1 .333-1 1 0 6.627 5.373 12 12 12 .667 0 1-.333 1-1v-3c0-.667-.333-1-1-1z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
  );
}

export default function MobileBottomBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleQuoteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#quote");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      initial={{ y: 80, opacity: 0 }}
      animate={mounted ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.3 }}
    >
      <div
        className="bg-white/95 backdrop-blur-sm border-t border-[#E2E8F0] flex items-stretch"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0)" }}
      >
        {/* Call Now */}
        <a
          href="tel:01150000000"
          className="flex-1 flex items-center justify-center gap-2 h-14 bg-[#DC2626] hover:bg-[#b91c1c] active:bg-[#991b1b] text-white font-semibold text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50"
          aria-label="Call us on 0115 000 0000"
        >
          <PhoneIcon />
          <span>Call Now</span>
        </a>

        {/* Divider */}
        <div className="w-px bg-white/20 self-stretch flex-shrink-0" />

        {/* Free Quote */}
        <a
          href="#quote"
          onClick={handleQuoteClick}
          className="flex-1 flex items-center justify-center gap-2 h-14 bg-[#E67E22] hover:bg-[#d4711e] active:bg-[#c0641a] text-white font-semibold text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50"
          aria-label="Get a free quote"
        >
          <span>Free Quote</span>
          <ArrowRightIcon />
        </a>
      </div>
    </motion.div>
  );
}
