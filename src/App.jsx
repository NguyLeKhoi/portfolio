import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import Hero from './components/features/Hero'
import About from './components/features/About'
import Skills from './components/features/Skills'
import Projects from './components/features/Projects'
import Experience from './components/features/Experience'
import Contact from './components/features/Contact'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <Hero />
      
      <main>
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
