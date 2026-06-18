import { useState } from 'react'
import { NAV_LINKS, CATEGORIES } from '../data/products'
import './Header.css'

// ── Logo ──────────────────────────────────────
function NavLogo() {
  return (
    <div className="nav-logo">
      <span className="logo-text">amazon</span>
      <span className="logo-suffix">.in</span>
    </div>
  )
}

// ── Deliver to ───────────────────────────────
function NavDeliver() {
  return (
    <div className="nav-deliver">
      <span className="deliver-label">Deliver to</span>
      <span className="deliver-location">📍 India</span>
    </div>
  )
}

// ── Search Bar ───────────────────────────────
function NavSearch({ search, onSearch, selectedCategory, onCategoryChange }) {
  const [focused, setFocused] = useState(false)
  return (
    <div className={`nav-search ${focused ? 'focused' : ''}`}>
      <select
        value={selectedCategory}
        onChange={e => onCategoryChange(e.target.value)}
        className="search-category"
      >
        {CATEGORIES.map(c => <option key={c}>{c}</option>)}
      </select>
      <input
        value={search}
        onChange={e => onSearch(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search Amazon.in"
        className="search-input"
      />
      <button className="search-btn">🔍</button>
    </div>
  )
}

// ── Account / Orders ─────────────────────────
function NavAccountLinks() {
  return (
    <div className="nav-account-links">
      {[
        { top: 'Hello, sign in', main: 'Account & Lists' },
        { top: 'Returns',        main: '& Orders'        },
      ].map(item => (
        <div key={item.main} className="nav-ghost-btn">
          <span className="ghost-top">{item.top}</span>
          <span className="ghost-main">{item.main}</span>
        </div>
      ))}
    </div>
  )
}

// ── Single secondary-nav link ─────────────────
function NavLink({ link, isActive, onClick }) {
  return (
    <a
      href={link.href}
      className={`secondary-link ${isActive ? 'active' : ''}`}
      onClick={e => { e.preventDefault(); onClick(link.label) }}
    >
      {link.label === 'Prime'
        ? <span><span className="prime-text">prime</span> {link.label}</span>
        : link.label}
    </a>
  )
}

// ── Full Header ───────────────────────────────
export default function Header({ search, onSearch, selectedCategory, onCategoryChange }) {
  const [activeNav, setActiveNav] = useState(null)

  return (
    <header className="header">
      {/* Primary bar */}
      <div className="header-primary">
        <NavLogo />
        <NavDeliver />
        <NavSearch
          search={search}
          onSearch={onSearch}
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
        <NavAccountLinks />
      </div>

      {/* Secondary bar */}
      <div className="header-secondary">
        <div className="all-menu">☰ All</div>
        {NAV_LINKS.map(link => (
          <NavLink
            key={link.label}
            link={link}
            isActive={activeNav === link.label}
            onClick={setActiveNav}
          />
        ))}
      </div>
    </header>
  )
}
