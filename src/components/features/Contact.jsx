import { motion } from 'framer-motion'

const Contact = () => {
  const contactInfo = [
    {
      type: "Phone",
      value: "0858007213",
      icon: "📞",
      link: "tel:0858007213"
    },
    {
      type: "Email",
      value: "nguyenlekhoi2003215@gmail.com",
      icon: "✉️",
      link: "mailto:nguyenlekhoi2003215@gmail.com"
    },
    {
      type: "GitHub",
      value: "github.com/NguyLekhoi",
      icon: "🐙",
      link: "https://github.com/NguyLekhoi"
    },
    {
      type: "Address",
      value: "928 Tạ Quang Bửu, Phường Bình Đông, Quận 8, Thành phố Hồ Chí Minh",
      icon: "📍",
      link: null
    }
  ]

  const languages = [
    { name: "Vietnamese", level: "Native" },
    { name: "English", }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const formVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.99]
      }
    }
  }

  const inputVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section className="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="contact-subtitle">Contact Information</h3>
            <motion.div 
              className="contact-list"
              variants={containerVariants}
            >
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={info.type}
                  className="contact-item"
                  variants={itemVariants}
                  whileHover={{ 
                    x: 10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <motion.div 
                    className="contact-icon"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 5,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                  >
                    {info.icon}
                  </motion.div>
                  <div className="contact-details">
                    <h4>{info.type}</h4>
                    {info.link ? (
                      <motion.a 
                        href={info.link} 
                        className="contact-link"
                        whileHover={{ 
                          color: "var(--primary-color)",
                          x: 5,
                          transition: { type: "spring", stiffness: 300 }
                        }}
                      >
                        {info.value}
                      </motion.a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="languages-section">
              <h3 className="contact-subtitle">Languages</h3>
              <motion.div 
                className="languages-list"
                variants={containerVariants}
              >
                {languages.map((lang, index) => (
                  <motion.div 
                    key={lang.name}
                    className="language-item"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 4px 12px rgba(0, 212, 255, 0.2)",
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <span className="language-name">{lang.name}</span>
                    <span className="language-level">{lang.level}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="contact-subtitle">Send Message</h3>
            <motion.form 
              className="form"
              variants={containerVariants}
            >
              <motion.div 
                className="form-group"
                variants={inputVariants}
              >
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="form-input"
                  required
                />
              </motion.div>
              <motion.div 
                className="form-group"
                variants={inputVariants}
              >
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="form-input"
                  required
                />
              </motion.div>
              <motion.div 
                className="form-group"
                variants={inputVariants}
              >
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="form-input"
                  required
                />
              </motion.div>
              <motion.div 
                className="form-group"
                variants={inputVariants}
              >
                <textarea 
                  placeholder="Your Message" 
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </motion.div>
              <motion.button 
                type="submit" 
                className="btn btn-primary"
                variants={inputVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 15px 35px rgba(0, 212, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Send Message
              </motion.button>
              <motion.button 
                type="button" 
                className="btn btn-secondary"
                style={{ marginTop: '16px' }}
                variants={inputVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)"
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
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
