import { useMemo, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'

const occasions = ['Alle', 'Geburtstag', 'Liebe', 'Dankeschön']

export function CollectionPage() {
  const [occasion, setOccasion] = useState('Alle')
  const filtered = useMemo(() => occasion === 'Alle' ? products : products.filter((item) => item.occasion === occasion), [occasion])
  return (
    <section className="page-wrap">
      <header className="collection-head"><span className="eyebrow">Mit Sorgfalt komponiert</span><h1 className="section-title">Die Bouquet-Kollektion</h1><p className="section-copy">Jede Blüte folgt ihrer eigenen Saison. Entdecke unsere floralen Geschichten und finde dein persönliches Lieblingsstück.</p></header>
      <div className="filter-row" role="group" aria-label="Bouquets nach Anlass filtern">{occasions.map((item) => <button key={item} className={`filter-chip ${occasion === item ? 'selected' : ''}`} type="button" aria-pressed={occasion === item} onClick={() => setOccasion(item)}>{item}</button>)}</div>
      <div className="product-grid collection-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div>
    </section>
  )
}
