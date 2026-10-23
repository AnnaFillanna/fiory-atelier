import { Link } from 'react-router-dom'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="brand"><span className="brand-name">FIORI ATELIER</span><span className="brand-caption">BLUMEN MIT PERSÖNLICHKEIT</span></Link>
          <p>Blumen erzählen ihre eigene Geschichte. Wir geben ihnen einen Rahmen – mit Gefühl, Charakter und einem Hauch Italien.</p>
        </div>
        <div className="footer-links">
          <div><strong>Entdecken</strong><Link to="/kollektion">Kollektion</Link><Link to="/bouquet-gestalten">Bouquet gestalten</Link><Link to="/warenkorb">Warenkorb</Link></div>
          <div><strong>Fiori Atelier</strong><a href="/#atelier">Unsere Idee</a><span>Ein Portfolio-Demoprojekt</span></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Fiori Atelier · Fiktives Portfolio-Projekt</span><span>Demo-Projekt – keine echten Bestellungen möglich</span></div>
    </footer>
  )
}
