import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn, asset } from "../lib/cn";

export function PageHero({
  kicker,
  title,
  italicWord,
  lede,
  image,
  imageAlt,
  breadcrumbs,
  accent = "ink",
  meta,
}: {
  kicker?: string;
  title: string;
  italicWord?: string;
  lede?: string;
  image?: string;
  imageAlt?: string;
  breadcrumbs?: { label: string; href?: string }[];
  accent?: "ink" | "sage" | "terra" | "blush";
  meta?: ReactNode;
}) {
  const accentText = {
    ink: "text-terra-500",
    sage: "text-sage-500",
    terra: "text-terra-500",
    blush: "text-terra-500",
  }[accent];

  let titleNode: ReactNode = title;
  if (italicWord && title.includes(italicWord)) {
    const parts = title.split(italicWord);
    titleNode = (
      <>
        {parts[0]}
        <em
          className={cn("display-italic", accentText)}
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
        >
          {italicWord}
        </em>
        {parts[1]}
      </>
    );
  }

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24">
      <div className="container-edit">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-1.5 text-xs text-ink-muted font-mono">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {b.href ? (
                  <Link to={b.href} className="hover:text-ink transition-colors">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-ink">{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight size={12} className="opacity-50" />}
              </span>
            ))}
          </nav>
        )}

        <div className="grid grid-cols-12 gap-y-10 gap-x-8">
          <div className="col-span-12 lg:col-span-8">
            {kicker && <p className="label mb-6">{kicker}</p>}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="display text-fluid-6xl leading-[0.95] tracking-tightest text-ink max-w-5xl"
            >
              {titleNode}
            </motion.h1>
            {lede && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="mt-8 max-w-2xl text-lg lg:text-xl text-ink-soft leading-relaxed"
              >
                {lede}
              </motion.p>
            )}
            {meta && <div className="mt-10">{meta}</div>}
          </div>
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 lg:col-span-4 lg:row-span-2"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src={asset(image)}
                  alt={imageAlt ?? ""}
                  className="w-full h-full object-cover image-warm"
                  loading="eager"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
