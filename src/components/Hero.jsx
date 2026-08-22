import { useLanguage } from "../context/LanguageContext";
import { cdnImage, HERO_IMAGE } from "../data/images";
import Reveal from "./Reveal";

export default function Hero() {
  const { t } = useLanguage();
  const hero = t.hero;

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink pt-20"
    >
      <div className="absolute inset-0">
        <img
          src={cdnImage(HERO_IMAGE, { w: 1920, h: 1080 })}
          alt={hero.productionLabel}
          className="h-full w-full object-cover object-right brightness-110 rtl:object-left"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,20,28,0.92),rgba(20,20,28,0.70)_45%,rgba(20,20,28,0.10))] rtl:bg-[linear-gradient(270deg,rgba(20,20,28,0.92),rgba(20,20,28,0.70)_45%,rgba(20,20,28,0.10))]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-[600px]">
          <Reveal
            as="h1"
            className="font-display text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-cream sm:text-6xl lg:text-7xl"
          >
            {hero.titleLine1} <span className="text-copper-light">{hero.titleHighlight}</span>
          </Reveal>
          <Reveal delay={100} as="p" className="mt-6 max-w-[46ch] text-lg leading-relaxed text-cream/80">
            {hero.description}
          </Reveal>

          <Reveal delay={200} className="flex flex-wrap items-center gap-4 pt-8">
            <a
              href="#contact"
              className="rounded-md bg-copper px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors duration-200 hover:bg-copper-light"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#categories"
              className="rounded-md border border-tan/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream transition-colors duration-200 hover:border-copper-light hover:bg-tan/5 hover:text-copper-light"
            >
              {hero.ctaSecondary}
            </a>
          </Reveal>

          <Reveal delay={300} as="dl" className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-tan/15 pt-8 sm:grid-cols-4">
            {hero.stats.map((s) => (
              <div
                key={s.label}
                className="sm:border-s sm:border-tan/15 sm:ps-6 sm:first:border-s-0 sm:first:ps-0"
              >
                <dt className="font-display text-3xl font-semibold text-copper-light sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-tan/60">
                  {s.label}
                </dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      <Reveal
        delay={500}
        className="absolute inset-x-0 bottom-8 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2 text-tan/50">
          <span className="h-9 w-px bg-tan/30" />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 animate-bounce"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </Reveal>
    </section>
  );
}
