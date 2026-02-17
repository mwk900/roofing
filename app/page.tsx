import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import StickyHeader from '@/components/StickyHeader';

const services = [
  {
    title: 'Roof Repairs',
    text: 'Fast fixes for leaks, slipped tiles and ridge issues to prevent further internal damage.'
  },
  {
    title: 'New Roofs / Re-roofs',
    text: 'Complete roof replacements with modern breathable systems and clear staged timelines.'
  },
  {
    title: 'Flat Roofs (EPDM / felt)',
    text: 'Durable flat roofing options for garages, extensions and bay roofs with tidy detailing.'
  },
  {
    title: 'Chimney Repairs',
    text: 'Repointing, leadwork and chimney stack stabilisation to keep your roofline weather-tight.'
  },
  {
    title: 'Guttering & Fascias',
    text: 'Overflow, sagging and damaged uPVC sorted quickly to protect walls and foundations.'
  },
  {
    title: 'Storm Damage / Emergency',
    text: 'Rapid callouts after high winds with temporary protection and a full repair plan.'
  }
];

const projects = [
  {
    title: 'Storm damage repair',
    area: 'West Bridgford',
    summary: 'Replaced 26 dislodged tiles, repaired felt tears and made the roof watertight the same day.',
    tag: 'Repairs',
    before: '/project-1-before.svg',
    after: '/project-1-after.svg'
  },
  {
    title: 'Garage flat roof renewal',
    area: 'Beeston',
    summary: 'Removed failing mineral felt and installed a new EPDM membrane with improved edge trims.',
    tag: 'Flat Roof',
    before: '/project-2-before.svg',
    after: '/project-2-after.svg'
  },
  {
    title: 'Full re-roof on semi-detached home',
    area: 'Arnold',
    summary: 'New battens, breathable membrane and concrete tiles completed over four days.',
    tag: 'Re-roof',
    before: '/project-3-before.svg',
    after: '/project-3-after.svg'
  },
  {
    title: 'Chimney and lead flashing repair',
    area: 'Hucknall',
    summary: 'Stopped persistent loft damp by repointing stack joints and renewing lead step flashing.',
    tag: 'Chimney',
    before: '/project-4-before.svg',
    after: '/project-4-after.svg'
  },
  {
    title: 'Guttering replacement',
    area: 'Mapperley',
    summary: 'Installed deep-flow guttering and new downpipes to eliminate overflow during heavy rain.',
    tag: 'Guttering',
    before: '/project-5-before.svg',
    after: '/project-5-after.svg'
  },
  {
    title: 'Emergency ridge tile fix',
    area: 'Carlton',
    summary: 'Made safe after wind damage and rebedded ridge line with mechanically fixed system.',
    tag: 'Emergency',
    before: '/project-6-before.svg',
    after: '/project-6-after.svg'
  }
];

const reviews = [
  'Mark T., Beeston: Called at 9am about a leak and they were at our house before lunch. Straightforward advice and no pushy upsell.',
  'Priya S., West Bridgford: Clear quote, turned up on time, and left everything tidy. Communication was excellent from start to finish.',
  'Janet R., Arnold: We had recurring gutter overflows and they finally solved it. Very professional and friendly team.',
  'Lewis D., Hucknall: Emergency repair after storm damage was handled quickly. We felt reassured throughout.',
  'Daniel P., Carlton: Re-roof completed to schedule and exactly as quoted. The written guarantee gave us confidence.',
  'Hannah M., Nottingham: Honest recommendation on repair vs replacement, which saved us money right now.'
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
    q: 'How quickly can you respond to a roof leak?',
    a: 'For urgent leaks we aim for same-day attendance where possible, with temporary protection if full repair needs follow-up work.'
  },
  { q: 'Do you provide free quotes?', a: 'Yes. We offer free inspections and clear written quotes before any work begins.' },
  {
    q: 'Are you insured?',
    a: 'Yes, all work is carried out with appropriate public liability cover for domestic roofing projects.'
  },
  {
    q: 'Do your repairs and new roofs come with guarantees?',
    a: 'Yes, we provide written guarantees so you have clear documentation for completed works.'
  },
  {
    q: 'What materials do you use?',
    a: 'We use quality tile, slate, felt and EPDM systems selected for your roof type, budget and long-term durability.'
  },
  {
    q: 'How do I know if I need a repair or full replacement?',
    a: 'We inspect first and explain the options. If a repair is viable and cost-effective, we recommend that before replacement.'
  },
  {
    q: 'How does payment work?',
    a: 'For larger jobs we agree staged payments in writing. Smaller repairs are typically invoiced on completion.'
  },
  {
    q: 'Do you offer emergency callouts?',
    a: 'Yes, emergency callouts are available for storm damage and severe active leaks.'
  }
];

