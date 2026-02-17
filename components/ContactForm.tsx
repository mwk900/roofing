"use client";

import { FormEvent, useMemo, useState } from 'react';

type FormState = {
  name: string;
  phone: string;
  postcode: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  phone: '',
  postcode: '',
  message: ''
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const compiledMessage = useMemo(
    () => `Name: ${form.name}\nPhone: ${form.phone}\nPostcode: ${form.postcode}\n\nMessage:\n${form.message}`,
    [form]
  );

  const emailHref = `mailto:hello@northcrestroofing.co.uk?subject=${encodeURIComponent(
    'Quote request from website demo'
  )}&body=${encodeURIComponent(compiledMessage)}`;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.postcode.trim() || !form.message.trim()) {
      setError('Please complete all fields before sending.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return submitted ? (
    <div className="rounded-xl border border-green-200 bg-green-50 p-6">
      <h3 className="text-xl font-semibold text-navy">Thanks — your message is ready to send.</h3>
      <p className="mt-2 text-sm text-slate-700">
        This demo form is static-export friendly. Use one of the options below to continue.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold"
          onClick={() => navigator.clipboard.writeText(compiledMessage)}
        >
          Copy message
        </button>
        <a href={emailHref} className="rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white">
          Email us
        </a>
        <a href="tel:01150000000" className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white">
          Call now
        </a>
      </div>
    </div>
  ) : (
    <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-navy">Request a free quote</h3>
      <div className="mt-4 grid gap-4">
        <input
          className="rounded-md border border-slate-300 px-3 py-2"
          placeholder="Full name"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
        />
        <input
          className="rounded-md border border-slate-300 px-3 py-2"
          placeholder="Phone number"
          value={form.phone}
          onChange={(event) => setForm({ ...form, phone: event.target.value })}
        />
        <input
          className="rounded-md border border-slate-300 px-3 py-2"
          placeholder="Postcode"
          value={form.postcode}
          onChange={(event) => setForm({ ...form, postcode: event.target.value })}
        />
        <textarea
          className="min-h-28 rounded-md border border-slate-300 px-3 py-2"
          placeholder="Tell us what you need help with"
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
        />
      </div>
      {error ? <p className="mt-3 text-sm text-red-700">{error}</p> : null}
      <button type="submit" className="mt-4 w-full rounded-md bg-accent px-4 py-3 font-semibold text-white">
        Continue
      </button>
    </form>
  );
}
