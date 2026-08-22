import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-tan/10 bg-charcoal py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-start sm:justify-between lg:px-10">
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-copper/40 font-display text-lg font-semibold text-copper-light">
              SU
            </span>
            <span className="font-display text-lg font-semibold tracking-wide text-cream">
              {t.nav.companyName}
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-tan/55">
            {t.footer.tagline}
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {t.nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-tan/65 transition-colors hover:text-copper-light"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-tan/10 px-6 pt-6 lg:px-10">
        <p className="text-xs text-tan/35">
          {t.footer.companyDetails.crLabel}: {t.footer.companyDetails.crValue}
          {" · "}
          {t.footer.companyDetails.vatLabel}: {t.footer.companyDetails.vatValue}
        </p>
        <p className="text-xs text-tan/40">
          {t.footer.copyright.replace(/\d{4}/, new Date().getFullYear())}
        </p>
      </div>
    </footer>
  );
}
