import type { AccentKey } from "./pillars";

export type Service = {
  slug: string;
  pillar: "kinder" | "erwachsene" | "unternehmen";
  category: string;
  title: string;
  italicHighlight?: string;
  lede: string;
  image: string;
  imageAlt: string;
  accent: AccentKey;
  body: string[];
  highlights: { label: string; copy: string }[];
  indicationsTitle?: string;
  indications?: string[];
  flow?: { step: string; copy: string }[];
  audience?: string;
  notes?: string[];
};

export const SERVICES: Service[] = [
  // KINDER
  {
    slug: "osteopathie",
    pillar: "kinder",
    category: "Phyneo für Kinder",
    title: "Osteopathie für Babys",
    italicHighlight: "Osteopathie",
    lede: "Sanfte Osteopathie für einen harmonischen Start ins Leben.",
    image: "/images/kinder_bauchlage.jpg",
    imageAlt: "Baby in Bauchlage bei der osteopathischen Behandlung",
    accent: "terra",
    body: [
      "Die ersten Lebensmonate sind für die Entwicklung Deines Babys von entscheidender Bedeutung. Sie legen den Grundstein für das körperliche, emotionale und kognitive Wachstum.",
      "Osteopathie ist eine Form der manuellen Therapie, die sich auf die Harmonie des Körpers konzentriert. Bei Babys richtet sie sich besonders auf die Linderung von Geburtsstress und fördert eine gesunde Entwicklung – mit sanften Techniken, die Spannungen lösen und die körpereigenen Heilungskräfte aktivieren.",
      "Die Geburt kann sowohl für die Mutter als auch für das Baby stressig sein und zu Verspannungen und Blockaden führen. Wir erkennen solche Probleme frühzeitig und beugen Beschwerden wie Verdauungsstörungen, Schlafproblemen oder Asymmetrien vor.",
    ],
    highlights: [
      { label: "Sanft", copy: "Speziell für Babys ausgebildete Osteopath:innen" },
      { label: "Individuell", copy: "Behandlungsplan auf das Kind zugeschnitten" },
      { label: "Begleitend", copy: "Im Dialog mit Kinderärzt:innen" },
    ],
    indicationsTitle: "Geeignet bei",
    indications: [
      "Schwierige oder lange Geburt",
      "Anhaltende Unruhe oder schlechter Schlaf",
      "Verdauungsprobleme",
      "Bevorzugte Kopfhaltung oder ungleichmäßige Kopfform",
    ],
  },
  {
    slug: "babycheck",
    pillar: "kinder",
    category: "Phyneo für Kinder",
    title: "BabyCheck",
    italicHighlight: "BabyCheck",
    lede: "Wissenschaftlich fundierte Bewertung der motorischen Entwicklung.",
    image: "/images/babycheck_bauchlage.jpg",
    imageAlt: "BabyCheck – motorische Entwicklungsdiagnostik",
    accent: "terra",
    body: [
      "Bei Phyneo verstehen wir, wie wichtig die ersten Schritte in der Entwicklung Deines Babys sind. Unser BabyCheck basiert auf wissenschaftlich fundierten physiotherapeutischen Testungen, die wir speziell zur Beurteilung der motorischen Fähigkeiten einsetzen.",
      "Sollten wir Auffälligkeiten feststellen, erarbeiten wir individuelle Übungspläne und Interventionen, die Du leicht in den Alltag integrieren kannst. Praktische Alltagstipps unterstützen die motorische Entwicklung spielerisch und effektiv.",
      "Falls erforderlich, beraten wir Dich hinsichtlich einer weiteren ärztlichen Abklärung und verweisen an Kinderärzt:innen. Auf Wunsch erstellen wir ein detailliertes physiotherapeutisches Gutachten.",
    ],
    highlights: [
      { label: "Evidenzbasiert", copy: "Standardisierte physiotherapeutische Testungen" },
      { label: "Alltagsnah", copy: "Übungspläne, die in den Familienalltag passen" },
      { label: "Auf Wunsch", copy: "Physiotherapeutisches Gutachten" },
    ],
    audience: "Wenn Du unsicher bist, ob sich Dein Kind regelgerecht entwickelt – oder eine fundierte Zweitmeinung möchtest.",
  },
  {
    slug: "bobath-therapie",
    pillar: "kinder",
    category: "Phyneo für Kinder",
    title: "Kinder-Bobath-Therapie",
    italicHighlight: "Bobath",
    lede: "Spezialisierte Therapie auf Basis neurologischer Plastizität.",
    image: "/images/kinder_drehen.jpg",
    imageAlt: "Kind beim Drehen unter therapeutischer Anleitung",
    accent: "terra",
    body: [
      "Die Kinder-Bobath-Therapie ist eine spezialisierte Form der Physio- und Ergotherapie. Sie richtet sich nicht nur an Kinder mit neurologischen Beeinträchtigungen, sondern ist ebenso wertvolle Unterstützung bei Entwicklungsverzögerungen und Schädelasymmetrien.",
      "Das Bobath-Konzept betont die Plastizität des Gehirns. Wir fördern jedes Kind in seiner individuellen Entwicklung und unterstützen es, neue Bewegungsmuster zu erlernen.",
      "Unser Team aus erfahrenen Kinder-Bobath-Therapeut:innen bringt eine umfassende Ausbildung und tiefe Kenntnisse in der neurologischen Entwicklungsförderung mit – von Säuglingen bis zu Jugendlichen.",
    ],
    highlights: [
      { label: "Persönlich", copy: "Einschätzung & individuell angepasste Behandlungspläne" },
      { label: "Ganzheitlich", copy: "Motorische, sensorische & kognitive Förderung" },
      { label: "Mit Eltern", copy: "Beratung und Anleitung als Team" },
    ],
    indicationsTitle: "Anwendungsgebiete",
    indications: [
      "Entwicklungsverzögerungen",
      "Schädelasymmetrien",
      "Neurologische Beeinträchtigungen",
    ],
  },
  {
    slug: "handlingsberatung",
    pillar: "kinder",
    category: "Phyneo für Kinder",
    title: "Handlingsberatung",
    italicHighlight: "Handling",
    lede: "Bewusste Bewegungen im Alltag – mit jedem Handgriff Entwicklung fördern.",
    image: "/images/blog_handling_tragen.jpeg",
    imageAlt: "Eltern beim entwicklungsfördernden Handling",
    accent: "terra",
    body: [
      "In den ersten Lebensmonaten und -jahren durchläuft Dein Baby entscheidende Entwicklungsphasen. Sie bilden die Grundlage für motorische Fähigkeiten, emotionale Intelligenz und späteres Lernvermögen.",
      "Handling beschreibt, wie Du Dein Kind hältst, trägst, wickelst und mit ihm interagierst. Richtiges Handling verbessert die Körperwahrnehmung und Koordination, lindert Verdauungsbeschwerden und fördert Muskelaufbau und Beweglichkeit.",
      "Wir unterstützen Dich mit praktischen Anleitungen, mit Hinweisen zur Umgebungsgestaltung und zur frühen Erkennung von Entwicklungsbesonderheiten.",
    ],
    highlights: [
      { label: "Persönlich", copy: "Individuelle Einschätzung des Bedarfs" },
      { label: "Anschaulich", copy: "Praktische Übungen für jeden Alltag" },
      { label: "Bindungsstark", copy: "Stärkt das Vertrauen und die Eltern-Kind-Beziehung" },
    ],
    audience:
      "In der Schwangerschaft (Vorbereitung an einer Puppe) · 3.–4. Lebensmonat · 6.–7. Lebensmonat · 11.–12. Lebensmonat",
  },
  {
    slug: "trageberatung",
    pillar: "kinder",
    category: "Phyneo für Kinder",
    title: "Medizinische Trageberatung",
    italicHighlight: "Trageberatung",
    lede: "Tücher, Tragen und sicheres Handling auf dem Arm – kompetent und individuell.",
    image: "/images/kinder_tragetuch.jpg",
    imageAlt: "Trageberatung – Mutter mit Baby im Tragetuch",
    accent: "terra",
    body: [
      "Trageberatung für Säuglinge: fachkundige Unterstützung durch erfahrene Kinder- und Säuglingstherapeutinnen. Du profitierst von langjähriger Erfahrung und der Ausbildung als zertifizierte Kinder-Bobath-Therapeutin.",
      "Wir zeigen Dir verschiedene Tragetücher und Babytragen, üben gemeinsam mit Tragepuppe und – wenn alles gut sitzt – natürlich mit Deinem Baby. Auch das Tragen auf dem Arm wird Thema sein, mit konkreten Tipps für ein entwicklungsförderndes Handling.",
      "Für Kinder mit besonderen Bedürfnissen finden wir abseits des Mainstreams Möglichkeiten, die zu Eurer Familie passen.",
    ],
    highlights: [
      { label: "Beratungsdauer", copy: "Ca. 1,5 Stunden – mit oder ohne Kind" },
      { label: "Materialien", copy: "Verschiedene Tücher, Tragen und Tragepuppe" },
      { label: "Spezialisiert", copy: "Kinder-Bobath-Therapeutin mit langjähriger Erfahrung" },
    ],
  },
  // ERWACHSENE
  {
    slug: "osteopathie",
    pillar: "erwachsene",
    category: "Phyneo für Erwachsene",
    title: "Osteopathie",
    italicHighlight: "Osteopathie",
    lede: "Ganzheitliche Therapie, die Selbstheilungskräfte aktiviert.",
    image: "/images/erwachsene_therapiebank.jpg",
    imageAlt: "Therapieraum mit Therapiebank",
    accent: "sage",
    body: [
      "Osteopathie ist eine ganzheitliche Therapieform, die die Gesundheit des gesamten Körpers verbessern soll. Wir nutzen manuelle Techniken, um die strukturelle Integrität zu unterstützen und die Selbstheilungskräfte zu aktivieren.",
      "Phyneo hebt sich durch einen evidenzbasierten Ansatz ab. Unsere Behandlungsmethoden stützen sich auf neueste wissenschaftliche Erkenntnisse, um nicht nur Symptome zu behandeln, sondern auch die zugrundeliegenden Ursachen anzugehen.",
    ],
    highlights: [
      { label: "Evidenzbasiert", copy: "Wissenschaftlich fundiert" },
      { label: "Ganzheitlich", copy: "Ursachen statt nur Symptome" },
      { label: "Persönlich", copy: "Individueller Behandlungsplan" },
    ],
    flow: [
      { step: "01", copy: "Ausführliches Erstgespräch zu Vorgeschichte und Beschwerden" },
      { step: "02", copy: "Gründliche körperliche Untersuchung" },
      { step: "03", copy: "Individueller Behandlungsplan, zugeschnitten auf Sie" },
    ],
    indicationsTitle: "Helfen kann Osteopathie bei",
    indications: [
      "Rücken- und Nackenschmerzen",
      "Kopfschmerzen und Migräne",
      "Muskel- und Gelenkbeschwerden",
      "Verdauungsproblemen",
      "Stress und weiteren Beschwerden",
    ],
  },
  {
    slug: "check-up",
    pillar: "erwachsene",
    category: "Phyneo für Erwachsene",
    title: "Phyneo Check-Up",
    italicHighlight: "Check-Up",
    lede: "Die erste wissenschaftlich fundierte Vorsorge für den Bewegungsapparat.",
    image: "/images/erwachsene_therapiebank.jpg",
    imageAlt: "Bewegungsanalyse im Phyneo Check-Up",
    accent: "sage",
    body: [
      "Mit dem Phyneo Check-Up bieten wir eine branchenführende Innovation in der Gesundheitsvorsorge: die erste am Markt verfügbare, wissenschaftlich basierte Vorsorgeuntersuchung speziell für den Bewegungsapparat.",
      "Unser Ziel ist es, nicht nur bestehende Beschwerden zu lindern, sondern aktiv vorzubeugen, sodass Schmerzen und muskuloskelettale Probleme gar nicht erst entstehen.",
      "Auf Basis der Testergebnisse entwickeln wir einen personalisierten Übungsplan, den Sie über unsere benutzerfreundliche App erhalten – darauf ausgerichtet, Schwachstellen auszugleichen und das Risiko zukünftiger Beschwerden zu minimieren.",
    ],
    highlights: [
      { label: "Beweglichkeit", copy: "Gelenke und Wirbelsäule" },
      { label: "Kraft", copy: "Funktionelle Muskelkraft" },
      { label: "Balance", copy: "Gleichgewicht & Bewegungskoordination" },
    ],
    flow: [
      { step: "01", copy: "Check-Up (60 Min.) – Screening, Auswertung, Ergebnismappe" },
      { step: "02", copy: "Individueller Übungsplan – Bereitstellung per App" },
      { step: "03", copy: "Follow-Up I (30 Min.) nach 3 Monaten – Anpassung der Übungen" },
      { step: "04", copy: "Follow-Up II (60 Min.) – Rebefund nach 12 Monaten" },
    ],
  },
  {
    slug: "akutsprechstunde",
    pillar: "erwachsene",
    category: "Phyneo für Erwachsene",
    title: "Akutsprechstunde",
    italicHighlight: "Akut",
    lede: "Schnelle Hilfe ohne lange Wartezeiten – Beratung zu Sofortmaßnahmen.",
    image: "/images/startseite_akutsprechstunde.jpg",
    imageAlt: "Beratung in der Akutsprechstunde",
    accent: "sage",
    body: [
      "Wenn Sie an akuten Beschwerden leiden, bieten wir Ihnen eine Versorgung ohne lange Wartezeiten. Nach einem ausführlichen Befund erhalten Sie von uns eine Beratung bezüglich Sofortmaßnahmen und des weiteren Beschwerdemanagements.",
    ],
    highlights: [
      { label: "Ohne Warten", copy: "Schnelle Termine in akuten Fällen" },
      { label: "Klar", copy: "Befund + konkrete Sofortmaßnahmen" },
      { label: "Begleitend", copy: "Plan für die nächsten Wochen" },
    ],
    indicationsTitle: "Beschwerdebereiche",
    indications: [
      "Kopf- und Nackenschmerzen",
      "Rückenschmerzen (z. B. Hexenschuss, Wirbelblockade)",
      "Schmerzhafte Muskelverspannungen",
      "Schulterschmerzen",
      "Knieschmerzen",
      "Funktionelle Einschränkungen",
    ],
  },
  {
    slug: "physiotherapie",
    pillar: "erwachsene",
    category: "Phyneo für Erwachsene",
    title: "Evidenzbasierte Physiotherapie",
    italicHighlight: "Evidenz",
    lede: "Spitzenqualität auf Basis aktueller wissenschaftlicher Erkenntnisse.",
    image: "/images/erwachsene_therapiebank.jpg",
    imageAlt: "Physiotherapie-Behandlung",
    accent: "sage",
    body: [
      "Bei Phyneo verpflichten wir uns der Spitzenqualität in der physiotherapeutischen Versorgung. Unsere Therapieansätze basieren auf neuesten wissenschaftlichen Erkenntnissen und werden individuell auf Ihre Bedürfnisse abgestimmt.",
      "Wir gehen über die traditionelle Physiotherapie hinaus. Die Kombination aus evidenzbasierten Methoden, individueller Betreuung und der Integration komplementärer Therapieformen ermöglicht es uns, an den Wurzeln Ihrer Beschwerden anzusetzen.",
    ],
    highlights: [
      { label: "Evidenzbasiert", copy: "Wissenschaftlich fundiert und bewährt" },
      { label: "Individuell", copy: "Maßgeschneiderter Behandlungsplan" },
      { label: "Ganzheitlich", copy: "Integration osteopathischer Techniken" },
      { label: "Empowernd", copy: "Selbstmanagement-Werkzeuge für den Alltag" },
    ],
    notes: [
      "Möchten Sie eine Behandlung gemäß Verordnung (gesetzlich oder privat) erhalten, melden Sie sich gerne bei Anders Physiotherapie: info@physio-seesen.de",
      'Weitere Informationen zu den Behandlungskosten finden Sie unter „Infos".',
    ],
  },
  {
    slug: "akupunktur",
    pillar: "erwachsene",
    category: "Phyneo für Erwachsene",
    title: "Akupunktur",
    italicHighlight: "Akupunktur",
    lede: "Sanfte Reize, die das System harmonisieren – Tradition trifft Evidenz.",
    image: "/images/startseite_akupunktur.jpg",
    imageAlt: "Akupunkturnadeln auf der Haut",
    accent: "sage",
    body: [
      "Die Akupunktur ist eine Therapieform aus der Traditionellen Chinesischen Medizin (TCM). Sie ist eine sehr sanfte Form der Therapie und wird meistens schon bei der ersten Behandlung als wohltuend und entspannend wahrgenommen.",
      "Die Grundlage bildet die Therapie der Energieleitbahnen, die Meridiane. Die Akupunktur ist unter den alternativen Heilmethoden eine der wissenschaftlich am besten nachgewiesenen – in zahlreichen Studien konnten signifikante Therapieerfolge belegt werden.",
      "Die schmerzlindernde Wirkung beruht auf einer durch den Reiz aktivierten, vermehrten Ausschüttung schmerzlindernder und stimmungsaufhellender Stoffe.",
    ],
    highlights: [
      { label: "Schmerz", copy: "Lindernd und tonusregulierend" },
      { label: "Immun", copy: "Modulierend und durchblutungsfördernd" },
      { label: "Vegetativ", copy: "Regulierend und psychisch ausgleichend" },
    ],
    indicationsTitle: "Empfohlen bei",
    indications: [
      "Erkrankungen des Bewegungsapparates (Schulter-/Nacken, Rücken, Tennisellenbogen, Knie)",
      "Kopfschmerzen (Spannungs-, Gesichtsschmerz, Trigeminus, Migräne)",
      "Zahnschmerzen",
      "Allergien (v. a. Heuschnupfen)",
      "Bronchialerkrankungen (Asthma, Bronchitis)",
      "Funktionelle Magen-Darm-Erkrankungen (Reizdarm)",
      "Bluthochdruck (begleitend)",
      "Hauterkrankungen",
      "Unerfüllter Kinderwunsch (m/w, nach ärztlichem Ausschluss)",
      "Harnwegsbeschwerden",
    ],
    notes: ["Akupunktur ist eine begleitende Methode und ersetzt keine ärztliche Betreuung."],
  },
  // UNTERNEHMEN
  {
    slug: "rueckenschule",
    pillar: "unternehmen",
    category: "Phyneo für Unternehmen",
    title: "Rückenschule im Unternehmen",
    italicHighlight: "Rückenschule",
    lede: "Gesunde Mitarbeitende für ein starkes Unternehmen.",
    image: "/images/startseite_unternehmen.jpg",
    imageAlt: "Mitarbeitende beim Rückenschule-Workshop",
    accent: "ink",
    body: [
      "In der heutigen Arbeitswelt, in der viele Stunden im Sitzen verbracht werden, ist die Gesundheit der Wirbelsäule wichtiger denn je. Unser Rückenschulangebot im Rahmen der betrieblichen Gesundheitsförderung stärkt das Wohlbefinden Ihrer Mitarbeitenden – und damit Produktivität und Zufriedenheit.",
    ],
    highlights: [
      { label: "Prävention", copy: "Gezielte Übungen und ergonomische Beratung" },
      { label: "Produktivität", copy: "Gesunde Mitarbeitende sind weniger oft krank" },
      { label: "Wohlbefinden", copy: "Lebensqualität und Energie im Alltag" },
      { label: "Wirtschaftlich", copy: "Senkung von Krankheits- und Ausfallkosten" },
    ],
  },
  {
    slug: "ergonomieberatung",
    pillar: "unternehmen",
    category: "Phyneo für Unternehmen",
    title: "Ergonomieberatung",
    italicHighlight: "Ergonomie",
    lede: "Wissenschaftlich fundierte Anpassung von Arbeitsumgebung und Prozessen.",
    image: "/images/startseite_unternehmen.jpg",
    imageAlt: "Ergonomisch gestalteter Arbeitsplatz",
    accent: "ink",
    body: [
      "Ergonomieberatung zielt darauf ab, Arbeitsumgebungen und -prozesse an die menschliche Physiologie anzupassen, um Gesundheitsrisiken zu minimieren, Komfort zu verbessern und Produktivität zu steigern. Eine Ergonomieberatung ist ein dynamischer Prozess, der auf die spezifischen Bedürfnisse eines Unternehmens zugeschnitten ist.",
    ],
    highlights: [
      { label: "Vor Ort", copy: "Begehung & Risikobewertung im Echtbetrieb" },
      { label: "Im Dialog", copy: "Mitarbeiterbefragungen & Interviews" },
      { label: "Schriftlich", copy: "Detaillierter Bericht mit Empfehlungen" },
    ],
    flow: [
      { step: "01", copy: "Gespräch & Bedarfsanalyse" },
      { step: "02", copy: "Arbeitsplatzbegehung & Risikobewertung" },
      { step: "03", copy: "Mitarbeiterbefragungen & Interviews" },
      { step: "04", copy: "Analyse & Bericht" },
      { step: "05", copy: "Maßnahmenplanung & Implementierung" },
      { step: "06", copy: "Schulungen & Workshops für Mitarbeitende" },
      { step: "07", copy: "Nachbetreuung & Evaluation" },
    ],
  },
  {
    slug: "check-up",
    pillar: "unternehmen",
    category: "Phyneo für Unternehmen",
    title: "Phyneo Check-Up für Unternehmen",
    italicHighlight: "Check-Up",
    lede: "Standardisierte Bewegungsanalyse mit App-gestütztem Folge-Training.",
    image: "/images/erwachsene_therapiebank.jpg",
    imageAlt: "Phyneo Check-Up Bewegungsanalyse",
    accent: "ink",
    body: [
      "Der Phyneo Check-Up ist eine standardisierte Bewegungsanalyse, die nachweislich Muskel-Skelett-Beschwerden aufdecken und lindern kann. Die Bewegungstestungen geben Aufschluss über Beweglichkeit, funktionelle Muskelkraft, Gleichgewicht und Bewegungskoordination.",
      "Aus den Testungen ergeben sich individuelle Übungsempfehlungen per App – zum Ausgleich der Schwachstellen und zur Vorbeugung von Beschwerden.",
    ],
    highlights: [
      { label: "Anpassbar", copy: "Flexibel an Unternehmensabläufe angepasst" },
      { label: "Effizient", copy: "App-gestütztes Folgetraining" },
      { label: "Evidenzbasiert", copy: "Wissenschaftlich fundiert wirksam" },
    ],
    flow: [
      { step: "01", copy: "Check-Up (60 Min.) – Screening, Auswertung, Ergebnismappe" },
      { step: "02", copy: "Individueller Übungsplan – Bereitstellung per App" },
      { step: "03", copy: "Follow-Up I (30 Min.) nach 3 Monaten" },
      { step: "04", copy: "Follow-Up II (60 Min.) – Rebefund nach 12 Monaten" },
    ],
  },
];

export const findService = (pillar: string, slug: string) =>
  SERVICES.find((s) => s.pillar === pillar && s.slug === slug);

export const servicesForPillar = (pillar: string) =>
  SERVICES.filter((s) => s.pillar === pillar);
