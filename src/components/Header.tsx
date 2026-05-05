import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";
import { PRIMARY_NAV } from "../data/nav";
import { cn } from "../lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-cream-200/85 backdrop-blur-md border-b border-ink/5"
            : "bg-transparent"
        )}
      >
        <div className="container-edit flex items-center justify-between py-5">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setHovered(null)}>
            {PRIMARY_NAV.slice(0, 4).map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setHovered(item.label)}
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-2 text-sm font-medium tracking-wide transition-colors flex items-center gap-1",
                      isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                    )
                  }
                >
                  {item.label}
                  {item.children && <ChevronRight size={12} className="rotate-90 opacity-50" />}
                </NavLink>
                <AnimatePresence>
                  {hovered === item.label && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full pt-2"
                    >
                      <div className="min-w-[260px] rounded-2xl bg-cream-50 border border-ink/5 shadow-lg shadow-ink/5 p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block rounded-xl px-4 py-2.5 text-sm text-ink-soft hover:bg-cream-200 hover:text-ink transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div className="mx-3 h-5 w-px bg-ink/10" />
            {PRIMARY_NAV.slice(4).map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 text-sm font-medium tracking-wide transition-colors",
                    isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:053819812030"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-terra-500 transition-colors"
            >
              <Phone size={14} />
              05381 · 98 12 030
            </a>
            <Link
              to="/kontakt"
              className="hidden md:inline-flex btn-primary py-2.5 text-xs"
            >
              Termin
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink/20"
              aria-label="Menü öffnen"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/40"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="absolute right-0 top-0 h-full w-full max-w-md bg-cream-100 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-ink/5">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink/20"
                  aria-label="Menü schließen"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="p-6 space-y-2">
                {PRIMARY_NAV.map((item) => (
                  <div key={item.href} className="border-b border-ink/5 last:border-b-0 pb-3">
                    <Link
                      to={item.href}
                      className="block font-display text-2xl text-ink py-2"
                      style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60' }}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-2 pb-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block py-1.5 text-sm text-ink-muted hover:text-terra-500"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="p-6 mt-4 border-t border-ink/5 space-y-3 bg-cream-200">
                <a
                  href="tel:053819812030"
                  className="flex items-center gap-3 text-sm font-medium text-ink"
                >
                  <Phone size={16} />
                  05381 · 98 12 030
                </a>
                <a href="mailto:post@phyneo.de" className="flex items-center gap-3 text-sm text-ink-soft">
                  post@phyneo.de
                </a>
                <Link to="/kontakt" className="btn-primary w-full justify-center mt-4">
                  Termin anfragen
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