export default function HomePage() {
  return (
    <main id="top">
      <StickyHeader />

      <section className="bg-navy px-4 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:px-6">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-300">Nottingham & 20 miles</p>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Trusted Roofing in Nottingham — Repairs, Replacements & Emergency Callouts
            </h1>
            <p className="mt-5 text-lg text-slate-200">
              Fast response. Clear quotes. Workmanship you can rely on — backed by written guarantees.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-md bg-accent px-5 py-3 font-semibold text-white">
                Get a Free Quote
              </a>
              <a href="tel:01150000000" className="rounded-md border border-slate-300 px-5 py-3 font-semibold">
                Call Now
              </a>
            </div>
          </div>
          <div className="grid gap-3 rounded-xl bg-white/10 p-6">
            {['Free roof inspection', 'Written quotes', 'Guaranteed work'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg bg-white/10 p-3">
                <span className="text-xl text-orange-300">✓</span>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h2 className="text-2xl font-bold text-navy md:text-3xl">Roofing services for Nottingham homes</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-navy">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-slate-100 px-4 py-14 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Recent roofing projects</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-navy">
                    {project.title} – {project.area}
                  </h3>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">{project.tag}</span>
                </div>
                <p className="mt-2 text-sm text-slate-700">{project.summary}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase text-slate-500">Before</p>
                    <Image src={project.before} alt={`${project.title} before`} width={800} height={500} className="rounded-md" />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase text-slate-500">After</p>
                    <Image src={project.after} alt={`${project.title} after`} width={800} height={500} className="rounded-md" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h2 className="text-2xl font-bold text-navy md:text-3xl">Customer feedback</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <blockquote key={review} className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              “{review}”
            </blockquote>
          ))}
        </div>
      </section>

      <section id="areas" className="bg-slate-100 px-4 py-14 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Areas we cover</h2>
          <p className="mt-2 text-slate-700">Nottingham and surrounding areas within around 20 miles.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {areas.map((area) => (
              <div key={area} className="rounded-lg bg-white p-3 text-sm font-medium shadow-sm">
                {area}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold text-navy">Send your postcode to confirm coverage.</p>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h2 className="text-2xl font-bold text-navy md:text-3xl">Frequently asked questions</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="rounded-lg border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer font-semibold text-navy">{item.q}</summary>
              <p className="mt-2 text-sm text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-navy px-4 py-14 text-white md:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Talk to Northcrest Roofing Nottingham (Demo)</h2>
            <ul className="mt-5 space-y-2 text-slate-200">
              <li>Phone: 0115 000 0000</li>
              <li>Email: hello@northcrestroofing.co.uk</li>
              <li>Hours: Mon–Sat 8:00–18:00</li>
              <li>Emergency callouts available</li>
            </ul>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-200">
              <li>Free inspections and written quotes</li>
              <li>Friendly, no-pressure advice</li>
              <li>Clear timelines and tidy workmanship</li>
            </ul>
            <a href="tel:01150000000" className="mt-6 inline-block rounded-md bg-accent px-5 py-3 font-semibold text-white">
              Call 0115 000 0000
            </a>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h2 className="text-2xl font-bold text-navy md:text-3xl">Find us in Nottingham</h2>
        <p className="mt-2 text-slate-700">12 Example Street, Nottingham NG1 1AA. On-street parking is usually available nearby.</p>
        <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
          <iframe
            title="Map of Northcrest Roofing Nottingham demo location"
            src="https://www.google.com/maps?q=12+Example+Street,+Nottingham+NG1+1AA&output=embed"
            className="h-80 w-full"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="bg-charcoal px-4 py-10 text-slate-200 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div>
            <p className="font-semibold">Northcrest Roofing Nottingham (Demo)</p>
            <p className="mt-2 text-sm">Trusted local-style roofing website concept for portfolio/demo purposes.</p>
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
        <p className="mx-auto mt-6 max-w-6xl text-xs text-slate-400">Demo website project — not a real company.</p>
      </footer>
    </main>
  );
}
