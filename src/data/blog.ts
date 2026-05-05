export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: "Kursprogramm" | "Ratgeber";
  excerpt: string;
  image: string;
};

export const BLOG: BlogPost[] = [
  {
    slug: "herbstkurse-2025",
    title: "Herbstkurse",
    date: "21. Sep. 2025",
    category: "Kursprogramm",
    excerpt: "Unser Kursangebot für Herbst 2025 ist online – jetzt anmelden.",
    image: "/images/blog_herbstkurse_2025.png",
  },
  {
    slug: "beckenboden-workout-2025",
    title: "Beckenboden-Workout 2025",
    date: "19. Juni 2025",
    category: "Kursprogramm",
    excerpt: "Innovatives, ganzheitliches Beckenbodentraining – nur für Frauen.",
    image: "/images/blog_bebo_2025_herbst.png",
  },
  {
    slug: "kursprogramm-sommer-herbst-2025",
    title: "Kursprogramm Sommer & Herbst 2025",
    date: "19. Juni 2025",
    category: "Kursprogramm",
    excerpt: "Ein Überblick über alle Kurse von Sommer bis Herbst 2025.",
    image: "/images/blog_kursprogramm_sommer_herbst_2025.png",
  },
  {
    slug: "beckenboden-workout-april-2025",
    title: "Beckenboden-Workout April 2025",
    date: "07. März 2025",
    category: "Kursprogramm",
    excerpt: "Frühjahrskurs Beckenboden – jetzt anmelden.",
    image: "/images/blog_bebo_april_2025.png",
  },
  {
    slug: "kursprogramm-april-2025",
    title: "Kursprogramm April 2025",
    date: "07. März 2025",
    category: "Kursprogramm",
    excerpt: "Alle Kurse im April 2025 auf einen Blick.",
    image: "/images/blog_kursprogramm_april_2025.png",
  },
  {
    slug: "beckenbodenworkout-januar-2025",
    title: "Beckenbodenworkout 2025",
    date: "03. Dez. 2024",
    category: "Kursprogramm",
    excerpt: "Mit dem neuen Jahr neu durchstarten – Beckenboden-Workout 2025.",
    image: "/images/blog_bebo_januar_2025.png",
  },
  {
    slug: "kursangebot-januar-2025",
    title: "Phyneo – Kursangebot Januar 2025",
    date: "28. Nov. 2024",
    category: "Kursprogramm",
    excerpt: "Unser Kursprogramm zum Jahresstart 2025.",
    image: "/images/blog_kursangebot_januar_2025.png",
  },
  {
    slug: "babyhandling-leitfaden",
    title: "Sicheres und entwicklungsförderndes Babyhandling",
    date: "04. Mai 2024",
    category: "Ratgeber",
    excerpt:
      "Beim Halten und Tragen Deines Babys ist die richtige Technik entscheidend, um die gesunde Entwicklung zu fördern.",
    image: "/images/blog_baby_hochnehmen.jpg",
  },
  {
    slug: "richtig-tragen",
    title: "Richtig Tragen leicht gemacht!",
    date: "29. Apr. 2024",
    category: "Ratgeber",
    excerpt: "Praktische Tipps zum Tragen mit Tüchern, Tragen und auf dem Arm.",
    image: "/images/blog_handling_tragen.jpeg",
  },
  {
    slug: "beckenbodenschonendes-walking",
    title: "Beckenbodenschonendes Walking – so geht's",
    date: "23. Apr. 2024",
    category: "Ratgeber",
    excerpt: "Schultern entspannt, Brustkorb gehoben – Walking ohne Beckenbodendruck.",
    image: "/images/blog_walking_beckenboden.jpg",
  },
];
