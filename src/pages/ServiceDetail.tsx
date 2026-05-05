import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Check, Sparkle } from "lucide-react";
import { findService, servicesForPillar } from "../data/services";
import { PILLARS, ACCENT_STYLES } from "../data/pillars";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";

export function ServiceDetail({ pillar }: { pillar: "kinder" | "erwachsene" | "unternehmen" }) {
  const { slug } = useParams();
  const service = findService(pillar, slug ?? "");
  const pillarData = PILLARS.find((p) => p.id === pillar)!;
  const accent = ACCENT_STYLES[pillarData.accent];

  if (!service) {
    return (
      <section className="container-edit py-32 text-center">
        <h1 className="display text-fluid-5xl">Nicht gefunden</h1>
        <Link to={`/${pillar}`} className="btn-primary mt-8 inline-flex">
          Zurück zur Übersicht
        </Link>
      </section>
    );
  }

  const otherServices = servicesForPillar(pillar).filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        kicker={service.category}
        title={service.title}
        italicWord={service.italicHighlight}
        lede={service.lede}
        image={service.image}
        imageAlt={service.imageAlt}
        accent={pillarData.accent}
        breadcrumbs={[
          { label: "Phyneo", href: "/" },
          { label: pillarData.kicker, href: pillarData.href },
          { label: service.title },
        ]}
      />

      {/* Body content */}
      <section className="container-edit pb-20">
        <div className="grid grid-cols-12 gap-y-12 gap-x-8">
          <Reveal className="col-span-12 lg:col-span-7 lg:col-start-1">
            <p className="label mb-6">Was Sie erwartet</p>
            <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
              {service.body.map((p, i) => (
                <p key={i} className={i === 0 ? "dropcap" : ""}>
                  {p}
                </p>
              ))}
            </div>
            {service.audience && (
              <div className={`mt-10 p-6 rounded-2xl ${accent.bgSoft} border ${accent.border}`}>
                <p className="label mb-2">Wann sinnvoll?</p>
                <p className="text-ink">{service.audience}</p>
              </div>
            )}
            {service.notes && (
              <div className="mt-8 space-y-3">
                {service.notes.map((n, i) => (
                  <p key={i} className="text-sm text-ink-muted leading-relaxed border-l-2 border-terra-400 pl-4 py-1">
                    {n}
                  </p>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={0.15} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="sticky top-24 space-y-3">
              <p className="label mb-4">Highlights</p>
              {service.highlights.map((h, i) => (
                <div
                  key={i}
                  className="border-t border-ink/10 first:border-t-0 pt-4 first:pt-0"
                >
                  <p className={`font-display text-lg ${accent.text}`} style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}>
                    {h.label}
                  </p>
                  <p className="text-sm text-ink-soft mt-1">{h.copy}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Indications */}
      {service.indications && service.indications.length > 0 && (
        <section className={`${accent.bg} py-20 lg:py-28`}>
          <div className="container-edit">
            <Reveal>
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-5">
                  <p className="label mb-4">{service.indicationsTitle ?? "Indikationen"}</p>
                  <h2
                    className="display text-fluid-4xl text-ink leading-tight"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70, "wght" 400' }}
                  >
                    Hilfe bei <em className="display-italic text-terra-500">vielen</em> Themen.
                  </h2>
                </div>
                <ul className="col-span-12 lg:col-span-6 lg:col-start-7 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {service.indications.map((ind, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 py-3 border-b border-ink/10 text-ink-soft"
                    >
                      <Check size={16} className="mt-1 shrink-0 text-sage-500" />
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Flow steps */}
      {service.flow && service.flow.length > 0 && (
        <section className="container-edit py-20 lg:py-28">
          <Reveal>
            <div className="grid grid-cols-12 gap-8 mb-10">
              <div className="col-span-12 lg:col-span-6">
                <p className="label mb-4">Ablauf</p>
                <h2
                  className="display text-fluid-4xl text-ink leading-tight"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70, "wght" 400' }}
                >
                  So gehen wir <em className="display-italic text-terra-500">vor</em>.
                </h2>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.flow.map((step, i) => (
              <Reveal delay={i * 0.05} key={i}>
                <div className="bg-cream-100 rounded-2xl p-6 border border-ink/5 h-full relative">
                  <div className="number-mark mb-4">{step.step}</div>
                  <p className="text-ink leading-snug">{step.copy}</p>
                  {i < service.flow!.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2 w-4 h-px bg-ink/20" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* CTA + related */}
      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="container-edit">
          <Reveal>
            <div className="grid grid-cols-12 gap-8 mb-12">
              <div className="col-span-12 lg:col-span-7">
                <p className="label mb-4">Termin</p>
                <h2
                  className="display text-fluid-5xl text-ink leading-[0.95]"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70, "wght" 400' }}
                >
                  Sprechen wir
                  <br />
                  <em className="display-italic text-terra-500">miteinander</em>.
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col justify-center gap-3">
                <Link to="/kontakt" className="btn-primary justify-center">
                  Termin anfragen <ArrowUpRight size={16} />
                </Link>
                <a href="tel:053819812030" className="btn-outline justify-center">
                  05381 · 98 12 030
                </a>
              </div>
            </div>
          </Reveal>

          {otherServices.length > 0 && (
            <Reveal delay={0.1}>
              <div className="border-t border-ink/10 pt-10">
                <p className="label mb-6 flex items-center gap-2">
                  <Sparkle size={12} /> Auch interessant
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {otherServices.slice(0, 3).map((other) => (
                    <Link
                      key={other.slug}
                      to={`/${pillar}/${other.slug}`}
                      className="group bg-cream-50 rounded-2xl p-6 border border-ink/5 hover:border-terra-400 transition-colors"
                    >
                      <p className="label mb-3">{other.category}</p>
                      <h3
                        className="font-display text-xl leading-tight tracking-tight text-ink mb-2"
                        style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
                      >
                        {other.title}
                      </h3>
                      <p className="text-sm text-ink-soft mb-4 line-clamp-2">{other.lede}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink group-hover:gap-3 transition-all">
                        Mehr erfahren
                        <ArrowUpRight size={12} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
