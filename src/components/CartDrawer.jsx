import './CartDrawer.css'

// ── Single cart line item ──────────────────────
function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.title}
        className="cart-item-img"
        onError={e => { e.target.src = 'https://placehold.co/70x70/f0f0f0/999?text=img' }}
      />
      <div className="cart-item-info">
        <p className="cart-item-title">{item.title}</p>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
        <div className="cart-item-actions">
          <span className="cart-item-qty">Qty: {item.qty}</span>
          <button className="cart-remove-btn" onClick={() => onRemove(item.id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Drawer panel ──────────────────────────────
function CartPanel({ cart, onClose, onRemove }) {
  const total      = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0)

  return (
    <div className="cart-drawer">
      {/* Header */}
      <div className="cart-drawer-header">
        <span className="cart-drawer-title">🛒 Shopping Cart</span>
        <button className="cart-close-btn" onClick={onClose}>✕</button>
      </div>

      {/* Items */}
      <div className="cart-drawer-body">
        {cart.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <p>Your cart is empty</p>
          </div>
        ) : (
          cart.map(item => (
            <CartItem key={item.id} item={item} onRemove={onRemove} />
          ))
        )}
      </div>

      {/* Footer */}
      <div className="cart-drawer-footer">
        <div className="cart-subtotal">
          <span>Subtotal ({totalItems} items):</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  )
}

// ── Overlay + Drawer (main export) ────────────
export default function CartDrawer({ cart, onClose, onRemove }) {
  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <CartPanel cart={cart} onClose={onClose} onRemove={onRemove} />
    </>
  )
}
