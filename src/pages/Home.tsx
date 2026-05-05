import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, ArrowDown, Sparkle, Phone, Mail } from "lucide-react";
import { useRef } from "react";
import { PILLARS, ACCENT_STYLES } from "../data/pillars";
import { Reveal } from "../components/Reveal";

export function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Pillars />
      <Manifesto />
      <Credentials />
      <CourseHighlight />
      <CTABand />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="container-edit pt-12 lg:pt-16 pb-20 lg:pb-32 relative">
        {/* Top meta bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-12 lg:mb-20">
          <span className="label">Praxis Katharina Anders · Seesen</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" />
            <span className="label">Termine nach Vereinbarung</span>
          </div>
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="display text-fluid-7xl lg:text-[10vw] leading-[0.88] tracking-tightest text-ink"
        >
          <span className="block">Raum für</span>
          <span className="block">
            <em
              className="display-italic text-terra-500"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "wght" 400' }}
            >
              Therapie
            </em>
            <span aria-hidden className="text-ink-light">.</span>
          </span>
        </motion.h1>

        {/* Sub-grid */}
        <div className="grid grid-cols-12 mt-12 lg:mt-20 gap-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="col-span-12 lg:col-span-5 lg:col-start-1"
          >
            <p className="label mb-4">Phyneo</p>
            <p className="font-sans text-lg lg:text-xl text-ink-soft leading-relaxed max-w-md">
              Hochqualifizierte Leistungen im Bereich{" "}
              <strong className="text-ink font-medium">betriebliche Gesundheitsförderung</strong>,
              <strong className="text-ink font-medium"> evidenzbasierte Physiotherapie</strong> und
              <strong className="text-ink font-medium"> osteopathische Behandlungen</strong> – für jede Lebensphase.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/kontakt" className="btn-primary">
                Termin anfragen <ArrowUpRight size={16} />
              </Link>
              <Link to="/ueber-mich" className="btn-outline">
                Über Katharina
              </Link>
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="col-span-12 lg:col-span-4 lg:col-start-9"
          >
            <div className="space-y-5">
              <Stat number="M.Sc." label="Master of Science Physiotherapie · HAWK Hildesheim" />
              <Stat number="2." label="Platz IFK-Wissenschaftspreis 2023" />
              <Stat number="20+" label="Jahre Erfahrung als Kinder-Bobath-Therapeutin" />
            </div>
          </motion.div>
        </div>

        {/* Floating image collage */}
        <motion.div
          style={{ y: y1 }}
          className="absolute right-0 top-[8%] w-[20%] max-w-[260px] hidden lg:block"
        >
          <div className="aspect-[3/4] rounded-[2px] overflow-hidden border border-ink/10">
            <img
              src="/images/kinder_tragetuch.jpg"
              alt="Mutter trägt Baby in Tragetuch"
              className="w-full h-full object-cover image-warm"
              loading="eager"
            />
          </div>
          <p className="label mt-3 text-right">Phyneo für Kinder</p>
        </motion.div>

        {/* Decorative scribble */}
        <motion.svg
          style={{ y: y2 }}
          className="absolute right-[8%] bottom-[6%] hidden lg:block opacity-40 pointer-events-none"
          width="180"
          height="80"
          viewBox="0 0 180 80"
          fill="none"
          aria-hidden
        >
          <path
            d="M2 40 Q 30 10, 60 40 T 120 40 T 178 40"
            stroke="#C97B5A"
            strokeWidth="1.5"
            fill="none"
          />
        </motion.svg>

        {/* Scroll cue */}
        <div className="mt-16 lg:mt-24 flex items-center gap-3 label">
          <ArrowDown size={14} className="animate-bounce" />
          <span>Vier Räume · ein ganzheitlicher Ansatz</span>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="border-l-2 border-terra-400 pl-4 py-1">
      <div className="font-display text-3xl text-ink" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 80' }}>
        {number}
      </div>
      <p className="text-sm text-ink-muted leading-snug mt-1">{label}</p>
    </div>
  );
}

