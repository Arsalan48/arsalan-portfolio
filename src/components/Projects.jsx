import './Projects.css'

const projects = [
  {
    title: 'Signiify',
    description:
      'ASL Sign Language Translator that uses Machine Learning and Computer Vision to detect and interpret American Sign Language gestures in real time.',
    tags: ['Machine Learning', 'Computer Vision', 'Python'],
    icon: '🤟',
  },
  {
    title: 'Car Rental System',
    description:
      'A fully functional car rental management system built in C++ featuring OOP principles, file handling, and a console-based UI for managing vehicles and bookings.',
    tags: ['C++', 'OOP', 'File Handling'],
    icon: '🚗',
  },
  {
    title: 'Website Clone',
    description:
      'A pixel-perfect website clone built using HTML, CSS, and PHP — demonstrating front-end fidelity, layout techniques, and server-side rendering.',
    tags: ['HTML', 'CSS', 'PHP'],
    icon: '🌐',
  },
  {
    title: 'EVS Clone Website',
    description:
      'Full-stack recreation of the EVS corporate website using the MERN Stack, with dynamic content rendering, REST APIs, and a responsive modern design.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    icon: '💼',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <p className="section-tag">What I've Built</p>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-icon">{p.icon}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
