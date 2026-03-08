'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: 'You call or message',
    description:
      'Tell us the problem. For emergencies we aim to attend the same day. For planned work we book a free inspection.',
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'We inspect and quote',
    description:
      'We get on the roof, photograph everything, and give you a written quote with no obligation. You see exactly what we see.',
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'We fix it properly',
    description:
      'Scheduled work with daily updates. Emergency work starts immediately. We bring all standard materials on the van.',
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Guaranteed and documented',
    description:
      'Photos of completed work, a written guarantee, and your roof certified weathertight.',
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 60%'],
  });

  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      className="bg-bg-primary py-12 md:py-20 px-5 md:px-8"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
            From first call to finished roof.
          </h2>
          <p className="text-text-secondary text-base md:text-lg">
            No hidden steps. No surprises.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div
            className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-0.5 bg-border"
            aria-hidden="true"
          >
            <motion.div
              className="h-full bg-accent origin-left"
              style={{ scaleX: lineScaleX }}
            />
          </div>

          {/* Mobile connecting line */}
          <div
            className="md:hidden absolute top-12 bottom-12 left-6 w-0.5 bg-border"
            aria-hidden="true"
          >
            <motion.div
              className="w-full bg-accent origin-top"
              style={{ scaleY: lineScaleX }}
            />
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex md:flex-col items-start md:items-center gap-5 md:gap-3 md:flex-1 md:text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Circle + icon wrapper */}
                <div className="flex flex-col items-center gap-1.5 shrink-0 md:mb-1">
                  {/* Icon above circle */}
                  <motion.div
                    className="text-accent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.15 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Numbered circle */}
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-base shrink-0 relative z-10"
                    initial={{ backgroundColor: '#F1F3F5', color: '#64748B' }}
                    whileInView={{ backgroundColor: '#E67E22', color: '#FFFFFF' }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.1 }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Text content */}
                <div className="pt-1 md:pt-0">
                  <p className="font-semibold text-base text-text-primary mb-1.5 leading-snug">
                    {step.title}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
