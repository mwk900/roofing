"use client";

import { useEffect, useState } from 'react';

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#areas', label: 'Areas' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' }
];

export default function StickyHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold text-navy">
          <span className="rounded bg-navy px-2 py-1 text-sm text-white">NR</span>
          <span className="text-sm sm:text-base">Northcrest Roofing Nottingham (Demo)</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-charcoal md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-navy">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white shadow hover:bg-orange-600"
          >
            Get a Free Quote
          </a>
          <button
            type="button"
            aria-label="Open menu"
            className="rounded-md border border-slate-300 px-3 py-2 text-sm md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            ☰
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="grid gap-3 text-base font-medium">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
