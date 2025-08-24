import { motion } from 'framer-motion'

const About = () => {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.99]
      }
    }
  }

  const imageVariants = {
    hidden: { x: 50, opacity: 0, rotate: 5 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.99]
      }
    }
  }

  const highlightVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section className="about">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              className="about-description"
              variants={itemVariants}
            >
              I am a freshman at FPT University, currently majoring in Software Engineering. 
              During my studies, I have access to and practice the necessary skills through projects, 
              therefore acquiring important skills in the field of information technology.
            </motion.p>
            
            <motion.p 
              className="about-description"
              variants={itemVariants}
            >
              I am passer-friendly web applications. 
              My goal is to become a skilled developer who can build modern, efficient, and beautiful 
              digital experiences.
            </motion.p>

            <motion.div 
              className="about-highlights"
              variants={containerVariants}
            >
              <motion.div 
                className="highlight-item"
                variants={highlightVariants}
                whileHover={{ 
                  scale: 1.02, 
                  x: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <span className="highlight-icon">🎓</span>
                <span>Software Engineering Student</span>
              </motion.div>
              <motion.div 
                className="highlight-item"
                variants={highlightVariants}
                whileHover={{ 
                  scale: 1.02, 
                  x: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <span className="highlight-icon">💼</span>
                <span>FPT Software Academy Intern</span>
              </motion.div>
              <motion.div 
                className="highlight-item"
                variants={highlightVariants}
                whileHover={{ 
                  scale: 1.02, 
                  x: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <span className="highlight-icon">🌍</span>
                <span>IELTS 6.0 - English Proficiency</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="about-image"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="image-container">
              <div className="image-placeholder">
                <span>📚</span>
              </div>
              <div className="image-frame"></div>
            </div>
            <motion.button 
              className="btn btn-primary"
              style={{ marginTop: '32px', width: '100%' }}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 10px 30px rgba(0, 212, 255, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              onClick={() => {
                const element = document.getElementById('projects')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              View My Projects
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
