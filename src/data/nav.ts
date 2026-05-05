export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const PRIMARY_NAV: NavItem[] = [
  {
    label: "Kurse",
    href: "/kurse",
    children: [
      { label: "Rückbildung", href: "/kurse/rueckbildung" },
      { label: "Fit durch die Schwangerschaft", href: "/kurse/fit-durch-die-schwangerschaft" },
      { label: "Fit mit Baby Outdoor", href: "/kurse/fit-mit-baby" },
      { label: "Babymassage", href: "/kurse/babymassage" },
      { label: "Beckenboden-Workout 50+", href: "/kurse/beckenboden-workout-50" },
    ],
  },
  {
    label: "Kinder",
    href: "/kinder",
    children: [
      { label: "Osteopathie", href: "/kinder/osteopathie" },
      { label: "BabyCheck", href: "/kinder/babycheck" },
      { label: "Bobath-Therapie", href: "/kinder/bobath-therapie" },
      { label: "Handlingsberatung", href: "/kinder/handlingsberatung" },
      { label: "Trageberatung", href: "/kinder/trageberatung" },
    ],
  },
  {
    label: "Erwachsene",
    href: "/erwachsene",
    children: [
      { label: "Osteopathie", href: "/erwachsene/osteopathie" },
      { label: "Phyneo Check-Up", href: "/erwachsene/check-up" },
      { label: "Akutsprechstunde", href: "/erwachsene/akutsprechstunde" },
      { label: "Physiotherapie", href: "/erwachsene/physiotherapie" },
      { label: "Akupunktur", href: "/erwachsene/akupunktur" },
    ],
  },
  {
    label: "Unternehmen",
    href: "/unternehmen",
    children: [
      { label: "Rückenschule", href: "/unternehmen/rueckenschule" },
      { label: "Ergonomieberatung", href: "/unternehmen/ergonomieberatung" },
      { label: "Phyneo Check-Up", href: "/unternehmen/check-up" },
    ],
  },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];

export const FOOTER_NAV = {
  praxis: [
    { label: "Über mich", href: "/ueber-mich" },
    { label: "Kooperation", href: "/kooperation" },
    { label: "Infos & Kosten", href: "/infos" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
};
