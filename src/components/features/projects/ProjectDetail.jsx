import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import './ProjectDetail.css';
import CardSwap, { Card } from '../../animations/card-swap/CardSwap';

const PROJECTS = {
  'blindbox-vn': {
    title: 'Sell and Trade BlindBox Platform',
    description:
      'A comprehensive web platform that allows users to buy, sell, and trade blind box items. It includes authentication and account management features, ensuring secure transactions. The platform also delivers a responsive and optimized user experience across devices.',
    techStack: ['React', 'React Router', 'React Native', 'TailwindCSS', 'Axios', 'Vite', 'Expo', 'Vercel'],
    role: 'In this project, I was responsible for building the Collection page, Detail page, and Trading page on the web platform, while also developing a dedicated mobile app using Expo to extend core features for mobile users. I integrated APIs for account management and authentication, ensuring secure and smooth trading experiences across platforms.',
    liveUrl: 'https://blindbox-vn.vercel.app',
    repoUrl: 'https://github.com/giangndse183728/BlindBox-FE',
    images: { folder: '/project%20picture/blindbox/', prefix: 'bl', count: 3 }
  },
  'smoking-cessation': {
    title: 'Smoking Cessation Support Platform',
    description:
      'A supportive application designed to help users track their progress in quitting smoking. It provides interactive dashboards, progress tracking, and personalized insights through API integration. The platform focuses on delivering a clean, responsive, and user-friendly interface for both desktop and mobile.',
    techStack: ['React', 'React Native', 'React Router', 'Material UI', 'TailwindCSS', 'Axios', 'Expo', 'Vercel'],
    role: 'My contributions included developing the Quit Plan feature, implementing the Membership system, and building the Admin dashboard for managing users and monitoring activities. In addition to the web platform, I developed a mobile app with Expo to provide users with accessible and consistent tools to support their cessation journey.',
    liveUrl: 'https://fe-smoking-cessation-support-platfo.vercel.app',
    repoUrl: 'https://github.com/NguyLekhoi/FE-Smoking-Cessation-Support-Platform',
    images: { folder: '/project%20picture/smoking/', prefix: 'smk', count: 7 }
  },
  'vestige-platform': {
    title: 'Vestige-Platform',
    description:
      'A digital fashion platform built with Next.js, offering a space for showcasing and exploring innovative virtual designs. It leverages server-side rendering for performance, supports dynamic content, and provides a modern UI for interacting with digital fashion concepts. The platform is fully responsive and optimized for seamless browsing.',
    techStack: ['Next.js', 'React', 'TailwindCSS/Material UI', 'Axios', 'Vercel'],
    role: 'In this project, I took charge of the Admin dashboard, creating tools for order management, post approval, and financial tracking, as well as building a dedicated Shipper page to handle delivery operations. I also contributed to performance optimization and data handling with React Hooks and Context API.',
    liveUrl: 'https://vestigehouse.vercel.app',
    repoUrl: 'https://github.com/giangndve183728/Vestige-Platform-ft',
    images: { folder: '/project%20picture/vestige/', prefix: 'ves', count: 7 }
  }
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const data = PROJECTS[slug];

  // Ensure page starts at top when entering project detail
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  if (!data) {
    return (
      <div className="section">
        <div className="projects-container">
          <h2>Project not found</h2>
          <Link to="/" className="project-link">← Back</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section project-detail">
      <div className="projects-container project-detail__grid">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="section-title project-detail__title"
        >
          {data.title}
        </motion.h3>

        <motion.div className="project-detail__left" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.05 }}>
          <motion.div className="project-overview" style={{ color: '#000' }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }}>
            <h3 style={{ margin: '0 0 8px 0' }}>Project Overview</h3>
            <p style={{ margin: 0 }}>{data.description || 'Project description coming soon.'}</p>
          </motion.div>

          <motion.div className="project-role" style={{ color: '#000' }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }}>
            <h3 style={{ margin: '0 0 8px 0' }}>My Role</h3>
            <p style={{ margin: 0 }}>{data.role}</p>
          </motion.div>

          <motion.div className="project-tech" style={{ color: '#000' }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.3 }}>
            <h3 style={{ margin: '0 0 8px 0' }}>Tech Stack</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {data.techStack.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div className="project-detail__links" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.4 }}>
            <a href={data.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">Visit Website</a>
            <a href={data.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">Github</a>
          </motion.div>
        </motion.div>

        <motion.div className="project-detail__right" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}>
          <CardSwap
            width={"100%"}
            height={"100%"}
            cardDistance={60}
            verticalDistance={70}
            delay={2000}
            easing="power"
            pauseOnHover={false}
          >
            {(data.images ? Array.from({ length: data.images.count }, (_, i) => i + 1) : [1, 2, 3]).map((idx) => {
              const bg = data.images ? `${data.images.folder}${data.images.prefix}${idx}.png` : undefined;
              return (
                <Card key={idx}>
                  <div className="cs-card-header">Image {idx}</div>
                  <div className="cs-card-body" style={bg ? { backgroundImage: `url(${bg})` } : undefined} />
                </Card>
              );
            })}
          </CardSwap>
        </motion.div>
      </div>
    </div>
  );
}


