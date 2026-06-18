import { useState } from 'react'
import { PRODUCTS } from './data/products'

import Header         from './components/Header'
import HeroBanner     from './components/HeroBanner'
import CategoryFilter from './components/CategoryFilter'
import ProductGrid    from './components/ProductGrid'
import CartDrawer     from './components/CartDrawer'
import Footer         from './components/Footer'

import './App.css'

export default function App() {
  // ── Shared state ──────────────────────────────────────────
  const [search,           setSearch]           = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart,             setCart]             = useState([])
  const [cartOpen,         setCartOpen]         = useState(false)

  // ── Cart helpers ──────────────────────────────────────────
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) {
        return prev.map(i =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (id) =>
    setCart(prev => prev.filter(i => i.id !== id))

  // ── Derived data ──────────────────────────────────────────
  const filteredProducts = PRODUCTS.filter(p => {
    const matchCat    = selectedCategory === 'All' || p.category === selectedCategory
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)

  // ── Render ────────────────────────────────────────────────
  return (
    <div className="app">
      <Header
        search={search}
        onSearch={setSearch}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
      />

      <HeroBanner />

      <CategoryFilter
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <ProductGrid
        products={filteredProducts}
        search={search}
        selectedCategory={selectedCategory}
        onAddToCart={addToCart}
      />

      <Footer />

      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
        />
      )}
    </div>
  )
}
