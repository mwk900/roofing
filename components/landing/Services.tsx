"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/lib/data';
import type { Service } from '@/lib/types';

// SVG Icons

function RepairIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function ReroofIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function FlatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2z" />
      <path d="M2 10h20" />
    </svg>
  );
}

function ChimneyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 20V8l6-6 6 6v12" />
      <path d="M9 20V14h6v6" />
      <path d="M11 8h2" />
    </svg>
  );
}

function GutterIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h16" />
      <path d="M4 6v2a2 2 0 002 2h12a2 2 0 002-2V6" />
      <path d="M8 10v10" />
      <path d="M16 10v5" />
    </svg>
  );
}

function EmergencyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
    </svg>
  );
}

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <motion.svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: expanded ? 180 : 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </motion.svg>
  );
}

const iconMap: Record<Service['icon'], React.ReactNode> = {
  repair: <RepairIcon />,
  reroof: <ReroofIcon />,
  flat: <FlatIcon />,
  chimney: <ChimneyIcon />,
  gutter: <GutterIcon />,
  emergency: <EmergencyIcon />,
};

function ServiceCard({ service, index, expanded, onToggle }: {
  service: Service;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const isEmergency = service.id === 'emergency';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.1 }}
      className="bg-bg-card rounded-2xl border border-border overflow-hidden cursor-pointer"
      onClick={onToggle}
    >
      {/* Card header - always visible */}
      <div className="p-5">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${isEmergency ? 'bg-emergency-soft text-emergency' : 'bg-accent-soft text-accent'}`}>
          {iconMap[service.icon]}
        </div>

        {/* Title + price row */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-lg text-text-primary leading-snug">{service.title}</h3>
          <span className={`shrink-0 text-xs font-semibold rounded-full px-3 py-1 whitespace-nowrap ${isEmergency ? 'bg-emergency-soft text-emergency' : 'bg-accent-soft text-accent'}`}>
            {service.fromPrice}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-4">{service.description}</p>

        {/* Toggle button */}
        <button
          type="button"
          className="flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors min-h-[48px] -mb-2"
          aria-expanded={expanded}
          onClick={(e) => { e.stopPropagation(); onToggle(); }}
        >
          <span>{expanded ? 'Close' : 'Learn more'}</span>
          <ChevronIcon expanded={expanded} />
        </button>
      </div>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="expanded"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-t border-border mx-5" />
            <div className="px-5 pt-4 pb-5 space-y-4">
              {/* Includes */}
              <ul className="space-y-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-primary">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Timescale */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Timescale</span>
                <span className="text-sm font-semibold text-text-primary">{service.timescale}</span>
              </div>

              {/* CTA */}
              <a
                href="#quote"
                className={`flex items-center justify-center w-full min-h-[48px] rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90 ${isEmergency ? 'bg-emergency' : 'bg-accent'}`}
                onClick={(e) => e.stopPropagation()}
              >
                Get a quote for this
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  function handleToggle(id: string) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  return (
    <section id="services" className="bg-bg-primary py-12 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">What we do</h2>
          <p className="text-text-secondary text-base md:text-lg">Every job quoted in writing before work starts.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              expanded={expandedId === service.id}
              onToggle={() => handleToggle(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
