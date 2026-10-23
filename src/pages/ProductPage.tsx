import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'
import type { CartItem } from '../types'

export function ProductPage({ onAdd }: { onAdd: (item: Omit<CartItem, 'cartId'>) => void }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)
  if (!product) return <section className="page-wrap not-found"><span className="eyebrow">Unbekanntes Bouquet</span><h1 className="section-title">Diese Blume haben wir nicht gefunden.</h1><Link to="/kollektion" className="text-link">Zur Kollektion <ArrowRight size={14} /></Link></section>
  return <section className="page-wrap">
    <Link to="/kollektion" className="back-link"><ArrowLeft size={14} /> Zurück zur Kollektion</Link>
    <article className="product-detail">
      <img className="product-detail-image" src={product.image} alt={`Blumenarrangement ${product.name}`} />
      <div className="detail-copy"><span className="eyebrow">{product.occasion} · Von Hand komponiert</span><h1 className="section-title">{product.name}</h1><p className="section-copy">{product.description}</p><span className="detail-price">{product.price} €</span><p className="section-copy">Ein florales Beispielarrangement. Die Auswahl saisonaler Blüten kann variieren.</p><button className="button" type="button" onClick={() => onAdd({ productId: product.id, name: product.name, image: product.image, details: product.subtitle, price: product.price, quantity: 1 })}>Zum Demo-Warenkorb <ArrowRight size={15} /></button><div className="detail-meta"><span>Saisonal inspiriert</span><span>Liebevoll gebunden</span></div></div>
    </article>
  </section>
}
