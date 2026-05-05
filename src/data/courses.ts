export type Course = {
  slug: string;
  title: string;
  italicHighlight?: string;
  category: string;
  format: ("Präsenz" | "Online" | "Outdoor")[];
  certified: boolean;
  image: string;
  imageAlt: string;
  audience: string;
  duration: string;
  lede: string;
  schedule: { season: string; start: string; weekday: string; time: string; sessions: number }[];
  benefits: string[];
  body: string[];
  meta?: string[];
};

export const COURSES: Course[] = [
  {
    slug: "rueckbildung",
    title: "Rückbildung",
    italicHighlight: "Rückbildung",
    category: "Nach der Geburt",
    format: ["Präsenz", "Online"],
    certified: true,
    image: "/images/startseite_kursprogramm.jpg",
    imageAlt: "Frau bei Rückbildungsgymnastik",
    audience: "Junge Mütter ab 6–8 Wochen nach der Geburt",
    duration: "8 Termine · 60 Minuten",
    lede:
      "Lerne Deinen Beckenboden in seinen Funktionen kennen, kräftige sanft Rücken, Schultern und Beine – online oder in Präsenz, ganz wie es passt.",
    schedule: [
      {
        season: "Winterkurs 2026",
        start: "05.02.2026",
        weekday: "Donnerstag",
        time: "09:30 – 10:30 Uhr",
        sessions: 8,
      },
    ],
    benefits: [
      "Online oder Präsenz – flexibel teilnehmen",
      "Anleitung von erfahrenen Physiotherapeutinnen",
      "Profitiere von langjähriger Kinder-Bobath-Kompetenz",
      "Raum für Fragen zur Bewegungsentwicklung Deines Kindes",
    ],
    body: [
      'Der Alltag hat etwas Struktur bekommen und Du orientierst Dich wieder etwas mehr nach „außen". Das Bedürfnis nach Austausch mit anderen Müttern wächst – und Du möchtest, mit oder ohne Kind, wieder etwas für Dich selbst tun.',
      "Bei der Rückbildungsgymnastik lernst Du Deinen Beckenboden und seine Funktionen kennen. Schritt für Schritt wahrnehmen, belastende Situationen erkennen und vermeiden. Wir kräftigen sanft Rückenmuskulatur, Schultern, Nacken und Beine. Bauchmuskelübungen kommen dazu, sobald sich ein gutes Gefühl für die Beckenbodenkraft entwickelt hat.",
      "In der Regel kann mit der Rückbildung 6–8 Wochen nach der Geburt begonnen werden, sobald die Nachsorgeuntersuchung grünes Licht gibt.",
    ],
    meta: [
      "Krankenkassenzertifiziert nach § 20 SGB V",
      "Die meisten Kassen übernehmen bis zu 10 Stunden",
    ],
  },
  {
    slug: "fit-durch-die-schwangerschaft",
    title: "Fit durch die Schwangerschaft",
    italicHighlight: "Schwangerschaft",
    category: "Schwangerschaft",
    format: ["Präsenz", "Outdoor"],
    certified: true,
    image: "/images/startseite_kursprogramm.jpg",
    imageAlt: "Schwangere bei Bewegungsübungen",
    audience: "Schwangere ab der 13. SSW",
    duration: "8 Termine · 60 Minuten",
    lede:
      "Bereite Deinen Körper auf die Geburt vor, tanke Energie, baue Stress ab und lerne andere werdende Mamas kennen.",
    schedule: [
      {
        season: "Winterkurs 2026",
        start: "06.02.2026",
        weekday: "Freitag",
        time: "14:45 – 15:45 Uhr",
        sessions: 8,
      },
    ],
    benefits: [
      "Effektives Bodyforming",
      "(Nordic-) Walking-Einheiten",
      "Dehnung und sanftes Stretching",
      "Risikolos im gesamten Schwangerschaftsverlauf",
    ],
    body: [
      '„Fit durch die Schwangerschaft" verbindet effektives Bodyforming mit (Nordic-) Walking und Dehnung. Walking ist eine risikolose Sportart, die Du im gesamten Verlauf der Schwangerschaft ausüben kannst.',
      "Sport regt den Stoffwechsel an, verringert das Risiko von Wassereinlagerungen, Thrombose und übermäßiger Gewichtszunahme.",
      "Auch Dein Baby profitiert: Das Schaukeln im Mutterleib wirkt beruhigend und fördert die Entwicklung der Sinnesorgane.",
    ],
    meta: [
      "Krankenkassenzertifiziert nach § 20 SGB V",
      "Krankenkassen erstatten im Schnitt ca. 80 % der Kursgebühr bei regelmäßiger Teilnahme",
    ],
  },
  {
    slug: "fit-mit-baby",
    title: "Fit mit Baby Outdoor",
    italicHighlight: "Fit mit Baby",
    category: "Nach der Geburt",
    format: ["Outdoor"],
    certified: false,
    image: "/images/startseite_kursprogramm.jpg",
    imageAlt: "Frauen mit Kinderwagen im Park",
    audience: "Mütter mit Baby (ab Rückbildung)",
    duration: "8 Termine · 45–60 Minuten",
    lede:
      "Effektives Mama-Workout an der frischen Luft – Dein Schatz ist mit dabei, neue Freundinnen inklusive.",
    schedule: [
      {
        season: "Frühlingskurs 2026",
        start: "09.04.2026",
        weekday: "Donnerstag",
        time: "10:45 – 11:45 Uhr",
        sessions: 8,
      },
    ],
    benefits: [
      "Kein Babysitter – Dein Baby ist mit dabei",
      "Neue Freundschaften unter Mamas",
      "Beckenbodenschonendes Training",
      "Stärkung des Immunsystems an der frischen Luft",
      "Sonnenscheinvitamin für Knochen und Wohlbefinden",
    ],
    body: [
      "Wir starten an einem verabredeten Treffpunkt im Park und kehren am Ende der Stunde dorthin zurück.",
      "Auf dem Programm: Warm-up, Ausdauertraining mit dem Kinderwagen, Bodyforming für Bauch, Beine, Po, Rückentraining gegen Verspannungen, gezielte Übungen zum Schließen der Rectusdiastase und ein Stretching, das Kraft für den Babyalltag schenkt.",
      "Lass Dich überraschen, wieviel Spaß Mamafitness macht und wie schnell die Zeit vorbei geht.",
    ],
  },
  {
    slug: "babymassage",
    title: "Babymassage",
    italicHighlight: "Babymassage",
    category: "Bindung & Entwicklung",
    format: ["Präsenz", "Online"],
    certified: false,
    image: "/images/blog_baby_hochnehmen.jpg",
    imageAlt: "Mutter beim Massieren des Babys",
    audience: "Eltern mit Säuglingen",
    duration: "4 Termine · 45 Minuten",
    lede:
      "Babymassage tut nicht nur Deinem Kind gut, sondern auch Dir. Wir zeigen Dir, wie sie ganz einfach gelingt.",
    schedule: [
      { season: "Winter", start: "24.02.2026", weekday: "Dienstag", time: "09:30 – 10:15 Uhr", sessions: 4 },
      { season: "Frühling", start: "14.04.2026", weekday: "Dienstag", time: "09:30 – 10:15 Uhr", sessions: 4 },
      { season: "Sommer", start: "18.08.2026", weekday: "Dienstag", time: "09:30 – 10:15 Uhr", sessions: 4 },
      { season: "Herbst", start: "03.11.2026", weekday: "Dienstag", time: "09:30 – 10:15 Uhr", sessions: 4 },
    ],
    benefits: [
      "Stärkt die Bindung (Bonding, Oxytocin)",
      "Stärkt das Immunsystem & Selbstbewusstsein",
      "Stärkt das Urvertrauen",
      "Fördert einen entspannten Schlafrhythmus",
      "Lindert Koliken und Bauchschmerzen",
      "Auch Du als Mama profitierst",
    ],
    body: [
      "Die Babymassage stärkt die Bindung zwischen der massierenden Person und dem Baby. Wie beim Bonding wird das Hormon Oxytocin ausgeschüttet – das Liebes- und Stillhormon.",
      "Studien zeigen: Babys, die regelmäßig massiert werden, haben mit zwölf Wochen einen deutlich höheren Melatoninspiegel in der Nacht. Massagen können also einen gesunden Schlaf-Wach-Rhythmus fördern.",
      "Ein paar einfache Massagegriffe können Deinem Baby helfen, den Bauch zu entspannen. Blähungen und Bauchweh lassen sich auf natürliche, gesunde und effektive Weise lindern.",
      "Auch Du als Mama profitierst: Die überwältigenden Gefühle nach der Geburt finden in der körperlichen Zuwendung Ausdruck. Hände werden offener und sensibler – Wickeln, Waschen und Anziehen werden zum Gespräch.",
    ],
  },
  {
    slug: "beckenboden-workout-50",
    title: "Beckenboden-Workout 50+",
    italicHighlight: "50+",
    category: "Frauengesundheit",
    format: ["Präsenz", "Online"],
    certified: true,
    image: "/images/startseite_kursprogramm.jpg",
    imageAlt: "Frauen 50+ beim Beckenbodentraining",
    audience: "Frauen 50+ (mit oder ohne Kinder)",
    duration: "8 Termine · 60 Minuten",
    lede:
      "Innovatives, ganzheitliches Beckenbodentraining – nur für Frauen, in der Kleingruppe, mit Alltagstipps.",
    schedule: [
      {
        season: "Winterkurs 2026",
        start: "06.02.2026",
        weekday: "Freitag",
        time: "16:00 – 17:00 Uhr",
        sessions: 8,
      },
    ],
    benefits: [
      "Innovatives & ganzheitliches Beckenbodentraining",
      "Konkrete Alltagstipps",
      "Training in der Kleingruppe",
      "Nur für Frauen",
      "Onlineteilnahme möglich",
    ],
    body: [
      "Erfolgreich eingesetzt bei Beckenbodenschwäche und ihren Folgen – Rückenschmerzen, Inkontinenz, Blasen- oder Gebärmuttersenkung.",
      "Da Frauengesundheit unsere Herzensangelegenheit ist, richtet sich dieser Kurs nicht (nur) an frischgebackene Mamas. Sondern auch an Nicht-Mamas oder Frauen, deren Geburten schon länger zurückliegen.",
      "Wir trainieren innovativ und ganzheitlich und zeigen Dir, dass Beckenbodentraining überhaupt nicht langweilig sein muss.",
    ],
    meta: ["Krankenkassenzertifiziert nach § 20 SGB V"],
  },
];
