import { motion } from 'framer-motion';
import Stack from '../../animations/stack/Stack';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import './About.css';

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
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
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
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
              I am passionate about building web applications.
              My goal is to become a skilled developer who can build modern, efficient, and beautiful
              digital experiences.
            </motion.p>

            <motion.div
              className="about-socials"
              variants={containerVariants}
            >
              <motion.a
                href="https://www.facebook.com/khoii.nguyen.76049/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                variants={highlightVariants}
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
              >
                <FaFacebook className="social-icon" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/kl0ii.n/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                variants={highlightVariants}
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
              >
                <FaInstagram className="social-icon" />
              </motion.a>

              <motion.a
                href="https://github.com/NguyLekhoi"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                variants={highlightVariants}
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
              >
                <FaGithub className="social-icon" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-image"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="stack-wrapper">
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={true}
                cardDimensions={{ width: 340, height: 460 }}
              />
            </div>
            <motion.a
              href="/cv.pdf"
              download
              className="cv-button"
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Download my CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
