import './Skills.css'

const skills = [
  { name: 'React.js', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express.js', icon: '🚀' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'JavaScript', icon: '💛' },
  { name: 'HTML & CSS', icon: '🎨' },
  { name: 'ASP.NET MVC', icon: '🔷' },
  { name: 'Machine Learning', icon: '🤖' },
  { name: 'Computer Vision', icon: '👁️' },
  { name: 'MERN Stack', icon: '🔥' },
]

export default function Skills() {
  return (
    <section id="skills" className="section-alt">
      <div className="section-inner">
        <p className="section-tag">What I Know</p>
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-card" key={s.name}>
              <span className="skill-icon">{s.icon}</span>
              <span className="skill-name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
