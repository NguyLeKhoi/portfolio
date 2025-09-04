import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import Hero from './components/features/hero/Hero'
import About from './components/features/about/About'
import Skills from './components/features/skills/Skills'
import Projects from './components/features/projects/Projects'
import Experience from './components/features/experience/Experience'
import Footer from './components/layout/footer/Footer'
import PillNav from './components/animations/pill-nav/PillNav'

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      
      // Show/hide nav based on scroll position
      if (window.scrollY > 100) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }

      // Determine active section
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Hero', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
  ];

  return (
    <div className="App">
      <PillNav
        items={navItems}
        activeHref={activeSection}
        isVisible={isNavVisible}
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
      
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
        
      </main>

      <Footer />
    </div>
  )
}

export default App
