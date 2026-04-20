import './About.css'

export default function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <p className="section-tag">Who I Am</p>
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-avatar">
            <div className="avatar-ring">
              <div className="avatar-initials">SA</div>
            </div>
          </div>
          <div className="about-text">
            <p>
              I'm a Computer Science graduate from the University of Management
              and Technology, Lahore — passionate about building robust,
              full-stack web applications and exploring the intersection of AI
              and real-world solutions.
            </p>
            <p>
              My experience spans MERN Stack development, ASP.NET MVC, and
              applied Machine Learning. I enjoy turning complex problems into
              clean, elegant software.
            </p>
            <div className="about-cards">
              <div className="about-card">
                <span className="about-card-icon">🎓</span>
                <div>
                  <strong>Education</strong>
                  <p>BS Computer Science</p>
                  <p>UMT, Lahore, Pakistan</p>
                </div>
              </div>
              <div className="about-card">
                <span className="about-card-icon">💼</span>
                <div>
                  <strong>Experience</strong>
                  <p>9 months · MERN Trainee @ EVS</p>
                  <p>6 weeks · ASP.NET Intern @ PEL</p>
                </div>
              </div>
              <div className="about-card">
                <span className="about-card-icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
