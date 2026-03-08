'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { reviews } from '@/lib/data';
import type { Review } from '@/lib/types';

// ─── Star SVG ───────────────────────────────────────────────────────────────

function StarFilled({ dim = false }: { dim?: boolean }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={dim ? 'opacity-20' : ''}
    >
      <path
        fill={dim ? '#9CA3AF' : '#F59E0B'}
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      />
    </svg>
  );
}

function StaticStars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarFilled key={i} dim={i >= count} />
      ))}
    </div>
  );
}

function AnimatedStars({ count = 5 }: { count?: number }) {
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setFilled(current);
      if (current >= count) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarFilled key={i} dim={i >= filled} />
      ))}
    </div>
  );
}

// ─── Badge color map ─────────────────────────────────────────────────────────

const badgeClass: Record<Review['badge'], string> = {
  emergency: 'bg-badge-repair text-white',
  repair: 'bg-badge-repair text-white',
  reroof: 'bg-badge-reroof text-white',
  flat: 'bg-badge-flat text-white',
  chimney: 'bg-badge-chimney text-white',
  gutter: 'bg-badge-gutter text-white',
};

// ─── Quotation mark SVG ───────────────────────────────────────────────────────

function QuoteMark() {
  return (
    <svg
      viewBox="0 0 80 60"
      fill="currentColor"
      className="w-20 h-16 text-accent opacity-20 absolute top-4 left-4 md:top-6 md:left-6 pointer-events-none select-none"
      aria-hidden="true"
    >
      <path d="M0 60V36C0 17.6 11.2 5.2 33.6 0l4.8 8C25.2 11.6 18.8 19.2 18 30h18v30H0zm42 0V36C42 17.6 53.2 5.2 75.6 0l4.8 8C67.2 11.6 60.8 19.2 60 30h18v30H42z" />
    </svg>
  );
}

// ─── Featured review card ────────────────────────────────────────────────────

function FeaturedCard({ review }: { review: Review }) {
  return (
    <motion.div
      className="relative bg-bg-card rounded-2xl shadow-md border-l-4 border-accent p-6 md:p-8 overflow-hidden mb-8 md:mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <QuoteMark />

      <div className="relative z-10">
        <AnimatedStars count={review.rating} />

        <p className="mt-4 text-lg md:text-xl italic text-text-primary font-medium leading-relaxed">
          {review.text}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="font-bold text-text-primary">{review.name}</span>
          <span className="text-text-secondary text-sm">{review.area}</span>
          <span
            className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${badgeClass[review.badge]}`}
          >
            {review.projectType}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Regular review card ─────────────────────────────────────────────────────

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      className="bg-bg-card rounded-xl shadow-sm border border-border p-5"
      initial={{ opacity: 0, x: fromLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.15 }}
    >
      <StaticStars count={review.rating} />

      <p className="mt-3 text-sm text-text-primary leading-relaxed">
        {review.text}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="font-semibold text-sm text-text-primary">
          {review.name}
        </span>
        <span className="text-text-secondary text-xs">{review.area}</span>
        <span
          className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${badgeClass[review.badge]}`}
        >
          {review.projectType}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function Reviews() {
  const featured = reviews.find((r) => r.featured);
  const others = reviews.filter((r) => !r.featured);

  return (
    <section
      id="reviews"
      className="bg-bg-secondary py-12 md:py-20 px-5 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
            What our customers say
          </h2>
          <p className="text-text-secondary text-base">
            Nottingham homeowners, real experiences.
          </p>
        </div>

        {/* Featured review */}
        {featured && <FeaturedCard review={featured} />}

        {/* Grid of remaining reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {others.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
