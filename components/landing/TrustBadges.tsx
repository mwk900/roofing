'use client';

import { motion } from 'framer-motion';

interface Badge {
  title: string;
  sub: string;
  icon: React.ReactNode;
}

function ShieldBadge({ inner }: { inner: React.ReactNode }) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 4 L34 10 V22 C34 30 20 36 20 36 C20 36 6 30 6 22 V10 Z"
        fill="#E67E22"
        fillOpacity={0.2}
        stroke="#E67E22"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      {inner}
    </svg>
  );
}

const badges: Badge[] = [
  {
    title: 'Fully Insured',
    sub: '£5m public liability cover',
    icon: (
      <ShieldBadge
        inner={
          /* Checkmark */
          <polyline
            points="14,20 18,24 26,16"
            stroke="#E67E22"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        }
      />
    ),
  },
  {
    title: 'NFRC Member',
    sub: 'National Federation of Roofing Contractors',
    icon: (
      <ShieldBadge
        inner={
          /* Star */
          <polygon
            points="20,13 21.5,17.5 26,17.5 22.5,20.5 23.8,25 20,22.5 16.2,25 17.5,20.5 14,17.5 18.5,17.5"
            fill="#E67E22"
            stroke="#E67E22"
            strokeWidth={0.5}
            strokeLinejoin="round"
          />
        }
      />
    ),
  },
  {
    title: 'TrustMark Endorsed',
    sub: 'Government-endorsed quality',
    icon: (
      <ShieldBadge
        inner={
          /* Rosette: outer ring + inner dot */
          <>
            <circle cx={20} cy={20} r={5} stroke="#E67E22" strokeWidth={1.5} fill="none" />
            <circle cx={20} cy={20} r={2} fill="#E67E22" />
          </>
        }
      />
    ),
  },
  {
    title: 'Written Guarantees',
    sub: 'Up to 20 years on materials',
    icon: (
      <ShieldBadge
        inner={
          /* Document lines */
          <>
            <rect x={15} y={14} width={10} height={13} rx={1} stroke="#E67E22" strokeWidth={1.5} fill="none" />
            <line x1={17} y1={18} x2={23} y2={18} stroke="#E67E22" strokeWidth={1} strokeLinecap="round" />
            <line x1={17} y1={21} x2={23} y2={21} stroke="#E67E22" strokeWidth={1} strokeLinecap="round" />
          </>
        }
      />
    ),
  },
  {
    title: 'Free Inspections',
    sub: 'No call-out fee for booked assessments',
    icon: (
      <ShieldBadge
        inner={
          /* Magnifying glass */
          <>
            <circle cx={18.5} cy={18.5} r={4} stroke="#E67E22" strokeWidth={1.5} fill="none" />
            <line x1={21.5} y1={21.5} x2={25} y2={25} stroke="#E67E22" strokeWidth={1.5} strokeLinecap="round" />
          </>
        }
      />
    ),
  },
  {
    title: 'Insurance Work',
    sub: 'We handle the documentation',
    icon: (
      <ShieldBadge
        inner={
          /* Document with checkmark */
          <>
            <rect x={15} y={13} width={10} height={14} rx={1} stroke="#E67E22" strokeWidth={1.5} fill="none" />
            <polyline
              points="17,20 19,22 23,17"
              stroke="#E67E22"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </>
        }
      />
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function TrustBadges() {
  return (
    <section
      id="trust"
      className="bg-bg-dark py-12 md:py-16 px-5 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-white text-lg font-semibold mb-8">
          Why homeowners choose us
        </p>

        <motion.div
          className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {badges.map((badge) => (
            <motion.div
              key={badge.title}
              className="flex flex-col items-center text-center gap-2"
              variants={itemVariants}
            >
              <div className="mb-1">{badge.icon}</div>
              <p className="text-white font-semibold text-sm leading-snug">
                {badge.title}
              </p>
              <p className="text-white/60 text-xs leading-snug">
                {badge.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
