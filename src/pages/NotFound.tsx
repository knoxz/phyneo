import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function NotFound() {
  return (
    <section className="container-edit py-32 lg:py-48">
      <p className="label mb-6">404 · nicht gefunden</p>
      <h1
        className="display text-fluid-7xl leading-[0.9] text-ink"
        style={{ fontVariationSettings: '"opsz" 144, "SOFT" 80, "wght" 400' }}
      >
        Hier ist <em className="display-italic text-terra-500">nichts</em>.
      </h1>
      <p className="mt-8 max-w-prose text-lg text-ink-soft leading-relaxed">
        Die Seite, die du suchst, existiert nicht oder wurde verschoben. Lass uns gemeinsam
        zurückfinden.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/" className="btn-primary">
          Zur Startseite <ArrowUpRight size={16} />
        </Link>
        <Link to="/kontakt" className="btn-outline">
          Kontakt aufnehmen
        </Link>
      </div>
    </section>
  );
}
