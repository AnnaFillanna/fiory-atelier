import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { imageSlots, images } from '../data/images'
import { products } from '../data/products'

export function HomePage() {
  return (
    <>
      <section className="hero-editorial" aria-labelledby="hero-title">
        <div className="hero-index"><span>FIORI ATELIER</span><span>FLORAL STUDIES · N° 01</span></div>
        <img className="hero-flower hero-flower-main" src={imageSlots.heroFlowerTransparent.placeholderUrl} alt="Opulente Blüten in warmen Rot- und Cremetönen" fetchPriority="high" />
        <img className="hero-flower hero-flower-side" src={imageSlots.editorialFlower01.placeholderUrl} alt="" aria-hidden="true" />
        <img className="hero-flower hero-flower-bottom" src={imageSlots.editorialFlower02.placeholderUrl} alt="" aria-hidden="true" />
        <h1 className="hero-wordmark" id="hero-title"><span className="wordmark-fiori">FIORI</span><span className="wordmark-atelier">ATELIER</span></h1>
        <div className="hero-signature"><span>Blumen<br />mit Persönlichkeit</span><span className="signature-rule" /><span>Fatto a mano<br />con amore</span></div>
        <Link className="hero-cta" to="/kollektion">Blumen entdecken <ArrowRight size={15} /></Link>
        <span className="hero-vertical-note">UNA STORIA IN FIORE — 2026</span>
      </section>
      <section className="intro-section" id="atelier">
        <div className="intro-mark">F.</div>
        <div className="intro-text"><span className="eyebrow">Un atelier de fleurs</span><h2 className="section-title">Die Schönheit liegt im Unvollkommenen.</h2><p className="section-copy">Saisonale Blüten. Freie Formen. Ein Gefühl für das, was zusammengehört. Fiori Atelier komponiert Blumen mit Persönlichkeit – inspiriert von südlichem Licht und leiser Eleganz.</p><Link to="/kollektion" className="text-link">Die Kollektion ansehen <ArrowRight size={14} /></Link></div>
      </section>
      <section className="featured-section">
        <div className="section-heading"><div><span className="eyebrow">Objets floraux · 01—06</span><h2 className="section-title">Blüten in ihrer eigenen Sprache.</h2></div><Link to="/kollektion" className="text-link">Alle Bouquets <ArrowRight size={14} /></Link></div>
        <div className="product-grid">{products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>
      <section className="moment-section">
        <div className="moment-image" role="img" aria-label="Florale Inspiration für besondere Augenblicke" style={{ backgroundImage: `url("${images.moment}")` }} />
        <div className="moment-copy"><span className="eyebrow">Per ogni occasione</span><h2 className="section-title">Ein Moment.<br /><em>Ein Bouquet.</em></h2><p>Für ein leises Danke oder einen Tag, der in Erinnerung bleibt.</p><Link to="/bouquet-gestalten" className="text-link">Dein Bouquet komponieren <ArrowRight size={14} /></Link></div>
      </section>
    </>
  )
}
