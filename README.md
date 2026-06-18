# Amazon Clone — React + Vite

A pixel-perfect Amazon.in frontend clone built with React and Vite, structured as a production-ready component-based project.

---

## 🚀 Quick Start

```bash
# 1. Enter the project folder
cd amazon-clone

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## 📁 Project Structure

```
amazon-clone/
├── index.html                  ← Vite HTML entry point
├── vite.config.js              ← Vite config
├── package.json
│
└── src/
    ├── main.jsx                ← ReactDOM.createRoot (unchanged from scaffold)
    ├── index.css                ← Global reset & base styles
    ├── App.jsx                  ← Root component — all shared state lives here
    ├── App.css                  ← App-level layout styles
    │
    ├── data/
    │   └── products.js          ← All static data (PRODUCTS, CATEGORIES, NAV_LINKS …)
    │
    └── components/
        ├── Header.jsx            ← Sticky nav (logo, search, account, cart icon, secondary links)
        ├── Header.css
        ├── HeroBanner.jsx        ← Hero section with CTA buttons
        ├── HeroBanner.css
        ├── CategoryFilter.jsx    ← Horizontal category pill bar
        ├── CategoryFilter.css
        ├── ProductCard.jsx       ← Card + StarRating, PrimeBadge, PriceDisplay, Wishlist, Add to Cart
        ├── ProductCard.css
        ├── ProductGrid.jsx       ← Responsive product grid + heading + sort
        ├── ProductGrid.css
        ├── CartDrawer.jsx        ← Slide-in cart with items, qty, remove, checkout
        ├── CartDrawer.css
        ├── Footer.jsx            ← Four-column footer + back-to-top
        └── Footer.css
```

---

## 🧩 Component Map

| File | Responsibility |
|---|---|
| `App.jsx` | Shared state: `search`, `selectedCategory`, `cart`, `cartOpen` |
| `data/products.js` | All data constants — zero UI code |
| `Header.jsx` | NavLogo · NavDeliver · NavSearch · NavAccountLinks · NavCartButton · NavLink |
| `HeroBanner.jsx` | Marketing hero section |
| `CategoryFilter.jsx` | Category pill buttons |
| `ProductCard.jsx` | StarRating · PrimeBadge · PriceDisplay · ProductBadge · WishlistButton · AddToCartButton |
| `ProductGrid.jsx` | Maps `filteredProducts` → `<ProductCard>` |
| `CartDrawer.jsx` | CartItem · CartPanel · overlay |
| `Footer.jsx` | FooterColumn · back-to-top |

---

## ✨ Features

- 🔍 Live search filtering
- 🗂️ Category filtering (pills + search bar dropdown in sync)
- 🛒 Add to cart with quantity tracking, animated "✓ Added!" confirmation, and a slide-in cart drawer
- ♥ Wishlist toggle per card
- 🏷️ Badges: Best Seller, Amazon's Choice, Deal of the Day
- 📦 Prime badge with free delivery label
- 🔗 Active nav link highlighting (secondary bar)
- 🎨 Fully CSS-based styling (no CSS-in-JS)
