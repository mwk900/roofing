const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const TRUST_BADGES = [
  "Fully Insured",
  "Written Guarantees",
  "Free Inspections",
];

function NRBadge() {
  return (
    <span className="inline-flex items-center justify-center w-10 h-10 rounded bg-[#E67E22] text-white font-bold text-base flex-shrink-0">
      NR
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <NRBadge />
              <div>
                <p className="text-white font-semibold text-base leading-tight">
                  Northcrest Roofing
                </p>
                <p className="text-white/50 text-xs mt-0.5">Nottingham</p>
              </div>
            </div>
            <p className="text-white/60 text-sm italic leading-relaxed">
              Above your head. On top of it.
            </p>
            <p className="text-white/40 text-xs leading-relaxed max-w-xs">
              Trusted roofing specialists serving Nottingham and the surrounding
              areas. Emergency call-outs available.
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white/50 text-xs uppercase tracking-wider font-semibold">
              Get in Touch
            </h3>
            <a
              href="tel:01150000000"
              className="flex items-center gap-3 text-white hover:text-[#E67E22] transition-colors duration-150 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-[#E67E22] flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999zm-4 0h2c0-2.761-2.238-5-5-5v2c1.657 0 3 1.343 3 3zm-3 5.5c-1.25 0-2.5-.5-3.5-1.5S8 12.75 8 11.5c0-.667-.333-1-1-1H4c-.667 0-1 .333-1 1 0 6.627 5.373 12 12 12 .667 0 1-.333 1-1v-3c0-.667-.333-1-1-1z" />
              </svg>
              <span className="font-semibold">0115 000 0000</span>
            </a>
            <a
              href="mailto:hello@northcrestroofing.co.uk"
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-[#E67E22] flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
              </svg>
              <span className="text-sm">hello@northcrestroofing.co.uk</span>
            </a>
            <div className="flex items-start gap-3 text-white/60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-[#E67E22] flex-shrink-0 mt-0.5"
                aria-hidden="true"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <address className="not-italic text-sm leading-relaxed">
                12 Example Street
                <br />
                Nottingham NG1 1AA
              </address>
            </div>
          </div>

          {/* Quick nav */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white/50 text-xs uppercase tracking-wider font-semibold">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors duration-150 inline-flex items-center gap-1.5 group"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3 h-3 text-[#E67E22] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 -ml-1"
                        aria-hidden="true"
                      >
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                      </svg>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {TRUST_BADGES.map((badge, i) => (
              <div key={badge} className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-[#16A34A] flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span className="text-white/50 text-sm font-medium">{badge}</span>
                {i < TRUST_BADGES.length - 1 && (
                  <span className="hidden md:inline text-white/20 ml-4 md:ml-6">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-white/30 text-xs">
              &copy; {new Date().getFullYear()} Northcrest Roofing. All rights reserved.
            </p>
            <p className="text-white/25 text-xs">
              Demo website for portfolio purposes. Not a real company.
            </p>
            <a
              href="https://northsummit.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 text-xs transition-colors duration-150"
            >
              Website by NorthSummit.agency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
