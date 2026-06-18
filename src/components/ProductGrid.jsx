import ProductCard from './ProductCard'
import './ProductGrid.css'

export default function ProductGrid({ products, search, selectedCategory }) {
  const heading = search
    ? `Results for "${search}"`
    : selectedCategory === 'All'
    ? 'Featured Products'
    : selectedCategory

  return (
    <main className="product-grid-section">
      {/* Heading row */}
      <div className="grid-header">
        <h2 className="grid-title">
          {heading}
          <span className="grid-count">({products.length} items)</span>
        </h2>
        <select className="sort-select">
          <option>Sort: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Avg. Customer Review</option>
        </select>
      </div>

      {/* Empty state */}
      {products.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>No results found</h3>
          <p>Try different keywords or browse a category</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </main>
  )
}
