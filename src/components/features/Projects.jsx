import { motion } from 'framer-motion';

const Projects = () => {
  // Styles
  const styles = {
    projects: {
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden',
      '& *': {
        borderRadius: '0 !important'
      }
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
      marginBottom: '50px'
    },
    sectionTitle: {
      fontSize: '2rem',
      color: 'var(--text-primary)',
      margin: '0 0 15px 0'
    },
    sectionLine: {
      width: '60px',
      height: '4px',
      background: 'var(--primary-color)',
      margin: '0 auto',
      borderRadius: '2px'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: '30px',
      marginTop: '30px'
    },
    projectCard: {
      background: 'transparent',
      borderRadius: '0',
      padding: '25px',
      transition: 'all 0.3s ease',
      border: '1px solid #000000'
    },
    projectHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
      gap: '15px'
    },
    projectIcon: {
      fontSize: '2rem',
      background: 'transparent',
      width: '60px',
      height: '60px',
      borderRadius: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    projectTitle: {
      fontSize: '1.3rem',
      margin: 0,
      color: 'var(--text-primary)'
    },
    projectDescription: {
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      margin: '0 0 20px 0',
      fontSize: '0.95rem'
    },
    projectTech: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      margin: '0 0 20px 0'
    },
    techTag: {
      display: 'inline-block',
      background: 'transparent',
      color: '#000000',
      padding: '4px 12px',
      borderRadius: '0',
      fontSize: '0.8rem',
      marginRight: '8px',
      marginBottom: '8px',
      border: '1px solid #000000'
    },
    projectRole: {
      marginBottom: '15px',
      h4: {
        color: 'var(--text-primary)',
        margin: '0 0 5px 0',
        fontSize: '0.9rem'
      },
      p: {
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        margin: 0,
        lineHeight: 1.5
      }
    },
    projectOutcome: {
      marginBottom: '20px',
      h4: {
        color: 'var(--text-primary)',
        margin: '0 0 5px 0',
        fontSize: '0.9rem'
      },
      p: {
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        margin: 0,
        lineHeight: 1.5
      }
    },
    projectLinks: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '15px',
      marginTop: '20px'
    },
    projectImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '0',
      marginBottom: '20px'
    },
    projectLink: {
      padding: '10px 15px',
      textAlign: 'center',
      borderRadius: '0',
      textDecoration: 'none',
      fontWeight: 600,
      fontSize: '0.9rem',
      transition: 'all 0.3s ease',
      background: '#ffffff',
      color: '#000000',
      border: '1px solid #000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
      },
      '&:active': {
        transform: 'translateY(0)'
      }
    }
  };
  const projects = [
    {
      title: "Sell and Trade BlindBox Platform",
      description: "A comprehensive platform for buying, selling, and trading blind box items with user authentication and account management.",
      techStack: ["React", "React Router", "TailwindCSS", "Axios", "Vite", "Vercel"],
      role: "Developed the main UI, built responsive layouts, and integrated APIs for authentication and account management. Implemented state management with React Hooks and optimized user experience.",
      outcome: "Successfully deployed on Vercel",
      liveUrl: "https://blindbox-vn.vercel.app",
      repoUrl: "https://github.com/giangndse183728/BlindBox-FE",
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
    <section id="projects" style={styles.projects}>
      <div style={styles.container}>
        <motion.div 
          style={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }}
        >
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
          <div style={styles.sectionLine}></div>
        </motion.div>

        <motion.div 
          style={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              style={styles.projectCard}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div style={styles.projectHeader}>
                <motion.div 
                  style={styles.projectIcon}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  {project.image}
                </motion.div>
                <h3 style={styles.projectTitle}>{project.title}</h3>
              </div>
              
              <p style={styles.projectDescription}>{project.description}</p>
              
              <motion.div 
                style={styles.projectTech}
                variants={containerVariants}
              >
                {project.techStack.map((tech, techIndex) => (
                  <motion.span 
                    key={techIndex} 
                    style={styles.techTag}
                    variants={techVariants}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
              
              <div style={styles.projectRole}>
                <h4 style={styles.projectRole.h4}>My Role:</h4>
                <p style={styles.projectRole.p}>{project.role}</p>
              </div>
              
              <div style={styles.projectOutcome}>
                <h4 style={styles.projectOutcome.h4}>Outcome:</h4>
                <p style={styles.projectOutcome.p}>{project.outcome}</p>
              </div>
              
              <div style={styles.projectLinks}>
                <motion.a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.projectLink}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Live Demo
                </motion.a>
                <motion.a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.projectLink}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                   View Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

