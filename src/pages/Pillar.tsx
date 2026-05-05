import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PILLARS, ACCENT_STYLES, type Pillar as PillarT } from "../data/pillars";
import { servicesForPillar } from "../data/services";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";

export function Pillar({ id }: { id: PillarT["id"] }) {
  const pillar = PILLARS.find((p) => p.id === id)!;
  const services = servicesForPillar(id);
  const accent = ACCENT_STYLES[pillar.accent];

  return (
    <>
      <PageHero
        kicker={`${pillar.number} · ${pillar.kicker}`}
        title={pillar.title}
        italicWord={pillar.italicWord}
        lede={pillar.lede}
        image={pillar.image}
        imageAlt={pillar.imageAlt}
        accent={pillar.accent}
        breadcrumbs={[{ label: "Phyneo", href: "/" }, { label: pillar.kicker }]}
        meta={
          <div className="flex flex-wrap gap-2">
            {pillar.bullets.map((b) => (
              <Link
                key={b.href}
                to={b.href}
                className={`px-4 py-2 rounded-full text-sm border ${accent.border} ${accent.bgSoft} hover:${accent.bg} transition-colors`}
              >
                {b.label}
              </Link>
            ))}
          </div>
        }
      />

      <section className="container-edit pb-20 md:pb-32">
        <Reveal>
          <p className="label mb-6">Leistungen im Überblick</p>
          <div className="border-t border-ink/10">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to={`/${id}/${s.slug}`}
                className="group grid grid-cols-12 gap-4 items-center py-8 border-b border-ink/10 hover:bg-cream-100 transition-colors px-2 -mx-2 rounded-lg"
              >
                <span className="col-span-2 lg:col-span-1 number-mark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10 lg:col-span-5">
                  <h3
                    className="font-display text-2xl lg:text-3xl text-ink leading-tight"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
                  >
                    {s.title}
                  </h3>
                </div>
                <p className="col-span-12 lg:col-span-5 text-ink-soft text-sm lg:text-base leading-relaxed">
                  {s.lede}
                </p>
                <ArrowUpRight
                  size={20}
                  className="hidden lg:block col-span-1 ml-auto text-ink-muted group-hover:text-terra-500 group-hover:rotate-45 transition-all"
                />
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={`${accent.bg} py-24 lg:py-32`}>
        <div className="container-edit">
          <Reveal>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-7">
                <p className="label mb-4">Persönliches Gespräch</p>
                <h2
                  className="display text-fluid-5xl text-ink leading-[0.96]"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70, "wght" 400' }}
                >
                  Unsicher,{" "}
                  <em className="display-italic text-terra-500">was passt</em>?
                </h2>
                <p className="body-prose mt-6">
                  Wir nehmen uns Zeit für Sie und Ihre Situation. In einem persönlichen Gespräch
                  finden wir gemeinsam heraus, welcher Weg sich für Sie richtig anfühlt.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col justify-end gap-3">
                <Link to="/kontakt" className="btn-primary justify-center">
                  Termin anfragen <ArrowUpRight size={16} />
                </Link>
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
