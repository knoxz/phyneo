import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Check, Calendar, Clock, Users, Sparkles } from "lucide-react";
import { COURSES } from "../data/courses";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";

export function KursDetail() {
  const { slug } = useParams();
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    return (
      <section className="container-edit py-32 text-center">
        <h1 className="display text-fluid-5xl">Kurs nicht gefunden</h1>
        <Link to="/kurse" className="btn-primary mt-8 inline-flex">
          Alle Kurse
        </Link>
      </section>
    );
  }

  return (
    <>
      <PageHero
        kicker={course.category}
        title={course.title}
        italicWord={course.italicHighlight}
        lede={course.lede}
        image={course.image}
        imageAlt={course.imageAlt}
        accent="blush"
        breadcrumbs={[
          { label: "Phyneo", href: "/" },
          { label: "Kurse", href: "/kurse" },
          { label: course.title },
        ]}
        meta={
          <div className="flex flex-wrap gap-2">
            {course.format.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-100 text-ink text-xs font-mono uppercase tracking-wider border border-ink/10"
              >
                {f}
              </span>
            ))}
            {course.certified && (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-500 text-cream-100 text-xs font-mono uppercase tracking-wider">
                <Sparkles size={12} /> § 20 SGB V
              </span>
            )}
          </div>
        }
      />

      {/* Quick facts row */}
      <section className="container-edit pb-12">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 rounded-2xl overflow-hidden">
            <Fact icon={<Users size={14} />} label="Zielgruppe" value={course.audience} />
            <Fact icon={<Calendar size={14} />} label="Nächster Start" value={course.schedule[0].start} />
            <Fact
              icon={<Clock size={14} />}
              label="Termin"
              value={`${course.schedule[0].weekday} · ${course.schedule[0].time}`}
            />
            <Fact icon={<Sparkles size={14} />} label="Umfang" value={course.duration} />
          </div>
        </Reveal>
      </section>

      {/* Schedule + body */}
      <section className="container-edit pb-20">
        <div className="grid grid-cols-12 gap-y-12 gap-x-8">
          <Reveal className="col-span-12 lg:col-span-7">
            <p className="label mb-6">Was Dich erwartet</p>
            <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
              {course.body.map((p, i) => (
                <p key={i} className={i === 0 ? "dropcap" : ""}>{p}</p>
              ))}
            </div>

            <div className="mt-12">
              <p className="label mb-6">Deine Vorteile</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {course.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 py-3 border-b border-ink/10 text-ink-soft">
                    <Check size={16} className="mt-1 shrink-0 text-terra-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {course.meta && (
              <div className="mt-10 p-6 rounded-2xl bg-blush-50 border border-blush-300">
                {course.meta.map((m, i) => (
                  <p key={i} className="text-sm text-ink-soft leading-relaxed flex items-start gap-2 first:mb-2 last:mb-0">
                    <Sparkles size={14} className="shrink-0 mt-0.5 text-terra-500" />
                    {m}
                  </p>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={0.15} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="sticky top-24">
              <p className="label mb-4">Termine 2026</p>
              <div className="space-y-3">
                {course.schedule.map((s, i) => (
                  <div
                    key={i}
                    className="bg-cream-100 rounded-2xl p-5 border border-ink/5"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-1">
                      {s.season}
                    </p>
                    <p
                      className="font-display text-2xl text-ink leading-tight"
                      style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
                    >
                      {s.start}
                    </p>
                    <p className="text-sm text-ink-soft mt-1">
                      {s.weekday} · {s.time}
                    </p>
                    <p className="text-xs text-ink-muted mt-1">{s.sessions} Termine</p>
                  </div>
                ))}
              </div>
              <a
                href={`mailto:post@phyneo.de?subject=${encodeURIComponent(`Kursanmeldung: ${course.title}`)}`}
                className="btn-primary w-full justify-center mt-6"
              >
                Jetzt anmelden <ArrowUpRight size={14} />
              </a>
              <a href="tel:053819812030" className="btn-ghost w-full justify-center mt-2 text-sm">
                oder anrufen: 05381 · 98 12 030
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other courses */}
      <section className="bg-cream-100 py-20">
        <div className="container-edit">
          <Reveal>
            <p className="label mb-6">Weitere Kurse</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {COURSES.filter((c) => c.slug !== course.slug).map((c) => (
                <Link
                  key={c.slug}
                  to={`/kurse/${c.slug}`}
                  className="group block bg-cream-50 rounded-2xl p-5 border border-ink/5 hover:border-terra-400 transition-colors"
                >
                  <p className="label mb-2">{c.category}</p>
                  <h3
                    className="font-display text-lg leading-tight text-ink"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
                  >
                    {c.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs text-ink-muted group-hover:text-terra-500 group-hover:gap-2 transition-all">
                    Zum Kurs <ArrowUpRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Fact({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-cream-100 p-5 lg:p-6">
      <p className="flex items-center gap-2 label mb-2">
        {icon} {label}
      </p>
      <p className="text-ink font-medium leading-snug">{value}</p>
    </div>
  );
}
