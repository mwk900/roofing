import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ContactForm from '@/components/ContactForm';
import StickyHeader from '@/components/StickyHeader';

const services = [
  {
    title: 'Roof Repairs',
    text: 'Leak tracing, slipped tiles and ridge repairs that protect your home quickly and prevent costly water damage.'
  },
  {
    title: 'New Roofs / Re-roofs',
    text: 'Planned replacements with clear timelines, material choices and staged updates from start to finish.'
  },
  {
    title: 'Flat Roofs (EPDM / felt)',
    text: 'Long-lasting flat roofing systems for extensions and garages with clean edges and weatherproof detailing.'
  },
  {
    title: 'Chimney Repairs',
    text: 'Repointing, leadwork and structural fixes to stop moisture ingress and improve long-term safety.'
  },
  {
    title: 'Guttering & Fascias',
    text: 'Overflow and rainwater issues solved with smart replacement and alignment for better drainage.'
  },
  {
    title: 'Storm Damage / Emergency',
    text: 'Fast emergency response, temporary protection and a practical plan to complete permanent repairs.'
  }
];

const projects = [
  {
    title: 'Storm damage repair',
    area: 'West Bridgford',
    summary: 'Replaced 26 dislodged tiles, repaired underfelt and made the roof weather-tight in a same-day emergency visit.',
    tag: 'Repairs',
    before: '/project-1-before.svg',
    after: '/project-1-after.svg'
  },
  {
    title: 'Garage flat roof renewal',
    area: 'Beeston',
    summary: 'Removed ageing felt, installed new EPDM and improved edge trims to stop recurring ponding and leaks.',
    tag: 'Flat Roof',
    before: '/project-2-before.svg',
    after: '/project-2-after.svg'
  },
  {
    title: 'Full re-roof on semi-detached home',
    area: 'Arnold',
    summary: 'Installed breathable membrane, new battens and tiles with clean ridge finishing over four scheduled days.',
    tag: 'Re-roof',
    before: '/project-3-before.svg',
    after: '/project-3-after.svg'
  },
  {
    title: 'Chimney and lead flashing repair',
    area: 'Hucknall',
    summary: 'Resolved persistent loft damp by repointing chimney joints and replacing damaged lead step flashing.',
    tag: 'Chimney',
    before: '/project-4-before.svg',
    after: '/project-4-after.svg'
  },
  {
    title: 'Guttering replacement',
    area: 'Mapperley',
    summary: 'Upgraded to deep-flow guttering and improved downpipe routing to stop heavy-rain overflow.',
    tag: 'Guttering',
    before: '/project-5-before.svg',
    after: '/project-5-after.svg'
  },
  {
    title: 'Emergency ridge tile fix',
    area: 'Carlton',
    summary: 'Attended after high winds and re-secured ridge tiles with a mechanically fixed system for better resilience.',
    tag: 'Emergency',
    before: '/project-6-before.svg',
    after: '/project-6-after.svg'
  }
];

const reviews = [
  {
    name: 'Mark T.',
    area: 'Beeston',
    rating: 5,
    text: 'We called in the morning for a leak and had someone out the same day. Clear advice and no pressure.'
  },
  {
    name: 'Priya S.',
    area: 'West Bridgford',
    rating: 5,
    text: 'Everything was explained in plain English, and the written quote matched what we paid.'
  },
  {
    name: 'Janet R.',
    area: 'Arnold',
    rating: 5,
    text: 'Great communication from first call to completion. The team were tidy and respectful.'
  },
  {
    name: 'Lewis D.',
    area: 'Hucknall',
    rating: 5,
    text: 'After storm damage they made the roof safe quickly, then returned to complete the permanent repair.'
  },
  {
    name: 'Daniel P.',
    area: 'Carlton',
    rating: 4,
    text: 'Our re-roof stayed on schedule and we got updates each day, which really helped with planning.'
  },
  {
    name: 'Hannah M.',
    area: 'Nottingham',
    rating: 5,
    text: 'They advised a repair instead of replacement and saved us money. Honest service.'
  }
];

const areas = [
  'Nottingham City Centre',
  'West Bridgford',
  'Beeston',
  'Hucknall',
  'Arnold',
  'Carlton',
  'Mapperley',
  'Sherwood',
  'Wollaton',
  'Long Eaton'
];

const faqs = [
  {
    q: 'How quickly can you respond to a leak?',
    a: 'For emergencies, we target same-day attendance where possible. Immediate temporary protection can be provided first.'
  },
  { q: 'Do you provide free quotes?', a: 'Yes. Every quote is free, written clearly and explained before work starts.' },
  { q: 'Are you insured?', a: 'Yes, domestic roofing work is carried out with appropriate public liability insurance cover.' },
  {
    q: 'Do you provide guarantees?',
    a: 'Yes. We provide written guarantees for completed works so your documentation is clear.'
  },
  {
    q: 'What materials do you use?',
    a: 'We use quality tile, felt, slate and EPDM options chosen around your roof type, budget and expected lifespan.'
  },
  {
    q: 'How do I know if I need repair or replacement?',
    a: 'We inspect first and explain both options. If repair is sensible and safe, that is usually our first recommendation.'
  },
  {
    q: 'How does payment work?',
    a: 'For larger jobs we agree staged payments in writing. Smaller repairs are typically billed on completion.'
  },
  {
    q: 'Do you offer emergency callouts?',
    a: 'Yes. Emergency callouts are available for active leaks and storm damage across Nottingham and nearby areas.'
  }
];

