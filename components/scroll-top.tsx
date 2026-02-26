"use client";

import { useEffect, useMemo, useState } from 'react';

const SCROLL_THRESHOLD = 300;

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReducedMotion(mediaQuery.matches);

    onChange();
    mediaQuery.addEventListener('change', onChange);

    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const animatedStyle = useMemo(() => {
    if (reducedMotion) {
      return {
        opacity: isVisible ? 1 : 0,
        transform: 'translateY(0px)'
      };
    }

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0px)' : 'translateY(12px)',
      transition: 'opacity 180ms ease, transform 180ms ease'
    };
  }, [isVisible, reducedMotion]);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
      className="fixed right-4 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-navy shadow-lg outline-none hover:scale-105 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none md:bottom-5 md:right-6"
      style={{
        ...animatedStyle,
        bottom: 'var(--floating-bottom, 20px)'
      }}
      tabIndex={isVisible ? 0 : -1}
      disabled={!isVisible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0-6 6m6-6 6 6" />
      </svg>
    </button>
  );
}
