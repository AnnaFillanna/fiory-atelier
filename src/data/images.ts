// Replace placeholderUrl with the matching public/images file when final artwork is ready.
const placeholder = (photoId: string, width: number) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=85`

export const imageSlots = {
  heroFlowerTransparent: {
    fileName: 'hero-flower-transparent.png',
    placeholderUrl: placeholder('photo-1526047932273-341f2a7631f9', 1200),
  },
  editorialFlower01: {
    fileName: 'editorial-flower-01.webp',
    placeholderUrl: placeholder('photo-1494972308805-463bc619d34e', 900),
  },
  editorialFlower02: {
    fileName: 'editorial-flower-02.webp',
    placeholderUrl: placeholder('photo-1518895949257-7621c3c786d7', 900),
  },
  editorialFlower03: {
    fileName: 'editorial-flower-03.webp',
    placeholderUrl: placeholder('photo-1523438885200-e635ba2c371e', 900),
  },
} as const

export const images = {
  hero: imageSlots.heroFlowerTransparent.placeholderUrl,
  atelier: imageSlots.editorialFlower01.placeholderUrl,
  moment: imageSlots.editorialFlower03.placeholderUrl,
  bouquets: {
    alba: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=85',
    rosa: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=900&q=85',
    giardino: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85',
    selvaggia: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=85',
    luce: 'https://images.unsplash.com/photo-1494625927555-6ec4433b1571?auto=format&fit=crop&w=900&q=85',
    dolce: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=85',
  },
} as const
