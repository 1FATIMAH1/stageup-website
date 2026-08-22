import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

export default function Industries() {
  const { t } = useLanguage();
  const industries = t.industries;

  return (
    <section id="industries" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal as="p" className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-copper-light">
            {industries.eyebrow}
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-cream sm:text-5xl"
          >
            {industries.title}
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.items.map((name, i) => (
            <Reveal
              key={name}
              delay={(i % 4) * 60}
              className="flex items-center justify-center rounded-sm border border-tan/12 px-5 py-8 text-center transition-all duration-200 hover:-translate-y-1 hover:border-copper/40"
            >
              <span className="font-display text-base font-medium text-tan/85">
                {name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
