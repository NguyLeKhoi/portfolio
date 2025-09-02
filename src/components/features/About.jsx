import { motion } from 'framer-motion';
import Stack from '../ui/Stack';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

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

  const styles = {
    section: {
      padding: '60px 0',
      background: 'var(--background-color)'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 40px'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '50px'
    },
    sectionTitle: {
      fontSize: '3rem',
      margin: '0 0 15px 0',
      color: 'var(--text-primary)',
      fontWeight: 'bold'
    },
    sectionLine: {
      width: '80px',
      height: '5px',
      background: 'var(--primary-color)',
      margin: '0 auto',
      borderRadius: '3px'
    },
    aboutContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'center'
    },
    aboutText: {
      display: 'flex',
      flexDirection: 'column',
      gap: '25px'
    },
    aboutDescription: {
      fontSize: '1.2rem',
      lineHeight: 1.8,
      color: 'var(--text-secondary)',
      margin: 0
    },
    aboutSocials: {
      display: 'flex',
      justifyContent: 'flex-start',
      gap: '30px',
      marginTop: '40px'
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      color: '#000000',
      textDecoration: 'none',
      transition: 'all 0.3s ease'
    },
    socialIcon: {
      fontSize: '2.2rem'
    },
    aboutImage: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    stackWrapper: {
      width: '100%',
      maxWidth: '340px',
      margin: '0 auto'
    },
  };

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          style={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }}
        >
          <h2 style={styles.sectionTitle}>About Me</h2>
          <div style={styles.sectionLine}></div>
        </motion.div>

        <div style={styles.aboutContent}>
          <motion.div
            style={styles.aboutText}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              style={styles.aboutDescription}
              variants={itemVariants}
            >
              I am a freshman at FPT University, currently majoring in Software Engineering.
              During my studies, I have access to and practice the necessary skills through projects,
              therefore acquiring important skills in the field of information technology.
            </motion.p>

            <motion.p
              style={styles.aboutDescription}
              variants={itemVariants}
            >
              I am passionate about building web applications.
              My goal is to become a skilled developer who can build modern, efficient, and beautiful
              digital experiences.
            </motion.p>

            <motion.div
              style={styles.aboutSocials}
              variants={containerVariants}
            >
              <motion.a
                href="https://www.facebook.com/khoii.nguyen.76049/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                variants={highlightVariants}
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
              >
                <FaFacebook style={styles.socialIcon} />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/kl0ii.n/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                variants={highlightVariants}
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
              >
                <FaInstagram style={styles.socialIcon} />
              </motion.a>

              <motion.a
                href="https://github.com/NguyLekhoi"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                variants={highlightVariants}
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
              >
                <FaGithub style={styles.socialIcon} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            style={styles.aboutImage}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div style={styles.stackWrapper}>
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={true}
                cardDimensions={{ width: 340, height: 460 }}
              />
            </div>
            <motion.button
              style={{
                marginTop: '20px',
                width: '340px',
                background: '#ffffff',
                color: '#000000',
                border: '1px solid #000000',
                padding: '12px 24px',
                borderRadius: '0',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Download my CV
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
