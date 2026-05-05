import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, Calendar, Clock } from "lucide-react";
import { COURSES } from "../data/courses";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { asset } from "../lib/cn";

export function Kurse() {
  return (
    <>
      <PageHero
        kicker="01 · Phyneo Kurse"
        title="Kursprogramm 2026"
        italicWord="2026"
        lede="Krankenkassenzertifizierte Kurse für Schwangerschaft, Rückbildung und Frauengesundheit – als Präsenz-, Online- oder Outdoor-Kurs in der Kleingruppe."
        accent="blush"
        breadcrumbs={[{ label: "Phyneo", href: "/" }, { label: "Kurse" }]}
        meta={
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blush-200 text-terra-600 text-xs font-mono uppercase tracking-wider">
              <Sparkles size={12} /> Krankenkassenzertifiziert
            </span>
            <a
              href="mailto:post@phyneo.de"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-100 text-ink text-xs font-mono uppercase tracking-wider hover:bg-ink hover:text-cream-100 transition-colors"
            >
              Anmeldung per E-Mail
            </a>
          </div>
        }
      />

      <section className="container-edit pb-24">
        <Reveal>
          <p className="label mb-8">Aktuelle Kurse</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COURSES.map((c, i) => (
              <Link
                key={c.slug}
                to={`/kurse/${c.slug}`}
                className="group block bg-cream-100 rounded-3xl overflow-hidden border border-ink/5 hover:border-terra-400 transition-all"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={asset(c.image)}
                    alt={c.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover image-warm card-hover-image"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2 flex-wrap">
                    {c.format.map((f) => (
                      <span
                        key={f}
                        className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-cream-50/95 backdrop-blur text-ink"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  {c.certified && (
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-sage-500 text-cream-100">
                      § 20 SGB V
                    </span>
                  )}
                </div>
                <div className="p-6 lg:p-8">
                  <p className="label mb-3">{c.category} · {c.audience}</p>
                  <h3
                    className="font-display text-2xl lg:text-3xl text-ink leading-tight mb-4"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-ink-soft mb-5 leading-relaxed">{c.lede}</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-muted font-mono mb-5">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={12} /> ab {c.schedule[0].start}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} /> {c.schedule[0].weekday} · {c.schedule[0].time}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:gap-4 transition-all">
                    Zum Kurs <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-blush-100 py-20">
        <div className="container-edit">
          <Reveal>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-7">
                <p className="label mb-4">Anmeldung</p>
                <h2
                  className="display text-fluid-4xl text-ink leading-tight"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70, "wght" 400' }}
                >
                  Direkt per <em className="display-italic text-terra-500">E-Mail</em> anmelden.
                </h2>
                <p className="body-prose mt-4">
                  Schreib uns kurz, welcher Kurs Dich interessiert. Wir senden Dir das
                  Anmeldeformular und alle weiteren Infos zur Kostenerstattung.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col justify-center gap-3">
                <a href="mailto:post@phyneo.de?subject=Kursanmeldung" className="btn-primary justify-center">
                  post@phyneo.de
                </a>
                <a href="tel:053819812030" className="btn-outline justify-center">
                  05381 · 98 12 030
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
