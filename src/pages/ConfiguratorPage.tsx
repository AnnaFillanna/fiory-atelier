import { useMemo, useState, type CSSProperties } from 'react'
import { Check, Flower2 } from 'lucide-react'
import { images } from '../data/images'
import type { CartItem } from '../types'

const flowers = [
  { name: 'Rose', price: 3, color: '#d6969a', symbol: '✿' },
  { name: 'Ranunkel', price: 4, color: '#ecc9b8', symbol: '❀' },
  { name: 'Tulpe', price: 2, color: '#e9aa9e', symbol: '✿' },
  { name: 'Eukalyptus', price: 2, color: '#a8b49b', symbol: '❋' },
  { name: 'Cosmea', price: 3, color: '#dcb3c1', symbol: '✿' },
]
const palettes = [
  { name: 'Rosé & Creme', glow: '#e9d0c8', wrap: '#d3b9ad', swatch: '#ddb8ad' },
  { name: 'Sonnengelb', glow: '#eddfb4', wrap: '#c9b58d', swatch: '#ddc476' },
  { name: 'Wiesenfarben', glow: '#cfd8c6', wrap: '#aab8a3', swatch: '#9cac8b' },
  { name: 'Bordeaux', glow: '#dfc4c5', wrap: '#927079', swatch: '#814956' },
]
const sizes = [{ name: 'Klein', price: 28, count: 5 }, { name: 'Mittel', price: 42, count: 8 }, { name: 'Groß', price: 58, count: 12 }]
const wraps = [{ name: 'Naturpapier', price: 0 }, { name: 'Rosépapier', price: 3 }, { name: 'Leinenband', price: 5 }]

export function ConfiguratorPage({ onAdd }: { onAdd: (item: Omit<CartItem, 'cartId'>) => void }) {
  const [selectedFlowers, setSelectedFlowers] = useState<string[]>(['Rose', 'Ranunkel', 'Eukalyptus'])
  const [paletteIndex, setPaletteIndex] = useState(0)
  const [sizeIndex, setSizeIndex] = useState(1)
  const [wrapIndex, setWrapIndex] = useState(0)
  const [added, setAdded] = useState(false)
  const currentSize = sizes[sizeIndex]
  const palette = palettes[paletteIndex]
  const price = useMemo(() => currentSize.price + selectedFlowers.reduce((sum, name) => sum + (flowers.find((flower) => flower.name === name)?.price ?? 0), 0) + wraps[wrapIndex].price, [currentSize, selectedFlowers, wrapIndex])
  const chosenFlowers = selectedFlowers
    .map((name) => flowers.find((flower) => flower.name === name))
    .filter((flower): flower is (typeof flowers)[number] => flower !== undefined)
  const visibleFlowers = chosenFlowers.length
    ? Array.from({ length: currentSize.count }, (_, index) => chosenFlowers[index % chosenFlowers.length])
    : []

  function toggleFlower(name: string) {
    setAdded(false)
    setSelectedFlowers((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name])
  }

  function addCustomBouquet() {
    const name = selectedFlowers.length ? selectedFlowers.join(' · ') : 'Saisonale Blüten'
    onAdd({ productId: 'custom', name: 'Il mio Bouquet', image: images.bouquets.giardino, details: `${currentSize.name} · ${palette.name} · ${name} · ${wraps[wrapIndex].name}`, price, quantity: 1 })
    setAdded(true)
  }

  return <section className="page-wrap">
    <header className="collection-head"><span className="eyebrow">Ein Bouquet ganz nach deinem Gefühl</span><h1 className="section-title">Deine Blüten. Deine Geschichte.</h1><p className="section-copy">Stelle Farben, Blüten und Details zusammen. Die Vorschau ist eine stilisierte Illustration und bildet einzelne Kombinationen nicht fotorealistisch ab.</p></header>
    <div className="builder-layout">
      <figure className="builder-preview" style={{ '--bouquet-glow': palette.glow, '--wrap-color': palette.wrap } as CSSProperties}>
        <p className="preview-label">Deine Komposition</p>
        <div className="bouquet-art" aria-label={`Stilisierte Vorschau: ${selectedFlowers.join(', ') || 'keine ausgewählten Blüten'}, ${palette.name}, ${currentSize.name}`}>
          <div className="flower-heads">{visibleFlowers.map((flower, index) => <span key={`${flower.name}-${index}`} className="flower-dot" style={{ backgroundColor: flower.color }}>{flower.symbol}</span>)}</div>
        </div>
        <figcaption>Stilisierte Vorschau – die Illustration zeigt die gewählte Farbwelt und Größenwirkung, nicht jede Blütenkombination fotorealistisch.</figcaption>
      </figure>
      <div className="builder-form">
        <div><span className="eyebrow">Schritt für Schritt</span><h2 className="section-title">Dein Bouquet gestalten</h2></div>
        <fieldset className="builder-group"><legend className="visually-hidden">Blüten auswählen</legend><h3>01 · Deine Blüten</h3><div className="builder-options">{flowers.map((flower) => <button key={flower.name} type="button" className={`option-button ${selectedFlowers.includes(flower.name) ? 'selected' : ''}`} aria-pressed={selectedFlowers.includes(flower.name)} onClick={() => toggleFlower(flower.name)}><span className="swatch" style={{ background: flower.color }} />{flower.name} {selectedFlowers.includes(flower.name) && <Check size={13} />}</button>)}</div></fieldset>
        <fieldset className="builder-group"><legend className="visually-hidden">Farbwelt auswählen</legend><h3>02 · Deine Farbwelt</h3><div className="builder-options">{palettes.map((item, index) => <button key={item.name} type="button" className={`option-button ${paletteIndex === index ? 'selected' : ''}`} aria-pressed={paletteIndex === index} onClick={() => { setPaletteIndex(index); setAdded(false) }}><span className="swatch" style={{ background: item.swatch }} />{item.name}</button>)}</div></fieldset>
        <fieldset className="builder-group"><legend className="visually-hidden">Bouquet-Größe auswählen</legend><h3>03 · Die Größe</h3><div className="builder-options">{sizes.map((item, index) => <button key={item.name} type="button" className={`option-button ${sizeIndex === index ? 'selected' : ''}`} aria-pressed={sizeIndex === index} onClick={() => { setSizeIndex(index); setAdded(false) }}>{item.name} · ab {item.price} €</button>)}</div></fieldset>
        <fieldset className="builder-group"><legend className="visually-hidden">Verpackung auswählen</legend><h3>04 · Das Finish</h3><div className="builder-options">{wraps.map((item, index) => <button key={item.name} type="button" className={`option-button ${wrapIndex === index ? 'selected' : ''}`} aria-pressed={wrapIndex === index} onClick={() => { setWrapIndex(index); setAdded(false) }}>{item.name}{item.price > 0 ? ` + ${item.price} €` : ''}</button>)}</div></fieldset>
        <div><div className="price-line"><span>Dein Bouquet · {currentSize.name}</span><strong>{price} €</strong></div><button className="button builder-add" type="button" disabled={selectedFlowers.length === 0} onClick={addCustomBouquet}><Flower2 size={16} /> Zum Demo-Warenkorb hinzufügen</button>{added && <p className="demo-confirmation" role="status">Dein Bouquet ist im Demo-Warenkorb. Es wird keine echte Bestellung ausgelöst.</p>}</div>
      </div>
    </div>
  </section>
}
