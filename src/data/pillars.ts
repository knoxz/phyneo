export type Pillar = {
  id: "kurse" | "kinder" | "erwachsene" | "unternehmen";
  number: string;
  kicker: string;
  title: string;
  italicWord?: string;
  lede: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  audience: string;
  accent: "blush" | "sage" | "terra" | "ink";
  bullets: { label: string; href: string }[];
};

export const PILLARS: Pillar[] = [
  {
    id: "kurse",
    number: "01",
    kicker: "Kurse",
    title: "Bewegung in jeder Lebensphase",
    italicWord: "Bewegung",
    lede: "Krankenkassenzertifizierte Kurse für Schwangere, junge Mütter und Frauen 50+.",
    description:
      "Von Rückbildung über Fit durch die Schwangerschaft bis zum Beckenboden-Workout – als Präsenz- oder Onlinekurs in der Kleingruppe.",
    href: "/kurse",
    image: "/images/startseite_kursprogramm.jpg",
    imageAlt: "Frau in Schwangerschaftsyoga-Pose – Phyneo Kursprogramm",
    audience: "Werdende Mütter · Familien · Frauen 50+",
    accent: "blush",
    bullets: [
      { label: "Rückbildung", href: "/kurse/rueckbildung" },
      { label: "Fit durch die Schwangerschaft", href: "/kurse/fit-durch-die-schwangerschaft" },
      { label: "Fit mit Baby Outdoor", href: "/kurse/fit-mit-baby" },
      { label: "Babymassage", href: "/kurse/babymassage" },
      { label: "Beckenboden-Workout 50+", href: "/kurse/beckenboden-workout-50" },
    ],
  },
  {
    id: "kinder",
    number: "02",
    kicker: "Phyneo für Kinder",
    title: "Sanft begleitet von Anfang an",
    italicWord: "begleitet",
    lede: "Beratung und Therapie rund um die gesunde Entwicklung Ihres Kindes – durch zertifizierte Kinder-Bobath-Therapeutinnen.",
    description:
      "Osteopathie, BabyCheck, Bobath-Therapie, Handlings- und Trageberatung – auf den ersten 1.000 Tagen entsteht das Fundament.",
    href: "/kinder",
    image: "/images/kinder_tragetuch.jpg",
    imageAlt: "Mutter trägt Baby in Tragetuch",
    audience: "Familien mit Säuglingen & Kleinkindern",
    accent: "terra",
    bullets: [
      { label: "Osteopathische Behandlungen", href: "/kinder/osteopathie" },
      { label: "BabyCheck", href: "/kinder/babycheck" },
      { label: "Kinder-Bobath-Therapie", href: "/kinder/bobath-therapie" },
      { label: "Handlingsberatung", href: "/kinder/handlingsberatung" },
      { label: "Medizinische Trageberatung", href: "/kinder/trageberatung" },
    ],
  },
  {
    id: "erwachsene",
    number: "03",
    kicker: "Phyneo für Erwachsene",
    title: "Therapie auf wissenschaftlichem Fundament",
    italicWord: "Therapie",
    lede: "Evidenzbasierte Physiotherapie, Osteopathie, Akupunktur und der innovative Phyneo Check-Up.",
    description:
      "Symbiose aus Diagnose, Therapie und Selbstmanagement – individuell, nachhaltig, messbar.",
    href: "/erwachsene",
    image: "/images/startseite_physiotherapie.jpg",
    imageAlt: "Manuelle Therapie an einer Patientin",
    audience: "Erwachsene mit Beschwerden & Vorsorge",
    accent: "sage",
    bullets: [
      { label: "Osteopathie", href: "/erwachsene/osteopathie" },
      { label: "Phyneo Check-Up", href: "/erwachsene/check-up" },
      { label: "Akutsprechstunde", href: "/erwachsene/akutsprechstunde" },
      { label: "Evidenzbasierte Physiotherapie", href: "/erwachsene/physiotherapie" },
      { label: "Akupunktur", href: "/erwachsene/akupunktur" },
    ],
  },
  {
    id: "unternehmen",
    number: "04",
    kicker: "Phyneo für Unternehmen",
    title: "Gesunde Mitarbeitende, starke Unternehmen",
    italicWord: "Gesunde",
    lede: "Betriebliche Gesundheitsförderung mit Ergonomie, Rückenschule und Phyneo Check-Up – wissenschaftlich fundiert wirksam.",
    description:
      "Maßgeschneiderte Programme von der Arbeitsplatzanalyse bis zur App-gestützten Bewegungsanalyse für Ihr Team.",
    href: "/unternehmen",
    image: "/images/startseite_unternehmen.jpg",
    imageAlt: "Ergonomisch gestalteter Arbeitsplatz",
    audience: "HR · BGM · Führungskräfte",
    accent: "ink",
    bullets: [
      { label: "Rückenschule im Unternehmen", href: "/unternehmen/rueckenschule" },
      { label: "Ergonomieberatung", href: "/unternehmen/ergonomieberatung" },
      { label: "Phyneo Check-Up", href: "/unternehmen/check-up" },
    ],
  },
];

export const ACCENT_STYLES = {
  blush: {
    bg: "bg-blush-100",
    bgSoft: "bg-blush-50",
    text: "text-terra-600",
    border: "border-blush-300",
    dot: "bg-terra-400",
    badge: "bg-blush-200 text-terra-600",
  },
  sage: {
    bg: "bg-sage-100",
    bgSoft: "bg-sage-50",
    text: "text-sage-600",
    border: "border-sage-200",
    dot: "bg-sage-500",
    badge: "bg-sage-100 text-sage-700",
  },
  terra: {
    bg: "bg-terra-100",
    bgSoft: "bg-terra-50",
    text: "text-terra-600",
    border: "border-terra-200",
    dot: "bg-terra-500",
    badge: "bg-terra-100 text-terra-600",
  },
  ink: {
    bg: "bg-cream-300",
    bgSoft: "bg-cream-100",
    text: "text-ink",
    border: "border-cream-400",
    dot: "bg-ink",
    badge: "bg-ink text-cream-100",
  },
} as const;

export type AccentKey = keyof typeof ACCENT_STYLES;
