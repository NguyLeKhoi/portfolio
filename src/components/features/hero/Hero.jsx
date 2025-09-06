import { motion } from 'framer-motion';
import Dither from '../../backgrounds/dither/Dither';
import './Hero.css';

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
    <section id="home" className="hero" data-speed="0.12">
      <div className="dither-container">
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
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        > 
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 40px rgba(132, 0, 255, 0.5)"
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
              className="hero-button primary"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                background: '#ffffff',
                color: '#000000',
                border: '1px solid #000000'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              onClick={() => {
                const element = document.getElementById('projects');
                if (!element) return;
                const lenis = window.__lenis;
                if (lenis) {
                  lenis.scrollTo(element, { duration: 1.3, easing: (t) => 1 - Math.pow(1 - t, 2) });
                } else {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              View Projects
            </motion.button>
            <motion.button 
              className="hero-button secondary"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                background: '#000000',
                color: '#ffffff',
                border: '1px solid #000000'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              onClick={() => {
                const element = document.querySelector('footer.footer');
                if (!element) return;
                const lenis = window.__lenis;
                if (lenis) {
                  lenis.scrollTo(element, { duration: 1.3, easing: (t) => 1 - Math.pow(1 - t, 2) });
                } else {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          <div className="image-container">
            <motion.div 
              className="image-placeholder floating"
              animate={floatingAnimation}
            >
              <div className="image-placeholder-inner">
                <img 
                  src="/picture/z6938973274681_669f5e7ce5cc4f5f8cf8383f91c870f7.jpg" 
                  alt="Nguyễn Lê Khôi"
                />
              </div>
            </motion.div>
            <div className="image-frame"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

