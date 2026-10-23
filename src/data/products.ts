import { images } from './images'
import type { Product } from '../types'

export const products: Product[] = [
  { id: 'alba', name: 'Alba', subtitle: 'Ein neuer Anfang', price: 58, occasion: 'Geburtstag', image: images.bouquets.alba, description: 'Ein lichtes Zusammenspiel aus saisonalen Blüten in Creme, zartem Apricot und frischem Grün. Wie der erste Morgen eines besonderen Tages.' },
  { id: 'rosa', name: 'Rosa di Sera', subtitle: 'Für leise große Gefühle', price: 72, occasion: 'Liebe', image: images.bouquets.rosa, description: 'Sanfte Rosatöne und charaktervolle Blüten formen ein Bouquet voller Wärme. Von Hand gebunden und mit viel Raum für jede einzelne Blume.' },
  { id: 'giardino', name: 'Il Giardino', subtitle: 'Ein Garten in Bewegung', price: 64, occasion: 'Dankeschön', image: images.bouquets.giardino, description: 'Locker, lebendig und ein wenig wild: ein kleiner Gartenstrauß mit saisonalen Blüten und duftigem Blattwerk.' },
  { id: 'selvaggia', name: 'Selvaggia', subtitle: 'Schönheit ohne Regeln', price: 68, occasion: 'Geburtstag', image: images.bouquets.selvaggia, description: 'Ausdrucksstarke Formen, natürliche Linien und eine Palette von warmem Rosé bis tiefem Bordeaux machen Selvaggia unverwechselbar.' },
  { id: 'luce', name: 'Luce', subtitle: 'Ein Hauch von Licht', price: 54, occasion: 'Dankeschön', image: images.bouquets.luce, description: 'Leicht wie ein Nachmittag im Süden. Luce verbindet zarte Blüten in hellen Nuancen mit feinem, frischem Grün.' },
  { id: 'dolce', name: 'Dolce Vita', subtitle: 'Das Leben feiern', price: 78, occasion: 'Liebe', image: images.bouquets.dolce, description: 'Ein opulenter, sonniger Gruß mit üppigen Blüten und italienischer Lebensfreude – für Momente, die in Erinnerung bleiben.' },
]
