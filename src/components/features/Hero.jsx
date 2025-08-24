import { motion } from 'framer-motion'
import Dither from '../backgrounds/dither/Dither';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.99]
      }
    }
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
      <div className="hero-container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="hero-badge"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(0, 212, 255, 0.3)"
            }}
          >
            <span>Frontend Developer</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 20px rgba(0, 212, 255, 0.5)"
            }}
          >
            NGUYỄN LÊ KHÔI
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            variants={itemVariants}
          >
            Software Engineering Student at FPT University
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            variants={itemVariants}
          >
            <motion.button 
              className="btn btn-primary"
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
              View Projects
            </motion.button>
            <motion.button 
              className="btn btn-secondary"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="image-container"
            animate={floatingAnimation}
          >
            <div className="image-placeholder">
              <span>👨‍💻</span>
            </div>
            <div className="image-frame"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

