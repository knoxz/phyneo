import { Link } from "react-router-dom";
import { ArrowUpRight, Award, GraduationCap, Briefcase, BookOpen } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";

const EDUCATION = [
  "Abitur am Jacobson-Gymnasium Seesen (2,1)",
  "Auslandsaufenthalt in England (Au-pair)",
  "Studium der Mathematik und Sportwissenschaften",
  "Staatsexamen Physiotherapie · IB-Akademie Seesen (1,0 mit Auszeichnung)",
  "Bachelor of Science Physiotherapie · HAWK Hildesheim (1,3)",
  "Master of Science Physiotherapie · HAWK Hildesheim (1,6)",
  "IFK-Wissenschaftspreis 2023 · 2. Platz",
];

const EXPERIENCE = [
  {
    role: "Physiotherapeutin",
    place: "Asklepios Kliniken Schildautal Seesen",
    focus: "Schwerpunkt Neurologie & Akutversorgung",
  },
  {
    role: "Physiotherapeutin",
    place: "Praxis Anders Physiotherapie",
    focus: "Schwerpunkt Kindertherapie & Orthopädie",
  },
  {
    role: "Dozentin",
    place: "HAWK Hildesheim",
    focus: "Medizinische Statistik",
  },
  {
    role: "Dozentin",
    place: "Medischulen Seesen · Schule für Physiotherapie",
    focus: "Orthopädie",
  },
];

const TRAINING = [
  "Staatlich geprüfte Heilpraktikerin · EOS-Institut Hannover",
  "Manuelle Therapie nach McKenzie · Schwerpunkt Wirbelsäule",
  "Bobath · Säuglinge, Kleinkinder & Jugendliche",
  "Akupunkturausbildung",
  "Osteopathische Behandlungen Kinder & Säuglinge",
];

export function UeberMich() {
  return (
    <>
      <PageHero
        kicker="Über mich"
        title="Katharina Anders"
        italicWord="Anders"
        lede="Inhaberin von Phyneo. Master of Science in Physiotherapie, Heilpraktikerin, Kinder-Bobath-Therapeutin – mit dem Anspruch, Wissenschaft, Erfahrung und Empathie zusammenzubringen."
        image="/images/ueber_mich_katharina_anders.jpg"
        imageAlt="Porträt Katharina Anders"
        accent="sage"
        breadcrumbs={[{ label: "Phyneo", href: "/" }, { label: "Über mich" }]}
      />

      {/* Pull quote */}
      <section className="container-edit py-16 lg:py-24">
        <Reveal>
          <div className="border-y border-ink/10 py-12 lg:py-20">
            <p
              className="display text-fluid-5xl text-ink leading-[1.05] max-w-5xl"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 400' }}
            >
              <em
                className="display-italic text-terra-500"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
              >
                „
              </em>
              Wir gehen über die traditionelle Physiotherapie hinaus – evidenzbasierte Methoden,
              individuelle Betreuung und komplementäre Therapieformen, um an den{" "}
              <em className="display-italic text-terra-500">Wurzeln</em> Ihrer Beschwerden anzusetzen.
              <em
                className="display-italic text-terra-500"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
              >
                "
              </em>
            </p>
          </div>
        </Reveal>
      </section>

      {/* CV blocks */}
      <section className="container-edit pb-24">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          <Reveal className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="grid w-9 h-9 place-items-center rounded-full bg-sage-500 text-cream-100">
                <GraduationCap size={16} />
              </span>
              <p className="label">Bildung</p>
            </div>
            <ul className="space-y-3">
              {EDUCATION.map((e, i) => (
                <li
                  key={i}
                  className="text-ink-soft text-sm leading-relaxed border-l-2 border-sage-300 pl-4 py-1"
                >
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="grid w-9 h-9 place-items-center rounded-full bg-terra-400 text-cream-100">
                <Briefcase size={16} />
              </span>
              <p className="label">Berufserfahrung</p>
            </div>
            <ul className="space-y-5">
              {EXPERIENCE.map((e, i) => (
                <li key={i}>
                  <p
                    className="font-display text-lg text-ink leading-tight"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
                  >
                    {e.role}
                  </p>
                  <p className="text-sm text-ink-soft">{e.place}</p>
                  <p className="text-xs text-ink-muted mt-0.5">{e.focus}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="grid w-9 h-9 place-items-center rounded-full bg-blush-300 text-ink">
                <BookOpen size={16} />
              </span>
              <p className="label">Fortbildungen</p>
            </div>
            <ul className="space-y-3">
              {TRAINING.map((t, i) => (
                <li
                  key={i}
                  className="text-ink-soft text-sm leading-relaxed border-l-2 border-blush-300 pl-4 py-1"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Award highlight */}
      <section className="bg-sage-500 text-cream-100 py-20 lg:py-28">
        <div className="container-edit">
          <Reveal>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-1 lg:flex lg:items-start lg:justify-end">
                <Award size={32} className="text-terra-300" />
              </div>
              <div className="col-span-12 lg:col-span-7">
                <p className="label text-cream-200/70 mb-4">Auszeichnung</p>
                <h2
                  className="display text-fluid-4xl text-cream-100 leading-tight"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70, "wght" 400' }}
                >
                  IFK-Wissenschaftspreis <em className="display-italic text-terra-300">2023</em> · 2. Platz
                </h2>
                <p className="mt-6 text-cream-200/85 leading-relaxed max-w-2xl">
                  Wissenschaftliche Auseinandersetzung mit der eigenen Disziplin gehört für mich zur
                  Praxis dazu. Diese Haltung fließt in jede Behandlung bei Phyneo ein – aktuelle
                  Forschung trifft auf langjährige klinische Erfahrung.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 flex flex-col justify-end gap-3">
                <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cream-100 text-ink text-sm font-medium hover:bg-terra-300 transition-colors">
                  Termin anfragen <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
