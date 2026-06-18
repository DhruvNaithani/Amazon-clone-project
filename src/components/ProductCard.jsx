import { useState } from 'react'
import { BADGE_COLORS } from '../data/products'
import './ProductCard.css'

// ── StarRating ────────────────────────────────
function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map(s => (
        <span key={s} className={s <= Math.round(rating) ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  )
}

// ── PrimeBadge ────────────────────────────────
function PrimeBadge() {
  return (
    <div className="prime-badge">
      <span className="prime-label">prime</span>
      <span className="prime-delivery">FREE Delivery</span>
    </div>
  )
}

// ── PriceDisplay ──────────────────────────────
function PriceDisplay({ price }) {
  const dollars = Math.floor(price)
  const cents   = (price % 1 * 100).toFixed(0).padStart(2, '0')
  return (
    <div className="price-display">
      <span className="price-symbol">$</span>
      <span className="price-dollars">{dollars}</span>
      <span className="price-cents">.{cents}</span>
    </div>
  )
}

// ── ProductBadge ──────────────────────────────
function ProductBadge({ badge }) {
  if (!badge) return null
  return (
    <div
      className="product-badge"
      style={{ background: BADGE_COLORS[badge] ?? '#007185' }}
    >
      {badge}
    </div>
  )
}

// ── WishlistButton ────────────────────────────
function WishlistButton({ wishlisted, onToggle }) {
  return (
    <button
      className="wishlist-btn"
      onClick={onToggle}
      style={{ color: wishlisted ? '#CC0C39' : '#999' }}
      aria-label="Toggle wishlist"
    >
      {wishlisted ? '♥' : '♡'}
    </button>
  )
}

// ── AddToCartButton (functional — calls onAdd, shows brief confirmation) ──
function AddToCartButton({ onAdd }) {
  const [added, setAdded] = useState(false)

  const handleClick = () => {
    onAdd()
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <button
      className={`add-to-cart-btn ${added ? 'added' : ''}`}
      onClick={handleClick}
    >
      {added ? '✓ Added!' : 'Add to Cart'}
    </button>
  )
}

// ── ProductCard (main export) ─────────────────
export default function ProductCard({ product, onAddToCart }) {
  const [wishlisted, setWishlisted] = useState(false)

  return (
    <div className="product-card">
      <ProductBadge badge={product.badge} />
      <WishlistButton
        wishlisted={wishlisted}
        onToggle={() => setWishlisted(w => !w)}
      />

      <img
        src={product.image}
        alt={product.title}
        className="product-image"
        onError={e => {
          e.target.src = `https://placehold.co/300x300/f0f0f0/999?text=${encodeURIComponent(product.category)}`
        }}
      />

      <p className="product-title">{product.title}</p>

      <div className="product-rating">
        <StarRating rating={product.rating} />
        <span className="review-count">{product.reviews.toLocaleString()}</span>
      </div>

      <PriceDisplay price={product.price} />
      {product.prime && <PrimeBadge />}
      <AddToCartButton onAdd={() => onAddToCart(product)} />
    </div>
  )
}
