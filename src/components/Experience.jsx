import './Experience.css'

const experiences = [
  {
    duration: '9 Months',
    role: 'MERN Stack Trainee',
    company: 'EVS',
    description:
      'Developed and maintained full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Collaborated on real-world client projects and gained hands-on industry experience.',
  },
  {
    duration: '6 Weeks',
    role: 'ASP.NET MVC Intern',
    company: 'PEL (Pak Elektron Limited)',
    description:
      'Built and maintained enterprise-level web applications using ASP.NET MVC within a professional corporate environment, gaining exposure to large-scale software systems.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-alt">
      <div className="section-inner">
        <p className="section-tag">My Journey</p>
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div className="timeline-item" key={exp.role}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-date">{exp.duration}</span>
                <h3>{exp.role}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
