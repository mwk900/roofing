"use client";

import { motion } from 'framer-motion';
import { coverageAreas } from '@/lib/data';

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' as const, delay: i * 0.04 },
  }),
};

export default function Coverage() {
  return (
    <section id="areas" className="bg-bg-secondary py-12 md:py-16 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Covering Nottingham and 20 miles out
          </h2>
        </div>

        {/* Area pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {coverageAreas.map((area: string, i: number) => (
            <motion.span
              key={area}
              custom={i}
              variants={pillVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileTap={{ scale: 0.95 }}
              className="
                rounded-full px-4 py-2 text-sm font-medium
                bg-bg-card border border-border text-text-primary
                hover:border-accent hover:text-accent
                transition-colors duration-200 cursor-default
                min-h-[48px] flex items-center
              "
            >
              {area}
            </motion.span>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-sm text-text-secondary">
          Not listed?{' '}
          <a
            href="mailto:hello@northcrestroofing.co.uk"
            className="underline underline-offset-2 hover:text-accent transition-colors"
          >
            Send your postcode
          </a>{' '}
          and we will confirm.
        </p>

      </div>
    </section>
  );
}
