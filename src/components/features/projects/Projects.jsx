import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = () => {

  const projects = [
    {
      slug: "blindbox-vn",
      logo: "🎁",
      title: "BlindBox Platform",
      displayTitle: "Mate Libre",
      previewImage: "/picture/z6938973274681_669f5e7ce5cc4f5f8cf8383f91c870f7.jpg",
      description: "A comprehensive platform for buying, selling, and trading blind box items with user authentication and account management.",
      techStack: ["React", "React Router", "TailwindCSS", "Axios", "Vite", "Vercel"],
      role: "Developed the main UI, built responsive layouts, and integrated APIs for authentication and account management. Implemented state management with React Hooks and optimized user experience.",
      outcome: "Successfully deployed on Vercel",
      liveUrl: "https://blindbox-vn.vercel.app",
      repoUrl: "https://github.com/giangndse183728/BlindBox-FE",
      image: "🎁"
    },
    {
      slug: "smoking-cessation",
      logo: "🚭",
      title: "Smoking Support Platform",
      displayTitle: "Stenger Bike",
      previewImage: "/picture/z6938972385322_84ff54f68e27aefb99be50ab50a6a900.jpg",
      description: "A supportive platform designed to help users quit smoking with progress tracking and motivational features.",
      techStack: ["React", "React Router", "Material UI", "TailwindCSS", "Axios", "Vercel"],
      role: "Designed and implemented the user interface for a smoking cessation support platform. Built reusable components, managed state, and integrated APIs to display progress data. Ensured a responsive and user-friendly design across desktop and mobile.",
      outcome: "Fully deployed frontend available on Vercel",
      liveUrl: "https://fe-smoking-cessation-support-platfo.vercel.app",
      repoUrl: "https://github.com/NguyLekhoi/FE-Smoking-Cessation-Support-Platform",
      image: "🚭"
    },
    {
      slug: "vestige-platform",
      logo: "🛍️",
      title: "Vestige-Platform",
      displayTitle: "Lightship",
      previewImage: "/picture/z6939054747120_487ae2bdd47957eb919ccf48e8c82303.jpg",
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

  const navigate = useNavigate();
  const splitTitle = (text) => {
    const parts = (text || '').split(' ');
    if (parts.length < 2) return [text, ''];
    const mid = Math.floor(parts.length / 2);
    return [parts.slice(0, mid).join(' '), parts.slice(mid).join(' ')];
  };
  const handleOpen = (slug) => {
    navigate(`/projects/${slug}`);
  }

  // hover scramble letters (no cursor preview)
  const handleMove = () => {};

  const scramble = (el, original) => {
    if (!el) return;
    const letters = '!<>-_\\/[]{}—=+*^?#________';
    let iteration = 0;
    clearInterval(el.__scrambleTimer);
    el.__scrambleTimer = setInterval(() => {
      el.innerText = original
        .split('')
        .map((char, i) => (i < iteration ? original[i] : letters[Math.floor(Math.random() * letters.length)]))
        .join('');
      iteration += 1;
      if (iteration > original.length) {
        clearInterval(el.__scrambleTimer);
        el.innerText = original;
      }
    }, 45);
  };

  const handleEnter = (logo, e) => {
    const target = e.currentTarget.querySelector('.project-title-word');
    if (target) scramble(target, target.dataset.text || target.innerText);
  };

  const handleLeave = () => {};

  return (
    <section id="projects" className="projects-section" data-speed="0.2">
      <div className="projects-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }}
        >
          <h2 className="section-title">Featured work</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.button
              key={project.title}
              className="project-row"
              variants={cardVariants}
              whileHover={{ y: -2 }}
              onClick={() => handleOpen(project.slug)}
              onMouseMove={handleMove}
              onMouseEnter={(evt) => handleEnter(project.logo, evt)}
              onMouseLeave={handleLeave}
            >
              <div className="project-header">
                <h3 className="project-title">
                  {(() => { const [left, right] = splitTitle(project.title); return (
                    <>
                      <span className="project-title-word" data-text={left}>{left}</span>
                      <img className="project-inline-image" src={project.previewImage} alt="preview" />
                      <span className="project-title-word" data-text={right}>{right}</span>
                    </>
                  ); })()}
                </h3>
              </div>
              <div className="project-divider" />
            </motion.button>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}

export default Projects

