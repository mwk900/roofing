"use client";

import { useEffect, useMemo, useState } from 'react';

const SCROLL_THRESHOLD = 300;

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const onMotionPreferenceChange = () => {
      setReducedMotion(mediaQuery.matches);
    };

    onMotionPreferenceChange();
    mediaQuery.addEventListener('change', onMotionPreferenceChange);

    return () => {
      mediaQuery.removeEventListener('change', onMotionPreferenceChange);
    };
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

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const animatedStyle = useMemo(() => {
    if (reducedMotion) {
      return {
        opacity: isVisible ? 1 : 0,
        transform: 'translateY(0px) scale(1)'
      };
    }

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0px) scale(1)' : 'translateY(12px) scale(0.98)',
      transition: `opacity 220ms cubic-bezier(${easeOut.join(',')}), transform 220ms cubic-bezier(${easeOut.join(',')})`
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
      className="fixed bottom-5 right-5 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-navy shadow-lg ring-offset-2 outline-none hover:scale-105 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-accent dark:border-slate-700 dark:bg-charcoal dark:text-white dark:hover:bg-slate-800"
      style={animatedStyle}
      tabIndex={isVisible ? 0 : -1}
      disabled={!isVisible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0-6 6m6-6 6 6" />
      </svg>
    </button>
  );
}
