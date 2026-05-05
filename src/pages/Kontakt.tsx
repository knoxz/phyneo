import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";

export function Kontakt() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        kicker="Kontakt"
        title="Komm vorbei."
        italicWord="vorbei"
        lede="Wir freuen uns auf deine Nachricht oder einen Anruf. Termine vereinbaren wir gemeinsam – persönlich, telefonisch oder per E-Mail."
        breadcrumbs={[{ label: "Phyneo", href: "/" }, { label: "Kontakt" }]}
      />

      <section className="container-edit pb-24">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          {/* Contact details */}
          <Reveal className="col-span-12 lg:col-span-5">
            <div className="space-y-1">
              <ContactRow
                icon={<MapPin size={16} />}
                label="Praxis"
                value={
                  <address className="not-italic text-ink leading-relaxed">
                    Katharina Anders<br />
                    Rustwiese 7<br />
                    38723 Seesen
                  </address>
                }
              />
              <ContactRow
                icon={<Phone size={16} />}
                label="Telefon"
                value={
                  <a href="tel:053819812030" className="link-underline text-ink">
                    05381 · 98 12 030
                  </a>
                }
              />
              <ContactRow
                icon={<Mail size={16} />}
                label="E-Mail"
                value={
                  <a href="mailto:post@phyneo.de" className="link-underline text-ink">
                    post@phyneo.de
                  </a>
                }
              />
              <ContactRow
                icon={<Clock size={16} />}
                label="Öffnungszeiten"
                value={<span className="text-ink">Termine nach Vereinbarung</span>}
              />
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-blush-50 border border-blush-200">
              <p className="label mb-3">Hinweis</p>
              <p className="text-sm text-ink-soft leading-relaxed">
                Eine Behandlung bei Phyneo ersetzt keinen Arztbesuch – unsere Leistungen sind
                Zusatzleistungen. Für Behandlungen auf Kassenrezept verweisen wir an{" "}
                <a
                  href="mailto:info@physio-seesen.de"
                  className="link-underline text-ink font-medium"
                >
                  Anders Physiotherapie
                </a>
                .
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="col-span-12 lg:col-span-7">
            <div className="bg-cream-100 rounded-3xl p-8 lg:p-10 border border-ink/5">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="grid w-14 h-14 place-items-center rounded-full bg-sage-500 text-cream-100 mx-auto mb-6">
                    <Check size={20} />
                  </div>
                  <h3
                    className="font-display text-3xl text-ink mb-3"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
                  >
                    Vielen Dank!
                  </h3>
                  <p className="text-ink-soft max-w-md mx-auto">
                    Deine Nachricht ist bei uns – wir melden uns in Kürze.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <p className="label mb-6">Schreib uns</p>
                  <Field label="Name" required>
                    <input
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:border-terra-500 focus:outline-none transition-colors"
                    />
                  </Field>
                  <Field label="E-Mail" required>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:border-terra-500 focus:outline-none transition-colors"
                    />
                  </Field>
                  <Field label="Telefon (optional)">
                    <input
                      type="tel"
                      autoComplete="tel"
                      className="w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:border-terra-500 focus:outline-none transition-colors"
                    />
                  </Field>
                  <Field label="Anliegen">
                    <select
                      defaultValue=""
                      className="w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:border-terra-500 focus:outline-none transition-colors"
                    >
                      <option value="" disabled>Bitte wählen</option>
                      <option>Kurse</option>
                      <option>Phyneo für Kinder</option>
                      <option>Phyneo für Erwachsene</option>
                      <option>Phyneo für Unternehmen</option>
                      <option>Sonstiges</option>
                    </select>
                  </Field>
                  <Field label="Nachricht" required>
                    <textarea
                      required
                      rows={5}
                      className="w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:border-terra-500 focus:outline-none transition-colors resize-none"
                    />
                  </Field>
                  <label className="flex items-start gap-3 text-xs text-ink-muted leading-relaxed pt-2">
                    <input type="checkbox" required className="mt-1 accent-terra-500" />
                    Ich habe die <a href="/datenschutz" className="link-underline text-ink">Datenschutzerklärung</a> zur Kenntnis genommen.
                  </label>
                  <button type="submit" className="btn-primary mt-2">
                    Nachricht senden <ArrowUpRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-sage-500 text-cream-100">
        <div className="container-edit py-16 lg:py-20 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-6">
            <p className="label text-cream-200/70 mb-4">Anfahrt</p>
            <h2
              className="display text-fluid-4xl text-cream-100 leading-tight"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70, "wght" 400' }}
            >
              Mitten in <em className="display-italic text-terra-300">Seesen</em>.
            </h2>
            <p className="mt-4 text-cream-200/85 leading-relaxed max-w-md">
              Die Praxis liegt in der Rustwiese 7, 38723 Seesen – kostenlose Parkmöglichkeiten
              direkt vor der Tür.
            </p>
            <a
              href="https://maps.google.com/?q=Rustwiese+7,+38723+Seesen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-cream-100 text-ink text-sm font-medium hover:bg-terra-300 transition-colors"
            >
              In Google Maps öffnen <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-cream-200/15 bg-sage-600 grid place-items-center relative">
              <svg className="absolute inset-0 w-full h-full opacity-20" aria-hidden>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F4EEE5" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              <div className="text-center relative">
                <MapPin size={32} className="text-terra-300 mx-auto mb-3" />
                <p className="font-display text-2xl text-cream-100" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}>
                  Rustwiese 7
                </p>
                <p className="text-sm text-cream-200/80">38723 Seesen</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-4 py-5 border-b border-ink/10 last:border-b-0 items-start">
      <div className="col-span-12 sm:col-span-3 flex items-center gap-2 label">
        {icon} {label}
      </div>
      <div className="col-span-12 sm:col-span-9">{value}</div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="label block mb-1">
        {label} {required && <span className="text-terra-500">*</span>}
      </span>
      {children}
    </label>
  );
}