function Marquee() {
  const items = [
    "Evidenzbasiert",
    "Ganzheitlich",
    "Individuell",
    "Empathisch",
    "Empowernd",
    "Wissenschaftlich fundiert",
    "Sanft",
    "Modern",
  ];
  const repeated = [...items, ...items, ...items];
  return (
    <section className="border-y border-ink/10 py-6 bg-cream-100 overflow-hidden" aria-hidden>
      <div className="flex gap-8 whitespace-nowrap animate-marquee">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="display-italic text-2xl md:text-3xl text-ink-soft tracking-tight inline-flex items-center gap-8"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
          >
            {item}
            <Sparkle size={14} className="text-terra-400" />
          </span>
        ))}
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="container-edit py-24 lg:py-36">
      <Reveal>
        <div className="grid grid-cols-12 gap-y-6 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="label mb-4">Vier Räume</p>
            <h2
              className="display text-fluid-5xl text-ink leading-[0.95]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70, "wght" 400' }}
            >
              Für jede Lebensphase
              <br />
              ein <em className="display-italic text-terra-500">eigener</em> Raum.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-4">
            <p className="body-prose">
              Phyneo verbindet vier Welten unter einem Dach: Kurse rund um Schwangerschaft und Frauengesundheit,
              spezialisierte Therapie für Babys & Kinder, evidenzbasierte Behandlung für Erwachsene und
              maßgeschneiderte betriebliche Gesundheitsförderung.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="space-y-3 lg:space-y-5">
        {PILLARS.map((p, idx) => (
          <PillarRow key={p.id} pillar={p} idx={idx} />
        ))}
      </div>
    </section>
  );
}

