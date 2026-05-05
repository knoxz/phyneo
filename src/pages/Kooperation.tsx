import { Link } from "react-router-dom";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";

export function Kooperation() {
  return (
    <>
      <PageHero
        kicker="Netzwerk"
        title="Kooperation"
        italicWord="Kooperation"
        lede="Wir arbeiten Hand in Hand mit unserer Schwesterpraxis Anders Physiotherapie – damit Patient:innen jederzeit den passenden Versorgungsweg finden."
        breadcrumbs={[{ label: "Phyneo", href: "/" }, { label: "Kooperation" }]}
      />

      <section className="container-edit pb-24">
        <Reveal>
          <div className="bg-cream-100 rounded-3xl p-8 lg:p-12 border border-ink/5 grid grid-cols-12 gap-y-8 gap-x-8">
            <div className="col-span-12 lg:col-span-5 flex items-center justify-center bg-cream-50 rounded-2xl aspect-[4/3] lg:aspect-auto p-8">
              <img
                src="/images/kooperation_logo_anders_physiotherapie.jpg"
                alt="Logo Anders Physiotherapie"
                className="max-w-full max-h-32 object-contain"
                loading="lazy"
              />
            </div>
            <div className="col-span-12 lg:col-span-7">
              <p className="label mb-3">Schwesterpraxis</p>
              <h2
                className="display text-fluid-4xl text-ink leading-tight mb-6"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70, "wght" 400' }}
              >
                Praxis <em className="display-italic text-terra-500">Anders</em> Physiotherapie Seesen
              </h2>
              <p className="body-prose mb-6">
                Für Behandlungen auf Kassenrezept (gesetzlich oder privat) verweisen wir gerne an
                unsere Schwesterpraxis. Dort erhalten Sie klassische Physiotherapie und
                Krankengymnastik im Rahmen der Verordnung.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:05381697080"
                  className="flex items-center justify-between gap-3 py-3 border-b border-ink/10 group"
                >
                  <span className="flex items-center gap-3 text-ink">
                    <Phone size={16} className="text-terra-500" />
                    <span className="font-medium">05381 · 69 70 80</span>
                  </span>
                  <ArrowUpRight size={14} className="text-ink-muted group-hover:text-terra-500 transition-colors" />
                </a>
                <a
                  href="mailto:info@physio-seesen.de"
                  className="flex items-center justify-between gap-3 py-3 border-b border-ink/10 group"
                >
                  <span className="flex items-center gap-3 text-ink">
                    <Mail size={16} className="text-terra-500" />
                    <span className="font-medium">info@physio-seesen.de</span>
                  </span>
                  <ArrowUpRight size={14} className="text-ink-muted group-hover:text-terra-500 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-edit pb-24">
        <Reveal>
          <div className="border-y border-ink/10 py-12 lg:py-20 text-center">
            <p
              className="display text-fluid-4xl text-ink leading-[1.1] max-w-3xl mx-auto"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 400' }}
            >
              <em className="display-italic text-terra-500">Sie finden</em> bei uns immer den
              richtigen <em className="display-italic text-terra-500">Weg</em> zur Versorgung.
            </p>
            <Link to="/kontakt" className="btn-primary mt-10 inline-flex">
              Persönlich beraten lassen <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
