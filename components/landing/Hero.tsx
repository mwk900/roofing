'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PHONE, PHONE_TEL } from '@/lib/data';

const month = new Date().getMonth(); // 0 = Jan, 11 = Dec
const isStormSeason = month >= 9 || month <= 2; // Oct–Mar

function getAvailability(): { available: boolean; color: string } {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay(); // 0 = Sun, 6 = Sat
  const isWorkingDay = day >= 1 && day <= 6;
  const isWorkingHour = hour >= 8 && hour <= 17;
  return {
    available: isWorkingDay && isWorkingHour,
    color: isWorkingDay && isWorkingHour ? '#16A34A' : '#F59E0B',
  };
}

const availability = getAvailability();

const trustItems = [
  'Fully insured',
  'Written guarantees',
  'Free inspections',
  '20 mile coverage',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80&fit=crop&crop=entropy"
        alt="Roofing work in progress on a residential property"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* Main content — pt clears the fixed header (64px mobile / 72px desktop) */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-5 md:px-8 py-12 pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto w-full">
          {/* Availability indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-8"
          >
            <span
              className="avail-dot"
              style={{
                position: 'relative',
                display: 'inline-block',
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: availability.color,
                color: availability.color,
              }}
            />
            <span className="text-sm font-medium text-white/90">
              {availability.available ? 'Available now' : 'Emergency callouts 24/7'}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold text-white whitespace-pre-line leading-tight mb-5"
            style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4rem)' }}
          >
            {'Above your head.\nOn top of it.'}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80 text-lg max-w-2xl mb-6 leading-relaxed"
          >
            Emergency repairs, re-roofs and guttering across Nottingham. Written quotes. Workmanship guarantees. No call-out fee for booked inspections.
          </motion.p>

          {/* Phone number */}
          <motion.a
            href={PHONE_TEL}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="hidden sm:inline-flex items-center gap-2 text-white font-bold mb-8 hover:text-white/90 transition-colors"
            style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}
          >
            {/* Phone icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {PHONE}
          </motion.a>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden sm:flex flex-row gap-3 mb-8"
          >
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 font-bold text-white text-base transition-opacity hover:opacity-90 active:opacity-80"
              style={{
                backgroundColor: '#DC2626',
                minHeight: 56,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call emergency team
            </a>

            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-xl px-8 font-bold text-white text-base border-2 border-white bg-transparent transition-colors hover:bg-white/10 active:bg-white/20"
              style={{ minHeight: 56 }}
            >
              Get a free quote
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            {trustItems.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                <span className="text-sm text-white/70">{item}</span>
                {i < trustItems.length - 1 && (
                  <span className="text-white/30 text-xs" aria-hidden="true">
                    &bull;
                  </span>
                )}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ opacity: 0.6 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </section>
  );
}
