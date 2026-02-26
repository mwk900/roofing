"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  postcode: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  postcode: "",
  message: ""
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const compiledMessage = useMemo(
    () =>
      `Name: ${form.name}\nPhone: ${form.phone}\nPostcode: ${form.postcode}\n\nMessage:\n${form.message}`,
    [form]
  );

  const emailHref = `mailto:hello@northcrestroofing.co.uk?subject=${encodeURIComponent(
    "Quote request from website demo"
  )}&body=${encodeURIComponent(compiledMessage)}`;

  const whatsappHref = `https://wa.me/441150000000?text=${encodeURIComponent(compiledMessage)}`;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.postcode.trim() || !form.message.trim()) {
      setError("Please complete all fields before continuing.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6">
        <h3 className="text-xl font-semibold text-navy">Thanks — your details are ready to send.</h3>
        <p className="mt-2 text-sm text-slate-700">
          For this static demo, use one of the actions below to continue your enquiry.
        </p>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <a
            href="tel:01150000000"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-accent px-4 text-sm font-semibold text-white"
          >
            Call now
          </a>

          <a
            href={emailHref}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-navy px-4 text-sm font-semibold text-white"
          >
            Email us
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-navy"
          >
            WhatsApp message
          </a>

          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-navy"
            onClick={() => navigator.clipboard.writeText(compiledMessage)}
          >
            Copy message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h3 className="text-lg font-semibold text-navy">Request your free quote</h3>
      <p className="mt-1 text-sm text-slate-600">
        Typical response time (demo): within 30–60 minutes during working hours.
      </p>

      <div className="mt-4 grid gap-3">
        <label className="grid gap-1 text-sm font-medium text-slate-700">
          Full name
          <input
            className="min-h-11 rounded-xl border border-slate-300 px-3"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
        </label>

        <label className="grid gap-1 text-sm font-medium text-slate-700">
          Phone number
          <input
            className="min-h-11 rounded-xl border border-slate-300 px-3"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
          />
        </label>

        <label className="grid gap-1 text-sm font-medium text-slate-700">
          Postcode
          <input
            className="min-h-11 rounded-xl border border-slate-300 px-3 uppercase"
            name="postcode"
            autoComplete="postal-code"
            value={form.postcode}
            onChange={(event) => setForm({ ...form, postcode: event.target.value })}
          />
        </label>

        <label className="grid gap-1 text-sm font-medium text-slate-700">
          What do you need help with?
          <textarea
            className="min-h-32 rounded-xl border border-slate-300 px-3 py-2"
            name="message"
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
          />
        </label>
      </div>

      {error ? <p className="mt-3 text-sm text-red-700">{error}</p> : null}

      <button
        type="submit"
        className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-accent px-4 text-sm font-semibold text-white"
      >
        Continue
      </button>
    </form>
  );
}