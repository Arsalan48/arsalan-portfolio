import { useState, useEffect } from 'react'
import './Navbar.css'

const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-brand" onClick={() => scrollTo('hero')}>
        <span className="brand-dot" />
        Arsalan.dev
      </div>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {sections.map((s) => (
          <li key={s}>
            <button onClick={() => scrollTo(s)}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="hamburger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? 'bar open' : 'bar'} />
        <span className={menuOpen ? 'bar open' : 'bar'} />
        <span className={menuOpen ? 'bar open' : 'bar'} />
      </button>
    </nav>
  )
}
