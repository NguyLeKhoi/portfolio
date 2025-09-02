import React, { useState, useEffect } from 'react';

// Helper to check screen size
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

const navLinks = [
  { name: 'Home', to: '#home' },
  { name: 'About', to: '#about' },
  { name: 'Skills', to: '#skills' },
  { name: 'Projects', to: '#projects' },
  { name: 'Experience', to: '#experience' },
  { name: 'Contact', to: '#contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const styles = {
    header: {
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      padding: '16px 0',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      ...(scrolled && {
        background: 'rgba(10, 10, 10, 0.85)',
        backdropFilter: 'blur(10px)',
        padding: '12px 0',
        borderBottom: '1px solid #333333',
      })
    },
    headerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      ...(isMobile && { justifyContent: 'space-between' })
    },
    logo: {
      fontSize: '1.5rem', fontWeight: 700,
      color: '#ffffff', textDecoration: 'none', zIndex: 10,
    },
    logoAccent: { color: '#00d4ff' },
    nav: {
      display: 'flex', gap: '8px',
      ...(isMobile && {
        position: 'fixed', top: 0, right: 0,
        width: '75%', height: '100vh',
        background: '#1a1a1a',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: '24px', paddingTop: '60px',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out',
        boxShadow: '-5px 0 15px rgba(0,0,0,0.2)',
      })
    },
    navItem: {
      background: 'none', border: 'none',
      padding: '12px 20px', fontSize: '1rem', fontWeight: 500,
      color: '#cccccc', cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      borderRadius: 0,
      ...(isMobile && { fontSize: '1.25rem' })
    },
    bar: {
      display: 'block', width: '100%', height: '3px',
      background: '#ffffff', borderRadius: '2px',
      transition: 'all 0.3s ease-in-out',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        <nav style={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.to} href={link.to} style={styles.navItem} onClick={closeMenu}>
              {link.name}
            </a>
          ))}
        </nav>

        <button 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          style={{
            display: isMobile ? 'flex' : 'none',
            flexDirection: 'column',
            justifyContent: 'space-around',
            width: '28px',
            height: '24px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            zIndex: 10
          }}
        >
          <span style={{
            ...styles.bar,
            transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none'
          }}></span>
          <span style={{
            ...styles.bar,
            opacity: menuOpen ? 0 : 1
          }}></span>
          <span style={{
            ...styles.bar,
            transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none'
          }}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