function PillarRow({ pillar, idx }: { pillar: (typeof PILLARS)[number]; idx: number }) {
  const accent = ACCENT_STYLES[pillar.accent];
  const reverse = idx % 2 === 1;

  return (
    <Reveal delay={idx * 0.08}>
      <Link
        to={pillar.href}
        className={`group block ${accent.bgSoft} hover:${accent.bg} rounded-2xl border ${accent.border} overflow-hidden transition-colors`}
      >
        <div className={`grid grid-cols-12 gap-0 ${reverse ? "lg:[direction:rtl]" : ""}`}>
          <div className="col-span-12 lg:col-span-5 relative aspect-[4/3] lg:aspect-auto overflow-hidden [direction:ltr]">
            <img
              src={pillar.image}
              alt={pillar.imageAlt}
              className="absolute inset-0 w-full h-full object-cover image-warm card-hover-image"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider ${accent.badge}`}>
                {pillar.number} · {pillar.kicker}
              </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center [direction:ltr]">
            <p className="label mb-3">{pillar.audience}</p>
            <h3
              className={`display text-fluid-4xl leading-[1] tracking-tightest text-ink mb-6 max-w-md`}
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70, "wght" 400' }}
            >
              {pillar.italicWord ? (
                <>
                  {pillar.title.split(pillar.italicWord)[0]}
                  <em
                    className={`display-italic ${accent.text}`}
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                  >
                    {pillar.italicWord}
                  </em>
                  {pillar.title.split(pillar.italicWord)[1]}
                </>
              ) : (
                pillar.title
              )}
            </h3>
            <p className="body-prose mb-6">{pillar.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {pillar.bullets.slice(0, 4).map((b) => (
                <span
                  key={b.href}
                  className="px-3 py-1.5 rounded-full bg-cream-100 text-xs font-medium text-ink-soft border border-ink/5"
                >
                  {b.label}
                </span>
              ))}
              {pillar.bullets.length > 4 && (
                <span className="px-3 py-1.5 rounded-full bg-cream-100 text-xs font-medium text-ink-muted border border-ink/5">
                  + {pillar.bullets.length - 4} weitere
                </span>
              )}
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:gap-4 transition-all">
              Mehr erfahren
              <ArrowUpRight size={16} className="opacity-60 group-hover:opacity-100" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

function Manifesto() {
  return (
    <section className="bg-sage-500 text-cream-100 py-24 lg:py-36 overflow-hidden relative">
      <svg
        className="absolute -top-20 -right-20 opacity-20 hidden md:block"
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden
      >
        <circle cx="200" cy="200" r="199" stroke="#F4EEE5" strokeDasharray="2 8" />
        <circle cx="200" cy="200" r="140" stroke="#F4EEE5" strokeDasharray="2 8" />
        <circle cx="200" cy="200" r="80" stroke="#F4EEE5" strokeDasharray="2 8" />
      </svg>

      <div className="container-edit relative">
        <Reveal>
          <p className="label text-cream-200/70 mb-8">Phyneo Manifest</p>
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote
            className="display text-fluid-5xl leading-[1.05] text-cream-100 max-w-5xl"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 400' }}
          >
            <em
              className="display-italic text-terra-200"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
            >
              „
            </em>
            Wir glauben an eine Therapie, die nicht nur Symptome behandelt, sondern an den{" "}
            <em
              className="display-italic text-terra-200"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
            >
              Wurzeln
            </em>{" "}
            ansetzt – wissenschaftlich fundiert, individuell, und mit dem Menschen im Zentrum.
            <em
              className="display-italic text-terra-200"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
            >
              "
            </em>
          </blockquote>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl">
            {[
              {
                t: "Evidenzbasiert",
                d: "Aktuelle wissenschaftliche Erkenntnisse, transparent angewandt.",
              },
              {
                t: "Individuell",
                d: "Ausführliche Erstuntersuchung, maßgeschneiderter Behandlungsplan.",
              },
              {
                t: "Empowernd",
                d: "Wir geben Werkzeuge an die Hand – für den Heilungsprozess und darüber hinaus.",
              },
            ].map((p, i) => (
              <div key={i} className="border-t border-cream-200/20 pt-5">
                <p className="font-display text-xl text-cream-100 mb-2" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60' }}>
                  {p.t}
                </p>
                <p className="text-sm text-cream-200/80 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="container-edit py-24 lg:py-36">
      <div className="grid grid-cols-12 gap-y-12 gap-x-8">
        <Reveal className="col-span-12 lg:col-span-5">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <img
              src="/images/ueber_mich_katharina_anders.jpg"
              alt="Katharina Anders"
              className="absolute inset-0 w-full h-full object-cover image-warm"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-cream-100/95 backdrop-blur rounded-2xl p-5">
              <p className="label">Inhaberin & Therapeutin</p>
              <p className="font-display text-2xl text-ink mt-1" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}>
                Katharina Anders
              </p>
              <p className="text-xs text-ink-muted mt-1">M.Sc. · Heilpraktikerin · Bobath</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="col-span-12 lg:col-span-6 lg:col-start-7">
          <p className="label mb-4">Die Person hinter Phyneo</p>
          <h2
            className="display text-fluid-4xl text-ink mb-6"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70, "wght" 400' }}
          >
            Wissenschaft trifft <em className="display-italic text-terra-500">Empathie</em>.
          </h2>
          <p className="body-prose mb-8">
            Mit Master-Abschluss an der HAWK Hildesheim, langjähriger Erfahrung in Akut-Neurologie,
            Kindertherapie und als Dozentin verbindet Katharina Anders aktuelle Forschung mit der
            ruhigen Klarheit langjähriger klinischer Praxis.
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
            {[
              "Master of Science Physiotherapie",
              "Staatlich geprüfte Heilpraktikerin",
              "Kinder-Bobath-Therapeutin",
              "Manuelle Therapie (McKenzie)",
              "Akupunkturausbildung",
              "Osteopathie Kinder & Säuglinge",
            ].map((cred) => (
              <div key={cred} className="flex items-start gap-2 text-sm text-ink-soft">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-terra-400 shrink-0" />
                {cred}
              </div>
            ))}
          </div>
          <Link to="/ueber-mich" className="btn-outline">
            Vita & Werdegang <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function CourseHighlight() {
  return (
    <section className="bg-blush-100 py-24 lg:py-36">
      <div className="container-edit">
        <div className="grid grid-cols-12 gap-y-10 mb-12">
          <Reveal className="col-span-12 lg:col-span-6">
            <p className="label mb-4">Kurse 2026</p>
            <h2
              className="display text-fluid-5xl text-ink leading-[0.98]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70, "wght" 400' }}
            >
              Aktuelle <em className="display-italic text-terra-500">Kurse</em>
              <br />
              jetzt anmelden.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-4">
            <p className="body-prose">
              Krankenkassenzertifizierte Kurse rund um Schwangerschaft, Rückbildung, Babymassage und
              Frauengesundheit – online oder als Präsenzkurs in Seesen.
            </p>
            <Link to="/kurse" className="mt-6 btn-outline">
              Alle Kurse <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { slug: "rueckbildung", title: "Rückbildung", date: "ab 05.02.2026", time: "Do · 09:30" },
            {
              slug: "fit-durch-die-schwangerschaft",
              title: "Fit durch die Schwangerschaft",
              date: "ab 06.02.2026",
              time: "Fr · 14:45",
            },
            {
              slug: "beckenboden-workout-50",
              title: "Beckenboden-Workout 50+",
              date: "ab 06.02.2026",
              time: "Fr · 16:00",
            },
            { slug: "babymassage", title: "Babymassage", date: "4× pro Jahr", time: "Di · 09:30" },
            { slug: "fit-mit-baby", title: "Fit mit Baby Outdoor", date: "ab 09.04.2026", time: "Do · 10:45" },
          ].map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <Link
                to={`/kurse/${c.slug}`}
                className="group block bg-cream-100 rounded-2xl p-6 border border-ink/5 hover:border-terra-400 hover:bg-cream-50 transition-all h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="label">{c.date}</span>
                  <ArrowUpRight size={18} className="text-ink-muted group-hover:text-terra-500 group-hover:rotate-45 transition-all" />
                </div>
                <h3
                  className="font-display text-2xl leading-tight tracking-tight mb-2 text-ink"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
                >
                  {c.title}
                </h3>
                <p className="font-mono text-xs text-ink-muted">{c.time}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABand() {
  return (
    <section className="container-edit py-24 lg:py-32">
      <Reveal>
        <div className="bg-cream-100 rounded-3xl px-8 lg:px-16 py-16 lg:py-20 border border-ink/5 relative overflow-hidden">
          <svg
            className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none"
            width="320"
            height="320"
            viewBox="0 0 320 320"
            aria-hidden
          >
            <circle cx="160" cy="160" r="120" stroke="#3D5448" strokeWidth="1" fill="none" />
            <circle cx="160" cy="160" r="80" stroke="#3D5448" strokeWidth="1" fill="none" />
            <circle cx="160" cy="160" r="40" stroke="#3D5448" strokeWidth="1" fill="none" />
          </svg>
          <div className="grid grid-cols-12 gap-8 relative">
            <div className="col-span-12 lg:col-span-7">
              <p className="label mb-4">Kontakt</p>
              <h2
                className="display text-fluid-5xl text-ink leading-[0.96]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70, "wght" 400' }}
              >
                Komm vorbei.
                <br />
                <em className="display-italic text-terra-500">Wir hören zu.</em>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
              <a
                href="tel:053819812030"
                className="group flex items-center justify-between border-b border-ink/10 py-4"
              >
                <span className="flex items-center gap-3 text-ink">
                  <Phone size={16} className="text-terra-500" />
                  <span className="font-medium">05381 · 98 12 030</span>
                </span>
                <ArrowUpRight size={16} className="text-ink-muted group-hover:text-terra-500 transition-colors" />
              </a>
              <a
                href="mailto:post@phyneo.de"
                className="group flex items-center justify-between border-b border-ink/10 py-4"
              >
                <span className="flex items-center gap-3 text-ink">
                  <Mail size={16} className="text-terra-500" />
                  <span className="font-medium">post@phyneo.de</span>
                </span>
                <ArrowUpRight size={16} className="text-ink-muted group-hover:text-terra-500 transition-colors" />
              </a>
              <Link to="/kontakt" className="btn-primary mt-6">
                Termin anfragen <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
