import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Student",
      company: "FPT University",
      period: "2023 - 2026",
      description: "Currently pursuing a degree in Software Engineering with focus on modern web development technologies and best practices.",
      icon: "🎓",
      tags: ["Web Development", "Algorithms", "Data Structures", "Software Engineering"]
    },
    {
      title: "Intern",
      company: "FPT Software Academy",
      period: "08/2024 - 12/2024",
      description: "Gaining hands-on experience in software development, working on real projects and learning industry best practices.",
      icon: "💼",
      tags: ["Frontend Development", "Team Collaboration", "Agile Methodologies"]
    }
  ]

  const certifications = [
    {
      title: "Web Development & Coding",
      platform: "Coursera",
      url: "https://coursera.org/share/21f60e8499376ba991e52120fbf6037a",
      icon: "🌐"
    },
    {
      title: "Software Development Lifecycle",
      platform: "Coursera", 
      url: "https://coursera.org/share/33e3c62fbe4a7933d8b5b0099955e30f",
      icon: "🔄"
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="experience-content">
          <motion.div 
            className="timeline-section"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            <h3 className="section-subtitle">My Journey</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  variants={item}
                >
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div className="timeline-icon">
                        {exp.icon}
                      </div>
                      <div className="timeline-period">{exp.period}</div>
                    </div>
                    <h4 className="timeline-title">{exp.title}</h4>
                    <h5 className="timeline-company">{exp.company}</h5>
                    <p className="timeline-description">{exp.description}</p>
                    {exp.tags && (
                      <div className="timeline-tags">
                        {exp.tags.map((tag, i) => (
                          <span key={i} className="tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="certs-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="section-subtitle">Certifications</h3>
            <div className="certs-grid">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="cert-card"
                  variants={item}
                >
                  <div className="cert-icon">{cert.icon}</div>
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-platform">{cert.platform}</p>
                  <motion.a 
                    href={cert.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Certificate
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
