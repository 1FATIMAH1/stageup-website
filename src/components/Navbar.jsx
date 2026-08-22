import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { t, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-20 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-copper/15"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-copper/40 font-display text-lg font-semibold text-copper-light">
            SU
          </span>
          <span className="font-display text-lg font-semibold tracking-wide text-cream">
            {t.nav.companyName}
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {t.nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-tan/80 transition-colors hover:text-copper-light"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            onClick={toggleLanguage}
            className="rounded-sm border border-tan/25 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-tan/80 transition-colors hover:border-copper-light hover:text-copper-light"
            aria-label="Toggle language"
          >
            {t.nav.langToggle}
          </button>
          <a
            href="#contact"
            className="rounded-sm bg-copper px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-copper-light"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleLanguage}
            className="rounded-sm border border-tan/25 px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-tan/80"
            aria-label="Toggle language"
          >
            {t.nav.langToggle}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`h-px w-6 bg-tan transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-px w-6 bg-tan transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-6 bg-tan transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-copper/15 bg-ink/95 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {t.nav.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm font-medium text-tan/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-sm bg-copper px-5 py-3 text-center text-sm font-semibold text-ink"
              >
                {t.nav.cta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
