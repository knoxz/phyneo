import { ArrowUpRight } from "lucide-react";
import { BLOG } from "../data/blog";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { asset } from "../lib/cn";

export function Blog() {
  const ratgeber = BLOG.filter((p) => p.category === "Ratgeber");
  const news = BLOG.filter((p) => p.category === "Kursprogramm");

  return (
    <>
      <PageHero
        kicker="Journal"
        title="Blog & Ratgeber"
        italicWord="Ratgeber"
        lede="Aktuelle Kursankündigungen, Tipps für junge Eltern und Hintergründe aus der Praxis."
        breadcrumbs={[{ label: "Phyneo", href: "/" }, { label: "Blog" }]}
      />

      <section className="container-edit pb-20">
        <Reveal>
          <p className="label mb-6">Ratgeber</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {ratgeber.map((post, i) => (
              <a
                key={post.slug}
                href="#"
                className="group block bg-cream-100 rounded-2xl overflow-hidden border border-ink/5 hover:border-terra-400 transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={asset(post.image)}
                    alt={post.title}
                    className="w-full h-full object-cover image-warm card-hover-image"
                    loading={i < 3 ? "eager" : "lazy"}
                  />
                </div>
                <div className="p-5">
                  <p className="label mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-terra-500" /> {post.date}
                  </p>
                  <h3
                    className="font-display text-xl leading-tight text-ink mb-2"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm text-ink-soft mb-4 line-clamp-2">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink group-hover:gap-3 transition-all">
                    Weiterlesen <ArrowUpRight size={12} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="label mb-6">Kursankündigungen</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {news.map((post) => (
              <a
                key={post.slug}
                href="#"
                className="group block bg-cream-50 rounded-2xl overflow-hidden border border-ink/5 hover:border-terra-400 transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden bg-cream-200">
                  <img
                    src={asset(post.image)}
                    alt={post.title}
                    className="w-full h-full object-cover card-hover-image"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="label mb-2">{post.date}</p>
                  <h3
                    className="font-display text-base leading-tight text-ink"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
                  >
                    {post.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
