import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  const process = t.process;

  return (
    <section id="process" className="bg-charcoal py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal as="p" className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-copper-light">
            {process.eyebrow}
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-cream sm:text-5xl"
          >
            {process.title}
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
          <span className="pointer-events-none absolute start-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-tan/15 lg:block" />
          {process.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="relative flex gap-5 lg:flex-col lg:gap-0">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-copper/40 bg-charcoal font-display text-lg font-semibold text-copper-light">
                {s.n}
              </span>
              <div className="lg:mt-6">
                <h3 className="font-display text-lg font-semibold leading-[1.15] text-cream">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-tan/65">
                  {s.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
