import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = () => {

  const projects = [
    {
      slug: "blindbox-vn",
      title: "BlindBox Platform",
      previewImage: "/project picture/blindbox/bl1.png",
    },
    {
      slug: "smoking-cessation",
      title: "Smoking Cessation Support Platform",
      previewImage: "/project picture/smoking/smk1.png",
    },
    {
      slug: "vestige-platform",
      title: "Vestige-Platform",
      previewImage: "/project picture/vestige/ves1.png",
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }}
        >
          <h2 className="section-title">Featured work</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
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

