import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const whyChooseUs = t.whyChooseUs;

  return (
    <section className="bg-charcoal py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal as="p" className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-copper-light">
            {whyChooseUs.eyebrow}
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-cream sm:text-5xl"
          >
            {whyChooseUs.title}
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-tan/10 bg-tan/10 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.reasons.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 80}
              className="bg-charcoal p-8 transition-colors duration-200 hover:bg-charcoal-light"
            >
              <span className="font-display text-3xl font-semibold text-copper/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold leading-[1.15] text-cream">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-tan/65">
                {r.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
