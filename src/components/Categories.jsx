import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";
import { CATEGORY_IMAGES, portfolioImage } from "../data/images";

export default function Categories() {
  const { t } = useLanguage();
  const categories = t.categories;

  return (
    <section id="categories" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal as="p" className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-copper-light">
            {categories.eyebrow}
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-cream sm:text-5xl"
          >
            {categories.title}
          </Reveal>
          <Reveal delay={140} as="p" className="mt-5 max-w-[65ch] text-base leading-relaxed text-tan/75">
            {categories.description}
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-tan/10 bg-tan/10 sm:grid-cols-2 lg:grid-cols-4">
          {categories.items.map((c, i) => (
            <Reveal
              key={c.title}
              delay={(i % 4) * 70}
              className="group flex flex-col border border-transparent bg-charcoal p-7 transition-all duration-200 hover:-translate-y-1 hover:border-copper/30 hover:bg-charcoal-light"
            >
              <div className="mb-6 h-32 overflow-hidden rounded-sm">
                <img
                  src={portfolioImage(CATEGORY_IMAGES[i])}
                  alt={c.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-xl font-semibold leading-[1.15] text-cream">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-tan/65">
                {c.copy}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-copper-light opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {categories.learnMore}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
