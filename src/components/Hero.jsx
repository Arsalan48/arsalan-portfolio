import './Hero.css'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">
          Syed Arsalan<br />Askari Naqvi
        </h1>
        <p className="hero-title">Full-Stack Developer</p>
        <p className="hero-sub">
          CS Graduate · University of Management and Technology, Lahore
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            View Projects
          </button>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>
            Get in Touch
          </button>
        </div>
        <div className="hero-scroll" onClick={() => scrollTo('about')}>
          <span className="scroll-arrow" />
        </div>
      </div>
    </section>
  )
}
