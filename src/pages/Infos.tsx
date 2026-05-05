import { Link } from "react-router-dom";
import { ArrowUpRight, Info, FileText, CreditCard } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";

export function Infos() {
  return (
    <>
      <PageHero
        kicker="Praxis"
        title="Infos & Behandlungskosten"
        italicWord="Behandlungskosten"
        lede="Transparenz von Anfang an: Wie sich die Kosten zusammensetzen, was Versicherungen erstatten und wann eine Behandlung sinnvoll ist."
        breadcrumbs={[{ label: "Phyneo", href: "/" }, { label: "Infos" }]}
      />

      <section className="container-edit pb-24">
        <div className="grid grid-cols-12 gap-y-10 gap-x-6">
          <Reveal className="col-span-12 lg:col-span-7 space-y-6">
            <InfoCard
              icon={<Info size={20} />}
              title="Wichtiger Hinweis"
              body="Eine Behandlung in unserer Praxis ersetzt keinen Arztbesuch. Unsere Leistungen befinden sich im Bereich der Zusatzleistungen."
            />
            <InfoCard
              icon={<FileText size={20} />}
              title="Gebührenordnung"
              body="Unsere Preise richten sich sowohl nach der Gebührenordnung für Heilpraktiker:innen als auch nach der Gebührenordnung für Physiotherapeut:innen."
            />
            <InfoCard
              icon={<CreditCard size={20} />}
              title="Kostenübernahme"
              body="Die Leistungen werden nicht von gesetzlichen Krankenkassen übernommen. Private Krankenversicherungen und Zusatzversicherungen können die Kosten ganz oder teilweise erstatten. Die Patient:innen entrichten das vollständige Honorar – unabhängig von der Erstattungshöhe der Versicherung."
            />
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="bg-sage-500 text-cream-100 rounded-3xl p-8 lg:p-10 sticky top-24">
              <p className="label text-cream-200/70 mb-3">Krankengymnastik auf Rezept?</p>
              <h2
                className="display text-3xl text-cream-100 leading-tight mb-4"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70, "wght" 400' }}
              >
                Wir verweisen <em className="display-italic text-terra-300">gerne</em>.
              </h2>
              <p className="text-sm text-cream-200/85 leading-relaxed mb-6">
                Möchten Sie eine Behandlung gemäß einer Verordnung der gesetzlichen oder privaten
                Krankenkasse erhalten, melden Sie sich bei unserer Schwesterpraxis Anders
                Physiotherapie.
              </p>
              <a
                href="mailto:info@physio-seesen.de"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream-100 text-ink text-sm font-medium hover:bg-terra-300 transition-colors"
              >
                info@physio-seesen.de <ArrowUpRight size={16} />
              </a>
              <Link to="/kooperation" className="block mt-4 text-xs text-cream-200/70 hover:text-cream-100 transition-colors">
                Mehr zur Kooperation →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-100 py-20">
        <div className="container-edit">
          <Reveal>
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 lg:col-span-7">
                <p className="label mb-4">Fragen?</p>
                <h2
                  className="display text-fluid-4xl text-ink leading-tight"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70, "wght" 400' }}
                >
                  Sprechen wir <em className="display-italic text-terra-500">persönlich</em>.
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col gap-3">
                <Link to="/kontakt" className="btn-primary justify-center">
                  Kontaktformular <ArrowUpRight size={16} />
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

function InfoCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-cream-100 rounded-3xl p-8 border border-ink/5">
      <div className="flex items-center gap-3 mb-4">
        <span className="grid w-10 h-10 place-items-center rounded-full bg-terra-400 text-cream-100">
          {icon}
        </span>
        <h2
          className="font-display text-2xl text-ink"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
        >
          {title}
        </h2>
      </div>
      <p className="text-ink-soft leading-relaxed">{body}</p>
    </div>
  );
}
