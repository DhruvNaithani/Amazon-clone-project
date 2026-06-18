import { FOOTER_COLUMNS } from '../data/products'
import './Footer.css'

function FooterColumn({ title, links }) {
  return (
    <div className="footer-col">
      <h4 className="footer-col-title">{title}</h4>
      {links.map(link => (
        <div key={link} className="footer-link-wrap">
          <a href="#" className="footer-link">{link}</a>
        </div>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to top
      </div>

      <div className="footer-columns">
        {FOOTER_COLUMNS.map(col => (
          <FooterColumn key={col.title} title={col.title} links={col.links} />
        ))}
      </div>

      <div className="footer-bottom">
        <span className="footer-logo">amazon</span>
        <p className="footer-copy">
          © 1996–2026, Amazon.com, Inc. or its affiliates — Frontend Clone for Demo Purposes
        </p>
      </div>
    </footer>
  )
}
