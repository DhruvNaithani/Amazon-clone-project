import './HeroBanner.css'

export default function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero-dots" />

      <div className="hero-content">
        <p className="hero-eyebrow">Welcome to</p>
        <h1 className="hero-title">
          Amazon <span className="hero-accent">.in</span>
        </h1>
        <p className="hero-subtitle">
          Millions of products. Delivered fast. Shop everything from electronics to fashion.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-outline">Try Prime</button>
        </div>
      </div>

      <div className="hero-emoji">📦</div>
    </section>
  )
}
