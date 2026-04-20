import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact">
      <div className="section-inner">
        <p className="section-tag">Let's Talk</p>
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">
              I'm open to full-time roles, freelance work, and interesting
              collaborations. Drop me a message!
            </p>
            <div className="contact-links">
              <a className="contact-link" href="mailto:arsalannn890@gmail.com">
                <span className="contact-link-icon">✉️</span>
                arsalannn890@gmail.com
              </a>
              <a
                className="contact-link"
                href="https://linkedin.com/in/arsalan-askari"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-icon">🔗</span>
                linkedin.com/in/arsalan-askari
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="form-success">
                <span>🎉</span>
                <p>Thanks! I'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
