import { useState, useEffect } from 'react'
import './Navbar.css'

const sections = ['about', 'skills', 'projects', 'experience', 'contact']

export default function Navbar({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id) {
    if (page !== 'home') {
      setPage('home')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  function goHome() {
    setPage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
  }

  function goBlog() {
    setPage('blog')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-brand" onClick={goHome}>
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
        <li>
          <button
            onClick={goBlog}
            className={page === 'blog' ? 'nav-active' : ''}
          >
            Blog
          </button>
        </li>
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
