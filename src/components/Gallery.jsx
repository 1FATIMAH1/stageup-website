import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";
import {
  cdnImage,
  portfolioImage,
  GALLERY_IMAGES,
  GALLERY_LOCAL_IMAGES,
} from "../data/images";

const GALLERY_SOURCES = [
  ...GALLERY_IMAGES.map((filename) => ({
    key: filename,
    src: cdnImage(filename, { w: 800, h: 600 }),
  })),
  ...GALLERY_LOCAL_IMAGES.map((filename) => ({
    key: filename,
    src: portfolioImage(filename),
  })),
];

export default function Gallery() {
  const { t } = useLanguage();
  const gallery = t.gallery;

  return (
    <section id="gallery" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal as="p" className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-copper-light">
            {gallery.eyebrow}
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-cream sm:text-5xl"
          >
            {gallery.title}
          </Reveal>
          <Reveal delay={140} as="p" className="mt-5 max-w-[65ch] text-base leading-relaxed text-tan/75">
            {gallery.description}
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_SOURCES.map((image, i) => (
            <Reveal
              key={image.key}
              delay={(i % 3) * 80}
              className="group relative h-64 overflow-hidden rounded-sm border border-transparent transition-colors duration-200 hover:border-copper/30 sm:h-72"
            >
              <img
                src={image.src}
                alt={gallery.items[i]?.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