export default function HomePage() {
  return (
    <main id="top" className="bg-slate-50 text-charcoal">
      <StickyHeader />

      <section className="bg-gradient-to-b from-navy to-slate-900 px-4 pb-12 pt-8 text-white sm:px-6 md:pb-16 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-200">
                Nottingham + 20 miles
              </p>
              <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Fast, trusted roofing help when your home needs it most.
              </h1>
              <p className="mt-3 text-base text-slate-200 sm:text-lg">
                Repairs, re-roofs and emergency callouts with clear written quotes and workmanship guarantees.
              </p>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <a
                  href="tel:01150000000"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-accent px-5 text-base font-semibold text-white shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Call emergency team
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white/10 px-5 text-base font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200"
                >
                  Get a free quote
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl">
              <p className="text-sm font-semibold text-orange-200">Emergency-first promise</p>
              <ul className="mt-3 grid gap-2 text-sm text-slate-100">
                {[
                  'Insured domestic roofing work',
                  'Written quote before work starts',
                  'Guaranteed workmanship after completion'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
                    <span className="text-orange-300">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-200">Mon-Sat 8:00-18:00 · Emergency callouts available.</p>
            </aside>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Roofing services built around quick response</h2>
          <a
            href="tel:01150000000"
            className="inline-flex min-h-11 items-center rounded-xl border border-slate-300 px-4 text-sm font-semibold text-navy"
          >
            Call 0115 000 0000
          </a>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-navy">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-white px-4 py-10 sm:px-6 md:py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Recent project outcomes</h2>
          <p className="mt-2 text-sm text-slate-600">Compare before and after with the interactive slider.</p>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-navy">
                    {project.title} - {project.area}
                  </h3>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                    {project.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-700">{project.summary}</p>
                <div className="mt-3">
                  <BeforeAfterSlider beforeSrc={project.before} afterSrc={project.after} altBase={project.title} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">What local homeowners say</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={`${review.name}-${review.area}`}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-amber-500" aria-label={`${review.rating} star rating`}>
                {'★'.repeat(review.rating)}
                {'☆'.repeat(5 - review.rating)}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">“{review.text}”</p>
              <p className="mt-3 text-sm font-semibold text-navy">
                {review.name}, {review.area}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="areas" className="bg-white px-4 py-10 sm:px-6 md:py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Areas covered</h2>
          <p className="mt-2 text-sm text-slate-600">Nottingham and nearby areas within around 20 miles.</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {areas.map((area) => (
              <p
                key={area}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
              >
                {area}
              </p>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold text-navy">Send your postcode to confirm coverage.</p>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">Frequently asked questions</h2>
        <div className="mt-5 space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <summary className="cursor-pointer text-sm font-semibold text-navy sm:text-base">{item.q}</summary>
              <p className="mt-2 text-sm text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-navy px-4 py-10 text-white sm:px-6 md:py-14">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1fr_1.05fr] md:items-start">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Speak with Northcrest Roofing Nottingham (Demo)</h2>
            <p className="mt-2 text-sm text-slate-200">Fast response. Honest advice. Clear next steps.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-100">
              <li>Phone: 0115 000 0000</li>
              <li>Email: hello@northcrestroofing.co.uk</li>
              <li>Hours: Mon-Sat 8:00-18:00</li>
              <li>Emergency callouts available</li>
            </ul>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <a
                href="tel:01150000000"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-accent px-4 text-sm font-semibold text-white"
              >
                Call now
              </a>
              <a
                href="mailto:hello@northcrestroofing.co.uk"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 px-4 text-sm font-semibold text-white"
              >
                Email us
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">Find us in Nottingham</h2>
        <p className="mt-2 text-sm text-slate-700">
          12 Example Street, Nottingham NG1 1AA. On-street parking is usually available nearby.
        </p>
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <iframe
            title="Map of Northcrest Roofing Nottingham demo location"
            src="https://www.google.com/maps?q=12+Example+Street,+Nottingham+NG1+1AA&output=embed"
            className="h-72 w-full sm:h-80"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="bg-charcoal px-4 py-10 text-slate-200 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div>
            <p className="font-semibold">Northcrest Roofing Nottingham (Demo)</p>
            <p className="mt-2 text-sm">Mobile-first emergency roofing website concept for demo and portfolio use.</p>
          </div>
          <div>
            <p className="font-semibold">Quick links</p>
            <div className="mt-2 grid gap-1 text-sm">
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div>
            <p className="font-semibold">Social</p>
            <div className="mt-2 flex gap-3 text-sm">
              <span>Facebook (demo)</span>
              <span>Instagram (demo)</span>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-6xl text-xs text-slate-400">Demo website project - not a real company.</p>
      </footer>
    </main>
  );
}