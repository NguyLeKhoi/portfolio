import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: "Sell and Trade BlindBox Platform",
      description: "A comprehensive platform for buying, selling, and trading blind box items with user authentication and account management.",
      techStack: ["React", "React Router", "TailwindCSS", "Axios", "Vite", "Vercel"],
      role: "Developed the main UI, built responsive layouts, and integrated APIs for authentication and account management. Implemented state management with React Hooks and optimized user experience.",
      outcome: "Successfully deployed on Vercel",
      liveUrl: "https://blindbox-vn.vercel.app",
      repoUrl: "https://github.com/giangndve183728/BlindBox-ft",
      image: "🎁"
    },
    {
      title: "Smoking Cessation Support Platform",
      description: "A supportive platform designed to help users quit smoking with progress tracking and motivational features.",
      techStack: ["React", "React Router", "Material UI", "TailwindCSS", "Axios", "Vercel"],
      role: "Designed and implemented the user interface for a smoking cessation support platform. Built reusable components, managed state, and integrated APIs to display progress data. Ensured a responsive and user-friendly design across desktop and mobile.",
      outcome: "Fully deployed frontend available on Vercel",
      liveUrl: "https://fe-smoking-cessation-support-platfo.vercel.app",
      repoUrl: "https://github.com/NguyLekhoi/FE-Smoking-Cessation-Support-Platform",
      image: "🚭"
    },
    {
      title: "Vestige-Platform",
      description: "A modern e-commerce platform built with Next.js featuring server-side rendering and dynamic routing.",
      techStack: ["Next.js", "React", "TailwindCSS/Material UI", "Axios", "Vercel"],
      role: "Built the frontend of the Vestige platform using Next.js with server-side rendering and dynamic routing. Developed reusable and responsive components, integrated authentication and data management APIs, and optimized performance with React Hooks/Context API.",
      outcome: "Successfully deployed on Vercel",
      liveUrl: "https://vestigehouse.vercel.app",
      repoUrl: "https://github.com/giangndve183728/Vestige-Platform-ft",
      image: "🛍️"
    }
  ]

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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.99]
      }
    }
  }

  const techVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, 0.01, 0.99]
      }
    }
  }

  const ctaVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section className="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="project-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 212, 255, 0.15)",
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="project-header">
                <motion.div 
                  className="project-icon"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  {project.image}
                </motion.div>
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <motion.div 
                className="project-tech"
                variants={containerVariants}
              >
                {project.techStack.map((tech, techIndex) => (
                  <motion.span 
                    key={techIndex} 
                    className="tech-tag"
                    variants={techVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -3,
                      boxShadow: "0 4px 12px rgba(0, 212, 255, 0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
              
              <div className="project-role">
                <h4>My Role:</h4>
                <p>{project.role}</p>
              </div>
              
              <div className="project-outcome">
                <h4>Outcome:</h4>
                <p>{project.outcome}</p>
              </div>
              
              <div className="project-links">
                <motion.a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link live"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 8px 20px rgba(0, 212, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Live Demo
                </motion.a>
                <motion.a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link repo"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  View Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="projects-cta"
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          style={{ textAlign: 'center', marginTop: '80px' }}
        >
          <h3 style={{ marginBottom: '16px' }}>Interested in working together?</h3>
          <p style={{ marginBottom: '32px', color: 'var(--text-secondary)' }}>
            Let's discuss your project and see how I can help bring your ideas to life.
          </p>
          <motion.button 
            className="btn btn-primary"
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              boxShadow: "0 15px 35px rgba(0, 212, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

