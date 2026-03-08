'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { DiagnosticProblem } from '@/lib/types';
import { diagnosticProblems } from '@/lib/data';
import { PHONE, PHONE_TEL } from '@/lib/data';

// --- Inline SVG icons ---

function IconLeak({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2 C12 2 5 10 5 14 a7 7 0 0 0 14 0 C19 10 12 2 12 2 Z" />
    </svg>
  );
}

function IconTile({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12 L12 3 L21 12 M5 10 L5 20 H19 V10" />
    </svg>
  );
}

function IconFlat({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 8 H22 V16 H2 Z M8 12 L11 10 L13 14 L16 12" />
    </svg>
  );
}

function IconChimney({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 20 V8 L10 4 H14 L18 8 V20 M10 8 H14" />
    </svg>
  );
}

function IconGutter({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4 H20 V8 H4 Z M16 8 V20 M8 8 V14" />
    </svg>
  );
}

function IconStorm({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2 L4 14 H11 L9 22 L20 10 H13 Z" />
    </svg>
  );
}

function ProblemIcon({ icon, color }: { icon: DiagnosticProblem['icon']; color: string }) {
  switch (icon) {
    case 'leak':    return <IconLeak color={color} />;
    case 'tile':    return <IconTile color={color} />;
    case 'flat':    return <IconFlat color={color} />;
    case 'chimney': return <IconChimney color={color} />;
    case 'gutter':  return <IconGutter color={color} />;
    case 'storm':   return <IconStorm color={color} />;
    default:        return null;
  }
}

// --- Urgency badge colours ---

const urgencyConfig = {
  red: {
    bg: 'bg-emergency-soft',
    text: 'text-emergency',
    border: 'border-emergency/20',
  },
  orange: {
    bg: 'bg-accent-soft',
    text: 'text-accent',
    border: 'border-accent/20',
  },
  green: {
    bg: 'bg-green-50',
    text: 'text-success',
    border: 'border-success/20',
  },
};

// --- Sub-components ---

interface StepOneProps {
  onSelect: (problem: DiagnosticProblem) => void;
  selectedId: string | null;
}

function StepOne({ onSelect, selectedId }: StepOneProps) {
  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
          What is happening with your roof?
        </h2>
        <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto">
          Tap your problem. We will tell you what to do right now and what it will cost to fix.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {diagnosticProblems.map((problem, i) => {
          const isSelected = selectedId === problem.id;
          const iconColor = isSelected ? '#E67E22' : '#64748B';
          return (
            <motion.button
              key={problem.id}
              type="button"
              onClick={() => onSelect(problem)}
              className={`diagnostic-card flex flex-col items-center justify-center gap-3 rounded-xl border px-3 py-4 text-center font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isSelected
                  ? 'border-accent bg-accent-soft text-accent'
                  : 'border-border bg-white text-text-primary hover:border-accent/40'
              }`}
              style={{ minHeight: 96 }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
            >
              <span className="flex-shrink-0">
                <ProblemIcon icon={problem.icon} color={iconColor} />
              </span>
              <span className="leading-snug">{problem.label}</span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

interface StepTwoProps {
  problem: DiagnosticProblem;
  selectedDetail: string | null;
  onSelect: (option: string) => void;
  onBack: () => void;
}

function StepTwo({ problem, selectedDetail, onSelect, onBack }: StepTwoProps) {
  const followUp = problem.followUp!;
  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.3 }}
    >
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        style={{ minHeight: 48 }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back
      </button>

      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-text-primary">
          {followUp.question}
        </h2>
      </div>

      <div className="flex flex-col gap-3 max-w-lg mx-auto">
        {followUp.options.map((option, i) => {
          const isSelected = selectedDetail === option;
          return (
            <motion.button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              className={`w-full rounded-lg border px-5 text-left font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isSelected
                  ? 'border-accent bg-accent-soft text-accent'
                  : 'border-border bg-white text-text-primary hover:border-accent/40'
              }`}
              style={{ minHeight: 52 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
            >
              {option}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

interface ResultPanelProps {
  problem: DiagnosticProblem;
  onReset: () => void;
}

function ResultPanel({ problem, onReset }: ResultPanelProps) {
  const result = problem.result;
  const urg = urgencyConfig[result.urgency];

  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Urgency badge */}
        <div className={`px-6 py-4 border-b ${urg.bg} ${urg.border}`}>
          <p className={`font-bold text-base ${urg.text}`}>{result.urgencyText}</p>
        </div>

        {/* Content */}
        <div className="px-6 py-6 flex flex-col gap-5">
          <div>
            <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1.5">
              Do this right now:
            </p>
            <p className="text-text-primary text-sm leading-relaxed">{result.doNow}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1.5">
              What we do:
            </p>
            <p className="text-text-primary text-sm leading-relaxed">{result.whatWeDo}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1.5">
              Typical cost:
            </p>
            <p className="text-text-primary text-sm font-bold">{result.typicalCost}</p>
          </div>

          <p className="text-xs text-text-secondary italic">
            Prices are indicative. Demo site only.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 font-bold text-white text-sm transition-opacity hover:opacity-90 active:opacity-80 w-full sm:w-auto"
              style={{ backgroundColor: '#DC2626', minHeight: 56 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call {PHONE}
            </a>

            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-xl px-6 font-bold text-accent text-sm border-2 border-accent bg-transparent transition-colors hover:bg-accent-soft active:bg-accent-soft w-full sm:w-auto"
              style={{ minHeight: 56 }}
            >
              Request callback
            </a>
          </div>
        </div>
      </div>

      {/* Start over */}
      <div className="text-center mt-5">
        <button
          type="button"
          onClick={onReset}
          className="text-sm text-text-secondary hover:text-text-primary underline underline-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          style={{ minHeight: 48 }}
        >
          Start over
        </button>
      </div>
    </motion.div>
  );
}

// --- Main component ---

export default function Diagnostic() {
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const activeProblem = diagnosticProblems.find((p) => p.id === selectedProblem) ?? null;

  const step: 'one' | 'two' | 'result' = showResult
    ? 'result'
    : selectedProblem && activeProblem?.followUp
    ? 'two'
    : 'one';

  function handleProblemSelect(problem: DiagnosticProblem) {
    setSelectedProblem(problem.id);
    setSelectedDetail(null);
    if (!problem.followUp) {
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  }

  function handleDetailSelect(option: string) {
    setSelectedDetail(option);
    setShowResult(true);
  }

  function handleBack() {
    setSelectedProblem(null);
    setSelectedDetail(null);
    setShowResult(false);
  }

  function handleReset() {
    setSelectedProblem(null);
    setSelectedDetail(null);
    setShowResult(false);
  }

  return (
    <section id="diagnostic" className="bg-bg-secondary py-12 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {step === 'one' && (
            <StepOne
              key="step-one"
              onSelect={handleProblemSelect}
              selectedId={selectedProblem}
            />
          )}

          {step === 'two' && activeProblem && activeProblem.followUp && (
            <StepTwo
              key="step-two"
              problem={activeProblem}
              selectedDetail={selectedDetail}
              onSelect={handleDetailSelect}
              onBack={handleBack}
            />
          )}

          {step === 'result' && activeProblem && (
            <ResultPanel
              key="step-result"
              problem={activeProblem}
              onReset={handleReset}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
