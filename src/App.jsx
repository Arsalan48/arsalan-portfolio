import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Chatbot from './components/Chatbot'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Blog from './components/Blog'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      <Navbar page={page} setPage={setPage} />
      {page === 'blog' ? (
        <Blog />
      ) : (
        <>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </>
      )}
      <Footer />
      <Chatbot />
    </>
  )
}
