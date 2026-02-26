"use client";

import { useEffect, useState } from 'react';

const VISIBILITY_SCROLL_Y = 180;
const MOBILE_BREAKPOINT = 768;

export default function EmergencyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const syncState = () => {
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      const shouldShow = isMobile && window.scrollY > VISIBILITY_SCROLL_Y;

      setVisible(shouldShow);
      document.body.classList.toggle('has-emergency-bar', shouldShow);
      document.documentElement.style.setProperty('--floating-bottom', shouldShow ? '92px' : '20px');
      ticking = false;
    };

    const onScrollOrResize = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      window.requestAnimationFrame(syncState);
    };

    syncState();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      document.body.classList.remove('has-emergency-bar');
      document.documentElement.style.setProperty('--floating-bottom', '20px');
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-8px_20px_rgba(2,6,23,0.15)] backdrop-blur transition md:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
      } motion-reduce:transition-none`}
    >
      <div className="mx-auto grid max-w-xl grid-cols-2 gap-2">
        <a
          href="tel:01150000000"
          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-accent px-3 text-sm font-semibold text-white shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
        >
          Emergency callout
        </a>
        <a
          href="#contact"
          className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-3 text-sm font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Free quote
        </a>
      </div>
    </div>
  );
}
