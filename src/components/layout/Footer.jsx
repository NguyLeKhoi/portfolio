import { motion } from 'framer-motion';

const Footer = () => {
  // Styles
  const styles = {
    footer: {
      backgroundColor: 'var(--surface-color)',
      padding: '60px 0 20px',
      color: 'var(--text-secondary)',
      position: 'relative',
      overflow: 'hidden'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    content: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      marginBottom: '40px'
    },
    brand: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    },
    logo: {
      fontSize: '2rem',
      fontWeight: 700,
      color: 'var(--text-primary)',
      display: 'inline-block',
      cursor: 'pointer',
      width: 'fit-content'
    },
    tagline: {
      fontSize: '0.95rem',
      lineHeight: 1.6,
      margin: 0
    },
    links: {
      h4: {
        color: 'var(--text-primary)',
        fontSize: '1.1rem',
        margin: '0 0 15px 0'
      },
      ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      },
      a: {
        color: 'var(--text-secondary)',
        textDecoration: 'none',
        fontSize: '0.95rem',
        display: 'inline-block',
        cursor: 'pointer'
      }
    },
    social: {
      h4: {
        color: 'var(--text-primary)',
        fontSize: '1.1rem',
        margin: '0 0 15px 0'
      },
      links: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      },
      link: {
        color: 'var(--text-secondary)',
        textDecoration: 'none',
        fontSize: '0.95rem',
        display: 'inline-block',
        cursor: 'pointer',
        width: 'fit-content'
      }
    },
    bottom: {
      paddingTop: '30px',
      textAlign: 'center',
      position: 'relative'
    },
    line: {
      height: '1px',
      width: '100%',
      background: 'var(--border-color)',
      marginBottom: '20px',
      transformOrigin: 'left center'
    },
    copyright: {
      fontSize: '0.85rem',
      margin: 0,
      color: 'var(--text-muted)'
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.99]
      }
    }
  }

  const bottomVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <motion.div 
          style={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            style={styles.brand}
            variants={itemVariants}
          >
            <motion.div 
              style={styles.logo}
              whileHover={{ 
                scale: 1.1,
                color: "var(--primary-color)",
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              NK
            </motion.div>
            <p style={styles.tagline}>
              Frontend Developer passionate about creating beautiful digital experiences
            </p>
          </motion.div>

          <motion.div 
            style={styles.links}
            variants={itemVariants}
          >
            <h4 style={styles.links.h4}>Quick Links</h4>
            <ul style={styles.links.ul}>
              <li>
                <motion.a 
                  href="#" 
                  style={styles.links.a}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  whileHover={{ 
                    color: "var(--primary-color)",
                    x: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  style={styles.links.a}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  whileHover={{ 
                    color: "var(--primary-color)",
                    x: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  style={styles.links.a}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  whileHover={{ 
                    color: "var(--primary-color)",
                    x: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  Projects
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  style={styles.links.a}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  whileHover={{ 
                    color: "var(--primary-color)",
                    x: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            style={styles.social}
            variants={itemVariants}
          >
            <h4 style={styles.social.h4}>Connect</h4>
            <div style={styles.social.links}>
              <motion.a 
                href="https://github.com/NguyLekhoi" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.social.link}
                whileHover={{ 
                  color: "var(--primary-color)",
                  y: -2,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                GitHub
              </motion.a>
              <motion.a 
                href="mailto:nguyenlekhoi2003215@gmail.com"
                style={styles.social.link}
                whileHover={{ 
                  color: "var(--primary-color)",
                  y: -2,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                Email
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          style={styles.bottom}
          variants={bottomVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            style={styles.line}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.99] }}
          ></motion.div>
          <p style={styles.copyright}>
            © 2024 Nguyễn Lê Khôi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
