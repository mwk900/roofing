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
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:px-4 md:px-6">
        <a href="#top" className="flex min-h-11 items-center gap-2 rounded-lg px-1 text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-navy text-xs font-bold text-white">NR</span>
          <span className="text-sm font-semibold leading-tight sm:text-base">Northcrest Roofing Nottingham</span>
        </a>

        <nav className="hidden items-center gap-5 text-sm font-medium text-charcoal lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="min-h-11 rounded-lg px-2 py-2 transition hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:01150000000"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-300 px-3 text-sm font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span aria-hidden="true">📞</span>
            <span className="hidden sm:inline">0115 000 0000</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a
            href="#contact"
            className="hidden min-h-11 items-center rounded-xl bg-accent px-4 text-sm font-semibold text-white shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy md:inline-flex"
          >
            Get a Free Quote
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-300 text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`border-t border-slate-200 bg-white px-4 pb-4 pt-2 lg:hidden ${open ? 'block' : 'hidden'}`}
      >
        <nav className="grid gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-1 inline-flex min-h-11 items-center justify-center rounded-xl bg-accent px-4 text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Get a Free Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
