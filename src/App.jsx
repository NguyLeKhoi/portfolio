import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import Hero from './components/features/hero/Hero';
import About from './components/features/about/About';
import Skills from './components/features/skills/Skills';
import Projects from './components/features/projects/Projects';
import Experience from './components/features/experience/Experience';
import Footer from './components/layout/footer/Footer';
import PillNav from './components/animations/pill-nav/PillNav';
import { Routes, Route } from 'react-router-dom';
import ProjectDetail from './components/features/projects/ProjectDetail';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    // Register GSAP plugin
    if (!gsap.core.globals().ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.06,
      wheelMultiplier: 0.8,
      smoothTouch: true
    });

    // Expose for nav clicks
    window.__lenis = lenis;

    const onLenisScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on('scroll', onLenisScroll);

    // Drive Lenis with GSAP ticker
    const raf = () => {
      lenis.raf(performance.now());
    };
    gsap.ticker.add(raf);

    // Section reveal + parallax inspired by Locomotive Scroll examples
    const reveals = gsap.utils.toArray('.reveal').map((el) =>
      gsap.from(el, {
        autoAlpha: 0,
        y: 24,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top bottom', toggleActions: 'play none none reverse' },
      })
    );

    // Parallax via data-speed (positive moves slower, negative opposite)
    const parallaxes = gsap.utils.toArray('[data-speed]');
    parallaxes.forEach((el) => {
      const speed = parseFloat(el.getAttribute('data-speed')) || 0.2;
      gsap.to(el, {
        yPercent: speed * -30,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    });

    // Lerp-like stagger for elements with data-lerp
    const lerps = gsap.utils.toArray('[data-lerp]');
    lerps.forEach((group) => {
      const items = group.querySelectorAll(':scope > *');
      gsap.from(items, {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: { trigger: group, start: 'top 85%', toggleActions: 'play none none reverse' },
      });
    });

    // Fixed/pin sections (data-pin)
    const pins = gsap.utils.toArray('[data-pin]');
    pins.forEach((el) => {
      ScrollTrigger.create({ trigger: el, start: 'top top+=60', end: 'bottom top', pin: true, pinSpacing: true });
    });

    // ensure initial measurements and activation
    ScrollTrigger.refresh();

    const handleScroll = () => {
      // Show/hide nav based on scroll position
      setIsNavVisible(window.scrollY > 100);
      
      // Update active section
      const sections = ['about', 'skills', 'projects', 'experience'];
      for (const section of sections) {
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.off('scroll', onLenisScroll);
      gsap.ticker.remove(raf);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  const navItems = [
    { label: 'Hero', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
  ];

  // Initialize ScrollSmoother on component mount
 
  return (
    <div className="App">
      <div>
          <PillNav items={navItems} isVisible={isNavVisible} activeHref={activeSection} />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <div id="about" className="section">
                      <About />
                    </div>
                    <div id="skills" className="section">
                      <Skills />
                    </div>
                    <div id="projects" className="section">
                      <Projects />
                    </div>
                    <div id="experience" className="section">
                      <Experience />
                    </div>
                  </>
                }
              />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
            </Routes>
          </main>
          <Footer />
      </div>
    </div>
  )
}

export default App
