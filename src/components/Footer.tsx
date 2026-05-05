import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import { PRIMARY_NAV, FOOTER_NAV } from "../data/nav";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-cream-200">
      <div className="container-edit pt-24 pb-10">
        {/* Massive editorial wordmark */}
        <div className="border-b border-cream-200/15 pb-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6">
            <div className="lg:col-span-7">
              <p className="label text-cream-200/60 mb-6">Raum für Therapie</p>
              <h2
                className="font-display text-fluid-6xl leading-[0.9] tracking-tightest text-cream-100"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 80, "wght" 400' }}
              >
                Schreib uns,
                <br />
                <em
                  className="display-italic text-terra-300"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  ruf an,
                </em>{" "}
                komm vorbei.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-4 space-y-8">
              <div>
                <p className="label text-cream-200/60 mb-2">Praxis</p>
                <address className="not-italic font-sans text-base leading-relaxed">
                  Katharina Anders<br />
                  Rustwiese 7<br />
                  38723 Seesen
                </address>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="label text-cream-200/60 mb-2">Telefon</p>
                  <a href="tel:053819812030" className="link-underline text-cream-100">
                    05381 · 98 12 030
                  </a>
                </div>
                <div>
                  <p className="label text-cream-200/60 mb-2">E-Mail</p>
                  <a href="mailto:post@phyneo.de" className="link-underline text-cream-100">
                    post@phyneo.de
                  </a>
                </div>
              </div>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cream-100 text-ink text-sm font-medium hover:bg-terra-300 transition-colors"
              >
                Termin anfragen
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Sitemap */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-12 border-b border-cream-200/10">
          {PRIMARY_NAV.slice(0, 4).map((item) => (
            <div key={item.href}>
              <Link
                to={item.href}
                className="font-display text-lg text-cream-100 hover:text-terra-300 transition-colors block mb-3"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60' }}
              >
                {item.label}
              </Link>
              <ul className="space-y-1.5">
                {item.children?.map((child) => (
                  <li key={child.href}>
                    <Link
                      to={child.href}
                      className="text-sm text-cream-200/70 hover:text-cream-100 transition-colors"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="font-display text-lg text-cream-100 mb-3" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60' }}>
              Praxis
            </p>
            <ul className="space-y-1.5">
              {FOOTER_NAV.praxis.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-cream-200/70 hover:text-cream-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-lg text-cream-100 mb-3" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60' }}>
              Folgen
            </p>
            <div className="flex gap-2 mb-4">
              <a aria-label="Instagram" href="#" className="w-10 h-10 grid place-items-center rounded-full border border-cream-200/20 hover:bg-cream-200 hover:text-ink transition-colors">
                <InstagramIcon size={16} />
              </a>
              <a aria-label="Facebook" href="#" className="w-10 h-10 grid place-items-center rounded-full border border-cream-200/20 hover:bg-cream-200 hover:text-ink transition-colors">
                <FacebookIcon size={16} />
              </a>
              <a aria-label="LinkedIn" href="#" className="w-10 h-10 grid place-items-center rounded-full border border-cream-200/20 hover:bg-cream-200 hover:text-ink transition-colors">
                <LinkedinIcon size={16} />
              </a>
            </div>
            <ul className="space-y-1.5">
              {FOOTER_NAV.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-cream-200/70 hover:text-cream-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Wordmark big */}
        <div
          className="font-display text-[18vw] sm:text-[16vw] leading-none tracking-tightest text-cream-100/10 select-none my-8 sm:my-12 text-center"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 90' }}
          aria-hidden
        >
          phyneo
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 text-xs text-cream-200/50">
          <p>© {year} Katharina Anders · Phyneo. Alle Rechte vorbehalten.</p>
          <p className="font-mono">Raum für Therapie · Seesen, Niedersachsen</p>
        </div>
      </div>
    </footer>
  );
}
