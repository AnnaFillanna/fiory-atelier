import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingBag, X } from 'lucide-react'

export function SiteHeader({ cartCount }: { cartCount: number }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return (
    <header className="site-header">
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <Link to="/" className="brand" aria-label="Fiori Atelier – Startseite" onClick={closeMenu}>
        <span className="brand-name">FIORI ATELIER</span><span className="brand-caption">BLUMEN MIT PERSÖNLICHKEIT</span>
      </Link>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Hauptnavigation">
        <NavLink to="/kollektion" onClick={closeMenu}>Kollektion</NavLink>
        <NavLink to="/bouquet-gestalten" onClick={closeMenu}>Bouquet gestalten</NavLink>
        <a href="/#atelier" onClick={closeMenu}>Das Atelier</a>
      </nav>
      <div className="header-actions">
        <Link to="/warenkorb" className="cart-link" aria-label={`Warenkorb, ${cartCount} Artikel`}>
          <ShoppingBag size={18} strokeWidth={1.5} /> Warenkorb <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </header>
  )
}
