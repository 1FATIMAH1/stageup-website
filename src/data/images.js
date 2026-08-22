const CDN_BASE = "https://assets.zyrosite.com/cdn-cgi/image";
const CDN_PATH = "mePgDkXnkNUeRaJN";
const PORTFOLIO_BASE = "/images/portfolio";

export function cdnImage(filename, { w = 800, h = 600 } = {}) {
  return `${CDN_BASE}/format=auto,w=${w},h=${h},fit=crop/${CDN_PATH}/${filename}`;
}

export function portfolioImage(filename) {
  return `${PORTFOLIO_BASE}/${filename}`;
}

export const HERO_IMAGE = "photo-2024-10-27-02-23-58-1-9XPmiZ7f4SMWqYUH.jpg";

export const GALLERY_IMAGES = [
  "nupco00003-WNWjhMYhzdnhNtM7.jpg",
  "eskan00003-DIsgyTPM7mqMKux6.jpg",
  "corners00003-rd49wnUH1uC814sC.jpg",
  "gate-b00010-UZlybnrsXI2XHbFv.jpg",
  "00003stage-c-6kuxFrnMVdEJzLYS.jpg",
  "whatsapp-imagea-1447-05-12-at-22.37.29-8fEm4DyIQK6xZQMV.jpeg",
  "whatsapp-imagea-1447-05-12-at-23.37.05-07pHykmeCdctnmuJ.jpeg",
];

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

// Portfolio photos not used as a category thumbnail — added to the
// Gallery grid alongside the CDN photos in GALLERY_IMAGES.
export const GALLERY_LOCAL_IMAGES = [
  "exhibition-booth-3.jpg",
  "wood-reception-arch.jpg",
  "large-format-printing.jpg",
  "qidha-booth.jpg",
  "qidha-stand.jpg",
];
