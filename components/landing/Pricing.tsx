"use client";

import { motion } from 'framer-motion';
import { pricing } from '@/lib/data';
import type { PricingRow } from '@/lib/types';

const rowVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' as const, delay: i * 0.06 },
  }),
};

export default function Pricing() {
  return (
    <section id="pricing" className="bg-bg-primary py-12 md:py-20 px-5 md:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
            Honest pricing. No surprises.
          </h2>
          <p className="text-text-secondary text-base md:text-lg">
            Every job gets a written quote before work starts.
          </p>
        </div>

        {/* Demo disclaimer */}
        <div className="mb-6 flex items-center gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M12 9v4M12 17h.01" />
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
          <span>Indicative prices only. This is a portfolio demo site.</span>
        </div>

        {/* Desktop table */}
        <table className="hidden md:table table-auto w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Job type
              </th>
              <th className="py-3 text-right text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Typical from
              </th>
            </tr>
          </thead>
          <tbody>
            {pricing.map((row: PricingRow, i: number) => (
              <motion.tr
                key={row.job}
                custom={i}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`border-b border-border ${i % 2 === 1 ? 'bg-bg-secondary' : ''}`}
              >
                <td className="py-3.5 pr-4 text-sm text-text-primary">
                  {row.job}
                </td>
                <td className="py-3.5 text-right text-sm font-bold text-accent">
                  {row.from}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>

        {/* Mobile cards */}
        <div className="md:hidden flex flex-col gap-2">
          {pricing.map((row: PricingRow, i: number) => (
            <motion.div
              key={row.job}
              custom={i}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-between gap-3 rounded-xl border border-border bg-bg-card px-4 py-3.5"
            >
              <span className="text-sm text-text-primary leading-snug">{row.job}</span>
              <span className="shrink-0 text-sm font-bold text-accent">{row.from}</span>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-6 text-sm text-text-secondary italic leading-relaxed">
          All prices include labour, materials, and waste removal. Scaffolding quoted separately
          where needed. Every job gets a written quote before work starts.
        </p>

      </div>
    </section>
  );
}
