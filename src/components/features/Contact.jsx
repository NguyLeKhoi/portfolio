import { motion } from 'framer-motion';

const Contact = () => {
  // Styles
  const styles = {
    contact: {
      padding: '80px 0',
      background: 'var(--background-color)',
      position: 'relative',
      overflow: 'hidden'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      position: 'relative',
      zIndex: 1
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '60px'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 700,
      margin: '0 0 15px 0',
      color: 'var(--text-primary)',
      position: 'relative',
      display: 'inline-block'
    },
    sectionLine: {
      height: '4px',
      width: '80px',
      background: 'var(--primary-color)',
      margin: '0 auto',
      borderRadius: '2px'
    },
    contactContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      '@media (max-width: 992px)': {
        gridTemplateColumns: '1fr'
      }
    },
    contactInfo: {
      padding: '30px',
      borderRadius: '0',
      background: 'var(--surface-color)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
    },
    contactSubtitle: {
      fontSize: '1.5rem',
      margin: '0 0 20px 0',
      color: 'var(--text-primary)',
      position: 'relative',
      paddingLeft: '15px'
    },
    contactList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      marginBottom: '40px'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      padding: '15px',
      borderRadius: '0',
      background: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid var(--border-color)',
      transition: 'all 0.3s ease'
    },
    contactIcon: {
      fontSize: '1.5rem',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0, 212, 255, 0.1)',
      borderRadius: '50%',
      flexShrink: 0
    },
    contactDetails: {
      flex: 1
    },
    contactLink: {
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      display: 'block',
      '&:hover': {
        color: 'var(--primary-color)'
      }
    },
    languagesSection: {
      marginTop: '40px'
    },
    languagesList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px'
    },
    languageItem: {
      padding: '10px 20px',
      background: 'var(--surface-color)',
      borderRadius: '0',
      border: '1px solid var(--border-color)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease'
    },
    languageName: {
      fontWeight: 500,
      color: 'var(--text-primary)'
    },
    languageLevel: {
      color: 'var(--text-secondary)',
      fontSize: '0.9rem'
    },
    contactForm: {
      padding: '30px',
      borderRadius: '0',
      background: 'var(--surface-color)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    formGroup: {
      marginBottom: '15px'
    },
    formInput: {
      width: '100%',
      padding: '12px 15px',
      borderRadius: '0',
      border: '1px solid var(--border-color)',
      background: 'var(--background-color)',
      color: 'var(--text-primary)',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      '&:focus': {
        borderColor: 'var(--primary-color)',
        boxShadow: '0 0 0 2px rgba(0, 212, 255, 0.2)',
        outline: 'none'
      },
      '&::placeholder': {
        color: 'var(--text-muted)'
      }
    },
    textarea: {
      minHeight: '150px',
      resize: 'vertical'
    },
    '@media (max-width: 768px)': {
      contactContent: {
        gridTemplateColumns: '1fr'
      },
      contactItem: {
        flexDirection: 'column',
        textAlign: 'center'
      },
      contactIcon: {
        margin: '0 auto'
      }
    }
  };
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
    <section id="contact" style={styles.contact}>
      <div style={styles.container}>
        <motion.div 
          style={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }}
        >
          <h2 style={styles.sectionTitle}>Get In Touch</h2>
          <div style={styles.sectionLine}></div>
        </motion.div>

        <div style={styles.contactContent}>
          <motion.div 
            style={styles.contactInfo}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 style={styles.contactSubtitle}>Contact Information</h3>
            <motion.div 
              style={styles.contactList}
              variants={containerVariants}
            >
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={info.type}
                  style={styles.contactItem}
                  variants={itemVariants}
                  whileHover={{ 
                    x: 10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <motion.div 
                    style={styles.contactIcon}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 5,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                  >
                    {info.icon}
                  </motion.div>
                  <div style={styles.contactDetails}>
                    <h4 style={{ margin: '0 0 5px 0', color: 'var(--text-primary)' }}>{info.type}</h4>
                    {info.link ? (
                      <motion.a 
                        href={info.link} 
                        style={styles.contactLink}
                        whileHover={{ 
                          color: "var(--primary-color)",
                          x: 5,
                          transition: { type: "spring", stiffness: 300 }
                        }}
                      >
                        {info.value}
                      </motion.a>
                    ) : (
                      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div style={styles.languagesSection}>
              <h3 style={styles.contactSubtitle}>Languages</h3>
              <motion.div 
                style={styles.languagesList}
                variants={containerVariants}
              >
                {languages.map((lang, index) => (
                  <motion.div 
                    key={lang.name}
                    style={styles.languageItem}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 4px 12px rgba(0, 212, 255, 0.2)",
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <span style={styles.languageName}>{lang.name}</span>
                    {lang.level && <span style={styles.languageLevel}>{lang.level}</span>}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            style={styles.contactForm}
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 style={styles.contactSubtitle}>Send Message</h3>
            <motion.form 
              style={styles.form}
              variants={containerVariants}
            >
              <motion.div 
                style={styles.formGroup}
                variants={inputVariants}
              >
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  style={styles.formInput}
                  required
                />
              </motion.div>
              <motion.div 
                style={styles.formGroup}
                variants={inputVariants}
              >
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  style={styles.formInput}
                  required
                />
              </motion.div>
              <motion.div 
                style={styles.formGroup}
                variants={inputVariants}
              >
                <input 
                  type="text" 
                  placeholder="Subject" 
                  style={styles.formInput}
                  required
                />
              </motion.div>
              <motion.div 
                style={styles.formGroup}
                variants={inputVariants}
              >
                <textarea 
                  placeholder="Your Message" 
                  style={{ ...styles.formInput, ...styles.textarea }}
                  required
                ></textarea>
              </motion.div>
              <motion.div 
                style={styles.formGroup}
                variants={inputVariants}
              >
                <motion.button 
                  type="submit" 
                  style={{
                    background: '#ffffff',
                    color: '#000000',
                    border: '1px solid #000000',
                    padding: '12px 30px',
                    borderRadius: '0',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
                    },
                    '&:active': {
                      transform: 'translateY(0)'
                    }
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
