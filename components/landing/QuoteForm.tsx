"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PHONE, PHONE_TEL, EMAIL, WHATSAPP } from '@/lib/data';

// ─── Types ────────────────────────────────────────────────────────────────────

type Urgency = 'emergency' | 'urgent' | 'planned' | '';

interface FormState {
  selectedServices: string[];
  name: string;
  phone: string;
  postcode: string;
  urgency: Urgency;
  description: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SERVICES = [
  'Emergency / Leak',
  'Roof Repair',
  'Re-roof',
  'Flat Roof',
  'Chimney',
  'Guttering',
  'Not Sure',
];

const URGENCY_OPTIONS: { value: Urgency; label: string }[] = [
  { value: 'emergency', label: 'Emergency (today)' },
  { value: 'urgent', label: 'Urgent (this week)' },
  { value: 'planned', label: 'Planned work' },
];

const URGENCY_LABELS: Record<Urgency, string> = {
  emergency: 'Emergency (today)',
  urgent: 'Urgent (this week)',
  planned: 'Planned work',
  '': 'Not specified',
};

// ─── Slide animation variants ─────────────────────────────────────────────────

const slideVariants = {
  enter: { x: 40, opacity: 0 },
  center: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' as const } },
  exit: { x: -40, opacity: 0, transition: { duration: 0.2, ease: 'easeIn' as const } },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProgressBar({ step }: { step: 1 | 2 | 3 }) {
  const pct = step === 1 ? 33 : step === 2 ? 66 : 100;
  return (
    <div className="mb-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-secondary">
        Step {step} of 3
      </p>
      <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-5 flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors min-h-[48px]"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
      Back
    </button>
  );
}

// ─── Step 1 ───────────────────────────────────────────────────────────────────

function Step1({
  selectedServices,
  onToggle,
  onNext,
}: {
  selectedServices: string[];
  onToggle: (s: string) => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      key="step1"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
    >
      <ProgressBar step={1} />
      <h3 className="text-xl font-bold text-text-primary mb-1">What do you need?</h3>
      <p className="text-sm text-text-secondary mb-5">Select all that apply.</p>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {SERVICES.map((service) => {
          const selected = selectedServices.includes(service);
          return (
            <button
              key={service}
              type="button"
              onClick={() => onToggle(service)}
              className={`
                rounded-xl border-2 p-4 text-sm font-medium text-center
                min-h-[52px] transition-colors duration-150
                ${selected
                  ? 'border-accent bg-accent-soft text-accent'
                  : 'border-border bg-bg-card text-text-primary hover:border-accent/40'}
              `}
            >
              {service}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={selectedServices.length === 0}
        className="
          flex w-full items-center justify-center rounded-xl bg-accent
          text-white font-semibold text-sm min-h-[52px]
          disabled:opacity-40 disabled:cursor-not-allowed
          hover:bg-[#D4710E] transition-colors
        "
      >
        Next: Your details
      </button>
    </motion.div>
  );
}

// ─── Step 2 ───────────────────────────────────────────────────────────────────

function Step2({
  form,
  onChange,
  onUrgency,
  onBack,
  onNext,
}: {
  form: FormState;
  onChange: (field: keyof FormState, value: string) => void;
  onUrgency: (u: Urgency) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const canProceed = form.name.trim() !== '' && form.phone.trim() !== '' && form.postcode.trim() !== '';

  return (
    <motion.div
      key="step2"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
    >
      <BackButton onClick={onBack} />
      <ProgressBar step={2} />
      <h3 className="text-xl font-bold text-text-primary mb-5">Your details</h3>

      <div className="flex flex-col gap-4 mb-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="qf-name">
            Name
          </label>
          <input
            id="qf-name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            value={form.name}
            onChange={(e) => onChange('name', e.target.value)}
            className="
              w-full min-h-[48px] rounded-xl border border-border bg-bg-card
              px-4 text-sm text-text-primary placeholder:text-text-secondary
              focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent
              transition-colors
            "
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="qf-phone">
            Phone
          </label>
          <input
            id="qf-phone"
            type="tel"
            placeholder="Your phone number"
            autoComplete="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            className="
              w-full min-h-[48px] rounded-xl border border-border bg-bg-card
              px-4 text-sm text-text-primary placeholder:text-text-secondary
              focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent
              transition-colors
            "
          />
        </div>

        {/* Postcode */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="qf-postcode">
            Postcode
          </label>
          <input
            id="qf-postcode"
            type="text"
            placeholder="Your postcode"
            autoComplete="postal-code"
            value={form.postcode}
            onChange={(e) => onChange('postcode', e.target.value.toUpperCase())}
            className="
              w-full min-h-[48px] rounded-xl border border-border bg-bg-card
              px-4 text-sm text-text-primary placeholder:text-text-secondary uppercase
              focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent
              transition-colors
            "
          />
        </div>

        {/* Urgency */}
        <div>
          <p className="text-sm font-medium text-text-primary mb-1.5">How urgent is this?</p>
          <div className="flex gap-2">
            {URGENCY_OPTIONS.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => onUrgency(value)}
                className={`
                  flex-1 rounded-xl border-2 px-2 py-2.5 text-xs font-medium text-center
                  min-h-[48px] transition-colors duration-150 leading-snug
                  ${form.urgency === value
                    ? 'border-accent bg-accent-soft text-accent'
                    : 'border-border bg-bg-card text-text-primary hover:border-accent/40'}
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="qf-desc">
            Describe the problem
            <span className="font-normal text-text-secondary ml-1">(optional)</span>
          </label>
          <textarea
            id="qf-desc"
            rows={3}
            placeholder="Briefly describe the problem (optional)"
            value={form.description}
            onChange={(e) => onChange('description', e.target.value)}
            className="
              w-full rounded-xl border border-border bg-bg-card
              px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary resize-none
              focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent
              transition-colors
            "
          />
          <p className="mt-1.5 text-xs text-text-secondary">
            Photos help us quote faster. You can send them by WhatsApp after submitting.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={!canProceed}
        className="
          flex w-full items-center justify-center rounded-xl bg-accent
          text-white font-semibold text-sm min-h-[52px]
          disabled:opacity-40 disabled:cursor-not-allowed
          hover:bg-[#D4710E] transition-colors
        "
      >
        Review your quote
      </button>
    </motion.div>
  );
}

// ─── Step 3 ───────────────────────────────────────────────────────────────────

function Step3({
  form,
  onBack,
}: {
  form: FormState;
  onBack: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div
        key="success"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="text-center py-4"
      >
        {/* Checkmark */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-5 mx-auto">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-text-primary mb-2">
          Thank you. We will be in touch shortly.
        </h3>
        <p className="text-sm text-text-secondary mb-7">
          We aim to respond within 30 minutes during working hours.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href={PHONE_TEL}
            className="
              flex items-center justify-center gap-2 w-full rounded-xl bg-emergency
              text-white font-semibold text-sm min-h-[52px]
              hover:opacity-90 transition-opacity
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 013.44 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.41a16 16 0 006.29 6.29l1.77-1.77a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call now: {PHONE}
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center justify-center gap-2 w-full rounded-xl bg-green-600
              text-white font-semibold text-sm min-h-[52px]
              hover:bg-green-700 transition-colors
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.522 5.827L.057 23.882l6.204-1.627A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.805 9.805 0 01-5.003-1.368l-.358-.213-3.686.967.983-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
            Send via WhatsApp
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key="step3"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
    >
      <BackButton onClick={onBack} />
      <ProgressBar step={3} />
      <h3 className="text-xl font-bold text-text-primary mb-5">Review your quote</h3>

      {/* Summary card */}
      <div className="rounded-2xl border border-border bg-bg-card p-5 mb-6 space-y-4">
        {/* Services */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary mb-2">
            Services
          </p>
          <div className="flex flex-wrap gap-2">
            {form.selectedServices.map((s) => (
              <span
                key={s}
                className="rounded-full bg-accent-soft text-accent text-xs font-medium px-3 py-1"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Contact details */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary mb-0.5">Name</p>
            <p className="text-text-primary font-medium">{form.name}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary mb-0.5">Phone</p>
            <p className="text-text-primary font-medium">{form.phone}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary mb-0.5">Postcode</p>
            <p className="text-text-primary font-medium">{form.postcode}</p>
          </div>
          {form.urgency && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary mb-0.5">Urgency</p>
              <p className="text-text-primary font-medium">{URGENCY_LABELS[form.urgency]}</p>
            </div>
          )}
        </div>

        {/* Description */}
        {form.description.trim() && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary mb-0.5">
              Description
            </p>
            <p className="text-sm text-text-primary leading-relaxed">{form.description}</p>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={() => setSubmitted(true)}
        className="
          flex w-full items-center justify-center rounded-xl bg-accent
          text-white font-semibold text-sm min-h-[56px]
          hover:bg-[#D4710E] transition-colors
        "
      >
        Send quote request
      </button>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function QuoteForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState<FormState>({
    selectedServices: [],
    name: '',
    phone: '',
    postcode: '',
    urgency: '',
    description: '',
  });

  function toggleService(service: string) {
    setForm((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service],
    }));
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleUrgency(u: Urgency) {
    setForm((prev) => ({ ...prev, urgency: u }));
  }

  return (
    <section id="quote" className="bg-bg-secondary py-12 md:py-20 px-5 md:px-8">
      <div className="max-w-2xl mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
            Get your free quote
          </h2>
          <p className="text-text-secondary text-base md:text-lg">
            We aim to respond within 30 minutes during working hours.
          </p>
        </div>

        {/* Demo disclaimer */}
        <div className="mb-6 flex items-center gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M12 9v4M12 17h.01" />
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
          <span>Demo site. This form does not submit real data.</span>
        </div>

        {/* Form card */}
        <div className="rounded-2xl border border-border bg-bg-card p-5 md:p-8 shadow-sm overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <Step1
                key="step1"
                selectedServices={form.selectedServices}
                onToggle={toggleService}
                onNext={() => setStep(2)}
              />
            )}
            {step === 2 && (
              <Step2
                key="step2"
                form={form}
                onChange={handleChange}
                onUrgency={handleUrgency}
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
              />
            )}
            {step === 3 && (
              <Step3
                key="step3"
                form={form}
                onBack={() => setStep(2)}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Direct contact block */}
        <div className="mt-10 border-t border-border pt-8">
          <p className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4">
            Prefer to contact us directly?
          </p>

          <div className="flex flex-col gap-3">
            {/* Phone */}
            <a
              href={PHONE_TEL}
              className="
                flex items-center gap-3 min-h-[48px]
                text-2xl font-bold text-text-primary
                hover:text-accent transition-colors
              "
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="text-accent shrink-0"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 013.44 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.41a16 16 0 006.29 6.29l1.77-1.77a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {PHONE}
            </a>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="
                flex items-center gap-3 min-h-[48px]
                text-sm text-text-secondary hover:text-accent transition-colors
              "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="text-text-secondary shrink-0"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              {EMAIL}
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-3 min-h-[48px]
                text-sm text-text-secondary hover:text-green-600 transition-colors
              "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="text-green-600 shrink-0"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.522 5.827L.057 23.882l6.204-1.627A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.805 9.805 0 01-5.003-1.368l-.358-.213-3.686.967.983-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              WhatsApp us
            </a>

            {/* Hours */}
            <p className="text-sm text-text-secondary pl-0.5">
              Mon to Sat, 8am to 6pm. Emergency line 24/7.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
