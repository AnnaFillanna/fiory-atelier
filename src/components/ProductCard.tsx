import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '../types'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link className="product-image-wrap" to={`/kollektion/${product.id}`} aria-label={`${product.name} ansehen`}>
        <img className="product-image" src={product.image} alt={`Blumenarrangement ${product.name}`} loading="lazy" />
        <span className="product-label">{product.occasion}</span>
      </Link>
      <div className="product-info">
        <div><Link to={`/kollektion/${product.id}`}><h3>{product.name} <ArrowUpRight size={13} /></h3></Link><p>{product.subtitle}</p></div>
        <span className="product-price">ab {product.price} €</span>
      </div>
    </article>
  )
}
