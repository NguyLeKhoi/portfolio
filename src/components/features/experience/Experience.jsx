import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Student",
      company: "FPT University",
      period: "2023 - 2026",
      description: "Currently pursuing a degree in Software Engineering with a strong focus on modern web development technologies and best practices. Throughout the program, I have been building a solid foundation in web development, algorithms, data structures, and software engineering principles, while continuously applying theoretical knowledge to practical projects.",
      tags: ["Web Development", "Algorithms", "Data Structures", "Software Engineering"]
    },
    {
      title: "Intern",
      company: "FPT Software Academy",
      period: "08/2024 - 12/2024",
      description: "During my 3-month internship at FPT Software Academy, I worked as a Frontend Developer, contributing to internal web applications using React.js, JavaScript, and CSS. I collaborated with the team in an Agile environment, participating in Scrum meetings and sprint activities, while implementing user interfaces and integrating APIs. This hands-on experience not only improved my technical skills in frontend development but also strengthened my problem-solving, debugging, and teamwork abilities, giving me valuable insight into professional software development practices.",
      tags: ["Frontend Development", "Team Collaboration", "Agile Methodologies"]
    }
  ]

  const certifications = [
    {
      title: "Web Development & Coding",
      platform: "Coursera",
      url: "https://coursera.org/share/21f60e8499376ba991e52120fbf6037a",
    },
    {
      title: "Software Development Lifecycle",
      platform: "Coursera", 
      url: "https://coursera.org/share/33e3c62fbe4a7933d8b5b0099955e30f",
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
    <section id="experience" className="experience-section" data-speed="0.1">
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
