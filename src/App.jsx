import { useState } from 'react'
import { PRODUCTS } from './data/products'

import Header         from './components/Header'
import HeroBanner     from './components/HeroBanner'
import CategoryFilter from './components/CategoryFilter'
import ProductGrid    from './components/ProductGrid'
import Footer         from './components/Footer'

import './App.css'

export default function App() {
  // ── Shared state ──────────────────────────────────────────
  const [search,           setSearch]           = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // ── Derived data ──────────────────────────────────────────
  const filteredProducts = PRODUCTS.filter(p => {
    const matchCat    = selectedCategory === 'All' || p.category === selectedCategory
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  // ── Render ────────────────────────────────────────────────
  return (
    <div className="app">
      <Header
        search={search}
        onSearch={setSearch}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
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
      />

      <Footer />
    </div>
  )
}
