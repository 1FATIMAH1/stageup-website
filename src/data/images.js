export function portfolioImage(filename) {
  return `${import.meta.env.BASE_URL}images/portfolio/${filename}`;
}

export const HERO_IMAGE = "qidha-stand.jpg";
export const HERO_IMAGE_FALLBACK = "exhibition-booth-1.jpg";

// One photo per "What We Build" category, in the same order as
// content.js's categories.items.
export const CATEGORY_IMAGES = [
  "exhibition-booth-1.jpg",
  "banners-backdrops.jpg",
  "rollup-stands.jpg",
  "stage-backdrop.jpg",
  "signage-3d-letters.jpg",
  "custom-wood-counter.jpg",
  "acrylic-display.jpg",
  "exhibition-booth-2.jpg",
];

// Full portfolio set shown in the Gallery grid.
export const GALLERY_IMAGES = [
  "exhibition-booth-1.jpg",
  "exhibition-booth-2.jpg",
  "exhibition-booth-3.jpg",
  "banners-backdrops.jpg",
  "rollup-stands.jpg",
  "stage-backdrop.jpg",
  "signage-3d-letters.jpg",
  "wood-reception-arch.jpg",
  "acrylic-display.jpg",
  "custom-wood-counter.jpg",
  "large-format-printing.jpg",
  "qidha-booth.jpg",
  "qidha-stand.jpg",
];
