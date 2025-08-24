import Waves from '../backgrounds/wave/Waves'
import "../backgrounds/wave/Waves.css";

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
      url: "https://www.coursera.org/account/accomplishments/specialization/5480ZUC/2MA8",
      icon: "🌐"
    },
    {
      title: "Software Development Lifecycle",
      platform: "Coursera", 
      url: "https://www.coursera.org/account/accomplishments/specialization/T3JKXYXL28X5",
      icon: "🔄"
    }
  ]

  return (
    <div className="experience" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <Waves
        lineColor="rgba(255, 255, 255, 0.8)"
        backgroundColor="transparent"
        waveSpeedX={0.01}
        waveSpeedY={0.005}
        waveAmpX={30}
        waveAmpY={15}
        xGap={10}
        yGap={30}
        friction={0.925}
        tension={0.005}
        maxCursorMove={100}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      />
      <div style={{ position: 'relative', zIndex: 1, pointerEvents: 'none !important' }}>
        <div className="container" style={{ pointerEvents: 'auto !important' }}>
          <div className="section-header">
            <h2 className="section-title">Experience & Education</h2>
            <div className="section-line"></div>
          </div>

          <div className="experience-content">
            <div className="experience-section">
              <h3 className="section-subtitle">Education & Work Experience</h3>
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <div className="timeline-item" key={index}>
                    <div className="timeline-icon">
                      {exp.icon}
                    </div>
                    <div className="timeline-content">
                      <h4 className="timeline-title">{exp.title}</h4>
                      <p className="timeline-company">{exp.company}</p>
                      <p className="timeline-period">{exp.period}</p>
                      <p className="timeline-description">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="certifications-section">
              <h3 className="section-subtitle">Certifications & Achievements</h3>
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <div className="certification-card" key={index}>
                    <div className="cert-icon">
                      {cert.icon}
                    </div>
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-platform">{cert.platform}</p>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      View Certificate
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
