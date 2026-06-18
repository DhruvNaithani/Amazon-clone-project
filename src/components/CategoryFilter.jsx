import { CATEGORIES } from '../data/products'
import './CategoryFilter.css'

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="category-filter">
      {CATEGORIES.map(cat => (
        <button
          key={cat}
          className={`category-pill ${selected === cat ? 'active' : ''}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
