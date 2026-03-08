"use client";

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { projects } from '@/lib/data';
import type { Project } from '@/lib/types';

// Badge color map
const badgeClasses: Record<Project['typeBadge'], string> = {
  repair: 'bg-badge-repair',
  reroof: 'bg-badge-reroof',
  flat: 'bg-badge-flat',
  chimney: 'bg-badge-chimney',
  gutter: 'bg-badge-gutter',
  emergency: 'bg-emergency',
};

// Before/After Slider

function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}: {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hintPlayed = useRef(false);
  const controls = useAnimation();

  // Bounce hint on first render
  useEffect(() => {
    if (hintPlayed.current) return;
    hintPlayed.current = true;

    const timer = setTimeout(() => {
      controls.start({
        x: [-15, 15, -8, 8, 0],
        transition: { duration: 1.5, ease: 'easeInOut' },
      });
    }, 800);

    return () => clearTimeout(timer);
  }, [controls]);

  const clamp = (val: number) => Math.min(98, Math.max(2, val));

  const updateFromPointer = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(clamp(pct));
  }, []);

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    setDragging(true);
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    updateFromPointer(e.clientX);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    updateFromPointer(e.clientX);
  }

  function handlePointerUp() {
    setDragging(false);
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden select-none"
      style={{ touchAction: 'none', cursor: dragging ? 'col-resize' : 'ew-resize' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      aria-label="Before and after comparison slider"
    >
      {/* Before image (base layer) */}
      <Image
        src={beforeImage}
        alt={beforeAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 800px"
        draggable={false}
        style={{ zIndex: 1 }}
      />

      {/* After image (clipped on top) */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
        }}
      >
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white"
        style={{ left: `${sliderPos}%`, zIndex: 3 }}
        aria-hidden="true"
      />

      {/* Drag handle */}
      <motion.div
        className="absolute top-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg"
        style={{
          left: `${sliderPos}%`,
          zIndex: 4,
          x: '-50%',
          y: '-50%',
        }}
        animate={controls}
        aria-hidden="true"
      >
        {/* Left arrow */}
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-0.5">
          <path d="M8 2L2 8l6 6" />
        </svg>
        {/* Right arrow */}
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5">
          <path d="M2 2l6 6-6 6" />
        </svg>
      </motion.div>

      {/* Labels */}
      <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
        <span className="bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full tracking-wide">
          BEFORE
        </span>
      </div>
      <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
        <span className="bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full tracking-wide">
          AFTER
        </span>
      </div>
    </div>
  );
}

// Project card

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      className="bg-bg-card rounded-2xl overflow-hidden shadow-sm"
    >
      <BeforeAfterSlider
        beforeImage={project.beforeImage}
        afterImage={project.afterImage}
        beforeAlt={project.beforeAlt}
        afterAlt={project.afterAlt}
      />

      {/* Card info */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-bold text-xl text-text-primary mb-2">{project.title}</h3>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="bg-bg-secondary text-text-secondary text-xs font-medium px-3 py-1 rounded-full">
            {project.location}
          </span>
          <span className={`text-white text-xs font-semibold px-3 py-1 rounded-full ${badgeClasses[project.typeBadge]}`}>
            {project.type}
          </span>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-3">{project.description}</p>

        {/* Detail line */}
        <p className="font-semibold text-sm text-text-primary">{project.detail}</p>
      </div>
    </motion.div>
  );
}

// Section

export default function Projects() {
  return (
    <section id="projects" className="bg-bg-secondary py-12 md:py-20 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">See the difference.</h2>
          <p className="text-text-secondary text-base md:text-lg">Real projects. Real results.</p>
        </div>

        {/* Project stack */}
        <div className="flex flex-col gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
