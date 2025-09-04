import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Carousel from '../../animations/carousel/Carousel';

const PROJECTS = {
  'blindbox-vn': {
    title: 'Sell and Trade BlindBox Platform',
    techStack: ['React', 'React Router', 'TailwindCSS', 'Axios', 'Vite', 'Vercel'],
    role: 'Developed the main UI, built responsive layouts, and integrated APIs for authentication and account management. Implemented state management with React Hooks and optimized user experience.',
    liveUrl: 'https://blindbox-vn.vercel.app',
    repoUrl: 'https://github.com/giangndse183728/BlindBox-FE',
    logo: '🎁'
  },
  'smoking-cessation': {
    title: 'Smoking Cessation Support Platform',
    techStack: ['React', 'React Router', 'Material UI', 'TailwindCSS', 'Axios', 'Vercel'],
    role: 'Designed and implemented the UI, built reusable components, managed state, and integrated APIs to display progress data. Ensured a responsive and user-friendly design across desktop and mobile.',
    liveUrl: 'https://fe-smoking-cessation-support-platfo.vercel.app',
    repoUrl: 'https://github.com/NguyLekhoi/FE-Smoking-Cessation-Support-Platform',
    logo: '🚭'
  },
  'vestige-platform': {
    title: 'Vestige-Platform',
    techStack: ['Next.js', 'React', 'TailwindCSS/Material UI', 'Axios', 'Vercel'],
    role: 'Built the frontend using Next.js SSR and dynamic routing. Developed reusable components, integrated auth and data APIs, and optimized performance with Hooks/Context API.',
    liveUrl: 'https://vestigehouse.vercel.app',
    repoUrl: 'https://github.com/giangndve183728/Vestige-Platform-ft',
    logo: '🛍️'
  }
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const data = PROJECTS[slug];

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
    <div className="section">
      <div className="projects-container">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-title">
          {data.logo} {data.title}
        </motion.h1>

        <div style={{ margin: '20px 0' }}>
          <Carousel autoplay interval={3000}>
            <img src={data.preview1 || data.logoUrl || '/vite.svg'} alt={data.title} style={{ width: '100%', height: 'auto' }} />
            <img src={data.preview2 || data.logoUrl || '/vite.svg'} alt={data.title} style={{ width: '100%', height: 'auto' }} />
            <img src={data.preview3 || data.logoUrl || '/vite.svg'} alt={data.title} style={{ width: '100%', height: 'auto' }} />
          </Carousel>
        </div>

        <div className="project-tech" style={{ marginBottom: 24 }}>
          {data.techStack.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>

        <div className="project-role" style={{ marginBottom: 24 }}>
          <h4>My Role</h4>
          <p>{data.role}</p>
        </div>

        <div className="project-links">
          <a href={data.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
          <a href={data.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
        </div>

        <div style={{ marginTop: 24 }}>
          <Link to="/" className="project-link">← Back to Projects</Link>
        </div>
      </div>
    </div>
  );
}


