import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { CartItem } from '../types'

export function CartPage({ items, onChangeQuantity, onClear }: { items: CartItem[]; onChangeQuantity: (cartId: string, quantity: number) => void; onClear: () => void }) {
  const [confirmed, setConfirmed] = useState(false)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  function simulateOrder() {
    setConfirmed(true)
    onClear()
  }
  if (!items.length) return <section className="page-wrap empty-state"><ShoppingBag className="empty-icon" size={32} strokeWidth={1.3} /><span className="eyebrow">Dein Warenkorb</span><h1 className="section-title">{confirmed ? 'Ein schöner Gedanke.' : 'Noch ist es ganz still hier.'}</h1><p className="section-copy">{confirmed ? 'Deine Demo-Bestellung wurde simuliert. Es wurden keine echten Bestelldaten übermittelt.' : 'Hier warten bald deine floralen Lieblingsstücke.'}</p>{confirmed ? <p className="demo-confirmation" role="status">Demo-Bestellung abgeschlossen – es wurde nichts gekauft und nichts gespeichert.</p> : <Link to="/kollektion" className="button">Zur Kollektion <ArrowRight size={15} /></Link>}</section>
  return <section className="page-wrap">
    <header className="collection-head"><span className="eyebrow">Fast schon ein Geschenk</span><h1 className="section-title">Dein Warenkorb</h1><p className="section-copy">Ein kleiner Überblick über deine ausgewählten Bouquets.</p></header>
    <div className="cart-layout">
      <div className="cart-list">{items.map((item) => <article className="cart-row" key={item.cartId}>
        <img src={item.image} alt="" />
        <div><h3>{item.name}</h3>{item.details && <p>{item.details}</p>}<div className="quantity-control" aria-label={`Menge für ${item.name}`}><button type="button" aria-label="Menge verringern" onClick={() => onChangeQuantity(item.cartId, item.quantity - 1)}><Minus size={13} /></button><span>{item.quantity}</span><button type="button" aria-label="Menge erhöhen" onClick={() => { onChangeQuantity(item.cartId, item.quantity + 1); setConfirmed(false) }}><Plus size={13} /></button></div></div>
        <div className="cart-item-price"><span>{(item.price * item.quantity).toFixed(2)} €</span><button className="remove-button" type="button" onClick={() => onChangeQuantity(item.cartId, 0)}><Trash2 size={13} /> Entfernen</button></div>
      </article>)}</div>
      <aside className="summary-box"><h2>Zusammenfassung</h2><div className="summary-total"><span>Demo-Gesamtsumme</span><strong>{total.toFixed(2)} €</strong></div><button className="button" type="button" onClick={simulateOrder}>Demo-Bestellung simulieren <ArrowRight size={14} /></button><p className="summary-note">Nur zu Demonstrationszwecken. Keine echte Bestellung, Zahlung oder Speicherung personenbezogener Daten.</p></aside>
    </div>
  </section>
}
