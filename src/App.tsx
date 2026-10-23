import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { CartPage } from './pages/CartPage'
import { CollectionPage } from './pages/CollectionPage'
import { ConfiguratorPage } from './pages/ConfiguratorPage'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import type { CartItem } from './types'
import './App.css'
import './art-direction.css'

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart(item: Omit<CartItem, 'cartId'>) {
    setCart((current) => [...current, { ...item, cartId: crypto.randomUUID() }])
  }

  function changeQuantity(cartId: string, quantity: number) {
    setCart((current) => quantity < 1
      ? current.filter((item) => item.cartId !== cartId)
      : current.map((item) => item.cartId === cartId ? { ...item, quantity } : item))
  }

  return (
    <BrowserRouter>
      <div className="site-shell">
        <div className="demo-note">Ein liebevoll gestaltetes Portfolio-Projekt <span>·</span> Demo-Projekt – keine echten Bestellungen möglich</div>
        <SiteHeader cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kollektion" element={<CollectionPage />} />
            <Route path="/kollektion/:productId" element={<ProductPage onAdd={addToCart} />} />
            <Route path="/bouquet-gestalten" element={<ConfiguratorPage onAdd={addToCart} />} />
            <Route path="/warenkorb" element={<CartPage items={cart} onChangeQuantity={changeQuantity} onClear={() => setCart([])} />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  )
}
