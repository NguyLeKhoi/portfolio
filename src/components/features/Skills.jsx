import { motion } from 'framer-motion'
import LogoLoop from "../ui/LogoLoop";

const Skills = () => {
  // Tech stack icons with proper styling
  const techLogos = [
    { 
      node: (
        <div style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{ width: '100%', height: 'auto' }} />
        </div>
      ),
      title: "React"
    },
    { 
      node: (
        <div style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" style={{ width: '100%', height: 'auto', filter: 'invert(100%)' }} />
        </div>
      ),
      title: "Next.js"
    },
    { 
      node: (
        <div style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" style={{ width: '100%', height: 'auto' }} />
        </div>
      ),
      title: "TypeScript"
    },
    { 
      node: (
        <div style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{ width: '100%', height: 'auto' }} />
        </div>
      ),
      title: "JavaScript"
    },
    { 
      node: (
        <div style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" style={{ width: '100%', height: 'auto' }} />
        </div>
      ),
      title: "HTML5"
    },
    { 
      node: (
        <div style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" style={{ width: '100%', height: 'auto' }} />
        </div>
      ),
      title: "CSS3"
    },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Context API"]
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Authentication"]
    },
    {
      title: "Tools & Deployment",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Vercel", "Docker", "CI/CD"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.99]
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, 0.01, 0.99]
      }
    }
  };

  const highlightVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-line"></div>
        </motion.div>

        {/* Tech Stack Logo Loop */}
        <motion.div
          className="tech-stack-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }}
        >
          <h3>Tech Stack</h3>
          <div style={{ height: '150px', margin: '40px 0', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '100%' }}>
              <LogoLoop
                logos={techLogos}
                speed={20}
                direction="left"
                logoHeight={80}
                gap={60}
                pauseOnHover={true}
                scaleOnHover={true}
                fadeOut={true}
                fadeOutColor="#0a0a0a"
                ariaLabel="Technology stack"
              />
            </div>
          </div>
        </motion.div>

        {/* Skill Categories with Badges - 2x2 Grid */}
        <motion.div
          className="skills-grid-2x2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={categoryVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 212, 255, 0.15)",
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-item"
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: "0 4px 12px rgba(0, 212, 255, 0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Card */}
        <motion.div
          className="skills-highlight"
          variants={highlightVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="highlight-card">
            <div className="highlight-content">
              <h3>Always Learning</h3>
              <p>I'm constantly exploring new technologies and frameworks to stay current with industry trends and deliver the best solutions.</p>
              <div className="highlight-stats">
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

