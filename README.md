# Phyneo · Raum für Therapie

Moderne Website für die Praxis von Katharina Anders in Seesen –
Physiotherapie, Osteopathie, Akupunktur, Kindertherapie & betriebliche Gesundheitsförderung.

**Live:** [knoxz.github.io/phyneo](https://knoxz.github.io/phyneo/)

## Stack

- React 19 · TypeScript · Vite
- Tailwind CSS · Motion · React Router 6 · Lucide Icons
- Fonts: Fraunces (Display) + Manrope (Body)

## Lokale Entwicklung

```bash
npm install
npm run dev      # Dev-Server auf http://localhost:5173
npm run build    # Produktions-Build nach dist/
npm run preview  # Preview des Builds
```

## Deployment

Automatischer Deploy via **GitHub Actions** auf jeden Push nach `main` (siehe `.github/workflows/deploy.yml`).

GitHub Pages muss einmalig in den Repository-Settings aktiviert werden:

> Settings → Pages → **Source: GitHub Actions**

Die Site wird unter `https://<user>.github.io/phyneo/` bereitgestellt.
Der Vite-Base-Pfad in `vite.config.ts` und der React-Router-Basename
sind entsprechend konfiguriert.

## Projektstruktur

```
src/
├── components/   # Header, Footer, Layout, PageHero, Reveal, Logo
├── data/         # Pillars, Services, Courses, Blog, Navigation
├── pages/        # Home, Kurse, Pillar, ServiceDetail, …
├── lib/          # cn() Helper
├── App.tsx       # Routing
└── index.css     # Design-Tokens, Tailwind, Custom Utilities
public/
├── images/       # Praxis- und Blog-Bilder
└── 404.html      # SPA-Fallback für GitHub Pages
```

## Inhaltsbasis

Alle Texte stammen aus der Bestandsanalyse in
`../phyneo_website_inhalt.md`. Inhaltliche Daten liegen
zentral in `src/data/` und können dort gepflegt werden.
