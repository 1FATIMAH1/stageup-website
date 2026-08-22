import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <section id="about" className="bg-charcoal py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
        <div>
          <Reveal as="p" className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-copper-light">
            {about.eyebrow}
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-cream sm:text-5xl"
          >
            {about.title}
          </Reveal>
          <Reveal delay={140} as="p" className="mt-6 max-w-[65ch] text-base leading-relaxed text-tan/75">
            {about.paragraph1}
          </Reveal>
          <Reveal delay={180} as="p" className="mt-4 max-w-[65ch] text-base leading-relaxed text-tan/75">
            {about.paragraph2}
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {about.images.map((img, i) => (
            <Reveal key={img.label} delay={i * 80} className={i % 2 === 1 ? "mt-8" : ""}>
              <PlaceholderImage
                icon={img.icon}
                label={img.label}
                className="h-56 rounded-sm sm:h-64"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
