"use client";

import Image from 'next/image';
import { useRef, useState } from 'react';

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  altBase: string;
};

export default function BeforeAfterSlider({ beforeSrc, afterSrc, altBase }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromPointer = (clientX: number) => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const percentage = ((clientX - rect.left) / rect.width) * 100;
    const bounded = Math.min(100, Math.max(0, percentage));
    setPosition(bounded);
  };

  return (
    <figure className="space-y-2">
      <div
        ref={containerRef}
        className="relative h-52 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 sm:h-60"
        onPointerDown={(event) => {
          (event.currentTarget as HTMLDivElement).setPointerCapture(event.pointerId);
          updateFromPointer(event.clientX);
        }}
        onPointerMove={(event) => {
          if (event.buttons !== 1) {
            return;
          }
          updateFromPointer(event.clientX);
        }}
      >
        <Image src={beforeSrc} alt={`${altBase} before`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
          <Image src={afterSrc} alt={`${altBase} after`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
        </div>
        <div className="absolute inset-y-0" style={{ left: `calc(${position}% - 1px)` }}>
          <div className="h-full w-0.5 bg-white/90 shadow" />
          <span className="absolute left-1/2 top-1/2 inline-flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xs font-semibold text-navy shadow">
            ↔
          </span>
        </div>
        <div className="absolute left-2 top-2 rounded bg-navy/85 px-2 py-1 text-xs font-medium text-white">After</div>
        <div className="absolute right-2 top-2 rounded bg-slate-900/75 px-2 py-1 text-xs font-medium text-white">Before</div>
      </div>
      <figcaption className="text-xs text-slate-600">Drag the slider to compare before and after.</figcaption>
      <noscript>
        <div className="grid gap-2 sm:grid-cols-2">
          <Image src={beforeSrc} alt={`${altBase} before`} width={800} height={500} className="rounded-lg" />
          <Image src={afterSrc} alt={`${altBase} after`} width={800} height={500} className="rounded-lg" />
        </div>
      </noscript>
    </figure>
  );
}
