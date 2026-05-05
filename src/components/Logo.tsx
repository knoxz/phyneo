import { Link } from "react-router-dom";
import { cn } from "../lib/cn";

export function Logo({ className, mark = false }: { className?: string; mark?: boolean }) {
  if (mark) {
    return (
      <Link to="/" className={cn("inline-flex items-center gap-2", className)} aria-label="Phyneo Startseite">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-sage-500 font-display text-cream-50 text-xl italic" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 80' }}>
          P
        </span>
      </Link>
    );
  }
  return (
    <Link to="/" className={cn("inline-flex items-baseline gap-2 group", className)} aria-label="Phyneo Startseite">
      <span
        className="font-display text-2xl tracking-tightest text-ink"
        style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60, "wght" 500' }}
      >
        Phyneo
      </span>
      <span className="display-italic text-xl text-terra-500 hidden sm:inline">·</span>
      <span className="hidden sm:inline label">Raum für Therapie</span>
    </Link>
  );
}
