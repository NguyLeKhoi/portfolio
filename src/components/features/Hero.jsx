import { motion } from 'framer-motion';
import Dither from '../backgrounds/dither/Dither';

const Hero = () => {
  // Styles
  const styles = {
    hero: {
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      padding: '0',
      margin: '0',
      background: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& *': {
        borderRadius: '0 !important'
      }
    },
    ditherContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0
    },
    heroContainer: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '40px',
      width: '100%'
    },
    heroContent: {
      flex: '1 1 500px',
      maxWidth: '600px',
      textAlign: 'center'
    },
    heroBadge: {
      display: 'inline-block',
      background: '#000000',
      color: '#ffffff',
      padding: '8px 16px',
      borderRadius: '0',
      fontSize: '0.9rem',
      fontWeight: 600,
      marginBottom: '20px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 800,
      margin: '0 0 15px 0',
      color: '#ffffff',
      letterSpacing: '2px'
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      color: '#ffffff',
      margin: '0 0 30px 0',
      maxWidth: '500px',
      lineHeight: 1.6,
      fontWeight: 500
    },
    heroButtons: {
      display: 'flex',
      gap: '15px',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    heroImage: {
      flex: '1 1 400px',
      maxWidth: '500px',
      position: 'relative',
      margin: '0 auto',
      borderRadius: '0'
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      paddingBottom: '100%',
      borderRadius: '0',
      overflow: 'hidden'
    },
    imagePlaceholder: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      height: '90%',
      borderRadius: '15px',
      overflow: 'hidden',
      zIndex: 1
    },
    imageFrame: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: '2px solid #ffffff',
      borderRadius: '0',
      transform: 'rotate(5deg)',
      zIndex: 0
    }
  };
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
    <section id="home" style={styles.hero}>
      <div style={styles.ditherContainer}>
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
      <div style={styles.heroContainer}>
        <motion.div 
          style={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            style={styles.heroBadge}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(0, 212, 255, 0.3)"
            }}
          >
            <span>Frontend Developer</span>
          </motion.div>
          
          <motion.h1 
            style={styles.heroTitle}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 40px rgba(132, 0, 255, 0.5)"
            }}
          >
            NGUYỄN LÊ KHÔI
          </motion.h1>
          
          <motion.p 
            style={styles.heroSubtitle}
            variants={itemVariants}
          >
            Software Engineering Student at FPT University
          </motion.p>
          
          <motion.div 
            style={styles.heroButtons}
            variants={itemVariants}
          >
            <motion.button 
              style={{
                padding: '12px 30px',
                borderRadius: '0',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#000000',
                color: '#ffffff'
              }}
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
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              View Projects
            </motion.button>
            <motion.button 
              style={{
                padding: '12px 30px',
                borderRadius: '0',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#ffffff',
                color: '#000000',
                border: '1px solid #000000'
              }}
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
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          style={styles.heroImage}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            style={styles.imageContainer}
            animate={floatingAnimation}
          >
            <div style={styles.imagePlaceholder}>
              <img 
                src="/picture/z6938973274681_669f5e7ce5cc4f5f8cf8383f91c870f7.jpg" 
                alt="Nguyễn Lê Khôi"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center'
                }}
              />
            </div>
            <div style={styles.imageFrame}></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

