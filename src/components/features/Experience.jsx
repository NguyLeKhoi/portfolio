const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Student",
      company: "FPT University",
      period: "2023 - 2026",
      description: "Currently pursuing a degree in Software Engineering with focus on modern web development technologies and best practices.",
      icon: "🎓"
    },
    {
      title: "Intern",
      company: "FPT Software Academy",
      period: "08/2024 - 12/2024",
      description: "Gaining hands-on experience in software development, working on real projects and learning industry best practices.",
      icon: "💼"
    }
  ]

  const certifications = [
    {
      title: "Basics of Web Development & Coding",
      platform: "Coursera",
      url: "https://coursera.org/share/21f60e8499376ba991e52120fbf6037a",
    },
    {
      title: "Software Development Lifecycle",
      platform: "Coursera", 
      url: "https://coursera.org/share/33e3c62fbe4a7933d8b5b0099955e30f",
    }
  ]

  const styles = {
    experience: {
      position: 'relative',
      overflow: 'hidden',
      padding: '0',
      marginTop: '-1px',
      '& *': {
        borderRadius: '0 !important'
      }
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '40px',
      padding: '40px 0'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      margin: '0 0 15px 0',
      color: '#000000',
      fontWeight: 800,
      letterSpacing: '2px'
    },
    sectionLine: {
      width: '60px',
      height: '4px',
      background: '#000000',
      margin: '0 auto',
      borderRadius: '2px'
    },

    container: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    content: {
      display: 'grid',
      gap: '30px',
      marginTop: '20px'
    },
    section: {
      marginBottom: '20px'
    },
    subtitle: {
      fontSize: '1.4rem',
      margin: '0 0 30px 0',
      color: '#000000',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      fontWeight: 700
    },
    timeline: {
      position: 'relative',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px 0',
      '&::before': {
        content: '""',
        position: 'absolute',
        width: '2px',
        background: '#000000',
        top: '0',
        bottom: '0',
        left: '50%',
        marginLeft: '-1px',
        borderRadius: '0'
      }
    },
    timelineItem: {
      position: 'relative',
      padding: '20px 25px',
      marginBottom: '20px',
      background: 'transparent',
      borderRadius: '0',
      border: '1px solid #000000',
      transition: 'all 0.3s ease'
    },
    timelineIcon: {
      position: 'absolute',
      left: '-35px',
      top: '20px',
      width: '30px',
      height: '30px',
      borderRadius: '0',
      background: 'transparent',
      border: '1px solid #000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      zIndex: 1,
      color: '#000000'
    },
    timelineTitle: {
      fontSize: '1.1rem',
      margin: '0 0 8px 0',
      color: '#000000',
      fontWeight: 600,
      letterSpacing: '0.5px'
    },
    timelineCompany: {
      fontSize: '1rem',
      color: '#000000',
      margin: '0 0 5px 0',
      fontWeight: 500
    },
    timelinePeriod: {
      fontSize: '0.9rem',
      color: '#666666',
      margin: '0 0 10px 0'
    },
    timelineDesc: {
      fontSize: '0.95rem',
      color: '#000000',
      margin: 0,
      lineHeight: 1.6
    },
    certsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '20px',
      marginTop: '20px'
    },
    certCard: {
      background: 'transparent',
      padding: '20px',
      borderRadius: '0',
      transition: 'all 0.3s ease',
      border: '1px solid #000000'
    },
    certIcon: {
      fontSize: '2rem',
      marginBottom: '12px',
      color: '#000000'
    },
    certTitle: {
      fontSize: '1rem',
      margin: '0 0 8px 0',
      color: '#000000',
      fontWeight: 600
    },
    certPlatform: {
      fontSize: '0.9rem',
      color: '#666666',
      margin: '0 0 15px 0'
    },
    btnSecondary: {
      display: 'inline-block',
      padding: '10px 20px',
      background: 'transparent',
      color: '#000000',
      borderRadius: '0',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      border: '1px solid #000000',
      fontWeight: 500
    }
  };

  return (
    <section id="experience" style={styles.experience}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Experience & Education</h2>
        </div>
        <div style={styles.content}>
          <div style={styles.section}>
            <h3 style={styles.subtitle}>Education & Work Experience</h3>
            <div style={styles.timeline}>
              <div style={styles.timelineBefore} />
              {experiences.map((exp, index) => (
                <div key={index} style={styles.timelineItem}>
                  <div style={styles.timelineIcon}>
                    {exp.icon}
                  </div>
                  <div>
                    <h4 style={styles.timelineTitle}>{exp.title}</h4>
                    <p style={styles.timelineCompany}>{exp.company}</p>
                    <p style={styles.timelinePeriod}>{exp.period}</p>
                    <p style={styles.timelineDesc}>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.section}>
            <h3 style={styles.subtitle}>Certifications & Achievements</h3>
            <div style={styles.certsGrid}>
              {certifications.map((cert, index) => (
                <div key={index} style={styles.certCard}>
                  <div style={styles.certIcon}>
                    {cert.icon}
                  </div>
                  <h4 style={styles.certTitle}>{cert.title}</h4>
                  <p style={styles.certPlatform}>{cert.platform}</p>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.btnSecondary}
                  >
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
