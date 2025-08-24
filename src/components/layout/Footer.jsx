import { motion } from 'framer-motion'

const Footer = () => {
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
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="footer-brand"
            variants={itemVariants}
          >
            <motion.div 
              className="footer-logo"
              whileHover={{ 
                scale: 1.1,
                color: "var(--primary-color)",
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              NK
            </motion.div>
            <p className="footer-tagline">
              Frontend Developer passionate about creating beautiful digital experiences
            </p>
          </motion.div>

          <motion.div 
            className="footer-links"
            variants={itemVariants}
          >
            <h4>Quick Links</h4>
            <ul>
              <li>
                <motion.a 
                  href="#" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    document.getElementById('home').scrollIntoView({ behavior: 'smooth', block: 'start' }) 
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
                  onClick={(e) => { 
                    e.preventDefault(); 
                    document.getElementById('about').scrollIntoView({ behavior: 'smooth', block: 'start' }) 
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
                  onClick={(e) => { 
                    e.preventDefault(); 
                    document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' }) 
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
                  onClick={(e) => { 
                    e.preventDefault(); 
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' }) 
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
            className="footer-social"
            variants={itemVariants}
          >
            <h4>Connect</h4>
            <div className="social-links">
              <motion.a 
                href="https://github.com/NguyLekhoi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
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
                className="social-link"
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
          className="footer-bottom"
          variants={bottomVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="footer-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.99] }}
          ></motion.div>
          <p className="footer-copyright">
            © 2024 Nguyễn Lê Khôi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
